# 快速开始新项目

### 以mis后台为例：

````
git clone http://gitlab.baidu.com/tb-component/mis-template.git; cp -r mis-template/* ./; sudo rm -rf mis-template; sudo rm -rf .git; npm config set registry http://registry.npm.baidu.com; npm install
npm start
````

`npm start` 开启了代码编译，它是webpack与**贴吧编译**的集成，因此贴吧组件化解决方案实质是在贴吧编译脚本的基础上实现了webpack+react的生态圈。

# 开发指南

### 项目结构

````
control
|--example.php
src
|--example
|  |..
build.sh
deploy-conf.js
package.json
webpack.config.js
````

- `control`文件夹下为所有子项目的入口，命名规范为『项目名』.php，引入webpack打包后的文件，将打包后的文件放在`src/bundle/『项目名』.js`中
- `src`文件夹下所有子文件夹为独立项目，内部使用react+webpack，因此可直接使用commonjs规范引入需要的文件
- 安装新依赖包时，请npm install example --save 以便其他人install的时候能安装到完整的包

# 组件索引