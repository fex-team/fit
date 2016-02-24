let root = process.cwd();
import path from 'path'
import { execSync } from 'child_process'
import { checkPackageJSON, checkGitInPackageJSON } from '../utils/util'

export default function checkModules(modules) {
	process.chdir(root)

	for (var modulePath of modules) {
		if (!checkPackageJSON(modulePath)) {
			throw new Error(`Missing package.json in ${modulePath}`)
		}

		if (!checkGitInPackageJSON(modulePath)) {
			throw new Error(`Unregisted submodule : ${modulePath}`)
		}
	}
}
