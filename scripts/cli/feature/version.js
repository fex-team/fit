import fs from 'fs'
import path from 'path'
import semver from 'semver'
import format from 'format-json'
import { setData, logError } from '../utils/summary'
import { getRelativePath } from '../utils/util'


var root = process.cwd();

export default function patchModulesSync(modules, allModules, type) {
	let changeModules = {}
	let moduleMaps = {}

	function updateModuleVirtual(modulePath, name, version) {
		if (!changeModules[modulePath]) {
			changeModules[modulePath] = {
				modulePath: modulePath,
				name: name,
				version: semver.inc(version, type)
			}
		}
	}

	function buildModuleMap() {
		for (let all of allModules) {
			let moduleObj = getModuleObj(all)
			moduleMaps[moduleObj.name] = {
				version: moduleObj.version,
				name: moduleObj.name,
				modulePath: all,
				dependencies: []
			}
			for (var dependence in moduleObj.dependencies) {
				moduleMaps[moduleObj.name].dependencies.push({
					[dependence]: moduleObj.dependencies[dependence]
				})
			}
		}
	}

	function getModuleObj(module) {
		if (fs.existsSync(module, 'package.json')) {
			return JSON.parse(fs.readFileSync(path.resolve(module, 'package.json')).toString())
		}
		return {}
	}

	function whoIsNeedMe(moduleObj) {
		let modules = []
		let moduleName = moduleObj.name
		for (let module in moduleMaps) {
			for (let dep of moduleMaps[module].dependencies) {
				if (dep[moduleName]) {
					modules.push({
						modulePath: moduleMaps[module].modulePath,
						moduleName: moduleMaps[module].name,
						moduleVersion: moduleMaps[module].version
					})
				}
			}
		}

		return modules
	}

	function updateModule(module) {
		let moduleObj = changeModules[module] || getModuleObj(module)
		updateModuleVirtual(module, moduleObj.name, moduleObj.version)

		let dependences = whoIsNeedMe(moduleObj)

		for (let dep of dependences) {
			updateModule(dep.modulePath)
		}
	}

	function writeChanges() {
		for (let change in changeModules) {
			let moduleObj = getModuleObj(changeModules[change].modulePath)
			console.log(`INFO: Update ${changeModules[change].name} version ${moduleObj.version} ==> ${changeModules[change].version}`)
			moduleObj.version = changeModules[change].version

			for (let dep in moduleObj.dependencies) {
				if (moduleMaps[dep] && changeModules[moduleMaps[dep].modulePath] && (changeModules[moduleMaps[dep].modulePath].name === dep)) {
					console.log(`INFO: Update ${changeModules[change].name}'s Dependencies [${dep}] version ${moduleObj.dependencies[dep]} ==> ${changeModules[moduleMaps[dep].modulePath].version}`)
					moduleObj.dependencies[dep] = '^' + changeModules[moduleMaps[dep].modulePath].version
				}
			}

			fs.writeFileSync(path.join(changeModules[change].modulePath, 'package.json'), format.plain(moduleObj), 'utf-8')
		}
	}

	buildModuleMap()

	for (let module of modules) {
		updateModule(module)
		setData(getRelativePath(module), 'patch', true)
	}

	writeChanges()

	process.chdir(root)
}