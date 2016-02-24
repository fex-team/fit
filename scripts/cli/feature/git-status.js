import { execSync } from 'child_process'
import path from 'path'

export default function getProjectStatus(modules) {
	var changed = [];

	modules.forEach((val) => {
		try {
			let output = execSync('git status --porcelain', {
				cwd: val
			}).toString().replace(/\s\w\s/g, '').split('\n').filter((val) => {
				return val.length > 0;
			})

			if (output.length > 0) {
				changed.push(val);
			}
		}
		catch (e) {
			console.log(e)
		}
	})

	return changed
}