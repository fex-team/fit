import multiProcessor from '../utils/multi-processor'
import { spawn } from 'child_process'

var root = process.cwd();

export default function publishModules(modules) {
	return multiProcessor(() => {
		return spawn('npm', ['publish'])
	}, (job) => {
		if (/\/lib\/tb\/[a-z\-A-Z]+/.test(job.replace(root, ''))) {
			return false
		}
		process.chdir(job)
		return true
	})(modules)
}