import {execSync} from 'child_process'

export default (dirPath, moduleName, gitlabPrefix)=> {
    // 删除 lib目录

    // 删除 node_modules目录

    // push一下
    try {
        execSync(`cd lib/${dirPath}/${moduleName};git add -A;git commit -m "quick push"; git push`)
    } catch (e) {
        console.log(e.toString())
    }
}