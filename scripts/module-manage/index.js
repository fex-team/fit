import config from '../../all-component.json'
import {mapModule, getAllModules} from './utils/map-module'
import update from './update'
import push from './push'
import {execSync} from 'child_process'
import tryPull from './utils/try-pull'
import tryPush from './utils/try-push'
import versionPatch from './utils/version'
import upgradeDependencies from './utils/upgrade-dependencies'
import program from 'commander'

program
    .version('1.0.0')
    .option('-u, --update', '更新')
    .option('-p, --push', '提交')
    .option('-t, --travis', '持续集成')
    .option('-tk, --token', 'github的token')
    .option('-m, --message [value]', '提交时带的信息', 'quick push')
    .parse(process.argv)

const allModules = getAllModules(config)

const clearDts = ()=> {
    // 最后删除所有 d.ts jsx 文件,这些文件可能由依赖自动生成到其它模块下
    allModules.forEach(info=> {
        // 除了内部模块,全删
        if (info.categoryInfo.access === 'public') {
            // d.ts 要保留 models 下的
            execSync(`find ./lib/${info.categoryName}/${info.module.path} -not -path "./lib/${info.categoryName}/${info.module.path}/models/*" -name "*.d.ts" | xargs rm`)

            execSync(`find ./lib/${info.categoryName}/${info.module.path} -name "*.jsx" | xargs rm`)
        } else {
            // 是私有模块,只删除 src 的
            execSync(`find ./lib/${info.categoryName}/${info.module.path}/src -name "*.d.ts" | xargs rm`)

            execSync(`find ./lib/${info.categoryName}/${info.module.path}/src -name "*.jsx" | xargs rm`)
        }
    })
}

if (program.update) {
    // 更新
    mapModule(config, (info)=> {
        // 如果是 travis 模式, 跳过内部组件
        if (program.travis && info.categoryInfo.access === 'private') {
            return
        }

        update(info)
    })
    tryPull('./')
}

if (program.push) {
    // 提交
    // 先清理一遍,防止编译到一半取消留下脏文件
    clearDts()

    // 解析 import 语句,添加依赖
    upgradeDependencies(allModules)

    // 更新版本依赖,对有修改的或者被依赖的发布新版本
    versionPatch(allModules)

    // 执行 tsc
    execSync(`tsc -d`)

    mapModule(config, (info)=> {
        // 如果是 travis 模式, 跳过内部组件
        if (program.travis && info.categoryInfo.access === 'private') {
            return
        }
        // 组件提交（内含各种编译）
        push(info, program.message, program)
    })

    // 清空所有 dts
    clearDts()

    // fit 项目提交（直接提交）
    tryPush('./', program.message)
}