let root = process.cwd();
import path from 'path'
import { execSync } from 'child_process'
import { setData, logError } from '../utils/summary'
import { getRelativePath } from '../utils/util'

export default function cleanModulesSync(modules) {
	process.chdir(root)

	for (var modulePath of modules) {
		try {
			execSync('rm -r ' + path.resolve(modulePath, 'lib') + ' > /dev/null 2>&1')
			execSync('rm -r ' + path.resolve(modulePath, 'node_modules') + ' > /dev/null 2>&1')
			execSync('rm ' + path.resolve(modulePath, 'npm-debug.log > /dev/null 2>&1'))
		}
		catch (e) {
		}
	}
}
