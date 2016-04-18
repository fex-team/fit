## node 版开发流程

### 为什么要用 node 开发流程?

- 本地开发
- 后端渲染
- 热更新

总之是飞一般的开发体验

#### 注意点

- 前端使用 typescript 开发,建议用 webstorm 或 vscode 开发,体验更佳
- 默认使用 redux,安装 redux-devtools 的 chrome 插件辅助开发
- 使用 immutable 辅助不可变 state 流
- 组件 static needs 数组,传入对应 action,可以将请求初始化时在后端执行

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
npm run fis
```

### 上线

与普通开发流程保持一致

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

再 /server/action/index.es 的 `serverRender` 第三个参数设置为 `false` 即可