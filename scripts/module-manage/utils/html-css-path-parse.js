export default (filePath, info)=> {
    filePath = filePath.substring(2)
    let filePathArray = filePath.split('/')

    filePathArray.shift()
    filePathArray.shift()
    filePathArray.shift()
    filePathArray.shift()
    filePathArray.pop()

    // 长度是0,说明是根路径,不处理
    if (filePathArray.length === 0) {
        return ''
    }

    const prefix = `${info.categoryInfo.prefix}-${info.module.path}`

    if (filePathArray[0] === info.module.path) {
        filePathArray.shift()
    }

    const addonPath = filePathArray.join('-')

    if (addonPath === info.module.path) {
        return prefix
    } else {
        return `${prefix}-${addonPath}`
    }
}