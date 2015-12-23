#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var semver = require('semver')
var format = require('format-json')

var modules = fs.readdirSync('./lib').filter((name) => {
    return name.substring(0, 1) !== '.'
})

var dependencesMap = {}
var packageVersion = {}


function compareVersion (pre, next) {
    pre = pre.replace(/^[\^~]/, '')
    next = next.replace(/^[\^~]/, '')
    return semver.compare(pre, next)
}

function getModuleVersion (name) {
    var moduleJSON = JSON.parse(fs.readFileSync(path.resolve('lib', name, 'package.json')).toString())
    var moduleVersion = moduleJSON.version
    var moduleName = moduleJSON.name

    packageVersion[moduleName] = moduleVersion
}

function updateModuleVersion (name) {
    var filePath = path.resolve('lib', name, 'package.json')
    var moduleJSON = JSON.parse(fs.readFileSync(filePath).toString())

    var moduleDepences = moduleJSON.dependencies

    for (var dependence in moduleDepences) {
        if (packageVersion[dependence] && compareVersion(moduleDepences[dependence], packageVersion[dependence])) {
            console.log('Update ' + dependence + ':', moduleDepences[dependence], '====>', '^' + packageVersion[dependence])
            moduleDepences[dependence] = '^' + packageVersion[dependence]
        }
    }

    fs.writeFileSync(filePath,  format.plain(moduleJSON), 'utf8')
}

for (var name of modules) {
    getModuleVersion(name)
}

for (var name of modules) {
    updateModuleVersion(name)
}