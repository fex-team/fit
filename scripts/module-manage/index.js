import config from '../../all-component.json'
import {mapModule, getAllModules} from './utils/map-module'
import update from './update'
import push from './push'
import github from './github'
import {execSync} from 'child_process'
import tryPull from './utils/try-pull'
import tryPush from './utils/try-push'
import versionPatch from './utils/version'
import upgradeDependencies from './utils/upgrade-dependencies'

const args = process.argv.slice(2)
const allModules = getAllModules(config)

switch (args[0]) {
case 'update': // 更新
    mapModule(config, (info)=> {
        update(info)
    })
    tryPull('./')
    break

case 'push': // 提交
    // 解析 import 语句,添加依赖
    upgradeDependencies(allModules)

    // 更新版本依赖,对有修改的或者被依赖的发布新版本
    versionPatch(allModules)

    mapModule(config, (info)=> {
        push(info)
    })
    tryPush('./')

    // 最后删除所有 d.ts jsx 文件,这些文件可能由依赖自动生成到其它模块下
    // 除了 tb 模块
    allModules.forEach(info=> {
        if (info.categoryName !== 'tb') {
            execSync(`find ./lib/${info.categoryName}/${info.module.path} -name "*.d.ts" | xargs rm`)
            execSync(`find ./lib/${info.categoryName}/${info.module.path} -name "*.jsx" | xargs rm`)
        }
    })

    break

case 'github': // 传到 github
    github(allModules)
    break
}