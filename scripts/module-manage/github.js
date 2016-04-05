import {execSync} from 'child_process'
import {getGitSourcePath} from './utils/utils'

const githubGit = 'https://github.com/fex-team/fit.git'
const githubComponentGit = 'https://github.com/fit-component'

const getModulePath = (info)=> {
    return `./lib/${info.categoryName}/${info.module.path}`
}

const deleteRemoteGithub = (info)=> {
    try {
        if (!info) {
            execSync(`git remote rm github >/dev/null 2>&1`)
        } else {
            execSync(`cd ${getModulePath(info)};git remote rm github >/dev/null 2>&1`)
        }
    } catch (err) {
    }
}

const addRemoteGithub = (info)=> {
    try {
        if (!info) {
            execSync(`git remote add github ${githubGit}`)
        } else {
            execSync(`cd ${getModulePath(info)};git remote add github ${githubComponentGit}/${getGitSourcePath(info)}`)
        }
    } catch (err) {
    }
}

const push = (info)=> {
    try {
        if (!info) {
            execSync(`git push origin github`)
        } else {
            execSync(`cd ${getModulePath(info)};git push origin github`)
        }
    } catch (err) {
    }
}

export default (allModules)=> {
    // 删除根目录所有 git remote github
    deleteRemoteGithub()

    // 删除组件目录所有 git remote github
    allModules.forEach((info)=> {
        deleteRemoteGithub(info)
    })

    // 添加根目录 git remote github
    addRemoteGithub()

    // 添加组件目录所有 git remote github
    allModules.forEach((info)=> {
        addRemoteGithub(info)
    })

    // push 根目录
    push()

    // push 所有组件目录
    allModules.forEach((info)=> {
        push(info)
    })
}