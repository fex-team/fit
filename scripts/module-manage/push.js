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

const preparePublish = (info)=> {
    const modulePath = getModulePath(info) + '/lib'

    // 删除所有产出的tsx
    execSync(`find ${modulePath} -name "*.tsx" | xargs rm`)
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
        // 编译
        consoleLog('正在编译..', 'grey', getModulePath(info))
        build(info)
        consoleLog('编译完成', 'green', getModulePath(info))
        // 生成.d.ts
        createDTs(info)
        // 调整产出目录,准备发布
        //preparePublish(info)
        // 发布npm
        // consoleLog('发布中..', 'grey', getModulePath(info))
        // publish(info)
        // consoleLog('发布完成', 'green', getModulePath(info))
        // 删除 lib目录
        // deleteLib(info)
        // 删除所有 .d.ts
        // deleteDTS(info)
    }
    // try push
    // tryPush(getModulePath(info))
}