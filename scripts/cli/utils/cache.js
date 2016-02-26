import { existsSync, mkdirSync, writeFileSync, readFileSync} from 'fs'
import path from 'path'
import getProjectState from '../feature/git-status'
import moduleDistribute from './distribute'

function getUserHome() {
	return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

function getCacheDir () {
	let home = getUserHome()

	if (!existsSync(home, '.awesome')) {
		mkdirSync(home, '.awesome')
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

	return readFileSync(path.join(dir, 'diff.txt')).split('\n')
}

export function clearCache () {
	let dir = getCacheDir()

	writeFileSync(path.join())
}