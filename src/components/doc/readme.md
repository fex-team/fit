## 贡献者文档

### 运行环境

- mac
- node@5.x

### 运行步骤

##### 初始化项目:

~~~js
$ git clone gitlab.baidu.com/tb-component/awesome
$ cd awesome
$ cnpm install
$ npm run update
~~~

awesome这个模块就是fit官网的全部代码,开发方式采用**根项目统一管理所有子组件**,组件代码并不会被提交到awesome中,执行`npm run update`会读取根目录下`all-components.json`将所有子组件按照分类`clone`到`lib`目录下

##### 运行项目:

~~~js
$ npm start
~~~

运行后打开`localhost:8090`就可以看到fit网站内容,可以修改任意组件源码,进入对应组件demo目录查看修改效果

##### 提交代码:

~~~js
$ npm run push
~~~

这一步会执行下列逻辑:

1. 

### 项目结构

所有组件代码放置在 `/lib` 目录下

根据类型和业务线分为 `pc` `mobile` `tb` 等

每个组件的包含以下目录:

- src:源码
- lib:产出,提交时自动生成并发布到npm
- demo:实例

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