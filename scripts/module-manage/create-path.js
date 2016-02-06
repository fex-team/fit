// 如果不存在则创建路径
import path from 'path'
import fs from 'fs'
import mkdirp from 'mkdirp'
import { execSync } from 'child_process'

const createPath = (prefix, moduleName)=> {
    // lib目录不存在,创建一个
    if (!fs.existsSync(path.join('lib'))) {
        mkdirp.sync(`lib`)
    }

    // 子分类目录不存在,创建一个
    if (!fs.existsSync(path.join('lib', prefix))) {
        mkdirp.sync(`lib/${prefix}`)
    }

    // 模块目录不存在,git clone下来
    if (!fs.existsSync(path.join('lib', prefix, moduleName))) {
        let result = execSync(`cd lib/${prefix};git clone http://gitlab.baidu.com/tb-component/${prefix}-${moduleName}.git ${moduleName}`)
    }

    // 模块目录存在,检查git版本控制是否正确
    let projectName = execSync(`cd lib/${prefix}/${moduleName};git remote -v | head -n1 | awk '{print $2}' | sed -e 's,.*:\(.*/\)\?,,' -e 's/\.git$//'`).toString().trim()
    if (projectName !== `http://gitlab.baidu.com/tb-component/${prefix}-${moduleName}`) {
        console.error(`警告:不要手动创建lib目录的任何文件夹,请在http://gitlab.baidu.com/tb-component建立项目后,填写到all-component.json, 再重新执行npm start会自动创建,请删除文件夹:lib/${prefix}/${moduleName} （删除前先做好备份）`)
        process.exit(1)
    }

    // pull一下
    try {
        execSync(`cd lib/${prefix}/${moduleName};git pull`)
    } catch (e) {
        console.log(e.toString())
    }
}

export default createPath