import fs from 'fs'

const parsePath = (filePath, info)=> {
    filePath = filePath.substring(2)
    let filePathArray = filePath.split('/')

    filePathArray.shift()
    filePathArray.shift()
    filePathArray.shift()
    filePathArray.shift()

    // 如果第一个元素就是 .js ,说明是根路径
    const prefix = `fit-${info.categoryName}-${info.module.path}`
    if (filePathArray[0].indexOf('.js') > -1) {
        return prefix
    } else {
        filePathArray.pop()
        const addonPath = filePathArray.join('-')
        return `${prefix}-${addonPath}`
    }
}

export default (filePath, info) => {
    let source = fs.readFileSync(filePath).toString()

    const name = parsePath(filePath, info)
    console.log(name)
    source = source.replace(/_namespace/g, `fit-${info.categoryName}-${info.module.path}`)

    fs.writeFileSync(filePath, source)
}