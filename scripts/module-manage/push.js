import {execSync} from 'child_process'
import consoleLog from './utils/console-log'
import tryPush from './utils/try-push'
import build from './utils/build'
import fs from 'fs'
import path from 'path'

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

const deleteDTS = (info)=> {
    const modulePath = getModulePath(info)
    execSync(`find ${modulePath} -name "*.d.ts" | xargs rm`)

    // 如果包含 .tsx 文件,则删除 src 下的 js 文件
    if (fs.existsSync(path.join(modulePath, 'src/index.tsx'))) {
        execSync(`find ${path.join(modulePath, 'src')} -name "*.js" | xargs rm`)
    }
}

const createDTs = (info)=> {
    const tsxPath = `./lib/${info.categoryName}/${info.module.path}/src/index.tsx`
    if (fs.existsSync(tsxPath)) {
        execSync(`tsc -d ${tsxPath}`)
    }
}

const patchNewVersion = ()=> {

}

const publish = ()=> {

}

export default (info)=> {
    // 是否有修改
    if (!hasChanges(getModulePath(info))) {
        return
    }
    // 编译
    consoleLog('正在编译..', 'grey', getModulePath(info))
    build(info)
    consoleLog('编译完成', 'green', getModulePath(info))
    // 生成.d.ts
    createDTs(info)
    // 分配新版本
    // 发布npm
    // try push
    tryPush(getModulePath(info))
    // 删除 lib目录
    deleteLib(info)
    // 删除所有 .d.ts
    deleteDTS(info)
}