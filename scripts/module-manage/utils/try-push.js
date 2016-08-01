import {execSync} from 'child_process'
import tryPull from './try-pull'
import consoleLog from './console-log'

const tryPush = (path, message)=> {
    try {
        execSync(`cd ${path};git add -A;git commit -m "${message | 'quick push'}";git push origin master`)
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