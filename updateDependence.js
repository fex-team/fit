#!/usr/bin/env node

var fs = require('fs')
var path = require('path')

var modules = fs.readdirSync('./lib').filter((name) => {
    return name.substring(0, 1) !== '.'
})

var dependencesMap = {}

function getModuleDepences (name) {
    var moduleJSON = path.resolve('lib', name, 'package.json')
}