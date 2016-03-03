import { getPackageJSON, getFileContent, writePackageJSON} from '../utils/util'
import _ from 'lodash'
import format from 'format-json'
import fs from 'fs'
import path from 'path'
import find from 'find'
import resolveFile from '../../../resolve'

var root = process.cwd();
var regex = new RegExp("(require\\s{0,}\\(\\s{0,}['\"]\\s{0,}([\\w\\-]{1,})\\s{0,}['\"]\\s{0,}\\))|(import\\s{0,}(?:[\\$a-zA-Z\\-\\{\\}]{1,}\\s{1,}from\\s{1,}){0,1}['\"]([\\w\\-]{1,})(?:[/\\w\\.\\-]{1,}){0,1}['\"])|(import\\s\\{\\s{0,}[\\w,\\s]{1,}\\}\\s{0,}from\\s{0,}['\"]([\\w\\-]{1,})(?:[/\\w\\.\\-]{1,}){0,1}['\"])", "g");

export default function upgradeDependenceis (modules) {
	var rootJSON = getPackageJSON(root)
	var rootDependencies = rootJSON.dependencies
	var devDependencies = rootJSON.devDependencies

	modules.forEach((filePath) => {
		var dependencies = [];
		var depenObj = {};

		find.file(filePath, function(files) {
			let srcFiles = files.filter((val) => {
				return /src[\/\w-]+.js$/.test(val)
			})

			srcFiles.forEach((file) => {
				let code = getFileContent(file)
				var match;
				while ((match = regex.exec(code)) != null) {
					if (match.index === regex.lastIndex) {
						++regex.lastIndex;
					}

					let matched = match[2] || match[4] || match[6]

					if (matched && dependencies.indexOf(matched) < 0) {
						dependencies.push(matched)
					}
				}
			})

			dependencies.forEach((dep) => {
				let depen = rootDependencies[dep] || devDependencies[dep]

				if (depen) {
					depenObj[dep] = depen
				}
				else if (dep in resolveFile.alias) {
					depenObj[dep] = '^' + getPackageJSON(resolveFile.alias[dep].replace('/src', '')).version
				}
			})


			writePackageJSON(filePath, 'dependencies', depenObj)
		})
	})

	process.chdir(root)
}