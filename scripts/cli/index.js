#!/usr/bin/env node
"use strict";

import fs from 'fs'
import path from 'path'
import semver from 'semver'
import { exec, execSync, spawn } from 'child_process'
import os from 'os'
import _ from 'lodash'

import {
		getPathModules,
		getAllPathModules,
		getAllComponentJSON,
		getConfigModules,
} from './utils/util'

import {
		setModuleGlobal,
		getModuleGlobal
} from './utils/global'

import initPrepare from './feature/init'
import buildModules from './feature/build'
import cleanModulesSync from './feature/clean'
import patchModuleSync from './feature/version'
import pullModules from './feature/pull'
import pushModules from './feature/push'
import publishModules from './feature/publish'
import commitModules from './feature/commit'
import addModules from './feature/add'
import getProjectStatus from './feature/git-status'
import checkModules from './feature/check'
import initProject from './feature/init-project'
import upgradeDependencies from './feature/upgrade-dependencies'

import moduleDistribute from './utils/distribute'
import multiProcessor from './utils/multi-processor'
import { tableRender } from './utils/summary'
import { clearCache, getCache, writeCache } from './utils/cache'

var args = process.argv.slice(2)
var root = process.cwd()

if (args.length === 0) {
	console.error(
			`
fit cli tools

type: pc|web|native

Usage:
    cli build     <type> <name>         compile modules
    cli clean     <type> <name>         clean build dist
    cli publish   <type> <name>         publish module
    cli patch     <type> <name>         patch module version
    cli minor     <type> <name>         minor module version
    cli diffpub   <type> <name>         clean + build + patch + publish
`
	)
	process.exit(1)
}
switch (args[0]) {
	case 'init':

		initPrepare()

		break

	case 'init-project':

		moduleDistribute(initProject)

		break

	case 'build':
		// build all
		moduleDistribute(cleanModulesSync)
		moduleDistribute(buildModules).then(() => {
			console.log("All Module build success")
		}).catch((err) => {
			console.log(err)
		})

		break

	case 'clean':

		moduleDistribute(cleanModulesSync)
		tableRender()

		break

	case 'upgrade-dependencies':

		moduleDistribute(upgradeDependencies)

		break

	case 'patch':

		moduleDistribute(patchModuleSync, 'patch')

		break

	case 'minor':

		moduleDistribute(patchModuleSync, 'minor')

		break

	case 'major':

		moduleDistribute(patchModuleSync, 'major')

		break

	case 'autopub':

		moduleDistribute((modules, allModules, params) => {
			cleanModulesSync(modules, allModules, params)
			buildModules(modules).then(() => {
				patchModuleSync(modules, allModules, params)
				let diff = moduleDistribute(getProjectStatus)
				publishModules(diff).then(() => {
					commitModules(diff)
					pushModules(pullModules(diff))
				}).catch((e) => {
					console.log(e.toString())
				})
			})
		}, 'patch')

		break

	case 'diffpub':

		initPrepare();

		moduleDistribute(initProject)

		moduleDistribute((modules, allModules, params) => {
			checkModules(allModules);
			let cache = getCache();
			let diff

			if (cache.length === 0) {
				diff = moduleDistribute(getProjectStatus)
			}
			else {
				diff = cache
			}

			cleanModulesSync(diff, allModules, params)

			if (diff.length === 0) {
				console.log('all modules clean')
				tableRender();
				return;
			}

			buildModules(diff).then(() => {
				patchModuleSync(diff, allModules, params)
				let newDiff = _.uniq(diff.concat(moduleDistribute(getProjectStatus)))
				publishModules(newDiff).then(() => {
					commitModules(newDiff)
					pushModules(newDiff)

					tableRender()
				}).catch((e) => {
					console.log(e.toString())
					console.trace();
					tableRender();
					clearCache();
				})
			}).catch((e) => {
				console.log(e.toString());
				console.trace();
				tableRender();
			})
		}, 'patch')

		commitModules([root])
		pullModules([root])
		pushModules([root])

		break

	case 'check':

		let diff = moduleDistribute(getProjectStatus);

		console.log('These module had modified: \n');

		console.log(diff.join('\n'));

		break

	case 'clearcache':

		clearCache()

		break


	case 'update':

		let flag = initPrepare();
		var diff = moduleDistribute(getProjectStatus);

		if (diff.length > 0) {
			writeCache()
		}

		let cache = getCache();

		if (flag) {

			if (cache.length > 0) {
				commitModules(cache)
				pullModules(cache)
			}
			else {
				moduleDistribute(commitModules);
				moduleDistribute(pullModules);
			}
		}

		commitModules([root])
		pullModules([root])

		tableRender()

		break

	case 'publish':
		// push modules to gitlabn
		moduleDistribute(publishModules)
		break

	case 'commit':
		moduleDistribute(commitModules)

		break

	case 'add':

		moduleDistribute(addModules)

		break

	case 'pull':

		moduleDistribute(pullModules)

		break

	case 'push':
		moduleDistribute(pushModules)

		break

	default:
		console.error(
				'Command `%s` unrecognized.'
		)
		process.exit(1)
		break
}

