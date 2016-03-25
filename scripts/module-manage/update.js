import path from 'path'
import fs from 'fs'
import mkdirp from 'mkdirp'
import {execSync} from 'child_process'

const gitPlantform = 'http://gitlab.baidu.com'
const gitPlantformGroup = 'tb-component'

const createIfNotExist = (path)=> {
    if (fs.existsSync(path.join(path))) return
    mkdirp.sync(path)
}

const createLibFolderIfNotExist = ()=> {
    createIfNotExist('lib')
}

const createCategoryFolderIfNotExist = (info)=> {
    createIfNotExist(path.join('lib', info.categoryName))
}

const cloneModuleIfNotExist = (info)=> {
    const path = path.join('lib', info.categoryName, info.module.path)
    if (fs.existsSync(path)) return

    // 获取git地址
    let gitSourcePath
    if (info.categoryInfo.gitlabPrefix !== '') {
        gitSourcePath = `${gitlabPrefix}-${moduleName}.git`
    } else {
        gitSourcePath = `${moduleName}.git`
    }

    // clone
    execSync(`
        cd lib/${info.categoryName};
        git clone ${gitPlantform}/${gitPlantformGroup}/${gitSourcePath}.git ${moduleName}
    `)
}

// dirPath, moduleName, gitlabPrefix, info, prefix
export default (info)=> {
    // 创建 lib 文件夹
    createLibFolderIfNotExist()
    // 创建 分类 文件夹
    createCategoryFolderIfNotExist(info)
    // 创建 组件 文件夹
    cloneModuleIfNotExist(info)

    // 模块目录不存在,git clone下来
    if (!fs.existsSync(path.join('lib', dirPath, moduleName))) {
        if (gitlabPrefix !== '') {
            execSync(`cd lib/${dirPath};git clone http://gitlab.baidu.com/tb-component/${gitlabPrefix}-${moduleName}.git ${moduleName}`)
        } else {
            execSync(`cd lib/${dirPath};git clone http://gitlab.baidu.com/tb-component/${moduleName}.git ${moduleName}`)
        }

        // 补上没有的目录或文件
        if (!fs.existsSync(path.join('lib', dirPath, moduleName, 'readme.md'))) {
            console.log(info.name, prefix, info.path)
            let readmeText = `
            # ${info.name}
            ---
            
            \`\`\`\`jsx
            npm install ${prefix}-${info.path}
            \`\`\`\`
            `
            fs.writeFile(`lib/${dirPath}/${moduleName}/readme.md`, readmeText, (err)=> {
                if (!err)return
                console.log(`mk lib/${dirPath}/${moduleName}/readme.md fail: ${err}`)
            })
        }
        if (!fs.existsSync(path.join('lib', dirPath, moduleName, 'demo'))) {
            mkdirp.sync(`lib/${dirPath}/${moduleName}/demo`)
        }
        if (!fs.existsSync(path.join('lib', dirPath, moduleName, 'src'))) {
            mkdirp.sync(`lib/${dirPath}/${moduleName}/src`)
        }
        if (!fs.existsSync(path.join('lib', dirPath, moduleName, 'src', 'index.js'))) {
            fs.writeFile(`lib/${dirPath}/${moduleName}/src/index.js`, '', (err)=> {
                if (!err)return
                console.log(`mk lib/${dirPath}/${moduleName}/src/index.js fail: ${err}`)
            })
        }
        if (!fs.existsSync(path.join('lib', dirPath, moduleName, 'demo', 'index.js'))) {
            fs.writeFile(`lib/${dirPath}/${moduleName}/demo/index.js`, '', (err)=> {
                if (!err)return
                console.log(`mk lib/${dirPath}/${moduleName}/demo/index.js fail: ${err}`)
            })
        }
    }

    // 模块目录存在,检查git版本控制是否正确
    let projectName = execSync(`cd lib/${dirPath}/${moduleName};git remote -v | head -n1 | awk '{print $2}' | sed -e 's,.*:\(.*/\)\?,,' -e 's/\.git$//'`).toString().trim()
    let expectModuleName = `http://gitlab.baidu.com/tb-component/${gitlabPrefix}-${moduleName}`
    if (gitlabPrefix === '') {
        expectModuleName = `http://gitlab.baidu.com/tb-component/${moduleName}`
    }
    if (projectName !== expectModuleName) {
        console.error(`警告:不要手动创建lib目录的任何文件夹,请在http://gitlab.baidu.com/tb-component建立项目后,填写到all-component.json, 再重新执行npm start会自动创建,请删除文件夹:lib/${dirPath}/${moduleName} （删除前先做好备份）`)
        process.exit(1)
    }

    // pull一下
    try {
        execSync(`cd lib/${dirPath}/${moduleName};git pull origin master`)
    } catch (e) {
        console.log(e.toString())
    }
}