import {exec, execSync} from 'child_process'
import consoleLog from './utils/console-log'
import tryPush from './utils/try-push'
import build from './utils/build'
import find from 'find'
import fs from 'fs'
import path from 'path'
import _ from 'lodash'

const outputDistLib = (info) => {
    let modulePath = `./lib/${info.categoryName}/${info.module.path}`
    let srcDirectory = `${modulePath}/src`
    let distDirectory = `${modulePath}/lib`
    execSync(`cp -r ${srcDirectory} ${distDirectory}`)
    return distDirectory
}

const hasChanges = (path) => {
    // 先看看status对不对
    const gitStatus = execSync(`cd ${path};git status`)
    if (gitStatus.indexOf('nothing to commit, working directory clean') > -1) {
        consoleLog(`没有修改`, 'grey', path)
        return false
    } else {
        return true
    }
}

const getModulePath = (info) => {
    return `./lib/${info.categoryName}/${info.module.path}`
}

const deleteLib = (info) => {
    execSync(`rm -rf ${getModulePath(info)}/lib`)
}

// 根据路径 处理 .d.ts 文件
const resolveDtsFromPath = (filePath, dirPath, info) => {
    if (!fs.existsSync(filePath)) return

    let fileContent = fs.readFileSync(filePath).toString()
    fileContent = fitDts(fileContent, info, dirPath)
    fs.writeFileSync(filePath, fileContent)
}

// 加工 .d.ts
const fitDts = (content, info, filePath) => {
    // 移除 scss 引用
    content = content.replace(/import\s+\'[.\/\w-]+.((css|scss|less)\';?)/g, '')

    return content
}

const createDTs = (info) => {
    const tsxPath = `./lib/${info.categoryName}/${info.module.path}/src/index.tsx`
    if (fs.existsSync(tsxPath)) {
        execSync(`tsc -d --experimentalDecorators --jsx preserve --t es6 -m commonjs ${tsxPath}`)
    }
}

const parseDTs = (info) => {
    // 搜索 lib 所有文件夹
    const moduleDistRoot = path.join(__dirname, '../..', `lib/${info.categoryName}/${info.module.path}/lib`)
    const moduleDirPaths = find.dirSync(moduleDistRoot)

    // 不处理没有 tsx 的目录
    if (!fs.existsSync(path.join(__dirname, '../..', `lib/${info.categoryName}/${info.module.path}/src/index.tsx`))) {
        return
    }

    // 处理 d.ts
    resolveDtsFromPath(`${moduleDistRoot}/index.d.ts`, moduleDistRoot, info)
    moduleDirPaths.map((moduleDirPath) => {
        resolveDtsFromPath(`${moduleDirPath}/index.d.ts`, moduleDirPath, info)
        resolveDtsFromPath(`${moduleDirPath}/module.d.ts`, moduleDirPath + '/module', info)
    })
}

const deleteDTS = (info) => {
    const modulePath = getModulePath(info)

    // 如果是 tb 组件,不删除 lib 下的定义文件,因为从gitlab安装时需要
    if (info.categoryName === 'tb') {
        execSync(`find ${modulePath}/src -name "*.d.ts" | xargs rm`)
    } else {
        execSync(`find ${modulePath} -name "*.d.ts" | xargs rm`)
    }

    // 如果包含 .tsx 文件,则删除 src 下的 jsx 文件
    if (fs.existsSync(path.join(modulePath, 'src/index.tsx'))) {
        execSync(`find ${path.join(modulePath, 'src')} -name "*.jsx" | xargs rm`)
    }
}

const deleteJSXAndJs = (info) => {
    const modulePath = getModulePath(info)
    execSync(`find ${modulePath} -name "*.jsx" | xargs rm`)

    // 如果入口文件是 tsx,再把 .js 文件删除
    if (fs.existsSync(`${modulePath}/src/index.tsx`)) {
        execSync(`find ${modulePath}/src -name "*.js" | xargs rm`)
    }
}

const deleteDemoJsxAndJs = (info) => {
    const modulePath = getModulePath(info)
    // 如果包含 .tsx 文件,则删除 demo 下的 js jsx 文件
    if (fs.existsSync(path.join(modulePath, 'src/index.tsx'))) {
        execSync(`find ${path.join(modulePath, 'demo/lists')} -name "*.jsx" | xargs rm`)
        execSync(`find ${path.join(modulePath, 'demo/lists')} -name "*.js" | xargs rm`)
    }
}

const syncCnpm = (info) => {
    // 贴吧组件不同步
    if (info.categoryName === 'tb') return

    consoleLog(`cnpm 开始同步..`, 'grey', getModulePath(info))
    exec(`cnpm sync ${info.categoryInfo.prefix}-${info.module.path}`, (err) => {
        if (err) {
            consoleLog(err.toString(), 'red', getModulePath(info))
        }
        consoleLog(`cnpm 同步成功`, 'green', getModulePath(info))
    })
}

const publish = (info) => {
    // 贴吧组件不发布
    if (info.categoryName === 'tb') return

    // 判断是不是贴吧帐号
    const whoamiString = execSync('npm whoami').toString()
    if (whoamiString.replace(/\s+/, '') !== 'tieba') {
        consoleLog('you are not logined by tieba', 'red', getModulePath(info))
    }
    execSync(`cd lib/${info.categoryName}/${info.module.path};npm publish`)
}

export default (info) => {
    // 是否有修改
    const hasChange = hasChanges(getModulePath(info))
    if (hasChange) {
        // 先删除 lib 目录
        deleteLib(info)

        // 生成 d.ts 文件
        createDTs(info)

        // 把文件全部拷贝到 lib
        const libPath = outputDistLib(info)

        // 加工 d.ts
        parseDTs(info)

        // 编译
        consoleLog('正在编译..', 'grey', getModulePath(info))
        build(info, libPath)
        consoleLog('编译完成', 'green', getModulePath(info))

        // 发布npm
        consoleLog('发布中..', 'grey', getModulePath(info))
        publish(info)
        consoleLog('发布完成', 'green', getModulePath(info))

        // 如果不是 tb 组件,删除 lib目录
        if (info.categoryName !== 'tb') {
            deleteLib(info)
        }

        // 删除所有 .d.ts
        deleteDTS(info)

        // 删除所有 jsx 和 js
        deleteJSXAndJs(info)

        // 清除 demo 不必要的文件 如果是 jsx
        deleteDemoJsxAndJs(info)

        // 通知 cnpm 更新
        syncCnpm(info)
    }
    // try push
    tryPush(getModulePath(info))
}