import {execSync} from 'child_process'
import consoleLog from './utils/console-log'
import tryPush from './utils/try-push'
import build from './utils/build'
import find from 'find'
import reactToTypescriptDefinitions from 'react-to-typescript-definitions'
import fs from 'fs'
import path from 'path'

const outputDistLib = (info) => {
    let modulePath = `./lib/${info.categoryName}/${info.module.path}`
    let srcDirectory = `${modulePath}/src`
    let distDirectory = `${modulePath}/lib`
    execSync(`cp -r ${srcDirectory} ${distDirectory}`)
    return distDirectory
}

const hasChanges = (path)=> {
    // 先看看status对不对
    const gitStatus = execSync(`cd ${path};git status`)
    if (gitStatus.indexOf('nothing to commit, working directory clean') > -1) {
        consoleLog(`没有修改`, 'grey', path)
        return false
    } else {
        return true
    }
}

const getModulePath = (info)=> {
    return `./lib/${info.categoryName}/${info.module.path}`
}

const deleteLib = (info)=> {
    execSync(`rm -rf ${getModulePath(info)}/lib`)
}

const createDTs = (info)=> {
    const tsxPath = `./lib/${info.categoryName}/${info.module.path}/src/index.tsx`
    if (fs.existsSync(tsxPath)) {
        execSync(`tsc -d ${tsxPath}`)
    }
}

const publish = (info)=> {
    // 判断是不是贴吧帐号
    const whoamiString = execSync('npm whoami').toString()
    if (whoamiString.replace(/\s+/, '') !== 'tieba') {
        consoleLog('you are not logined by tieba', 'red', getModulePath(info))
    }
    execSync(`cd lib/${info.categoryName}/${info.module.path};npm publish`)
}

export default (info)=> {
    // 是否有修改
    const hasChange = hasChanges(getModulePath(info))
    if (hasChange) {
        // 先删除lib目录
        deleteLib(info)

        // 生成 d.ts 文件
        createDTs(info)

        // 把文件全部拷贝到lib
        const libPath = outputDistLib(info)

        // 编译
        consoleLog('正在编译..', 'grey', getModulePath(info))
        build(info, libPath)
        consoleLog('编译完成', 'green', getModulePath(info))

        // 发布npm
        // consoleLog('发布中..', 'grey', getModulePath(info))
        // publish(info)
        // consoleLog('发布完成', 'green', getModulePath(info))

        // 删除 lib目录
        //deleteLib(info)

        // 删除所有 .d.ts
        //deleteDTS(info)
    }
    // try push
    // tryPush(getModulePath(info))
}