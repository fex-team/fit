import {execSync} from 'child_process'
import consoleLog from './utils/console-log'
import tryPush from './utils/try-push'
import build from './utils/build'
import find from 'find'
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

const parseDTs = (info)=> {
    // 搜索 lib 所有文件夹
    const moduleDistRoot = path.join(__dirname, '../..', `lib/${info.categoryName}/${info.module.path}/lib`)
    const moduleDirPaths = find.dirSync(moduleDistRoot)

    // 不处理没有 tsx 的目录
    if (!fs.existsSync(`${moduleDirPaths}/index.tsx`)) {
        return
    }

    moduleDirPaths.map((moduleDirPath)=> {
        let fileContent = fs.readFileSync(`${moduleDirPath}/index.d.ts`).toString()
        // 删除注释
        let fileContentArray = fileContent.split('\n')
        fileContentArray = fileContentArray.filter((line)=> {
            return line.indexOf('//') !== 0
        })

        // 包一层组件定义
        fileContent = `declare module 'fit-${info.module.path}' {\n${fileContentArray.join('\n')}\n}`

        // 覆盖文件内容
        fs.writeFileSync(`${moduleDirPath}/index.d.ts`, fileContent)
    })

    // 重写根目录 d.ts
    let rootContent = ''
    moduleDirPaths.map((moduleDirPath)=> {
        // 获得最后一层级目录名
        const modulePathArray = moduleDirPath.split('/')
        const depStr = `/// <reference path="./${modulePathArray[modulePathArray.length - 1]}/index.d.ts" />`
        rootContent += depStr + '\n'
    })
    fs.writeFileSync(`${moduleDistRoot}/index.d.ts`, rootContent)
}

const deleteDTS = (info)=> {
    const modulePath = getModulePath(info)
    execSync(`find ${modulePath} -name "*.d.ts" | xargs rm`)

    // 如果包含 .tsx 文件,则删除 src 下的 js 文件
    if (fs.existsSync(path.join(modulePath, 'src/index.tsx'))) {
        execSync(`find ${path.join(modulePath, 'src')} -name "*.js" | xargs rm`)
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
    //if (hasChange) {
        // 先删除lib目录
        deleteLib(info)

        // 生成 d.ts 文件
        createDTs(info)

        // 把文件全部拷贝到lib
        const libPath = outputDistLib(info)

        // 加工 d.ts
        parseDTs(info)

        // 编译
        consoleLog('正在编译..', 'grey', getModulePath(info))
        build(info, libPath)
        consoleLog('编译完成', 'green', getModulePath(info))

        // 发布npm
        // consoleLog('发布中..', 'grey', getModulePath(info))
        // publish(info)
        // consoleLog('发布完成', 'green', getModulePath(info))

        // // 删除 lib目录
        //deleteLib(info)

        // // 删除所有 .d.ts
        //deleteDTS(info)
    //}
    // try push
    //tryPush(getModulePath(info))
}