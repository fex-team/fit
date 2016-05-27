## node 版开发流程

### 开发环境

- `fis3` `^3.3.21`
- `node` `^4.0`
- `cnpm` `^3.4.0`
- `yog2` `^0.6.1`

### 为什么要用 node 开发流程?

- 本地开发
- 后端渲染
- 热更新
- 实践前端最前沿技术

#### 注意点

- 前后端均使用 typescript 开发,建议用 webstorm 或 vscode 开发,体验更佳
- 默认使用 redux, 安装 redux-devtools 的 chrome 插件辅助开发
- 使用 immutable 辅助不可变 state 流
- 开发技术详细介绍: https://github.com/fex-team/fit/issues/1

### 本地启动 node 服务

```bash
git clone http://gitlab.baidu.com/tb/node.git
cd node
cnpm install
npm start
```

### 项目本地构建

```bash
$ git clone http://gitlab.baidu.com/tb/your-project.git
$ cd your-project
$ fis3 init gitlab:tb-component/scaffold-node
```

### 修改 hosts

修改本机 `hosts` 文件,让本机可以访问百度域, mac 的文件地址为 `/private/etc/hosts`

新增一行

```bash
127.0.0.1       dev.baidu.com
```

### 运行 & 预览

#### 本机开发模式

保持 node 服务运行的前提下,进入项目文件夹,执行如下命令行:

```hash
npm start
```

打开 `dev.baidu.com:8080` 查看对应项目.路由是 `/n/[项目名]/[子路由]`,线上也是此路径

#### 上线前本地预览

```hash
npm run preview
```

#### 上线前开发机预览

qa测试也使用此方式,在orp申请一台 TiebaNode 产品线的测试机,登录测试机执行以下命令查找ip及端口号:

```hash
# 显示 ip 地址
hostname -i
```

```hash
# 文件中 PORT 就是 node 的端口号
vim /home/work/orp/noderuntime/bin/env.conf
```

将ip地址和端口号填入 `fis-conf.js` 文件中 `remoteIp` `remotePort`,再执行以下命令即可:

```hash
npm run remote
```

访问地址是 `[?].tieba.otp.baidu.com/n/[项目名]`

### 上线

与普通开发流程保持一致

> node 版开发流程,一个 git 仓库对应一个 svn 模块,因此新建 git 仓库之前,请先去 icafe 申请 fe/[git-name] 对应名称的 svn 模块. 上线时,在 orp 贴换到 `TiebaNode` 产品线.

### 一些细节

#### 这些命令都做了什么?

- 本地开发采用 webpack 构建
- 上线前本地预览采用 fis 构建
- 上线采用 fis 构建

#### 为什么本地开发用 webpack, 上线用 fis?

- webpack 支持热更新,开发体验好
- fis 配置灵活,适合内部上线流程

#### 构建工具不一致,会出 bug 吗?

有可能,但我们已经尽可能的使 fis 兼容 webpack,一般不会遇到不一致的构建结果,如果不幸遇到了,可以在开发群里提问

#### node_modules 是如何加速处理的?

初始化 npm start 会将所有资源打成tar包加速传输,之后的watch改为传输 diff 文件

#### 本地开发不想用后端渲染,怎么办?

再 /server/action/index.es 的 `serverRender` 的 `enableServerRender` 参数设置为 `false` 即可

#### 脱离贴吧环境,也想使用这套开发流程怎么办?

我们已经将编译脚本与脚手架的核心逻辑发布并且开源了 https://github.com/ascoders/isomorphic-react-redux-app , fork一份,在它基础上开发吧!使用方法与贴吧开发一致.