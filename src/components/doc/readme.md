### 贡献者文档

#### 运行环境

- mac
- node@5.x

#### 运行步骤

初始化项目:

~~~js
$ git clone gitlab.baidu.com/tb-component/awesome
$ cd awesome
$ npm run update
~~~

运行项目:

~~~js
$ npm start
~~~

提交代码:

~~~js
$ npm run update
~~~

#### 项目结构

所有组件代码放置在 `/lib` 目录下

根据类型和业务线分为 `pc` `mobile` `tb` 等

每个组件的包含以下目录:

- src:源码
- lib:产出,提交时自动生成并发布到npm
- demo:实例

#### 添加新组件

- [gitlab.baidu.com/tb-component](http://gitlab.baidu.com/tb-component) 上新建git仓库,pc组件以pc-为前缀,例如 `pc-upload`,移动端组件以mobile-为前缀
- 打开根目录的 `all-component.json` 在对应位置添加信息,聪明的你看到文件内容就知道如何添加了
- 执行 `npm run update`,执行完后会在对应目录下生成项目文件夹,可以开始开发了!