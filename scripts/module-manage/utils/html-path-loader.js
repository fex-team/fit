import fs from 'fs'

export default (filePath, info) => {
    let source = fs.readFileSync(filePath).toString()

    source = source.replace(/_namespace/g, `fit-${info.categoryName}-${info.module.path}`)

    fs.writeFileSync(filePath, source)
}