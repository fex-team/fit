import path from 'path'
import fs from 'fs'
import mkdirp from 'mkdirp'
import {execSync} from 'child_process'
import emptyModuleDefault from './utils/empty-module-default'
import consoleLog from './utils/console-log'
import tryPull from './utils/try-pull'
import {getGitSourcePath} from './utils/utils'

const gitPlantform = 'https://github.com'
const gitPlantformGroup = 'fit-component'

const baiduGitPlantform = 'http://gitlab.baidu.com'
const baiduGitPlantformGroup = 'tb-component'

const getModulePath = (info)=> {
    return `./lib/${info.categoryName}/${info.module.path}`
}

const createIfNotExist = (targetPath)=> {
    if (fs.existsSync(path.join(targetPath))) return
    mkdirp.sync(targetPath)
}

const createLibFolderIfNotExist = ()=> {
    createIfNotExist('lib')
}

const createCategoryFolderIfNotExist = (info)=> {
    createIfNotExist(path.join('lib', info.categoryName))
}

const cloneModuleIfNotExist = (info)=> {
    const targetPath = path.join('lib', info.categoryName, info.module.path)
    if (fs.existsSync(targetPath)) return

    const gitSourcePath = getGitSourcePath(info)

    // run git clone
    let cloneSource = `${gitPlantform}/${gitPlantformGroup}/${gitSourcePath}`

    // 对内部模块,替换地址
    if (info.categoryInfo.prefix === 'tb') {
        cloneSource = `${baiduGitPlantform}/${baiduGitPlantformGroup}/${gitSourcePath}`
    }

    execSync(`cd lib/${info.categoryName};git clone ${cloneSource} ${info.module.path}`)
    consoleLog('cloned', 'green', getModulePath(info))
}

const checkGitControl = (info)=> {
    const pathInfo = `lib/${info.categoryName}/${info.module.path}`

    // 获得当前项目的git路径
    let projectName = execSync(`cd ${pathInfo};git remote -v | head -n1 | awk '{print $2}' | sed -e 's,.*:\(.*/\)\?,,' -e 's/\.git$//'`).toString().trim()

    let gitSourcePath = getGitSourcePath(info)

    let expectModuleName = `${gitPlantform}/${gitPlantformGroup}/${gitSourcePath}`

    // 对内部模块,替换地址
    if (info.categoryInfo.prefix === 'tb') {
        expectModuleName = `${baiduGitPlantform}/${baiduGitPlantformGroup}/${gitSourcePath}`
    }

    if (projectName + '.git' !== expectModuleName) {
        consoleLog(`错误:不要手动创建lib目录的任何文件夹,请在${gitPlantform}/${gitPlantformGroup}建立项目后,填写到all-component.json, 再重新执行npm update会自动创建,请删除此文件夹（删除前先做好备份）`, 'red', getModulePath(info))
    }
}

export default (info)=> {
    // 创建 lib 文件夹
    createLibFolderIfNotExist()
    // 创建 分类 文件夹
    createCategoryFolderIfNotExist(info)
    // clone 组件
    cloneModuleIfNotExist(info)
    // 判断当前组件目录 git版本控制是否正确
    checkGitControl(info)
    // try pull
    tryPull(getModulePath(info))
    // 补上组件没有的文件
    emptyModuleDefault(info)
}