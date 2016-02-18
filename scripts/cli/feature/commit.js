import { execSync } from 'child_process'
import { checkGitInPackageJSON } from '../utils/util'

var root = process.cwd();

export default function commitGit(modules) {
	modules.filter(checkGitInPackageJSON).forEach((filePath) => {
		process.chdir(filePath)
		try {
			execSync('git add -A')
			execSync('git commit -m "quick push"')
		}
		catch (e) {
			console.log(e.toString())
		}
		console.log(`COMMIT: quick commit ${filePath}`)
	})
	process.chdir(root)
}