var root = process.cwd();
import { getPackageJSON } from '../utils/util'
import _ from 'lodash'
import format from 'format-json'
import fs from 'fs'
import path from 'path'

export default function upgradeDependenceis (modules) {
	var commonDependencies = {};
	var moduleLen = modules.length

	modules.forEach((filePath) => {
		let json = getPackageJSON(filePath)

		if (!json.dependencies) {
			json.dependencies = {}
		}

		json.dependencies['react'] = '^0.14.7'
		json.dependencies['classnames'] = '^2.2.3'
		json.dependencies['react-dom'] = '^0.14.7'

		fs.writeFileSync(path.join(filePath, 'package.json'), format.plain(json))

//		let dependencies = json.dependencies
//
//		_.each(dependencies, (name, version) => {
//			if (!commonDependencies[name]) {
//				commonDependencies[name] = 1;
//			}
//
//			commonDependencies[name]++
//		})
	})

	process.chdir(root)
}