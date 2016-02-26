import os from 'os'
import { getPackageJSON } from './util'
import _ from 'lodash'
var root = process.cwd()
import { spawn } from 'child_process'


function noop () {}

function returnTrue () {
	return true;
}

export default function (run = noop, beforeRun = returnTrue, afterRun = noop, err = noop) {

	function createWorkInstance (job) {
		let packageJSON = getPackageJSON(job)
		if (!beforeRun(job)) {
			return null
		}

		return run(job, packageJSON)
	}

	return function (jobs) {
		return new Promise((resolve, reject) => {
			var jobCopy = _.cloneDeep(jobs)
			var cpus = os.cpus()
			var runChildInstance = []
			var hasError = false
			var errorMsg = []

			process.chdir(root)

			function onClose (successJob, code) {
				afterRun(successJob)
				let job = jobCopy.pop()
				_.pull(runChildInstance, this)

				if (job) {
					let childInstance = createWorkInstance(job)
					distributeTask(childInstance, job)

				}
				else if (!runChildInstance.length && !hasError) {
					resolve()
				}
				else if (!runChildInstance.length && hasError) {
					reject(errorMsg.join('\n'))
				}
			}

			function distributeTask (instance, job) {
				if (!instance) {
					instance = spawn('echo', [`skip process`])
				}

				instance.stderr.on('data', (err) => {
					hasError = true
					errorMsg.push(err.toString())
					console.log(err.toString())
				})

				instance.stdout.on('data', (data) => {
					console.log(data.toString())
				})

				instance.stdout.on('error', (err) => {
					err(job, err)
				})

				instance.on('close', (code) => {
					if (code !== 0) {
						console.log(123);
						err(job, 'process exited with ' + code);
					}

					onClose.bind(instance, job)
				})

				runChildInstance.push(instance)
			}

			if (jobs.length > cpus.length) {
				cpus.forEach(() => {
					let job = jobCopy.pop()
					let childInstance = createWorkInstance(job)
					distributeTask(childInstance, job)
				})
			}
			else {
				jobs.forEach(() => {
					let job = jobCopy.pop()
					let childInstance = createWorkInstance(job)
					distributeTask(childInstance, job)
				})
			}
		})
	}
}