import fs from 'fs'

const parsePath = (filePath, info)=> {
    filePath = filePath.substring(2)
    let filePathArray = filePath.split('/')

    filePathArray.shift()
    filePathArray.shift()
    filePathArray.shift()
    filePathArray.shift()
    filePathArray.pop()

    // 长度是0,说明是根路径,不处理
    if (filePathArray.length===0) {
        return ''
    }

    const prefix = `fit-${info.categoryName}-${info.module.path}`
    const addonPath = filePathArray.join('-')
    return `${prefix}-${addonPath}`
}

export default (filePath, info) => {
    let source = fs.readFileSync(filePath).toString()

    const name = parsePath(filePath, info)
    if (name !== '') {
        source = source.replace(/_namespace/g, name)
        fs.writeFileSync(filePath, source)
    }
}