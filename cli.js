#!/usr/bin/env node
"use strict";


var fs = require('fs')
var path = require('path')
var semver = require('semver')
var format = require('format-json')
var exec = require('child_process').exec
var root = process.cwd()
var os = require('os')
var _ = require('lodash')

var packageVersion = {}

var modules = fs.readdirSync('./lib').filter((name) => {
    return name.substring(0, 1) !== '.'
})

var args = process.argv.slice(2)

if (args.length === 0) {
    console.error(
        'you did not pass any commands, did you mean to run `updator push` ?'
    )
    process.exit(1)
}

function commandFactory (command) {
    return function (callback, ...params) {
        exec(command + ' ' + params.join(' '), (error, stdout, stderr) => {
            if (error) {
                console.error('ERROR: ', command, stderr)
                process.exit(1)
            }

            callback(stdout, stderr)
        })
    }
}

function commandFactorySync (command) {
    return function (...params) {
        return execSync(command + ' ' + params.join(' '))
    }
}

var checkGitStatus = commandFactorySync('git status')
var checkWhoAmi = commandFactorySync('npm whoami')
var npmPublish = commandFactorySync('npm publish')
var versionPatch = commandFactorySync('npm version patch')
var addAndCommit = commandFactorySync('git commit -am')
var removeDir = commandFactorySync('rm -r')
var buildModule = commandFactorySync('node webpack.publish.js')


var isSingle = process.argv.indexOf('-s') >= 0
var moduleName

if (isSingle) {
    moduleName = args[2]
}

switch (args[0]) {
    case 'build':

        // node updator.js -s button
        if (isSingle) {
            cleanModules([moduleName])
            buildModules([moduleName])
        }
        else {
            // build all modules
            cleanModules(modules)
            buildModules(modules)
        }

        break

    case 'clean':

        if (isSingle) {
            cleanModules([moduleName])
        }
        else {
            cleanModules(modules)
        }

        break

    case 'push':
        // push modules to gitlab
        if (isSingle) {

        }
        else {

        }

        break

    case 'update':
        // update all modules version
        getModuleVersion(modules)
        updateModuleVersion(modules)

        break

    case 'upgrade':

        upgradeModules()

        break

    default:
        console.error(
            'Command `%s` unrecognized.'
        )
        process.exit(1)
        break
}


function compareVersion (pre, next) {
    pre = pre.replace(/^[\^~]/, '')
    next = next.replace(/^[\^~]/, '')
    return semver.compare(pre, next)
}

function getModulePath (name, type) {
    if (type === 'pc') {
        return {
            pc: path.resolve('lib', 'pc', name)
        }
    }
    else if (type === 'mobile') {
        return {
            mobile: {
                web: path.resolve('lib', 'mobile', name, 'web'),
                native: path.resolve('lib', 'mobile', name, 'native')
            }
        }
    }
}

function getModuleVersion (modules, type) {
    packageVersion = {}
    for (var name of modules) {
        var modulePath = getModulePath(name, type)[type]
        var moduleJSON
        var moduleVersion
        var moduleName

        if (type === 'pc') {
            moduleJSON = JSON.parse(fs.readFileSync(modulePath, 'package.json').toString())
            moduleVersion = moduleJSON.version
            moduleName = moduleJSON.name
            packageVersion[moduleName] = moduleVersion
        }
        else if (type === 'mobile') {
            moduleJSON = {
                web: JSON.parse(fs.readFileSync(modulePath.web, 'package.json').toString()),
                native: JSON.parse(fs.readFileSync(modulePath.native, 'package.json').toString())
            }
            for (var type in moduleJSON) {
                let moduleName = moduleJSON[type].name
                let moduleVersion = moduleJSON[type].version
                packageVersion[moduleName] = moduleVersion
            }
        }
    }
}

