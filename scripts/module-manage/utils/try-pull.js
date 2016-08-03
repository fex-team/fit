import {execSync} from 'child_process'
import consoleLog from './console-log'

const tryPull = (path)=> {
    // 先看看status对不对
    const gitStatus = execSync(`cd ${path};git status`)
    console.log('tryPull', gitStatus)
    if (gitStatus.indexOf('Changes not staged for commit') > -1) {
        consoleLog(`有没提交的修改,正在提交..`, 'grey', path)
        execSync(`cd ${path};git add -A;git commit -m "quick push"`)
    }

    try {
        execSync(`cd ${path};git pull origin master`)
        return true
    } catch (e) {
        const errorString = e.toString()
        if (errorString.indexOf('You have unstaged changes') > -1) {
            consoleLog(`pull失败了,因为本地修改没有提交,正在提交并重试..`, 'yellow', path)
            execSync(`cd ${path};git add -A;git commit -m "quick push"`)
            if (tryPull(path)) {
                consoleLog(`重新提交成功`, 'green', path)
                return true
            } else {
                consoleLog(`重新提交失败,太诡异了,自己看看吧..`, 'red', path)
            }
            return false
        }

        if (errorString.indexOf('commit your changes or stash them before you can merge') > -1) {
            consoleLog(`pull失败了,因为改动有冲突,但是还没提交,所以不能merge,正在提交并重试..`, 'yellow', path)
            execSync(`cd ${path};git add -A;git commit -m "merge confict"`)
            if (tryPull(path)) {
                consoleLog(`重新提交成功`, 'green', path)
                return true
            }
        }

        if (errorString.indexOf(`fix them up in the work tree, and then use 'git add/rm <file>'`) > -1) {
            consoleLog(`pull失败了,因为手动merge后,还没提交,正在提交并重试..`, 'yellow', path)
            execSync(`cd ${path};git add -A;git commit -m "merge confict"`)
            if (tryPull(path)) {
                consoleLog(`重新提交成功`, 'green', path)
                return true
            } else {
                consoleLog(`这都失败了,什么鬼,要么就是冲突没改完,自己查查吧`, 'red', path)
            }
        }

        // 看看status对不对
        let gitStatus = execSync(`cd ${path};git status`)
        if (gitStatus.indexOf('fix conflicts and run "git commit"') > -1) {
            consoleLog(`pull失败了,因为当前远程分支有冲突改动,请手动merge后再试`, 'red', path)
        }

        consoleLog(`pull失败了,错误:${errorString}`, 'red', path)
    }
}

export default tryPull