## 开发流程

### 开发环境

- `fis3` `^3.3.21`
- `node` `^4.0`
- `cnpm` `^3.4.0`

### 快速上手 & 新项目初始化

在 http://gitlab.baidu.com/groups/tb 新建一个项目 `[your-project]`, 没有权限的同学可以找 `huangziyi01` 添加.

执行下列脚本,将项目 clone 到本地,初始化项目:

```bash
$ git clone http://gitlab.baidu.com/tb/your-project.git
$ cd your-project
$ fis3 init gitlab:tb-component/scaffold
```

`Run npm install`? n

fis3 init安装npm的方式不走代理,项目初始化最后一步会以淘宝npm源安装依赖包,稳定性会得到提高

`Run fis install`? n

已经不需要 fis3 组件生态,使用 npm 生态,因此这项也不要选

`Run .build.sh`?   y

初始化环境

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

#### 沙盒开发，开启线上编译配置 (用于qa测试)

```bash
$ npm run preview
```

### 上线

#### 1.准备工作

先要加入 贴吧前端Gitlab hi群接收上线提醒，群号：1493692

没有接入gitlab开发流程的同学，[点击链接](http://solar.baidu.com/ci/platform/#/account)进入绑定帐号,用途自动同步到svn,密码密文存储在CI服务器

#### 2.添加 webhook

可以让 `master` 的 `push` 和 `merge request` 请求将自动通知FIS CI进行 svn 同步、代码检查、自动部署、自动测试等自动化服务。

方法:

- 在gitlab项目找到 Web Hooks
- URL 填写 http://solar.baidu.com/ci/webhook
- 勾选 Push events , Issues events , Merge Request events

#### 3.提交代码

````
git add -A
git commit -m "ISSUE=yourCode"
git push origin master
````

提交代码到master分支，因为项目集成了fisCI钩子，会自动同步到svn主干并在agile平台执行编译。

这时候hi群里的机器人会发来一条消息，告诉你同步成功，并给出一条agile链接，进入以后点击右侧的发布就可以发布代码了，然后就可以orp上线了。

> 所有 php 模块共用一个 svn 路径: fe/react ,因此开发新模块不需要申请 svn 路径,只需要新建 gitlab 地址即可. agile 上的 svn 地址也选择 fe/react 进行发布. 在 orp 贴换到 `tieba` 产品线.

### 额外

#### 将项目打包成一个文件,可以直接发给rd运行(index.html + index.jsx)

```
$ npm run bundle
```

jsx会被打包到 `output/bundle.jsx`

### 旧项目如何维护

````
$ cnpm install
````

之后流程见 运行 & 预览