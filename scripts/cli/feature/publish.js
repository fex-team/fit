import multiProcessor from '../utils/multi-processor'
import { spawn, execSync } from 'child_process'
import { setData, logError } from '../utils/summary'
import { getRelativePath } from '../utils/util'

var root = process.cwd();

export default function publishModules(modules) {

	var whoami = execSync('npm whoami').toString()

	if (whoami.replace(/\s+/, '') !== 'tieba') {
		console.log('you are not logined by tieba')
		process.exit(1)
	}

	return multiProcessor(() => {
		return spawn('npm', ['publish'])
	}, (job) => {
		if (/\/lib\/tb\/[a-z\-A-Z]+/.test(job.replace(root, ''))) {
			return false
		}
		process.chdir(job)
		return true
	}, (job) => {
			setData(getRelativePath(job), 'publish', true)
	}, (job, err) => {
		console.log('publish error')
		setData(getRelativePath(job), 'publish', false)
		logError(getRelativePath(job), err.toString())
	})(modules)
}