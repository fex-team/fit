## 贡献者文档

### 运行环境

- mac
- node@5.x

### 运行步骤

##### 初始化项目:

~~~js
$ git clone http://gitlab.baidu.com/tb-component/awesome.git
$ cd awesome
$ cnpm install
$ cnpm install babel-cli typescript tsd -g
$ tsd install
$ npm run update
~~~

awesome这个模块就是fit官网的全部代码,开发方式采用**根项目统一管理所有子组件**,组件代码并不会被提交到awesome中,执行`npm run update`会读取根目录下`all-components.json`将所有子组件按照分类`clone`到`lib`目录下

##### 运行项目:

~~~js
$ npm start
~~~

运行后打开`localhost:8090`就可以看到fit网站内容,可以修改任意组件源码,进入对应组件demo目录查看修改效果

##### 更新代码:

~~~js
$ npm run update
~~~

这一步会执行下列逻辑:

1. 使用`babel-cli`编译es6编写的编译脚本
2. 根据`all-components.json`扫描子组件文件夹,如果有丢失则会从svn clone一份
3. 扫描每个组件用到的`import`语法,统一更新为`awesome`项目下`package.json`中的版本号,保证所有组件依赖版本统一（因此所有组件安装依赖时,必须装在根目录）
4. 根据`demo`自动生成路由,组件实例页面,`resolve.js`,可以将`fit-table`的引用重定向到`table`组件的源代码,便于开发调试
5. 更新`awesome`项目

注:增加了新demo,增加了组件,需要更新代码到最新版,执行此脚本

##### 提交代码:

~~~js
$ npm run push
~~~

这一步会执行下列逻辑:

1. 使用`babel-cli`编译es6编写的编译脚本
2. 根据`all-components.json`扫描子组件文件夹,如果有丢失则会从svn clone一份
3. diff检测,编译有修改的子组件
4. 提交上述子组件
5. 为上述子组件更新小版本号
6. 检测所有依赖更新了版本号的组件,编译这些组件,并更新这些组件的小版本号
7. 发布上述所有组件到npm
8. 提交上述所有组件
9. 删除上述所有组件编译产生的无用文件
10. 提交`awesome`项目

注:想提交代码,想发布修改了的组件,执行此脚本

### 项目结构

所有组件代码放置在 `/lib` 目录下

根据类型和业务线分为 `pc` `mobile` `tb` 等

每个组件的包含以下目录:

- src:源码
- lib:产出,提交时自动生成并发布到npm
- demo:实例
- test:测试

### 添加新组件

- [gitlab.baidu.com/tb-component](http://gitlab.baidu.com/tb-component) 上新建git仓库,pc组件以pc-为前缀,例如 `pc-upload`,移动端组件以mobile-为前缀
- 打开根目录的 `all-component.json` 在对应位置添加信息,聪明的你看到文件内容就知道如何添加了
- 执行 `npm run update`,执行完后会在对应目录下生成项目文件夹,可以开始开发了!

### 测试

~~~js
$ npm test
~~~

任何修改后请务必进行测试,保证已有case正常通过

新功能,新组件请添加新测试用例

### 自动生成demo

在`demo`文件夹下新建`lists`目录和`index.js`文件

`lists`目录下新建`[demo].js` `[demo].md`

`index.js`:

~~~jsx
// @demo
// [demo]:24
~~~

再执行 `npm run update` 就能自动生成demo了

### 自动生成文档

在每个组件最下方,一定要注明 `defaultProps`,每行上方添加 `// @desc 描述内容`,就可以将其显示在页面上

### 更新 fit 官网内容

~~~jsx
$ npm run build
$ npm run push
~~~