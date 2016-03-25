// TODO:为空模块设置默认值
export default (info)=> {
    // 补上没有的目录或文件
    // if (!fs.existsSync(path.join('lib', dirPath, moduleName, 'readme.md'))) {
    //     console.log(info.name, prefix, info.path)
    //     let readmeText = `
    //         # ${info.name}
    //         ---
    //
    //         \`\`\`\`jsx
    //         npm install ${prefix}-${info.path}
    //         \`\`\`\`
    //         `
    //     fs.writeFile(`lib/${dirPath}/${moduleName}/readme.md`, readmeText, (err)=> {
    //         if (!err)return
    //         console.log(`mk lib/${dirPath}/${moduleName}/readme.md fail: ${err}`)
    //     })
    // }
    // if (!fs.existsSync(path.join('lib', dirPath, moduleName, 'demo'))) {
    //     mkdirp.sync(`lib/${dirPath}/${moduleName}/demo`)
    // }
    // if (!fs.existsSync(path.join('lib', dirPath, moduleName, 'src'))) {
    //     mkdirp.sync(`lib/${dirPath}/${moduleName}/src`)
    // }
    // if (!fs.existsSync(path.join('lib', dirPath, moduleName, 'src', 'index.js'))) {
    //     fs.writeFile(`lib/${dirPath}/${moduleName}/src/index.js`, '', (err)=> {
    //         if (!err)return
    //         console.log(`mk lib/${dirPath}/${moduleName}/src/index.js fail: ${err}`)
    //     })
    // }
    // if (!fs.existsSync(path.join('lib', dirPath, moduleName, 'demo', 'index.js'))) {
    //     fs.writeFile(`lib/${dirPath}/${moduleName}/demo/index.js`, '', (err)=> {
    //         if (!err)return
    //         console.log(`mk lib/${dirPath}/${moduleName}/demo/index.js fail: ${err}`)
    //     })
    // }
}