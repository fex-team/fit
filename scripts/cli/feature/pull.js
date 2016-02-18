let root = process.cwd();
import path from 'path'
import { execSync } from 'child_process'

export default function pullSubModule (modules) {
	let succesed = []
	modules.forEach((filePath) => {
		process.chdir(filePath)
		try {
			execSync('git fetch 2>&1')
			execSync('git merge -m "quick merge  2>&1"')
			succesed.push(filePath)
		}
		catch(e) {
			console.log(e.toString())
			succesed.pop()
		}
	})

	process.chdir(root)

	return succesed
}