import { getAllComponentJSON } from '../utils/util'
import { existsSync, mkdirSync} from 'fs'
import { execSync } from 'child_process'
import path from 'path'

var root = process.cwd()

export default function addModule (modules) {
	process.chdir(root)
	modules.forEach((val) => {
		let splits = val.split('/')
		let moduleName = splits.pop()
		let moduleType = splits.pop()
		let componentJSON = getAllComponentJSON()
		let gitlabPrefix = componentJSON.categorys[moduleType].gitlabPrefix
		let repoPath
		if (gitlabPrefix !== '') {
			repoPath = `http://gitlab.baidu.com/tb-component/${gitlabPrefix}-${moduleName}.git`
		}
		else {
			repoPath = `http://gitlab.baidu.com/tb-component/${moduleName}.git`
		}

		try {
			let modulePath = path.join(root, 'lib', moduleType, moduleName)
			if (!existsSync(modulePath)) {
				mkdirSync(modulePath);
				execSync(`git init && git remote add origin ${repoPath}`, {
					cwd: modulePath
				})
				console.log(`INFO: added module ${modulePath}`)
			}
		}
		catch(e) {
			console.log(e.toString())
		}
	})
}