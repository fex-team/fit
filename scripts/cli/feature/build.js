import multiProcessor from '../utils/multi-processor'
import { spawn } from 'child_process'
import path from 'path'

export default function buildModules(modules) {
	return multiProcessor((job) => {
		return spawn('node', ['_build.js', job])
	}, () => {
		return true
	}, (job) => {
		console.log(`INFO: ${job} build success`)
	})(modules)
}