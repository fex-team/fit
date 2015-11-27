# 快速上手

tb-component 贴吧组件化开发流程，致力于打造一套完全前端模块化、真正意义上的组件即插即用的生态圈。

# 前言

tb-component 是基于贴吧已有编译脚本基础上，支持本地开发、沙盒开发两种开发方式的解决方案。我们的宗旨是：

- react + flux + webpack
- 一个组件包含（html+js+css），一行引入代码便引入了全部
- 放弃php模块化方案，前端就不需要care php的模块化，首屏、后端渲染都已实现
- 放弃全部内联样式的激进写法，推崇sass模块化 https://github.com/fex-team/css-path-loader https://github.com/fex-team/html-path-loader

# 快速开始新项目

### 以mis后台为例：

````
git clone http://gitlab.baidu.com/tb-component/mis-template.git; cp -r mis-template/* ./; sudo rm -rf mis-template; sudo rm -rf .git; npm install cnpm -g --registry=http://registry.npm.baidu.com; cnpm install
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