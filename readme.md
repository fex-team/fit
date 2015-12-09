### 前言

tb-component 贴吧组件化开发流程，致力于打造一套完全前端模块化、真正意义上的组件即插即用的生态圈。

您可以[移步这里浏览所有组件实例](http://fedev.baidu.com/~gaea/awesome/#/?_k=n4qtbj)。

- react + redux + webpack
- 一个组件包含（html+js+css），一行引入代码便引入了全部
- 首屏、后端渲染
- sass模块化

### 环境要求

+ node
+ webpack
+ 支持 node-grp

针对 windows 机器 npm install 出现 node-grp安装出错的情况请安装 node-grp[这里](https://github.com/nodejs/node-gyp)

### 快速上手

**使用gitlab进行版本控制**，代码地址：http://gitlab.baidu.com/groups/tb

在已有的模块中进行开发，无论是修改还是新增子模块，先clone代码到本地（下面以captcha模块为例）

````
git clone http://gitlab.baidu.com/tb/captcha.git # 替换项目地址为你的项目地址
cd captcha
git clone http://gitlab.baidu.com/tb-component/build.git _build 
````

再安装编译所需的`npm`依赖包

````
npm install
````

没有代理的同学可以添加参数`--registry=https://registry.npm.taobao.org`，从淘宝的npm镜像进行安装

最后，需要配置项目信息，修改 `deploy-conf.js` 文件中配置项：

- host: 沙盒地址
- modName: 模块名，此项目为captcha
- webpackProject: 需要打包的项目名，一个project下面可能存放多个子项目，这个字段标识了当前打包哪一个项目。参数名需要与`src/项目名`中 『项目名』 一致

然后执行`npm start`就可以本地开发了：
本地开发需要占用8080和8090端口，被占用的话，请到_build/server.js 和 _build/webpack.js 最底部更改

- node版本 4+
- 打开 localhost:8090 进行调试（小甜点：支持代码热更新）
- 因为mac权限问题，本地server端口开在高位的8080，webpack服务开在8090并代理到8080端口

### 部署到沙盒

联调的时候需要将代码部署到沙盒，执行下面一条命令即可：

````
npm run build
````

### 上线

````
git add -A
git commit -m "ISSUE=yourCode"
git push origin master
````

没有接入gitlab开发流程的同学，[点击链接](http://solar.baidu.com/ci/platform/#/gitlab)进入绑定帐号。

你没看错，先要加入 贴吧前端Gitlab hi群，群号：1493692

对，这是提交代码到master分支，因为项目集成了fisCI钩子，会自动同步到svn主干并在agile平台执行编译。

这时候hi群里的机器人会发来一条消息，告诉你同步成功，并给出一条agile链接，进入以后点击右侧的发布就可以发布代码了，然后就可以orp上线了。

### 新建模块

[新模块如何初始化](doc/newProject.md)

### 代码结构

[项目结构说明](doc/tree.md)

### 组件索引

captcha 验证码
mis-react mis 平台