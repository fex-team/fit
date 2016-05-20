import fs from 'fs'
import _ from 'lodash'

const getDocArray = (docIndexPath)=> {
    // 读取demo/index.js内容
    let docIndexString = fs.readFileSync(docIndexPath).toString()
    let docIndexLines = docIndexString.split('\n')

    let docArray = []
    docIndexLines.map((line)=> {
        line = _.trim(line)
        if (line.indexOf('export') > -1 && line.indexOf('{') > -1 && line.indexOf('export default') === -1) {
            line = _.trimLeft(line, 'export')
            line = line.replace(/\{|\}/g, '')
            line.split(',').map((item)=> {
                item = _.trim(item)

                // 豁免 Static 结尾
                console.log(item)
                if (_.endsWith(item, 'Static')) return

                docArray.push(item)
            })
        }
    })
    return docArray
}

export default getDocArray