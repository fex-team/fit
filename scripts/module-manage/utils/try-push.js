import {execSync} from 'child_process'
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
        console.log(errorString)
    }
}

export default tryPush