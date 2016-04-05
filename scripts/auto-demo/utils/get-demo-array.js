import fs from 'fs'
import _ from 'lodash'
import path from 'path'

const getDemoArray = (demoIndexPath)=> {
    // 跳过没有demo的项目
    if (!fs.existsSync(demoIndexPath))return []

    // 读取demo/index.js内容
    let demoIndexString = fs.readFileSync(demoIndexPath).toString()
    let demoIndexLines = demoIndexString.split('\n')
    let demoLine = -1
    demoIndexLines.map((line)=> {
        line = _.trim(line)
        if (demoLine === -1 && _.startsWith(line, '//') && line.indexOf('@demo') > -1) {
            demoLine = 0
        } else if (demoLine === 0) {
            demoLine = line
        }
    })

    if (demoLine === -1 || demoLine === 0) {
        // 没有 demo
        return []
    }

    // 整理成 demo 数组
    demoLine = _.trim(_.trimLeft(demoLine, '//'))
    let demoArray = []
    demoLine.split(' ').map((item)=> {
        let info = item.split(':')
        let name = info[0]
        let ext = 'js'

        // 如果 js 后缀不存在,则后缀是 tsx
        if (!fs.existsSync(path.join(demoIndexPath, '..', 'lists', `${name}.js`))) {
            ext = 'tsx'
        }

        demoArray.push({name, ext})
    })

    return demoArray
}

export default getDemoArray