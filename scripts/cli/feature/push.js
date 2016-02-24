import { execSync } from 'child_process'
var root = process.cwd();
import { setData, logError } from '../utils/summary'
import { getRelativePath } from '../utils/util'


export default function pushSubModule (modules) {
	modules.forEach((filePath) => {
		process.chdir(filePath)
		try {
			execSync('git push origin master')
			setData(getRelativePath(filePath), 'push', true)
		}
		catch (e) {
			console.log(e.toString())
			setData(getRelativePath(filePath), 'push', false)
			logError(getRelativePath(filePath), e.toString())
		}
	})
	process.chdir(root)
}