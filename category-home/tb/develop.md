## 开发流程

### 开发环境

- fis3 ^3.3.21
- node ^4.0
- cnpm ^3.4.0

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

先要加入 贴吧前端Gitlab hi群接收上线提醒，群号：1493692

没有接入gitlab开发流程的同学，[点击链接](http://solar.baidu.com/ci/platform/#/account)进入绑定帐号,用途自动同步到svn,密码密文存储在CI服务器

#### 添加 webhook

可以让 `master` 的 `push` 和 `merge request` 请求将自动通知FIS CI进行 svn 同步、代码检查、自动部署、自动测试等自动化服务。

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
$ cnpm install
````

之后流程见 运行 & 预览

### 代码结构

[项目结构说明](doc/tree.md)

### 组件发布

[组件如何发布到npm](doc/publish.md)