### 前言

fit-component 组件化开发流程，致力于打造一套先进的前端模块化、真正意义上的组件即插即用的生态圈。（所有组件都提供npm和fis3两种安装方式,其中业务机密组件仅提供fis3方式安装,所有组件都支持fis3和webpack两种编译方式）

所有npm+fis3组件源码都在这里: http://gitlab.baidu.com/groups/tb-component

您可以[移步这里浏览所有组件实例](http://fit.baidu.com)。

特性:

- react + react-native + redux + fis3&webpack
- nodejs + es6 前后端语言统一
- 组件化
- 后端渲染
- sass less模块化

### 环境要求

+ node `v4.x`
+ fis3 `v3.3.11`
+ webpack

### 快速上手 & 新项目初始化

在 http://gitlab.baidu.com/groups/tb 新建一个项目

```bash
$ git clone http://gitlab.baidu.com/tb/your-project.git
$ cd your-project
$ fis3 init gitlab:tb-component/scaffold
```

`Run npm install`? n

为什么fis3 init提示的 `Run npm install` 不要装? 因为fis3 init安装npm的方式不走代理,项目初始化最后一步会以淘宝npm源安装依赖包,稳定性会得到提高

`Run fis install`? y

`Run .build.sh`?   y

### 运行 & 预览

#### 本机开发模式 (fis3版,打开127.0.0.1:8080,编译速度快)

```bash
$ npm start
```

#### 本机开发模式 (webpack版,打开localhost:8090,支持代码热更新)

```bash
$ npm run webpack
```

#### 沙盒开发

```bash
$ npm run dev
```

#### 沙盒开发，开启压缩与预览 (与上线编译一样,用于qa测试)

```bash
$ npm run preview
```

### 上线

#### 准备工作

没有接入gitlab开发流程的同学，[点击链接](http://solar.baidu.com/ci/platform/#/gitlab)进入绑定帐号。

你没看错，先要加入 贴吧前端Gitlab hi群，群号：1493692

#### 添加 webhook

在 git 项目中添加 webhook地址 `http://solar.baidu.com/ci/webhook` 以后master的 push 和 merge request请求将自动通知FIS CI进行 svn 同步、代码检查、自动部署、自动测试等自动化服务。

方法:

- 在gitlab项目找到 Web Hooks
- URL 填写 http://solar.baidu.com/ci/webhook
- 勾选 Push events , Issues events , Merge Request events

#### 提交代码

````
git add -A
git commit -m "ISSUE=yourCode"
git push origin master
````

提交代码到master分支，因为项目集成了fisCI钩子，会自动同步到svn主干并在agile平台执行编译。

这时候hi群里的机器人会发来一条消息，告诉你同步成功，并给出一条agile链接，进入以后点击右侧的发布就可以发布代码了，然后就可以orp上线了。

### 额外

#### 将项目打包成一个文件,可以直接发给rd运行(index.html + index.jsx)

```
$ npm run bundle
```

jsx会被打包到 `output/bundle.jsx`

### 旧项目如何维护

````
$ npm install
````

之后流程见 运行 & 预览

### 代码结构

[项目结构说明](doc/tree.md)

### 组件发布

[组件如何发布到npm](doc/publish.md)

### 贴吧前端模块化

贴吧前端开发可以从php中解放出来了,我们一起推动贴吧打造一套 `node+react` 生态圈,将前端开发体验提升到极致,并为用户提供更加稳定,高效的服务

发展历史:

1. 2015-12-1 修改贴吧老编译脚本,删除了template widget static三个文件夹,angular->react,同一项目的所有代码都集中在一个子项目文件夹中方便管理
2. 2015-12-2 贴吧react组件库项目开启,代号为fit,力求打造不输于阿里前端的react组件库
3. 2015-12-4 与@张涛沟通开发流程,建立贴吧前端gitlab开发群,正式将 svn+icafe+全流程 的上线流程改造为 gitlab+agile 部署只需要 `git push` ,触发hi群机器人提醒并触发agile构建,大大简化了上线流程
4. 2015-12-14 删除control文件夹,并将入口php文件改为index.html,自动将script标签转化为php对应函数
5. 2015-12-21 @学芝为贴吧重写了一套fis3编译脚本 http://gitlab.baidu.com/tb-component/build ,切换到fis集群编译,大大提高了编译效率
6. 2015-12-25 贴吧react开发规范商讨完毕,一个git仓库即一个完整项目,仓库里不再有多个子项目（避免了以往项目文件夹过多,其他项目的无关依赖库过多,申请新模块延时等不必要的麻烦）,再次调整项目结构,支持本地开发（webpack或fis3任选）,沙盒开发（仅fis3）,上线编译三套完整开发方案
7. 2015-12-30 同时支持webpack编译,与fis3编译效果完全一样,支持代码热更新
8. 2015-12-31 fis3项目上线流程跑通

待续:

- 在@方石的推动下,预计2016年上半年将贴吧前端ui层改为node服务（先小范围试点）,所有node项目将启用后端渲染,届时无论pc还是h5都将同时拥有mis的单页体验与pc的首屏加载的速度!而对我们前端的福利是,代码只需要开发一套,前后端通用的逻辑可以复用了
- @天成 react移动端组件启动,项目代号为fiten,会同时支持react-native技术,最快在2016下半年将客户端页面部分改为react-native,一个h5+android+ios的项目只需要用h5开发一次,也会大大减少pm的沟通成本与项目维护成本

### Fit-Pro

`fit-pro` 是一个流式布局+绝对布局的可视化网站编辑平台,后续会陆续整合`fit`和`fiten`的组件,大部分代码由拖拽完成,代码只需要写在部分核心逻辑中

http://fit.baidu.com/gaea

### Q & A

> 最新版fis3怎么装?

````
npm install fis3@3.3.12 -g
````

> fis 上面没有 npm 组件?

到[https://github.com/fis-components/components/blob/master/task.yml](https://github.com/fis-components/components/blob/master/task.yml)
 
 去提交pull request, 之后会自动将 npm 组件转成 fis 组件(转化会有点慢..得等个几分钟)

> 为什么不用node5.x?

4.x是stable版,而且node5.x的npm3.x将node_modules打平,与node4.x的npm2.x嵌套node_modules项目结构上存在一定差异,建议node5.x稳定后再使用

> 为什么编译既支持fis3又支持webpack,岂不是多此一举?

首先fis3和webpack都是当下最热,最强大的编译工具,两者开发效果完全一致.webpack编译速度慢,但是支持react热更新,fis3没有webpack那么强大的react生态圈,但是编译速度快,所以我们将两者做了兼容,开发时可以使用任意编译方式.同时支持本地开发（贴吧的接口做了jsonp兼容,本地开发也可以联调了）

> 为什么放弃svn,全流程,改用gitlab+agile?

最大的不同是,符合公司敏捷开发的目标,git的好处就不赘述了,而且提交代码后自动触发编译,同时hi群机器人自动发编译地址,整个上线流程缩短为了『push代码+发布』

> 没有全流程如何测试?

`npm run preview` 会按照上线参数打包并发布代码到沙盒,测试还是开发的沙盒,只要换个编译命令就行了

> gitlab怎么做协作开发? 

建议每个项目按照开发人建立分支,因为push到master后会自动触发代码编译和同步到svn主干,因此建议开发时push到自己的分支,测试完毕后回到master,将自己的分之代码merge回来,再push即可

> 为什么要把svn的子项目拆出来?

子项目写在一起弄成一坨的痛苦大家都清楚,不但阻碍写代码,还容易引起冲突,天天在合并分支上浪费时间实在痛苦,项目多了甚至弄出了`subModule`,但没有在根本上解决问题.fis3上线编译已经做了兼容,所有gitlab项目都会自动同步到 `fe/react` 这个大svn目录下,上线只编译当前开发的子项目,对开发者来说,一个项目就是一个git仓库,干净利落

> 新项目不需要新建模块吗?

不需要,在 http://gitlab.baidu.com/groups/tb 下新建git仓库即可,发布时的 `moduleName` 和 `subModuleName`可以随意填写

> 代码规范提示错误咋办?

所有js后缀名改为`jsx`,就可以通过百度代码规范了,目前还没有针对次的代码规范出台,继续关注中

> 如何以 `GBK` 编码上线?

`index.html` 中 `charset` 改为 `gbk` ,同时 `fis-conf.js` 中设置 `charset: 'gbk'`