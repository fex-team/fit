import fs from 'fs'
import parsePath from './html-css-path-parse'

const locations = (substring, string) => {
    let positions = [], i = -1
    while ((i = string.indexOf(substring, i + 1)) >= 0) {
        positions.push(i)
    }
    return positions
}

const findCloseSide = (source, startIndex) => {
    // 左右中括号数量
    let leftCount = 0
    let rightCount = 0

    // 逐字符读取
    for (let i = startIndex, j = source.length; i < j; i++) {
        switch (source[i]) {
        case '{':
            leftCount++
            break
        case '}':
            rightCount++
            break
        }

        // 如果右侧数量和左侧相同,那就找到闭合位置了
        if (rightCount === leftCount) {
            return i
        }
    }
}

const removeGlobal = (source, pathName) => {
    // 寻找所有位置
    const globalLocations = locations('._global {', source)
    // 完整代码
    let newSource = ''
    // 上一次寻找的最后位置
    let lastIndex = -1

    globalLocations.forEach((startIndex)=> {
        // 如果上一次寻找过了,把中间内容直接补上
        if (lastIndex > -1) {
            const middleSource = source.substring(lastIndex + 1, startIndex)
            newSource += `.${pathName}{${middleSource}}`
        }

        let endIndex = findCloseSide(source, startIndex + 9)
        lastIndex = endIndex
        const sourceBlock = source.substring(startIndex + 10, endIndex)
        newSource += sourceBlock
    })

    // 把最后剩下的接上
    newSource += `.${pathName}{${source.substring(lastIndex + 1)}}`
    return newSource
}

export default (filePath, info) => {
    let source = fs.readFileSync(filePath).toString()
    const name = parsePath(filePath, info)

    // 对 fit-style 不做处理
    if (info.module.path === 'style') return
    if (name === '') return

    // 对包含 ._global 的做全局处理
    if (source.indexOf('._global') > -1) {
        source = removeGlobal(source, name)
        console.log(source)
        fs.writeFileSync(filePath, source)
        return
    }

    source = `.${name}{${source}}`
    fs.writeFileSync(filePath, source)
}