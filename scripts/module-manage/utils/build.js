import fs from 'fs'
import {execSync} from 'child_process'
import consoleLog from './console-log'
import * as babel from 'babel-core'
import sass from 'node-sass'
import autoprefixer from 'autoprefixer'
import postcss  from 'postcss'
import path from 'path'
import htmlPathLoader from './html-path-loader'
import cssPathLoader from './css-path-loader'
import * as ts from 'typescript'

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
        execSync(`rm ${scssPath}`)
    }).catch((err) => {
        console.log(err)
    })
}

const parseTypescript = (filePath)=> {
    const absolutePath = path.join(__dirname, '../../..', filePath)
    const tsxFileContent = fs.readFileSync(absolutePath).toString().replace(/\.scss/g, '.css')
    let result = ts.transpile(tsxFileContent)
    fs.writeFileSync(absolutePath, result)
}

const getfiles = (suffix, modulePath)=> {
    let files = execSync(`find ${modulePath} -name "*.${suffix}"`).toString().split('\n')
    files = files.filter((item)=> {
        return item !== ''
    })
    return files
}

const handleModuleDir = (modulePath, info)=> {
    // tsx 文件由 typescript 处理
    let tsxFiles = getfiles('tsx', modulePath)
    tsxFiles.map((item)=> {
        parseTypescript(item)
    })

    // js 文件由 babel 处理
    let jsFiles = getfiles('js', modulePath)
    jsFiles.map((item)=> {
        htmlPathLoader(item, info)
        parseBabel(item)
    })

    // scss 文件由 sass 处理
    let scssFiles = getfiles('scss', modulePath)
    console.log(scssFiles)
    scssFiles.map((item)=> {
        cssPathLoader(item, info)
        parseSass(item)
    })
}

export default (info)=> {
    // 把文件全部拷贝到lib
    const libPath = outputDistLib(info)
    // 处理dist目录
    handleModuleDir(libPath, info)
}