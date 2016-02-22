import multiProcessor from '../utils/multi-processor'
import { spawn, execSync } from 'child_process'


var root = process.cwd();

export default function publishModules(modules) {

	var whoami = execSync('npm whoami')

	if (whoami !== 'tieba') {
		console.log('you are not logined by tieba');
		process.exit(1);
	}

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