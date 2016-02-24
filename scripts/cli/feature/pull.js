let root = process.cwd();
import path from 'path'
import { execSync } from 'child_process'

export default function pullSubModule (modules) {
	let succesed = []
	modules.forEach((filePath) => {
		process.chdir(filePath)
		try {
			execSync('git pull origin master')
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