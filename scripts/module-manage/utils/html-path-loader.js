import fs from 'fs'

const parsePath = (filePath, info)=> {
    filePath = filePath.substring(2)
    let filePathArray = filePath.split('/')

    console.log(filePathArray.unshift())
    filePathArray.unshift()
    filePathArray.unshift()
    filePathArray.unshift()

    console.log(filePathArray)
}

export default (filePath, info) => {
    let source = fs.readFileSync(filePath).toString()

    const name = parsePath(filePath, info)
    source = source.replace(/_namespace/g, `fit-${info.categoryName}-${info.module.path}`)

    fs.writeFileSync(filePath, source)
}