# 前言

tb-component 贴吧组件化开发流程，致力于打造一套完全前端模块化、真正意义上的组件即插即用的生态圈。

- react + redux + webpack
- 一个组件包含（html+js+css），一行引入代码便引入了全部
- 首屏、后端渲染
- sass模块化

# 快速上手

````
npm start
````

- 需要node版本4.0+
- 打开 localhost:8090 进行调试（小甜点：支持代码热更新）
- 因为mac权限问题，本地server端口开在高位的8080，webpack服务开在8090并代理到8080端口，因此支持在8090端口下热更新开发。

# 部署到沙盒

````
$ npm run build
````

# 新建模块

[新建模块](newProject.md)

# 项目结构

[项目结构](tree.md)

# 组件索引

captcha 验证码