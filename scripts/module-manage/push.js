import { execSync } from 'child_process'

const push = (dirPath, moduleName, gitlabPrefix)=> {
    // push一下
    try {
        execSync(`cd lib/${dirPath}/${moduleName};git add -A;git commit -m "quick push"; git push`)
    } catch (e) {
        console.log(e.toString())
    }
}

export default push