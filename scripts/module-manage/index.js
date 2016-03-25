// 子模块管理

import config from '../../all-component.json'
import mapModule from './utils/map-module'
import update from './update'
import push from './push'
import {execSync} from 'child_process'

const args = process.argv.slice(2)

switch (args[0]) {
case 'update': // 更新
    // 1. 如果目录不存在则创建目录(clone下来),同时会pull保证代码最新
    mapModule(config, (info)=> {
        update(info)
    })
    break
case 'push': // 提交
    mapModule(config, (info)=> {
        push(info)
    })
    // push一下根目录
    try {
        execSync(`git add -A;git commit -m "quick push"; git push`)
    } catch (e) {
        console.log(e.toString())
    }
    break
}