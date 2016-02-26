import multiProcessor from '../utils/multi-processor'
import { spawn } from 'child_process'
import path from 'path'
import { setData, logError } from '../utils/summary'
import { getRelativePath } from '../utils/util'

export default function buildModules(modules) {
	return multiProcessor((job) => {
		return spawn('node', ['_build.js', job, '&>/dev/null'])
	}, () => {
		return true
	}, (job) => {
		console.log(`INFO: ${job} build success`)
		setData(getRelativePath(job), 'build', true)
	}, (job, err) => {
		setData(getRelativePath(job), 'build', false)
		logError(getRelativePath(job), err.toString())
	})(modules)
}