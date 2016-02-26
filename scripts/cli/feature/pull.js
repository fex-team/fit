let root = process.cwd();
import path from 'path'
import { execSync } from 'child_process'
import { setData, logError } from '../utils/summary'
import { getRelativePath } from '../utils/util'

export default function pullSubModule (modules) {
	let succesed = []
	modules.forEach((filePath) => {
		process.chdir(filePath)
		try {
			console.log('.')
			execSync('git pull origin master &> /dev/null')
			succesed.push(filePath)
			setData(getRelativePath(filePath), 'pull', true)
		}
		catch(e) {
			console.log(e.toString(), filePath)
			succesed.pop()
			setData(getRelativePath(filePath), 'push', false)
			logError(getRelativePath(filePath), e.toString())
		}
	})

	process.chdir(root)

	return succesed
}