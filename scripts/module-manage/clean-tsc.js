/**
 * 清除 lib 目录下 tsc 生成在 src 下的脏文件
 */

import {mapModule, getAllModules} from './utils/map-module'
import {exec, execSync} from 'child_process'
import path from 'path'
import fs from 'fs'
import config from '../../all-component.json'

const allModules = getAllModules(config)

const getModulePath = (info) => {
    return `./lib/${info.categoryName}/${info.module.path}`
}

const deleteDTS = (info) => {
    const modulePath = getModulePath(info)

    // 如果私有组件,不删除 lib 下的定义文件,因为从gitlab安装时需要
    if (info.categoryInfo.access === 'private') {
        execSync(`find ${modulePath}/src -name "*.d.ts" | xargs rm`)
    } else {
        // 这种目录全扫描,会豁免 models 目录!
        // 这样,我们就可以在组件的 models 目录下定义 d.ts 文件而不用担心被删除啦!
        execSync(`find ${modulePath} -not -path "${modulePath}/models/*" -name "*.d.ts" | xargs rm`)
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
        execSync(`find ${modulePath}/src -name "*.js.map" | xargs rm`)
    }
}

const deleteDemoJsxAndJs = (info) => {
    const modulePath = getModulePath(info)
    // 如果包含 .tsx 文件,则删除 demo 下的 js jsx 文件
    if (fs.existsSync(path.join(modulePath, 'src/index.tsx'))) {
        execSync(`find ${path.join(modulePath, 'demo/lists')} -name "*.jsx" | xargs rm`)
        execSync(`find ${path.join(modulePath, 'demo/lists')} -name "*.js" | xargs rm`)
        execSync(`find ${path.join(modulePath, 'demo/lists')} -name "*.js.map" | xargs rm`)
    }
}

allModules.forEach(info=> {
    deleteDTS(info)
    deleteJSXAndJs(info)
    deleteDemoJsxAndJs(info)
})