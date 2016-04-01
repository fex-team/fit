import fs from 'fs'
import {execSync} from 'child_process'
import * as babel from 'babel-core'
import sass from 'node-sass'
import autoprefixer from 'autoprefixer'
import postcss  from 'postcss'
import path from 'path'
import htmlPathLoader from './html-path-loader'
import cssPathLoader from './css-path-loader'
import * as ts from 'typescript'

const relativePathToComponentPath = (componentPath, info)=> {
    return `require('fit-${componentPath}')`
}

const parseBabel = (filePath, info) => {
    const absolutePath = path.join(__dirname, '../../..', filePath)
    const jsFileContent = fs.readFileSync(absolutePath).toString().replace(/\.scss/g, '.css')
    const result = babel.transform(jsFileContent, {
        extends: path.resolve(__dirname, '../../../.babelrc')
    })

    let resultCode = result.code

    // 将所有 fit 组件的引用还原
    resultCode = resultCode.replace(/require\(\'(..\/){3,}([\w-]*)\/src\'\)/g, (word, match1, match2)=> {
        return relativePathToComponentPath(match2, info)
    })
    console.log(resultCode)

    fs.writeFileSync(absolutePath, resultCode)
}

const parseSass = (scssPath) => {
    let cssPath = scssPath.replace('.scss', '.css')

    let result = sass.renderSync({
        file     : scssPath,
        sourceMap: true
    }).css.toString()

    // autoprefixer 插件处理
    const postResult = postcss([autoprefixer]).process(result).css
    fs.writeFileSync(cssPath, postResult)
    execSync(`rm ${scssPath}`)
}

const parseTypescript = (filePath)=> {
    const absolutePath = path.join(__dirname, '../../..', filePath)
    const tsxFileContent = fs.readFileSync(absolutePath).toString().replace(/\.scss/g, '.css')
    let result = ts.transpile(tsxFileContent)
    fs.writeFileSync(absolutePath.replace(/.tsx/g, '.js'), result)
    execSync(`rm ${absolutePath}`)
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
        parseBabel(item, info)
    })

    // scss 文件由 sass 处理
    let scssFiles = getfiles('scss', modulePath)
    scssFiles.map((item)=> {
        cssPathLoader(item, info)
        parseSass(item)
    })
}
export default (info, libPath)=> {
    // 处理dist目录
    handleModuleDir(libPath, info)
}

