#!/usr/bin/env node --harmony --harmony_default_parameters
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

function getPathModules (type) {
    return moduleGlobal[type + 'Modules'] = fs.readdirSync(`./lib/${type}`).filter((name) => {
        return fs.lstatSync(path.join(__dirname, 'lib', type, name)).isDirectory()
    }).map((module) => {
        return path.resolve(__dirname, 'lib', type, module)
    })
}

function getModulePath (name, type) {
    if (name && type) {
        return moduleGlobal.modulePath = path.resolve(__dirname, 'lib', type, name)
    }
    else {
        return null
    }

}

var pcModules = getPathModules('pc')
var mobileModules = getPathModules('mobile')
var tbModules = getPathModules('tb')

var args = process.argv.slice(2)
var moduleType = args[1]
var moduleName = args[2]
var modulePath = getModulePath(moduleName, moduleType)

function moduleDistribute(fn, params, context) {
    params = params || null
    context = context || null
    let allModules = pcModules.concat(mobileModules).concat(tbModules).filter((p) => {
        return fs.existsSync(p)
    })

    if (!moduleType && !moduleName) {
        return fn.call(context, allModules, allModules, params)
    }
    else if (moduleType && !moduleName) {
        return fn.call(context, moduleGlobal[moduleType + 'Modules'], pcModules.concat(mobileModules).concat(tbModules), params)
    }
    else if (moduleType && moduleName) {
        return fn.call(context, [moduleGlobal.modulePath], pcModules.concat(mobileModules).concat(tbModules), params)
    }
}

