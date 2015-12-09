### 新模块如何初始化

- 在svn申请一个新的模块
- 在http://gitlab.baidu.com/groups/tb 项目组里新建模块，教程：http://agroup.baidu.com/dev/md/article/17002#
- 第二步比较长，再解释一下：主要是给项目增加钩子和配置文件，以支持提交代码时自动同步到svn主干并自动在agile敏捷开发平台编译
- 项目建好后，在第二步创建的文件夹中，执行下述命令拷贝通用项目模板，新模块初始化完毕了

- 注意事项

+ 配置 fis.yml 的时候， hi_group_id: 1493692

````
git clone http://gitlab.baidu.com/tb-component/mis-template.git mis-template
mv mis-template/* ./
sudo rm -rf mis-template
````


- 按照 [快速入手](readme.md) 的步骤开始开发！

[返回](readme.md)