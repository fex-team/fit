// 子模块管理

import config from '../../all-component.json'
import {mapModule, getAllModules} from './utils/map-module'
import update from './update'
import push from './push'
import {execSync} from 'child_process'
import tryPull from './utils/try-pull'
import tryPush from './utils/try-push'
import versionPatch from './utils/version'

const args = process.argv.slice(2)

// 更新版本依赖
const allModules = getAllModules(config)
versionPatch(allModules)

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