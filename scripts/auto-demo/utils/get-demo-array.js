import fs from 'fs'
import _ from 'lodash'

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
        // 没有Demo
        return []
    }

    // 整理成demo数组
    demoLine = _.trim(_.trimLeft(demoLine, '//'))
    let demoArray = []
    demoLine.split(' ').map((item)=> {
        let info = item.split(':')
        demoArray.push({
            row: parseInt(info[1]),
            name: info[0]
        })
    })

    return demoArray
}

export default getDemoArray