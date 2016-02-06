// 子模块管理

import config from '../../all-component.json'
import mapModule from './utils/map-module'
import createPath from './create-path'
import push from './push'
import { execSync } from 'child_process'

const args = process.argv.slice(2)

switch (args[0]) {
case 'update': // 更新
    // 1. 如果目录不存在则创建目录(clone下来),同时会pull保证代码最新
    mapModule(config, (prefix, moduleName)=> {
        createPath(prefix, moduleName)
    })
    break
case 'push': // 提交
    mapModule(config, (prefix, moduleName)=> {
        push(prefix, moduleName)
    })
    // push一下根目录
    try {
        execSync(`git add -A;git commit -m "quick push"; git push`)
    } catch (e) {
        console.log(e.toString())
    }
    break
}