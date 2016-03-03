## node 版开发流程

### yog2 project 

先启动一个全局的yog2,所有的项目都会部署到这个根项目下

注意,这个是真正的后端服务根目录,所有node项目想要本地开发,都需要在本地先启动它

> node版强制使用npm生态,没有useNpm参数,所有插件请使用npm安装

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

打开 `127.0.0.1:8080` 查看对应项目.路由和线上对应,是 `/n/[项目名]/[子路由]`

```hash
npm run preview
```

这是上线模式预览

```hash
npm run webpack
```

这是启用webpack开发,支持热更新,但不支持server代码watch

### 上线

见 开发流程