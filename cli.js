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
}).map((module, index)  => {
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

var tbModules = moduleGlobal.tbModules = fs.readdirSync('./lib/tb').filter((name) => {
    return name.substring(0, 1) !== '.'
}).map((module) => {
    return path.resolve(__dirname, 'lib', 'tb', module)
})

var oxpModules = moduleGlobal.oxpModules = fs.readdirSync('./lib/oxp').filter((name) => {
    return name.substring(0, 1) !== '.'
}).map((module) => {
    return path.resolve(__dirname, 'lib', 'oxp', module)
})

var args = process.argv.slice(2)
var moduleType = args[1]
var moduleName = args[2]
var modulePath

if (moduleName && moduleType === 'pc') {
    modulePath = moduleGlobal.modulePath = path.resolve(__dirname, 'lib', 'pc', moduleName)
}
else if (moduleName && (moduleType === 'web' || moduleType === 'native')) {
    modulePath = moduleGlobal.modulePath = path.resolve(__dirname, 'lib', 'mobile', moduleName, moduleType)
}
else if (moduleName && moduleType === 'tb') {
    modulePath = moduleGlobal.modulePath = path.resolve(__dirname, 'lib', 'tb', moduleName)
}
else if (moduleName && moduleType === 'oxp') {
    modulePath = moduleGlobal.modulePath = path.resolve(__dirname, 'lib', 'oxp', moduleName)
}

function moduleDistribute (fn, params, context) {
    params = params || null
    context = context || null
    let allModules = pcModules.concat(webModules).concat(nativeModules).concat(tbModules).concat(oxpModules).filter((p) => {
        return fs.existsSync(p)
    })

    if (!moduleType && !moduleName) {
        return fn.call(context, allModules, allModules, params)
    }
    else if (moduleType && !moduleName) {
        return fn.call(context, moduleGlobal[moduleType + 'Modules'], pcModules.concat(webModules).concat(nativeModules).concat(tbModules).concat(oxpModules), params)
    }
    else if (moduleType && moduleName) {
        return fn.call(context, [moduleGlobal.modulePath], pcModules.concat(webModules).concat(nativeModules).concat(tbModules).concat(oxpModules), params)
}
}

function multiProcessAsync (run = () => {}, beforeRun = () => {}, afterRun = () => {}) {
    function createWorkInstance (job) {
        let packageJSON = getPackageJSON(job)
        beforeRun(job)
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

            function onClose (successJob) {
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
                instance.stderr.on('data', (err) => {
                    hasError = true
                    errorMsg.push(err.toString())
                })

                instance.stdout.on('data', (data) => {
                    console.log(data.toString())
                })

                instance.on('close', onClose.bind(instance, job))

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
// 抓住未捕获的错误
//process.on('uncaughtException', function (err) {
//    console.error(err)
//})

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
    cli autopub   <type> <name>         clean + build + patch + publish
`
    )
    process.exit(1)
}

switch (args[0]) {
    case 'build':
        // build all
        moduleDistribute(cleanModulesSync)
        moduleDistribute(multiProcessAsync((job) => {
            return spawn('node', ['build.js', job])
        })).then(() => {
            console.log("All Module build success")
        }).catch((err) => {
            console.log(err)
        })

        break

    case 'clean':

        moduleDistribute(cleanModulesSync)

        break

    case 'patch':

        moduleDistribute(patchModulesSync, 'patch')

        break

    case 'minor':

        moduleDistribute(patchModulesSync, 'minor')

        break

    case 'gitpatch':

        let diffModules = _.uniq(getProjectStatus())
        patchModulesSync(diffModules, pcModules.concat(webModules).concat(nativeModules), 'patch')
        diffModules = _.uniq(getProjectStatus())
        cleanModulesSync(diffModules)
        buildModules(diffModules).then(() => {
            publishModules(diffModules)
        })

        break

    case 'autopub':
        if (!moduleType && !moduleName) {
            cleanModulesSync(pcModules.concat(webModules).concat(nativeModules).concat(tbModules).concat(oxpModules))
            buildModules(pcModules.concat(webModules).concat(nativeModules).concat(tbModules).concat(oxpModules)).then(() => {
                patchModulesSync(pcModules.concat(webModules).concat(nativeModules).concat(tbModules).concat(oxpModules), pcModules.concat(webModules).concat(nativeModules), 'patch')
                publishModules(pcModules.concat(webModules).concat(nativeModules).concat(tbModules).concat(oxpModules))
            }).catch((e) => {
                console.log(e)
            })
        }
        else if (moduleType && !moduleName) {
            cleanModulesSync(moduleGlobal[moduleType + 'Modules'])
            buildModules(moduleGlobal[moduleType + 'Modules']).then(() => {
                patchModulesSync(moduleGlobal[moduleType + 'Modules'], pcModules.concat(webModules).concat(nativeModules), 'patch')
                publishModules(moduleGlobal[moduleType + 'Modules'])
            }).catch((e) => {
                console.log(e)
            })
        }
        else if (moduleType && moduleName) {
            cleanModulesSync([moduleGlobal.modulePath])
            buildModules([moduleGlobal.modulePath]).then(() => {
                patchModulesSync([moduleGlobal.modulePath], pcModules.concat(webModules).concat(nativeModules), 'patch')
                publishModules([moduleGlobal.modulePath])
            }).catch((e) => {
                console.log(e)
            })

        }
        break

    case 'publish':
        // push modules to gitlab
        moduleDistribute(publishModules)
        break

    case '_force':
        moduleDistribute(multiProcessAsync((job) => {
            return spawn('git', ['push', '-f', 'origin', 'master'])
        }, (job) => {
            process.chdir(job)
        })).then(() => {
            process.chdir(root)
            console.log('force complete')
        }).catch((err) => {
            console.log(err)
        })

        break

    case 'commit':
        moduleDistribute(commitGit)

        break

    case '__initgit':

        moduleDistribute(__initGit)

        break

    case '__cleangit':

        moduleDistribute(__cleanGit)

        break

    case '__reinit':

        moduleDistribute(__cleanGit)
        moduleDistribute(__initGit)
        moduleDistribute(commitGit)
        moduleDistribute(multiProcessAsync((job) => {
            return spawn('git', ['push', '-f', 'origin', 'master'])
        }, (job) => {
            process.chdir(job)
        })).then(() => {
            process.chdir(root)
            console.log('force complete')
        }).catch((err) => {
            console.log(err)
        })

        break

    case 'initsubmodule':
        moduleDistribute(multiProcessAsync((job, packageJSON) => {
            let path = job.replace(__dirname, '.')
            return spawn('git', ['submodule', 'add', '--force', packageJSON.repository.url, path])
        }, (job) => {
            execSync(`rm -rf ${job}`)
        }, (job) => {
            let path = job.replace(__dirname, '')
            console.log(`INFO: ${path} init success`)
        })).catch((e) => {
            console.log(e)
        })

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

function forcePublish (modules) {
    modules.filter(checkGitInPackageJSON).forEach((filePath) => {

    })
}

function __initGit (modules) {
    modules.filter(checkGitInPackageJSON).forEach((filePath) => {
        let gitRemote = getPackageJSON(filePath).repository.url
        process.chdir(filePath)
        execSync(`git init && git remote add origin ${gitRemote}`)
    })
    process.chdir(root)
}

function __cleanGit (modules) {
    modules.filter(checkGitInPackageJSON).forEach((filePath) => {
        process.chdir(filePath)
        execSync(`rm -rf .git`)
    })
    process.chdir(root)
}

function commitGit (modules) {
    modules.filter(checkGitInPackageJSON).forEach((filePath) => {
        process.chdir(filePath)
        try {
            execSync('git add -A')
            execSync('git commit -m "quick push"')
        }
        catch(e) {
            console.log(e.toString())
        }

    })
    process.chdir(root)
}

function __writeSubmodule (modules) {
    process.chdir(root)
    execSync('mv lib /tmp/lib')
    modules.forEach((filePath) => {
        let packageJSON = getPackageJSON(filePath)
        let url = packageJSON.repository.url


        execSync('git submodule add')
    })
}

function getPackageJSON (filePath) {
    return JSON.parse(fs.readFileSync(path.join(filePath, 'package.json')))
}

function checkPackageJSON (filePath) {
    return fs.existsSync(path.join(filePath, 'package.json'))
}

function checkGitInPackageJSON (filePath) {
    if (checkPackageJSON(filePath)) {
        let packageJSON = getPackageJSON(filePath)
        if (!packageJSON.repository) {
            return false
        }
        return true
    }
    return false
}

function checkGit (filePath) {
    return fs.existsSync(path.join(filePath, '.git'))
}

function getProjectStatus () {
    try {
        let output = execSync('git status --porcelain').toString().replace(/\s\w\s/g, '').split('\n')
        let subReg = /^lib/

        output = output.filter((value, index) => {
            return subReg.test(value)
        }).map((value) => {
            let mobileReg = /^lib\/mobile/
            let pcReg = /^lib\/pc/

            if (mobileReg.test(value)) {
                let directory = value.split('/').slice(0, 4).join('/')
                return path.resolve(__dirname, directory)
            }
            else if (pcReg.test(value)) {
                let directory = value.split('/').slice(0, 3).join('/')
                return path.resolve(__dirname, directory)
            }
        })

        return output
    }
    catch(e){console.log(e)}
}

function cleanModulesSync (modules) {
    process.chdir(root)

    for (var modulePath of modules) {
        try {
            execSync('rm -r ' + path.resolve(modulePath, 'lib') + ' > /dev/null 2>&1')
            execSync('rm ' + path.resolve(modulePath, 'npm-debug.log > /dev/null 2>&1'))
            console.log('INFO: ', 'Remove ' + modulePath + ' lib')
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
                let childInstance = spawn('node', ['build.js', modulePath])
                childInstance.stderr.on('data', (err) => {
                    console.log(err.toString())
                })
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
                let childInstance = spawn('node', ['build.js', modulePath])
                childInstance.stderr.on('data', (err) => {
                    console.log(err.toString())
                })
                runChildInstance.push(childInstance)

                childInstance.on('close', onClose.bind(childInstance, modulePath))
            }
        }
        else {
            for (let module of modules) {
                let modulePath = moduleCopy.pop()
                let childInstance = spawn('node', ['build.js', modulePath])
                childInstance.stderr.on('data', (err) => {
                    console.log(err.toString())
                })

                runChildInstance.push(childInstance)

                childInstance.on('close', onClose.bind(childInstance, modulePath))
            }
        }
    })
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

function patchModulesSync (modules, allModules, type) {
    let changeModules = {}
    let moduleMaps = {}

    function updateModuleVirtual (modulePath, name, version) {
        if (! changeModules[modulePath]) {
            changeModules[modulePath] = {
                modulePath: modulePath,
                name: name,
                version: semver.inc(version, type)
            }
        }
    }

    function buildModuleMap () {
        for (let all of allModules) {
            let moduleObj = getModuleObj(all)
            moduleMaps[moduleObj.name] = {
                version: moduleObj.version,
                name: moduleObj.name,
                modulePath: all,
                dependencies: []
            }
            for (var dependence in moduleObj.dependencies) {
                moduleMaps[moduleObj.name].dependencies.push({
                    [dependence]: moduleObj.dependencies[dependence]
                })
            }
        }
    }

    function getModuleObj (module) {
        if (fs.existsSync(module, 'package.json')) {
            return JSON.parse(fs.readFileSync(path.resolve(module, 'package.json')).toString())
        }
        return {}
    }

    function whoIsNeedMe (moduleObj) {
        let modules = []
        let moduleName = moduleObj.name
        for (let module in moduleMaps) {
            for (let dep of moduleMaps[module].dependencies) {
                if (dep[moduleName]) {
                    modules.push({
                        modulePath: moduleMaps[module].modulePath,
                        moduleName: moduleMaps[module].name,
                        moduleVersion: moduleMaps[module].version
                    })
                }
            }
        }

        return modules
    }

    function updateModule (module) {
        let moduleObj = changeModules[module] || getModuleObj(module)
        updateModuleVirtual(module, moduleObj.name, moduleObj.version)

        let dependences = whoIsNeedMe(moduleObj)

        for (let dep of dependences) {
            updateModule(dep.modulePath)
        }
    }

    function writeChanges () {
        for (let change in changeModules) {
            let moduleObj = getModuleObj(changeModules[change].modulePath)
            console.log(`INFO: Update ${changeModules[change].name} version ${moduleObj.version} ==> ${changeModules[change].version}`)
            moduleObj.version = changeModules[change].version

            for (let dep in moduleObj.dependencies) {
                if (moduleMaps[dep] && changeModules[moduleMaps[dep].modulePath] &&  (changeModules[moduleMaps[dep].modulePath].name === dep)) {
                    console.log(`INFO: Update ${changeModules[change].name}'s Dependencies [${dep}] version ${moduleObj.dependencies[dep]} ==> ${changeModules[moduleMaps[dep].modulePath].version}`)
                    moduleObj.dependencies[dep] = '^' + changeModules[moduleMaps[dep].modulePath].version
                }
            }

            fs.writeFileSync(path.join(changeModules[change].modulePath, 'package.json'), format.plain(moduleObj), 'utf-8')
        }
    }

    buildModuleMap()

    for (let module of modules) {
        updateModule(module)
    }

    writeChanges()

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