let root = process.cwd();
import path from 'path'
import { execSync } from 'child_process'

export default function cleanModulesSync(modules) {
	process.chdir(root)

	for (var modulePath of modules) {
		try {
			execSync('rm -r ' + path.resolve(modulePath, 'lib') + ' > /dev/null 2>&1')
			execSync('rm -r ' + path.resolve(modulePath, 'node_modules') + ' > /dev/null 2>&1')
			execSync('rm ' + path.resolve(modulePath, 'npm-debug.log > /dev/null 2>&1'))
			console.log('INFO: ', 'Remove ' + modulePath + ' lib')
		}
		catch (e) {
		}
	}
}
