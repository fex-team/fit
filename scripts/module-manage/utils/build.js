import fs from 'fs'
import {execSync} from 'child_process'
import * as babel from 'babel-core'
import sass from 'node-sass'
import autoprefixer from 'autoprefixer'
import postcss  from 'postcss'
import path from 'path'
import htmlPathLoader from './html-path-loader'
import cssPathLoader from './css-path-loader'
import {relativePathToComponentPath} from './utils'
import * as ts from 'typescript'

const parseBabel = (filePath, info) => {
    const absolutePath = path.join(__dirname, '../../..', filePath)
    const jsFileContent = fs.readFileSync(absolutePath).toString().replace(/\.scss/g, '.css')
    const result = babel.transform(jsFileContent, {
        extends: path.resolve(__dirname, '../../../.babelrc')
    })

    let resultCode = result.code

    // 将所有 fit 组件的引用还原
    resultCode = resultCode.replace(/require\(\'(..\/){3,}([\w-]*\/)?([\w-]*)\/src\'\)/g, (word, match1, match2, match3)=> {
        let categoryPath
        if (match2 === undefined) {
            categoryPath = match1
        } else {
            categoryPath = match2
        }
        const componentInfo = relativePathToComponentPath(categoryPath, match3, info)
        return `require('${componentInfo.prefix}-${componentInfo.name}')`
    })

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

const parseTypescript = (filePath, info)=> {
    const absolutePath = path.join(__dirname, '../../..', filePath)
    const tsxFileContent = fs.readFileSync(absolutePath).toString().replace(/\.scss/g, '.css')

    let config = {}

    switch (info.module.type) {
    case 'server':
        config = {
            jsx   : 1,
            target: 2
        }
        break
    default:
        config = {
            jsx   : 2,
            target: 2
        }
    }

    let result = ts.transpile(tsxFileContent, config)

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
        parseTypescript(item, info)
    })

    // js 文件由 babel 处理
    // 忽略 type == server 的模块
    if (info.module.type !== 'server') {
        let jsFiles = getfiles('js', modulePath)
        jsFiles.map((item)=> {
            htmlPathLoader(item, info)
            parseBabel(item, info)
        })
    }

    // scss 文件由 sass 处理
    let scssFiles = getfiles('scss', modulePath)
    scssFiles.map((item)=> {
        cssPathLoader(item, info)
        parseSass(item, info)
    })
}
export default (info, libPath)=> {
    // 处理dist目录
    handleModuleDir(libPath, info)
}

