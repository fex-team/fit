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

const clearDts = ()=> {
    // 最后删除所有 d.ts jsx 文件,这些文件可能由依赖自动生成到其它模块下
    allModules.forEach(info=> {
        // 除了 tb 模块,全删
        if (info.categoryName !== 'tb') {
            execSync(`find ./lib/${info.categoryName}/${info.module.path} -name "*.d.ts" | xargs rm`)
            execSync(`find ./lib/${info.categoryName}/${info.module.path} -name "*.jsx" | xargs rm`)
        } else {
            // 是 tb 模块,只删除 src 的
            execSync(`find ./lib/${info.categoryName}/${info.module.path}/src -name "*.d.ts" | xargs rm`)
            execSync(`find ./lib/${info.categoryName}/${info.module.path}/src -name "*.jsx" | xargs rm`)
        }
    })
}

switch (args[0]) {
case 'update': // 更新
    mapModule(config, (info)=> {
        update(info)
    })
    tryPull('./')
    break

case 'push': // 提交
    // 先清理一遍,防止编译到一半取消留下脏文件
    clearDts()

    // 解析 import 语句,添加依赖
    upgradeDependencies(allModules)

    // 更新版本依赖,对有修改的或者被依赖的发布新版本
    versionPatch(allModules)

    mapModule(config, (info)=> {
        // 组件提交（内含各种编译）
        push(info)
        // 清空所有 dts
        clearDts()
    })

    // fit 项目提交（直接提交）
    tryPush('./')
    break
}