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

export default (filepath, info) => {
    // 不处理 minxins.scss
    if (filepath.indexOf('mixins.scss') > 0) {
        return
    }
    
    let source = fs.readFileSync(filepath).toString()
    //let hasGlobal = !!parseCss(source)
    // if (nameStr && hasGlobal) {
    //     source = global.content + '\n .' + nameStr + '{' + source.substring(0, global._index) + source.substring(global.end + 1) + '}'
    // } else if (nameStr && !hasGlobal) {
    //     source = '.' + nameStr + '{' + source + '}'
    // }
    source =  `.fit-message{${source}`

    fs.writeFileSync(filepath, source)
}