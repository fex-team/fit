import fs from 'fs'

export default (filePath, info) => {
    let source = fs.readFileSync(filePath).toString()

    // 对 fit-style 不做处理
    if (info.module.path !== 'style') {
        source = `.fit-${info.categoryName}-${info.module.path}{${source}}`
    }

    fs.writeFileSync(filePath, source)
}