function updateModuleVersion (modules, type) {
    for (let name of modules) {
        let modulePath = getModulePath(name, type)[type]
        var moduleJSON
        var moduleDepences

        if (type === 'pc') {
            moduleJSON =  JSON.parse(fs.readFileSync(modulePath, 'package.json').toString())
            moduleDepences = moduleJSON.dependencies

            for (let dependence in moduleDepences) {
                if (packageVersion[dependence] && compareVersion(moduleDepences[dependence], packageVersion[dependence])) {
                    console.log('Update ' + dependence + ':', moduleDepences[dependence], '====>', '^' + packageVersion[dependence])
                    moduleDepences[dependence] = '^' + packageVersion[dependence]
                }
            }

            fs.writeFileSync(modulePath, format.plain(moduleJSON), 'utf8')

            process.chdir(modulePath)
            execSync('npm version patch')
            console.log('INFO: patch module: ', name)
            process.chdir(root)
        }
        else if (type === 'mobile') {
            moduleJSON = {
                web: JSON.parse(fs.readFileSync(modulePath.web, 'package.json').toString()),
                native: JSON.parse(fs.readFileSync(modulePath.native, 'package.json').toString())
            }

            for (var type in moduleJSON) {
                moduleDepences = moduleJSON[type].dependencies
                for (let dependence in moduleDepences) {
                    if (packageVersion[dependence] && compareVersion(moduleDepences[dependence], packageVersion[dependence])) {
                        console.log('Update ' + dependence + ':', moduleDepences[dependence], '====>', '^' + packageVersion[dependence])
                        moduleDepences[dependence] = '^' + packageVersion[dependence]
                    }
                }

                process.chdir(modulePath[type])
                fs.writeFileSync(modulePath[type], format.plain(moduleJSON), 'utf8')
                execSync('npm version patch')
                console.log('INFO: patch module: ', name)
            }

            process.chdir(root)
        }
    }
}

function cleanModules (modules, type) {
    for (let name of modules) {
        let modulePath = getModulePath(name, type)[type]

        if (type === 'pc' && fs.existsSync(modulePath)) {
            execSync('rm -r ' + modulePath)
            console.info('INFO: ', 'clean ' + name + ' dist')
        }
        else if (type === 'mobile') {
            for (var type in modulePath) {
                execSync('rm -r ' + modulePath[type])
                console.info('INFO: ', 'clean ' + name + ' ' + type + ' dist')
            }
        }
    }
}

function buildModules (modules, type) {
    var moduleCopy = _.cloneDeep(modules)
    var cpus = os.cpus()
    var freeCpus = cpus.length
    process.chdir(root)

    for (let cpu of cpus) {
        if (freeCpus > 0 && modules.length > 0) {
            let name = moduleCopy.pop()
            if (type === 'pc') {
                exec('node webpack.publish.js -p ' + name, (error, stdout, stderr) => {
                    if (error) {
                        console.error(error)
                    }
                    console.info('INFO: ', 'module ' + name + ' build success')
                    freeCpus++
                })
            }
            else if (type === 'mobile') {

            }

            freeCpus--;
        }
//        buildModule((stdout, stderr) => {
//            console.info('INFO: ', 'module ' + name + ' build success')
//        }, name)
    }

}

function upgradeModules () {
    // find changes
    checkGitStatus((stdout, stderr) => {
        if (stdout.length === 0) {
            console.info('INFO: ', 'nothing to commit, working directory clean')
        }

        var result
        let reg = /lib\/(\w+)\//g
        let moduleChanges = []

        while ((result = reg.exec(stdout)) !== null) {
            moduleChanges.push(result[1])
        }

        // patch changes
        for (let name of moduleChanges) {
            let modulePath = path.resolve(root, 'lib', name)
            process.chdir(modulePath)

            versionPatch((error, output) => {
                if (error) {

                }
            })
        }
        process.chdir(root)

        // clean changes
        cleanModules(moduleChanges)

        // build changes
        buildModules(moduleChanges)

        // upgrade other packages and patch other packages
//        getModuleVersion(modules)
//        updateModuleVersion(modules, moduleChanges)

        // commit all changes
//        addAndCommit((error, output) => {
//            console.info('INFO: ', 'git commit all')
//        }, 'quick push')
//
//         npm publish all changes
//
//        for (let change of moduleChanges) {
//            let modulePath = path.resolve(root, 'lib', change)
//            process.chdir(modulePath)
//            npmPublish((stdout, stderr) => {
//                console.info("INFO:", 'package ', change, ' had been updated')
//            })
//            process.chdir(root)
//        }

        // pull master branch

        // pull subtree branch

        // push master branch

        // push subtree branch

    }, '--short')
}

/* update all package */

// have changes

// node cli upgrade
