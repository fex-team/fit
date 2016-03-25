// 子模块管理

import config from '../../all-component.json'
import mapModule from './utils/map-module'
import update from './update'
import push from './push'
import {execSync} from 'child_process'
import tryPull from './utils/try-pull'
import tryPush from './utils/try-push'

const args = process.argv.slice(2)

switch (args[0]) {
case 'update': // 更新
    // 1. 如果目录不存在则创建目录(clone下来),同时会pull保证代码最新
    mapModule(config, (info)=> {
        update(info)
    })
    tryPull('./')

    break
case 'push': // 提交
    mapModule(config, (info)=> {
        push(info)
    })

    // push根目录
    try {
        execSync(`git add -A;git commit -m "quick push"; git push`)
    } catch (e) {
        console.log(e.toString())
    }
    break
}