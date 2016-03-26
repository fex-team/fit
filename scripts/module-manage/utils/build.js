import fs from 'fs'
import {execSync} from 'child_process'
import consoleLog from './console-log'
import babel from 'babel-core'
import sass from 'node-sass'
import autoprefixer from 'autoprefixer'
import postcss  from 'postcss'
import path from 'path'

const outputDistLib = (info) => {
    let modulePath = `./lib/${info.categoryName}/${info.module.path}`
    let srcDirectory = `${modulePath}/src`
    let distDirectory = `${modulePath}/lib`
    console.log(`cp -r ${srcDirectory} ${distDirectory}`)
    execSync(`cp -r ${srcDirectory} ${distDirectory}`)
    return distDirectory
}

const parseEs6 = (filepath) => {
    const jsFileContent = fs.readFileSync(filepath).toString().replace(/\.scss/g, '.css')
    const result = babel.transform(jsFileContent, {
        extends: path.resolve(__dirname, '../../../.babelrc')
    })

    fs.writeFileSync(filepath, result.code)
}


const parseSass = (scsspath) => {
    let cssPath = scsspath.replace('.scss', '.css')

    let result = sass.renderSync({
        file     : scsspath,
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

export default (info)=> {
    // 把文件全部拷贝到lib
    const libPath = outputDistLib(info)
}