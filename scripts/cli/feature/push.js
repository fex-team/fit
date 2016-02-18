import { execSync } from 'child_process'
var root = process.cwd();

export default function pushSubModule (modules) {
	modules.forEach((filePath) => {
		process.chdir(filePath)
		try {
			execSync('git push origin master')
		}
		catch (e) {
			console.log(e.toString())
		}
	})
	process.chdir(root)
}