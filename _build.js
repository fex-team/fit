#!/usr/bin/env node --harmony
"use strict";

var babel = require("babel-core")
var sass = require('node-sass')
var execSync = require('child_process').execSync
var path = require('path')
var fs = require('fs')
var autoprefixer = require('autoprefixer')
var postcss = require('postcss')

var args = process.argv.slice(2)

var moduleRoot = args[0]

function circleDirectory(root) {
    var files = []

    function finder(root) {
        var filenames = fs.readdirSync(path.resolve(__dirname, root)).filter((name) => {
            return name.substring(0, 1) !== '.'
        })
        filenames.forEach((value) => {
            if (fs.lstatSync(path.resolve(root, value)).isFile()) {
                files.push(path.resolve(__dirname, root, value))
            }
            else if (fs.lstatSync(path.resolve(root, value)).isDirectory()) {
                finder(path.resolve(root, value))
            }
        })
    }

    finder(root)

    return files
}

function findJsFile(filepaths) {
    var jsReg = /\.(js|jsx)$/

    return filepaths.filter((name) => {
        return jsReg.test(name)
    })
}

function findCssFile(filepaths) {
    var cssReg = /\.(scss|less)$/

    return filepaths.filter((name) => {
        return cssReg.test(name)
    })
}

function parseCss(css) {
    var rules = {}
    var index = css.indexOf('._global')
    var globalIndex
    var globalEnd
    var needClose = false

    if (index === -1) return

    for (var i in css) {
        if (i < index) continue

        if (globalIndex && globalEnd) break

        var pol = css[i]

        if (pol === '{' && !globalIndex) {
            globalIndex = parseInt(i, 10) + 1
        }
        else if (pol === '}' && !needClose && !globalEnd) {
            globalEnd = parseInt(i, 10)
        }
        else if (pol === '{' && globalIndex && !needClose) {
            needClose = true
        }
        else if (pol === '}' && needClose) {
            needClose = false
        }
    }

    if (!globalIndex || !globalEnd) {
        return null
    }
    else {
        return {
            content: css.substring(globalIndex, globalEnd),
            _index : index,
            index  : globalIndex,
            end    : globalEnd
        }
    }
}

function outputDist(moduleRoot, src, dist) {
    let srcDirectory = path.resolve(moduleRoot, src) + '/'
    let distDirectory = path.resolve(moduleRoot, dist)

    execSync('cp -r ' + srcDirectory + ' ' + distDirectory)

    return distDirectory
}

function cssPathLoader(scsspaths) {
    scsspaths.forEach((filepath) => {
        if (filepath.indexOf('mixins.scss') > 0) {
            return
        }

        let source = fs.readFileSync(filepath).toString()

        var global = parseCss(source)
        var hasGlobal = !!global

        // 对于 node_modules 里面的文件不能做处理
        if (/node_modules/.test(filepath) || /\/lib\/pc\/style/.test(filepath)) {
            return false
        }

        // 得到了入口文件的绝对位置
        var entryAbsolutePath = __dirname + '/'

        // 得到入口文件文件夹路径
        var entryAbsoluteFolderPathArray = entryAbsolutePath.split('/')
        entryAbsoluteFolderPathArray.pop()

        var namespace = filepath.replace(entryAbsoluteFolderPathArray.join('/') + '/', '').replace(/\.(less|scss)/, '')

        var nameArray = namespace.split('/')
        nameArray.pop()
        var nameStr = nameArray.join('-')

        if (nameStr && hasGlobal) {
            source = global.content + '\n .' + nameStr + '{' + source.substring(0, global._index) + source.substring(global.end + 1) + '}'
        }
        else if (nameStr && !hasGlobal) {
            source = '.' + nameStr + '{' + source + '}'
        }

        fs.writeFileSync(filepath, source)
    })
}

function parseSass(scsspaths) {
    scsspaths.forEach((scsspath) => {
        let cssPath = scsspath.replace('.scss', '.css')

        let result = sass.renderSync({
            file     : scsspath,
            sourceMap: true,
        }).css.toString()

        postcss([autoprefixer])
            .process(result).then(function (result) {
            result.warnings().forEach((warn) => {
                console.warn(warn.toString())
            })

            fs.writeFileSync(cssPath, result.css)
            execSync('rm ' + scsspath)
        }).catch((err) => {
            console.log(err)
        })
    })
}

function htmlPathLoader(jspaths) {
    jspaths.forEach((filepath) => {
        let source = fs.readFileSync(filepath).toString()

        // 对于 node_modules 里面的文件不能做处理
        if (/node_modules/.test(filepath)) {
            return false
        }

        // 得到了入口文件的绝对位置
        var entryAbsolutePath = __dirname + '/'

        // 得到入口文件文件夹路径
        var entryAbsoluteFolderPathArray = entryAbsolutePath.split('/')
        entryAbsoluteFolderPathArray.pop()

        var namespace = filepath.replace(entryAbsoluteFolderPathArray.join('/') + '/', '').replace(/\.(js|jsx)/, '')

        var nameArray = namespace.split('/')
        nameArray.pop()
        var nameStr = nameArray.join('-')

        // 匹配 namespace
        source = source.replace(/(_namespace)/g, function (text, $1) {
            return nameStr
        })

        fs.writeFileSync(filepath, source)
    })

}

function parseEs6(jsPaths) {
    jsPaths.forEach((filepath) => {
        let jsFile = fs.readFileSync(filepath).toString().replace(/\.scss/g, '.css')

        let result = babel.transform(jsFile, {
            extends: path.resolve(__dirname, '.babelrc')
        })

        fs.writeFileSync(filepath, result.code)
    })
}

function cleanTsx() {
    execSync('rm ' + scsspath)
}

function init() {
    let distDirectory = outputDist(moduleRoot, 'src', 'lib')
    let rawFiles = circleDirectory(distDirectory)

    let scssFiles = findCssFile(rawFiles)
    let jsFiles = findJsFile(rawFiles)

    // parse css
    cssPathLoader(scssFiles)
    parseSass(scssFiles)

    // parse js
    htmlPathLoader(jsFiles)
    parseEs6(jsFiles)

    // clean tsx
    //cleanTsx()
}

init()