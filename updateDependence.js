#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var semver = require('semver')

var modules = fs.readdirSync('./lib').filter((name) => {
    return name.substring(0, 1) !== '.'
})

var dependencesMap = {}

function compareVersion (version) {
    version = version.replace(/[~><=\^]/, '')

    var versionArr = version.split('.')
}

function getModuleDepences (name) {
    var moduleJSON = require(path.resolve('lib', name, 'package.json'))
    var moduleDepences = moduleJSON.dependencies

    for (var dependence of moduleDepences) {
        if (!dependencesMap[dependence]) {
            dependencesMap[dependence] = moduleDepences
        }
        else if (dependencesMap[dependence] < moduleDepences[dependence]) {

        }
    }


}