## 贴吧组件库

放置功能高度聚合的组件,满足与贴吧特定逻辑或url耦合的条件

与通用组件不同,所有贴吧特有组件都**不要发布**到npm,通过fis3指定gitlab地址安装

使用方式与npm生态没有任何区别

## 开发流程

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

## node 版开发流程

### yog2 project 

先启动一个全局的yog2,所有的项目都会部署到这个根项目下

注意,这个是真正的后端服务根目录,所有node项目想要本地开发,都需要在本地先启动它

```bash
git clone http://gitlab.baidu.com/tb/node.git
cd node
npm install
yog2 run -e dev
```

### 新建项目

这一步在创建 yog2 的 app , app 就是业务项目

```bash
$ git clone http://gitlab.baidu.com/tb/your-project.git
$ cd your-project
$ fis3 init gitlab:tb-component/scaffold-node
```

### 运行 & 预览

#### 本机开发模式

```hash
npm start
```

打开 `127.0.0.1:8080` 查看对应项目.路由是 `/项目名/[子路由]`,如果是home项目,可以省略 `/home`

### Q & A

> 最新版fis3怎么装?

````
npm install fis3 -g
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