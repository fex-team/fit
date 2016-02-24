import { execSync } from 'child_process'
import { checkGitInPackageJSON } from '../utils/util'

var root = process.cwd();

export default function commitGit(modules) {
	modules.filter(checkGitInPackageJSON).forEach((filePath) => {
		process.chdir(filePath)

		let output = execSync('git status --porcelain', {
			cwd: filePath
		}).toString().replace(/\s\w\s/g, '').split('\n').filter((val) => {
			return val.length > 0;
		})

		if (output.length > 0) {
			try {
				execSync('git add -A')
				execSync('git commit -m "quick push"')
			}
			catch (e) {
				console.log(e.toString())
			}
			console.log(`COMMIT: quick commit ${filePath}`)
		}
		else {
			console.log(`INFO: ${filePath} is clean`)
		}
	})
	process.chdir(root)
}