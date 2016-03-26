import fs from 'fs'
import {execSync} from 'child_process'
import consoleLog from './console-log'
import * as babel from 'babel-core'
import sass from 'node-sass'
import autoprefixer from 'autoprefixer'
import postcss  from 'postcss'
import path from 'path'

const outputDistLib = (info) => {
    let modulePath = `./lib/${info.categoryName}/${info.module.path}`
    let srcDirectory = `${modulePath}/src`
    let distDirectory = `${modulePath}/lib`
    execSync(`cp -r ${srcDirectory} ${distDirectory}`)
    return distDirectory
}

const parseBabel = (filePath) => {
    const absolutePath = path.join(__dirname, '../../..', filePath)
    const jsFileContent = fs.readFileSync(absolutePath).toString().replace(/\.scss/g, '.css')
    const result = babel.transform(jsFileContent, {
        extends: path.resolve(__dirname, '../../../.babelrc')
    })
    fs.writeFileSync(absolutePath, result.code)
}

const parseSass = (scssPath) => {
    let cssPath = scssPath.replace('.scss', '.css')

    let result = sass.renderSync({
        file     : scssPath,
        sourceMap: true
    }).css.toString()

    // autoprefixer 插件处理
    postcss([autoprefixer])
        .process(result).then(function (result) {
        result.warnings().forEach((warn) => {
            console.warn(warn.toString())
        })

        fs.writeFileSync(cssPath, result.css)
        execSync('rm ' + scsspath)
    }).catch((err) => {
        console.log(err)
    })
}

const handleModuleDir = (modulePath)=> {
    let jsFiles = execSync(`find ${modulePath} -name "*.js"`).toString().split('\n')
    jsFiles = jsFiles.filter((item)=> {
        return item !== ''
    })
    // babel 处理
    jsFiles.map((item)=> {
        parseBabel(item)
    })
}

export default (info)=> {
    // 把文件全部拷贝到lib
    const libPath = outputDistLib(info)
    // 处理dit目录
    handleModuleDir(libPath)
}