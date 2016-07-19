import path from 'path'
import find from 'find'
import fs from 'fs'
import format from 'format-json'
import resolveFile from '../../webpack/resolve'
import _ from 'lodash'
import {relativePathToComponentPath} from './utils'

const root = process.cwd()

const rules = [
    // import * as xxx from 'xxx'
    `(import\\s\\*\\sas\\s{0,}(?:[\\$_a-zA-Z0-9\\-\\{\\}]{1,}\\s{1,}from\\s{1,}){0,1}['\\"]([\\w\\-]{1,})(?:[/\\w\\.\\-]{1,}){0,1}['\"])`,
    // import {a,b,c} from 'xxx'
    `(import\\s\\{\\s{0,}[\\w,_\\s]{0,}\\}\\s{0,}from\\s{0,}['\"]([\\w\\-]{1,})(?:[/\\w\\.\\-]{1,}){0,1}['\"])`,
    // import x from 'xxx'
    `(import\\s{0,}(?:[\\$_a-zA-Z0-9\\-\\{\\}]{1,}\\s{1,}from\\s{1,}){0,1}['\"]([\\w\\-]{1,})(?:[/\\w\\.\\-]{1,}){0,1}['\"])`,
    // require ('xxx')
    `(require\\(\(\\'[\\$_a-zA-Z0-9\\-\\/\\.]{1,}\\'\)\\))`
]

const regex = new RegExp(rules.join('|'), 'g')

const getPackageJSON = (filePath)=> {
    return JSON.parse(fs.readFileSync(path.join(filePath, 'package.json')))
}

const writePackageJSON = (filePath, name, obj) => {
    let json = getPackageJSON(filePath)
    json[name] = obj
    fs.writeFileSync(path.join(filePath, 'package.json'), format.plain(json))
}

export default  (modules) => {
    const rootJSON = getPackageJSON(root)
    const rootDependencies = rootJSON.dependencies
    const devDependencies = rootJSON.devDependencies

    modules.forEach((info) => {
        // 跳过忽略检查的模块
        if (info.module.ignoreDepCheck) {
            return
        }

        const filePath = path.join(__dirname, `../../..`, `lib/${info.categoryName}/${info.module.path}`)
        let dependencies = []
        let depenObj = {}

        const files = find.fileSync(filePath)

        let srcFiles = files.filter((val) => {
            return /src[\/\w-]+.(js|tsx)$/.test(val)
        })

        srcFiles.forEach((file) => {
            let code = fs.readFileSync(file).toString()
            // 将所有 fit 组件的引用还原
            code = code.replace(/import\s(\w*|\{[\w\s,]*\}|\*\sas\s\w*)\sfrom\s\'(..\/){3,}([\w-]*\/)?([\w-]*)\/src\'/g, (word, match1, match2, match3, match4)=> {
                let categoryPath
                if (match3 === undefined) {
                    categoryPath = match2
                } else {
                    categoryPath = match3
                }
                const componentInfo = relativePathToComponentPath(categoryPath, match4, info)
                return `import ${_.capitalize(_.camelCase(componentInfo.name))} from '${componentInfo.prefix}-${componentInfo.name}'`
            })

            let match

            while ((match = regex.exec(code)) != null) {
                if (match.index === regex.lastIndex) {
                    ++regex.lastIndex
                }

                let matched = match[2] || match[4] || match[6] || match[8]

                matched = _.trim(matched, '\'')

                // 排除 undefined
                if (matched === undefined)continue

                // 排除以 . 开头的
                if (matched.indexOf('.') === 1)continue

                // 如果有 / 说明是引了这个模块的自目录,但依然需要安装完整模块,因此去除后面 / 的路径避免干扰
                if (matched.indexOf('/' > -1)) {
                    const matchedArray = matched.split('/')
                    matched = matchedArray[0]
                }

                if (matched && dependencies.indexOf(matched) < 0) {
                    dependencies.push(matched)
                }
            }
        })

        // 固定某些依赖版本号
        const fixedDeps = {
            'react'                         : '^0.14.0 || ^15.0.0',
            'react-dom'                     : '^0.14.0 || ^15.0.0',
            'react-addons-pure-render-mixin': '^0.14.0 || ^15.0.0'
        }

        dependencies.forEach((dep) => {
            if (fixedDeps[dep]) {
                // 优先用固定版本号
                depenObj[dep] = fixedDeps[dep]
            } else {
                let depen = rootDependencies[dep] || devDependencies[dep]
                if (depen) {
                    // 找到版本号直接用
                    depenObj[dep] = depen
                } else if (dep in resolveFile.alias) {
                    depenObj[dep] = '^' + getPackageJSON(resolveFile.alias[dep].replace('/src', '')).version
                }
            }
        })

        writePackageJSON(filePath, 'dependencies', depenObj)

        // 添加 typings 入口
        writePackageJSON(filePath, 'typings', 'lib/index.d.ts')
    })

    process.chdir(root)
}