function multiProcessAsync(run = () => {
}, beforeRun = () => {}, afterRun = () => {}) {
    function createWorkInstance(job) {
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

            function onClose(successJob) {
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

            function distributeTask(instance, job) {
                instance.stderr.on('data', (err) => {
                    hasError = true
                    errorMsg.push(err.toString())
                    console.log(err.toString())
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
process.on('uncaughtException', function (err) {
    console.error(err)
    console.trace()
})

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

        moduleDistribute(patchModulesSync, 'patch')

        break

    case 'minor':

        moduleDistribute(patchModulesSync, 'minor')

        break

    case 'autopub':

        moduleDistribute((modules, allModules, params) => {
            cleanModulesSync(modules, allModules, params)
            buildModules(modules).then(() => {
                patchModulesSync(modules, allModules, params)
                let diff = _.uniq(modules.concat(getProjectStatus()))
                publishModules(diff).then(() => {
                    commitGit(diff)
                }).catch((e) => {
                    console.log(e.toString())
                })
            })
        }, 'patch')

        break

    case 'publish':
        // push modules to gitlabn
        moduleDistribute(publishModules)
        break

    case '__force':
        moduleDistribute(__forcePush).then(() => {
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
        }, (job) => {
            console.log(`INFO: ${job} success`)
        })).then(() => {
            process.chdir(root)
            console.log('force complete')
        }).catch((err) => {
            console.log(err)
        })

        break

    case 'initsubmodule':

        fs.writeFileSync('./initsubmodule.sh', '# this shell script was generated by cli.js \n')
        moduleDistribute((modules) => {
            modules.map((abPath) => {
                let subPath = abPath.replace(__dirname, '.')
                let url = getPackageJSON(abPath).repository.url
                let command = `git submodule add ${url} ${subPath} \n`
                fs.writeFileSync('./initsubmodule.sh', command, {
                    flag: 'a'
                })
            })
        })

        // this is dangers
        process.chdir(root)
        execSync('mv lib /tmp/__lib')
        execSync('npm run push')
        execSync('sh initsubmodule.sh')

        break

    default:
        console.error(
            'Command `%s` unrecognized.'
        )
        process.exit(1)
        break
}

function __initGit(modules) {
    modules.filter(checkGitInPackageJSON).forEach((filePath) => {
        let gitRemote = getPackageJSON(filePath).repository.url
        process.chdir(filePath)
        execSync(`git init && git remote add origin ${gitRemote}`)
        console.log(`INIT: git ${filePath} success`)
    })
    process.chdir(root)
}

function __cleanGit(modules) {
    modules.filter(checkGitInPackageJSON).forEach((filePath) => {
        process.chdir(filePath)
        execSync(`rm -rf .git`)
        console.log(`CLEAN: git directory ${filePath} cleaned`)
    })
    process.chdir(root)
}

function commitGit(modules) {
    modules.filter(checkGitInPackageJSON).forEach((filePath) => {
        process.chdir(filePath)
        try {
            execSync('git add -A')
            execSync('git commit -m "quick push"')
        }
        catch (e) {
            console.log(e.toString())
        }
        console.log(`COMMIT: quick commit ${filePath}`)
    })
    process.chdir(root)
}

function __submodulePull(modules) {
    modules.forEach((filePath) => {
        process.chdir(filePath)
        try {
            execSync('git fetch && git m')
        }
    })
}

function __forcePush(modules) {
    return multiProcessAsync(() => {
        return spawn('git', ['push', '-f', 'origin', 'master'])
    }, (job) => {
        process.chdir(job)
    }, (job) => {
        console.log(`INFO: ${job} force push complete`)
    })(modules)
}

function getPackageJSON(filePath) {
    return JSON.parse(fs.readFileSync(path.join(filePath, 'package.json')))
}

function checkPackageJSON(filePath) {
    return fs.existsSync(path.join(filePath, 'package.json'))
}

function checkGitInPackageJSON(filePath) {
    if (checkPackageJSON(filePath)) {
        let packageJSON = getPackageJSON(filePath)
        if (!packageJSON.repository) {
            return false
        }
        return true
    }
    return false
}

function getProjectStatus() {
    try {
        let output = execSync('git status --porcelain').toString().replace(/\s\w\s/g, '').split('\n')
        let subReg = /^lib/
        let tester = [/^lib\/mobile\/[a-z\-A-Z]+\//, /^lib\/pc\/[a-z\-A-Z]+\//, /^lib\/tb\/[a-z\-A-Z]+\//]

        return output.filter((value, index) => {
            return subReg.test(value)
        }).filter((value) => {
            return tester.filter((val) => {
                return val.test(value)
            }).length > 0
        }).map((value) => {
            return path.resolve(__dirname, value.split('/').slice(0, 3).join('/'))
        })
    }
    catch (e) {
        console.log(e)
    }
}

function cleanModulesSync(modules) {
    process.chdir(root)

    for (var modulePath of modules) {
        try {
            execSync('rm -r ' + path.resolve(modulePath, 'lib') + ' > /dev/null 2>&1')
            execSync('rm ' + path.resolve(modulePath, 'npm-debug.log > /dev/null 2>&1'))
            console.log('INFO: ', 'Remove ' + modulePath + ' lib')
        }
        catch (e) {
        }
    }
}

function buildModules(modules) {
    return multiProcessAsync((job) => {
        return spawn('node', ['build.js', job])
    }, () => {
    }, (job) => {
        console.log(`INFO: ${job} build success`)
    })(modules)
}

function patchModulesSync(modules, allModules, type) {
    let changeModules = {}
    let moduleMaps = {}

    function updateModuleVirtual(modulePath, name, version) {
        if (!changeModules[modulePath]) {
            changeModules[modulePath] = {
                modulePath: modulePath,
                name: name,
                version: semver.inc(version, type)
            }
        }
    }

    function buildModuleMap() {
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

    function getModuleObj(module) {
        if (fs.existsSync(module, 'package.json')) {
            return JSON.parse(fs.readFileSync(path.resolve(module, 'package.json')).toString())
        }
        return {}
    }

    function whoIsNeedMe(moduleObj) {
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

    function updateModule(module) {
        let moduleObj = changeModules[module] || getModuleObj(module)
        updateModuleVirtual(module, moduleObj.name, moduleObj.version)

        let dependences = whoIsNeedMe(moduleObj)

        for (let dep of dependences) {
            updateModule(dep.modulePath)
        }
    }

    function writeChanges() {
        for (let change in changeModules) {
            let moduleObj = getModuleObj(changeModules[change].modulePath)
            console.log(`INFO: Update ${changeModules[change].name} version ${moduleObj.version} ==> ${changeModules[change].version}`)
            moduleObj.version = changeModules[change].version

            for (let dep in moduleObj.dependencies) {
                if (moduleMaps[dep] && changeModules[moduleMaps[dep].modulePath] && (changeModules[moduleMaps[dep].modulePath].name === dep)) {
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

function publishModules(modules) {
    return multiProcessAsync(() => {
        return spawn('npm', ['publish'])
    }, (job) => {
        process.chdir(job)
    })(modules)
}