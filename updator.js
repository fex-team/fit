#!/usr/bin/env node
"use strict";


var fs = require('fs')
var path = require('path')
var semver = require('semver')
var format = require('format-json')
var exec = require('child_process').exec

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
                callback(error, stderr)
            }

            callback(null, stdout)
        })
    }
}

var checkGitStatus = commandFactory('git status')
var checkWhoAmi = commandFactory('npm whoami')
var versionPatch = commandFactory('npm version patch')
var addChanges = commandFactory('git add -A')
var removeDir = commandFactory('rm -r')
var buildModule = commandFactory('node webpack.publish.js')


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
        if (isSingle) {
            upgradeModules([moduleName])
        }
        else {

        }

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

function getModuleVersion (modules) {
    for (var name of modules) {
        var moduleJSON = JSON.parse(fs.readFileSync(path.resolve('lib', name, 'package.json')).toString())
        var moduleVersion = moduleJSON.version
        var moduleName = moduleJSON.name

        packageVersion[moduleName] = moduleVersion
    }
}

function updateModuleVersion (modules) {
    for (var name of modules) {
        var filePath = path.resolve('lib', name, 'package.json')
        var moduleJSON = JSON.parse(fs.readFileSync(filePath).toString())

        var moduleDepences = moduleJSON.dependencies

        for (var dependence in moduleDepences) {
            if (packageVersion[dependence] && compareVersion(moduleDepences[dependence], packageVersion[dependence])) {
                console.log('Update ' + dependence + ':', moduleDepences[dependence], '====>', '^' + packageVersion[dependence])
                moduleDepences[dependence] = '^' + packageVersion[dependence]
            }
        }

        fs.writeFileSync(filePath, format.plain(moduleJSON), 'utf8')
    }
}

function cleanModules (modules) {
    for (let name of modules) {
        let modulePath = path.resolve('lib', name, 'dist')
        if (fs.existsSync(modulePath)) {
            removeDir((error, output) => {
                if (error) {
                    console.error(output)
                    process.exit(1)
                }
                console.info('INFO: ', 'clean ' + name + ' dist')
            }, modulePath)
        }
    }
}

function buildModules (modules) {
    for (let name of modules) {
        buildModule((error, output) => {
            if (error) {
                console.error(output)
                process.exit(1)
            }

            console.info('INFO: ', 'module ' + name + ' build success')
        }, name)
    }
}

function upgradeModules (modules) {
    checkGitStatus((error, output) => {
        if (error) {
            console.error(output)
            process.exit(1)
        }

        console.log(error, output)

        var result
        let reg = /lib\/(\w+)\//g
        let moduleChanges = []

        while ((result = reg.exec(output)) !== null) {
            moduleChanges.push(result[1])
        }

        for (let name of moduleChanges) {

        }

    }, '--short')
}