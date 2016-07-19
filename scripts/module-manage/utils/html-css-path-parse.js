export default (filePath, info)=> {
    console.log(filePath)
    filePath = filePath.substring(2)
    let filePathArray = filePath.split('/')

    filePathArray.shift()
    filePathArray.shift()
    filePathArray.shift()
    filePathArray.shift()
    filePathArray.pop()

    const prefix = `${info.categoryInfo.prefix}-${info.module.path}`
    let addonPath = filePathArray.join('-')

    // 长度是0,说明是根路径,返回模块名 -root
    if (filePathArray.length === 0) {
        return `${prefix}-root`
    }

    if (addonPath === info.module.path) {
        // 如果文件夹名和模块名一样,就不要加额外路径
        return prefix
    } else {
        if (filePathArray[0] === info.module.path) {
            filePathArray.shift()
            addonPath = filePathArray.join('-')
        }

        return `${prefix}-${addonPath}`
    }
}