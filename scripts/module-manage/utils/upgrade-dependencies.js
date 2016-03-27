import path from 'path'
import find from 'find'
import fs from 'fs'
import format from 'format-json'
import resolveFile from '../../../resolve'

const root = process.cwd()
const regex = new RegExp("(require\\s{0,}\\(\\s{0,}['\"]\\s{0,}([\\w\\-]{1,})\\s{0,}['\"]\\s{0,}\\))|(import\\s{0,}(?:[\\$_a-zA-Z\\-\\{\\}]{1,}\\s{1,}from\\s{1,}){0,1}['\"]([\\w\\-]{1,})(?:[/\\w\\.\\-]{1,}){0,1}['\"])|(import\\s\\{\\s{0,}[\\w,_\\s]{1,}\\}\\s{0,}from\\s{0,}['\"]([\\w\\-]{1,})(?:[/\\w\\.\\-]{1,}){0,1}['\"])", "g")

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
        const filePath = path.join(__dirname, `../../..`, `lib/${info.categoryName}/${info.module.path}`)
        let dependencies = []
        let depenObj = {}

        find.file(filePath, function (files) {
            let srcFiles = files.filter((val) => {
                return /src[\/\w-]+.js$/.test(val)
            })

            srcFiles.forEach((file) => {
                let code = fs.readFileSync(file).toString()
                let match
                while ((match = regex.exec(code)) != null) {
                    if (match.index === regex.lastIndex) {
                        ++regex.lastIndex;
                    }

                    let matched = match[2] || match[4] || match[6]

                    if (matched && dependencies.indexOf(matched) < 0) {
                        dependencies.push(matched)
                    }
                }
            })

            dependencies.forEach((dep) => {
                let depen = rootDependencies[dep] || devDependencies[dep]

                if (depen) {
                    depenObj[dep] = depen
                }
                else if (dep in resolveFile.alias) {
                    depenObj[dep] = '^' + getPackageJSON(resolveFile.alias[dep].replace('/src', '')).version
                }
            })

            writePackageJSON(filePath, 'dependencies', depenObj)
        })
    })

    process.chdir(root)
}