#!/usr/bin/env node --harmony
"use strict";


var fs = require('fs')
var path = require('path')
var semver = require('semver')
var format = require('format-json')
var exec = require('child_process').exec
var execSync = require('child_process').execSync
var spawn = require('child_process').spawn
var root = process.cwd()
var os = require('os')
var _ = require('lodash')

var packageVersion = {}
var moduleGlobal = {}

var pcModules = moduleGlobal.pcModules = fs.readdirSync('./lib/pc').filter((name) => {
    return name.substring(0, 1) !== '.'
}).map((module, index) => {
    return path.resolve(__dirname, 'lib', 'pc', module)
})

var webModules = moduleGlobal.webModules = fs.readdirSync('./lib/mobile').filter((name) => {
    return name.substring(0, 1) !== '.'
}).map((module) => {
    return path.resolve(__dirname, 'lib', 'mobile', module, 'web')
})

var nativeModules = moduleGlobal.nativeModules = fs.readdirSync('./lib/mobile').filter((name) => {
    return name.substring(0, 1) !== '.'
}).map((module) => {
    return path.resolve(__dirname, 'lib', 'mobile', module, 'native')
})

var args = process.argv.slice(2)
var moduleType = args[1]
var moduleName = args[2]
var modulePath

if (moduleName && moduleType === 'pc') {
    modulePath = moduleGlobal.modulePath = path.resolve(__dirname, 'lib', 'pc', moduleName)
}
else if (moduleName && (moduleType === 'web' || moduleType === 'native')) {
    modulePath = moduleGlobal.modulePath = path.resolve(__dirname, 'lib', 'mobile', moduleName, type)
}

// 抓住未捕获的错误
process.on('uncaughtException', function (err) {
    console.error(err)
})

if (args.length === 0) {
    console.error(
`
fit cli tools

type: pc|web|native

Usage:
    cli build    <type> <name>           编译模块
    cli clean    <type> <name>           清除 dist
    cli publish  <type> <name>           模块发布
    cli push     <type> <name>           提交subtree (不可用)
    cli pull     <type> <name>           更新 subtree (不可用)
    cli patch    <type> <name>           升级版本
    cli add      <type> <name>           添加模块到 git remote (不可用)
    cli updatesubtree                    更新 subtree 分支列表 (beta)
`
    )
    process.exit(1)
}

