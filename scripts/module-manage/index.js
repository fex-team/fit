// 子模块管理

import config from '../../all-component.json'
import {mapModule, getAllModules} from './utils/map-module'
import update from './update'
import push from './push'
import {execSync} from 'child_process'
import tryPull from './utils/try-pull'
import tryPush from './utils/try-push'
import versionPatch from './utils/version'
import upgradeDependencies from './utils/upgrade-dependencies'
import fs from 'fs'
import path from 'path'

const args = process.argv.slice(2)
const allModules = getAllModules(config)

if (fs.existsSync(path.join(__dirname, '../..', 'lib'))) {
    // 解析 import 语句,添加依赖
    upgradeDependencies(allModules)

    // 更新版本依赖,对有修改的或者被依赖的发布新版本
    versionPatch(allModules)
}

switch (args[0]) {
case 'update': // 更新
    mapModule(config, (info)=> {
        update(info)
    })
    tryPull('./')
    break
case 'push': // 提交
    mapModule(config, (info)=> {
        push(info)
    })
    tryPush('./')
    break
}