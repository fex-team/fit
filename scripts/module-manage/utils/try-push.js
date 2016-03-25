import {execSync} from 'child_process'
import consoleLog from './console-log'

const tryPush = (path)=> {
    try {
        execSync(`cd ${path};git add -A;git commit -m "quick push";git push origin master`)
        return true
    } catch (e) {
        const errorString = e.toString()
        console.log(errorString)
    }
}

export default tryPush