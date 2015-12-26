### 前言

fit-component 组件化开发流程，致力于打造一套先进的前端模块化、真正意义上的组件即插即用的生态圈。（所有组件都提供npm和fis3两种安装方式,其中业务机密组件仅提供fis3方式安装,所有组件都支持fis3和webpack两种编译方式）

所有npm+fis3组件源码都在这里:gitlab.baidu.com/groups/tb-component

您可以[移步这里浏览所有组件实例](http://fedev.baidu.com:8329)。

特性:

- react + react-native + redux + fis3&webpack
- 完全组件化
- 后端渲染
- sass模块化

### 贴吧

贴吧前端开发可以从php中解放出来了,我们一起推动贴吧打造一套 `node+react` js生态圈,将前端开发体验提升到极致,并为用户提供更加稳定,高效的服务

发展历史:

1. 2015-12-1 修改贴吧老编译脚本,删除了template widget static三个文件夹,angular->react,同一项目的所有代码都集中在一个子项目文件夹中方便管理
2. 2015-12-2 贴吧react组件库项目开启,代号为fit,力求打造不输于阿里前端的react组件库
3. 2015-12-4 与@张涛沟通开发流程,建立贴吧前端gitlab开发群,正式将 svn+icafe+全流程 的上线流程改造为 gitlab+agile 部署只需要 `git push` ,触发hi群机器人提醒并触发agile构建,大大简化了上线流程
4. 2015-12-14 删除control文件夹,并将入口php文件改为index.html,自动将script标签转化为php对应函数
5. 2015-12-21 感谢@学芝为贴吧重写了一套fis3编译脚本 http://gitlab.baidu.com/tb-component/build ,切换到fis集群编译,大大提高了编译效率
6. 2015-12-25 贴吧react开发规范商讨完毕,一个git仓库即一个完整项目,仓库里不再有多个子项目（避免了以往项目文件夹过多,其他项目的无关依赖库过多,申请新模块延时等不必要的麻烦）,再次调整项目结构,支持本地开发（webpack或fis3任选）,沙盒开发（仅fis3）,上线编译三套完整开发方案,项目运行不再依赖bash脚本（windows也支持了）

待续:

- 在@方石的推动下,预计2016年上半年将贴吧前端ui层改为node服务（先小范围试点）,所有node项目将启用后端渲染,届时无论pc还是h5都将同时拥有mis的单页体验与pc的首屏加载的速度!
- @天成 react移动端组件启动,项目代号为fiten,会同时支持react-native技术,最快在2016下半年将客户端页面部分改为react-native,一个h5+android+ios的项目只需要用h5开发一次,也会大大减少pm的沟通成本与项目维护成本


### 环境要求

+ node
+ webpack
+ 支持 node-gyp

针对 windows 机器 npm install 出现 node-gyp安装出错的情况请安装 node-gyp[这里](https://github.com/nodejs/node-gyp)

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

然后执行

```
npm start
```

就可以本地开发了：

本地开发需要占用8080和8090端口，被占用的话，请到_build/server.js 和 _build/webpack.js 更改所有的8080和8090

对于某些可能出现 npm start 依然失败的情况，请开2个命令行窗口，并分别运行 node _build/server.js 和 node _build/wepack.js

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

### 组件发布

[组件如何发布到npm](doc/publish.md)