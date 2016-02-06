import { execSync } from 'child_process'

const push = (prefix, moduleName)=> {
    // push一下
    try {
        execSync(`cd lib/${prefix}/${moduleName};git add -A;git commit -m "quick push"; git push`)
    } catch (e) {
        console.log(e.toString())
    }
}

export default push