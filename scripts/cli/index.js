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

import moduleDistribute from './utils/distribute'
import multiProcessor from './utils/multi-processor'

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
				let diff = _.uniq(modules.concat(getProjectStatus()))
				publishModules(diff).then(() => {
					commitGit(diff)
					pushSubModule(pullSubModule(diff))
				}).catch((e) => {
					console.log(e.toString())
				})
			})
		}, 'patch')

		break

	case 'diffpub':

		initPrepare();

		moduleDistribute((modules, allModules, params) => {
			checkModules(allModules);
			let diff = moduleDistribute(getProjectStatus)
			cleanModulesSync(diff, allModules, params)

			if (diff.length === 0) {
				console.log('all modules clean')
				return;
			}

			buildModules(diff).then(() => {
				patchModuleSync(diff, allModules, params)
				let newDiff = _.uniq(diff.concat(moduleDistribute(getProjectStatus)))
				publishModules(newDiff).then(() => {
					commitModules(newDiff)
					pushModules(pullModules(newDiff))
				}).catch((e) => {
					console.log(e.toString())
					console.trace();
				})
			}).catch((e) => {
				console.log(e.toString());
				console.trace();
			})
		}, 'patch')

		commitModules([root])
		pushModules([root])

		break

	case 'check':

		let diff = moduleDistribute(getProjectStatus);

		console.log('These module had modified: \n');

		console.log(diff.join('\n'));

		break

	case 'update':

		let flag = initPrepare();

		if (flag) {
			moduleDistribute(pullModules);
		}

		pullModules([root])

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

