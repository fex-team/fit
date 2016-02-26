import { existsSync, mkdirSync, writeFileSync, readFileSync} from 'fs'
import { execSync } from 'child_process'
import path from 'path'
import getProjectState from '../feature/git-status'
import moduleDistribute from './distribute'

function getUserHome() {
	return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

function getCacheDir () {
	let home = getUserHome()

	if (!existsSync(path.join(home, '.awesome'))) {
		mkdirSync(path.join(home, '.awesome'))
	}

	return path.join(home, '.awesome')
}

export function writeCache () {
	let dir = getCacheDir()
	let diff = moduleDistribute(getProjectState)

	writeFileSync(path.join(dir, 'diff.txt'), diff.join('\n'))
}

export function getCache () {
	let dir = getCacheDir()

	if (!existsSync(path.join(dir, 'diff.txt'))) {
		return []
	}

	return readFileSync(path.join(dir, 'diff.txt')).toString().split('\n')
}

export function clearCache () {
	let dir = getCacheDir()

	let filePath = path.join(dir, 'diff.txt');

	execSync(`rm ${filePath}`)
}