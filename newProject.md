# 创建一个新的mis项目

1. fork mis项目模板（http://gitlab.baidu.com/tb-component/mis-template.git）到 `tb` 组

````
$ git clone http://gitlab.baidu.com/tb-component/mis-template.git; cp -r mis-template/* ./; sudo rm -rf mis-template readme.md; git clone http://gitlab.baidu.com/tb-component/build.git _build; sudo rm -rf .git; npm install cnpm -g --registry=http://registry.npm.baidu.com; cnpm install
````