switch (args[0]) {
    case 'build':
        // build all
        if (!moduleType && !moduleName) {
            buildModules(pcModules.concat(webModules).concat(nativeModules), function () {
                console.log('INFO: All Modules Build Success')
            })
        }
        else if (moduleType && !moduleName) {
            buildModules(moduleGlobal[moduleType + 'Modules'], function () {
                console.log('INFO: All Modules Build Success')
            })
        }
        else if (moduleType && moduleName) {
            buildModules([moduleGlobal.modulePath], function () {
                console.log('INFO: All Modules Build Success')
            })
        }

        break

    case 'clean':

        if (!moduleType && !moduleName) {
            cleanModulesSync(pcModules.concat(webModules).concat(nativeModules))
        }
        else if (moduleType && !moduleName) {
            cleanModulesSync(moduleGlobal[moduleType + 'Modules'])
        }
        else if (moduleType && moduleName) {
            cleanModulesSync([moduleGlobal.modulePath])
        }

        break

    case 'patch':
        if (!moduleType && !moduleName) {
            patchModulesSync(pcModules.concat(webModules).concat(nativeModules), pcModules.concat(webModules).concat(nativeModules))
//            console.log('不推荐直接使用 cli patch, 可以尝试 cli gitpatch')
        }
        else if (moduleType && !moduleName) {
//            patchModulesSync(moduleGlobal[moduleType + 'Modules'], pcModules.concat(webModules).concat(nativeModules))
            console.log('不推荐直接使用 cli patch, 可以尝试 cli gitpatch')
        }
        else if (moduleType && moduleName) {
            patchModulesSync([moduleGlobal.modulePath], pcModules.concat(webModules).concat(nativeModules))
        }

        break

    case 'gitpatch':

        let diffModules = getProjectStatus()
        patchModulesSync(diffModules, pcModules.concat(webModules).concat(nativeModules))
        cleanModulesSync(diffModules)
        buildModules(diffModules).then(() => {
            publishModules(diffModules)
        })

        break

    case 'publish':
        // push modules to gitlab
        if (!moduleType && !moduleName) {
            publishModules(pcModules.concat(webModules).concat(nativeModules))
        }
        else if (moduleType && !moduleName) {
            publishModules(moduleGlobal[moduleType + 'Modules'])
        }
        else if (moduleType && moduleName) {
            publishModules([moduleGlobal.modulePath])
        }

        break

//    case 'updatesubtree':
//
//        updateSubTreeInfo()
//
//        break
//
//    case 'add':
//
//        console.log('暂不支持此功能')
////        if (moduleType && moduleName) {
////            addModule(moduleType, moduleName)
////        }
////        else {
////            console.error('ERROR: missing moduleType and moduleName')
////        }
//
//        break
//
//    case 'push':
//        // update all modules version
//        if (!type && !name) {
//            pushModules(pcModules.concat(webModules).concat(nativeModules))
//        }
//        else if (type) {
//            pushModules(moduleGlobal[type + 'Modules'])
//        }
//        else if (type && name) {
//            pushModules([moduleGlobal.modulePath])
//        }
//
//        break
//
//    case 'pull':
//
//        if (!type && !name) {
//            pullModules(pcModules.concat(webModules).concat(nativeModules))
//        }
//        else if (type) {
//            pullModules(moduleGlobal[type + 'Modules'])
//        }
//        else if (type && name) {
//            pullModules([moduleGlobal.modulePath])
//        }
//
//        break
//
//
//    case 'update':
//
//        if (!type && !name) {
//            updateModules(pcModules.concat(webModules).concat(nativeModules))
//        }
//        else if (type) {
//            updateModules(moduleGlobal[type + 'Modules'])
//        }
//        else if (type && name) {
//            updateModules([moduleGlobal.modulePath])
//        }
//
//        break

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

function getProjectStatus () {
    try {
        let output = execSync('git status --porcelain').toString().replace(/\s\w\s/g, '').split('\n')
        let subReg = /^lib/

        output = output.filter((value, index) => {
            return subReg.test(value)
        }).map((value) => {
            value = value.split('/').slice(0, -1).join('/')
            return path.resolve(__dirname, value)
        })

        return output
    }
    catch(e){console.log(e)}
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

function cleanModulesSync (modules) {
    process.chdir(root)

    for (var modulePath of modules) {
        try {
            execSync('rm -r ' + path.resolve(modulePath, 'dist'))
            console.log('INFO: ', 'Remove ' + modulePath + ' dist')
        }
        catch (e) {}
    }
}

function buildModules (modules) {
    return new Promise((resolve, reject) => {
        var moduleCopy = _.cloneDeep(modules)
        var cpus = os.cpus()
        var runChildInstance = []
        process.chdir(root)

        function onClose (successPath) {
            console.info('INFO: ', successPath, ' build success')
            let modulePath = moduleCopy.pop()
            _.pull(runChildInstance, this)

            if (modulePath) {
                let childInstance = spawn('node', ['webpack.publish.js', modulePath])
                runChildInstance.push(childInstance)

                childInstance.on('close', onClose.bind(childInstance, modulePath))
            }
            else if (!runChildInstance.length) {
                resolve()
            }
        }

        function onError (error) {
            reject(error)
        }

        if (modules.length > cpus.length) {
            for (let cpu of cpus) {
                let modulePath = moduleCopy.pop()
                let childInstance = spawn('node', ['webpack.publish.js', modulePath])
                runChildInstance.push(childInstance)

                childInstance.on('close', onClose.bind(childInstance, modulePath))
            }
        }
        else {
            for (let module of modules) {
                let modulePath = moduleCopy.pop()
                let childInstance = spawn('node', ['webpack.publish.js', modulePath])

                runChildInstance.push(childInstance)

                childInstance.on('close', onClose.bind(childInstance, modulePath))
            }
        }
    })
}

function addModule (type, name) {
    let remotePrefix = 'ssh://g@gitlab.baidu.com:8022/tb-component'

    try {
        execSync('git remote add ' + type + '/' + name + ' ' + remotePrefix + '/' + type + '-' + name)
        console.log('Add remote: ' + type + '/' + name)
    }
    catch(e){}

}

function pullModule (modules) {
    for (let module of modules) {
        try {
            execSync('git subtree pull prefix=')
        }
        catch(e){}
    }
}

function updateSubTreeInfo (callback) {
    process.chdir(root)
    let subtreeList = []
    let moduleList = fs.readdirSync('./lib/mobile').filter((name) => {
        return name.substring(0, 1) !== '.'
    }).map((value) => {
        return 'mobile/' + value
    }).concat(fs.readdirSync('./lib/pc').filter((name) => {
        return name.substring(0, 1) !== '.'
    }).map((value) => {
        return 'pc/' + value
    }))

    try {
        execSync('cp -r ./lib /tmp/___temp___lib')
        execSync('rm -r ./lib')
    }
    catch(e){}

    moduleList.forEach((module, index) => {
        subtreeList.push(new Promise((resolve, reject) => {
            let gitlabBranch = module.split('/').join('-')
            exec(`sh ./stree.sh add ${module} -P lib/${module} ssh://g@gitlab.baidu.com:8022/tb-component/${gitlabBranch}`, (error, stdout, stderr) => {
                console.log(error, stdout)
                if (error) {
                    reject(error)
                }


                resolve(stdout, stderr)
            })
        }))
    })

    Promise.all(subtreeList).then((values) => {
        console.log(123)
        execSync('cp -r /tmp/awesome/lib ./lib')

        console.log('success')
    })
}

function patchModulesSync (modules, allModules) {
    for (let module of modules) {
        try {
            process.chdir(module)
            execSync('npm version patch')
        }
        catch(e){}

        let packageJSON = JSON.parse(fs.readFileSync(path.resolve(module, 'package.json')).toString())
        let moduleName = packageJSON.name
        let moduleDepenence = packageJSON.dependecies
        let moduleVersion = packageJSON.version

        for (let all of allModules) {
            let allJSON = JSON.parse(fs.readFileSync(path.resolve(all, 'package.json')).toString())
            let allDependencies = allJSON.dependencies

            for (let dependence in allDependencies) {
                if (dependence === moduleName && compareVersion(allDependencies[dependence], moduleVersion)) {
                    console.log('Update ' + allJSON.name + '\'s ' +  moduleName + ':', allDependencies[dependence], '====>', '^' + moduleVersion)
                    allDependencies[dependence] = '^' + moduleVersion
                    fs.writeFileSync(path.resolve(all, 'package.json'), format.plain(allJSON), 'utf8')
                }
            }


        }
    }

    process.chdir(root)
}

function publishModules (modules) {
    return new Promise((resolve, reject) => {
        var moduleCopy = _.cloneDeep(modules)
        var cpus = os.cpus()
        var runChildInstance = []

        function onClose () {
            let modulePath = moduleCopy.pop()
            _.pull(runChildInstance, this)

            if (modulePath) {
                let childInstance = spawn('npm', ['publish'], {
                    cwd: modulePath
                })

                childInstance.stdout.on('data', (data) => {
                    console.log(data.toString())
                })

                childInstance.on('close', onClose)

                childInstance.stderr.on('data', onError)

                runChildInstance.push(childInstance)
            }
            else if (!runChildInstance.length) {
                resolve()
            }
        }

        function onError (data) {
            console.error(data.toString())
        }

        if (modules.length > cpus.length) {
            for (let cpu of cpus) {
                let modulePath = moduleCopy.pop()
                let childInstance = spawn('npm', ['publish'], {
                    cwd: modulePath
                })

                childInstance.stdout.on('data', (data) => {
                    console.log(data.toString())
                })

                runChildInstance.push(childInstance)

                childInstance.on('close', onClose)

                childInstance.stderr.on('data', onError)
            }
        }
        else {
            for (let module of modules) {
                let modulePath = moduleCopy.pop()
                let childInstance = spawn('npm', ['publish'], {
                    cwd: modulePath
                })

                runChildInstance.push(childInstance)

                childInstance.stdout.on('data', (data) => {
                    console.log(data.toString())
                })

                childInstance.on('close', onClose.bind(childInstance, modulePath))

                childInstance.stderr.on('data', onError)
            }
        }
    })
}

function pullModules (modules) {

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
