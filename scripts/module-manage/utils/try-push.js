import {execSync} from 'child_process'
import tryPull from './try-pull'
import consoleLog from './console-log'

const tryPush = (path)=> {
    // 先看看status对不对
    const gitStatus = execSync(`cd ${path};git status`)
    if (gitStatus.indexOf('nothing to commit, working directory clean') > -1) {
        consoleLog(`没有修改`, 'grey', path)
        return true
    }

    try {
        execSync(`cd ${path};git add -A;git commit -m "quick push";git push origin master`)
        return true
    } catch (e) {
        const errorString = e.toString()
        consoleLog(`push失败,尝试pull`, 'yellow', path)
        if (tryPull(path) && tryPush(path)) {
            consoleLog(`push成功`, 'green', path)
        }
        return false
    }
}

export default tryPush