import fs from 'fs'

const parseCss = (source) => {
    var index = source.indexOf('._global')
    var globalIndex
    var globalEnd
    var needClose = false

    // 如果没有找到 ._global ,则不处理
    if (index === -1) return false

    for (let i in source) {
        if (i < index) continue

        if (globalIndex && globalEnd) break

        var pol = source[i]

        if (pol === '{' && !globalIndex) {
            globalIndex = parseInt(i, 10) + 1
        }
        else if (pol === '}' && !needClose && !globalEnd) {
            globalEnd = parseInt(i, 10)
        }
        else if (pol === '{' && globalIndex && !needClose) {
            needClose = true
        }
        else if (pol === '}' && needClose) {
            needClose = false
        }
    }

    if (!globalIndex || !globalEnd) {
        return false
    } else {
        return {
            content: source.substring(globalIndex, globalEnd),
            _index : index,
            index  : globalIndex,
            end    : globalEnd
        }
    }
}

export default (filePath, info) => {
    let source = fs.readFileSync(filePath).toString()
   
    source = `.fit-${info.categoryName}-${info.module.path}{${source}}`

    fs.writeFileSync(filePath, source)
}