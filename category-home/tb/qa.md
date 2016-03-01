## Q & A

> 最新版fis3怎么装?

````
npm install fis3 -g
````

> fis 上面没有 npm 组件?

到[https://github.com/fis-components/components/blob/master/task.yml](https://github.com/fis-components/components/blob/master/task.yml)
 
 去提交pull request, 之后会自动将 npm 组件转成 fis 组件(转化会有点慢..得等个几分钟)

> 为什么不用node5.x?

4.x是stable版,而且node5.x的npm3.x将node_modules打平,与node4.x的npm2.x嵌套node_modules项目结构上存在一定差异,建议node5.x稳定后再使用

> 为什么编译既支持fis3又支持webpack,岂不是多此一举?

首先fis3和webpack都是当下最热,最强大的编译工具,两者开发效果完全一致.webpack编译速度慢,但是支持react热更新,fis3没有webpack那么强大的react生态圈,但是编译速度快,所以我们将两者做了兼容,开发时可以使用任意编译方式.同时支持本地开发（贴吧的接口做了jsonp兼容,本地开发也可以联调了）

> 为什么放弃svn,全流程,改用gitlab+agile?

最大的不同是,符合公司敏捷开发的目标,git的好处就不赘述了,而且提交代码后自动触发编译,同时hi群机器人自动发编译地址,整个上线流程缩短为了『push代码+发布』

> 没有全流程如何测试?

`npm run preview` 会按照上线参数打包并发布代码到沙盒,测试还是开发的沙盒,只要换个编译命令就行了

> gitlab怎么做协作开发? 

建议每个项目按照开发人建立分支,因为push到master后会自动触发代码编译和同步到svn主干,因此建议开发时push到自己的分支,测试完毕后回到master,将自己的分之代码merge回来,再push即可

> 为什么要把svn的子项目拆出来?

子项目写在一起弄成一坨的痛苦大家都清楚,不但阻碍写代码,还容易引起冲突,天天在合并分支上浪费时间实在痛苦,项目多了甚至弄出了`subModule`,但没有在根本上解决问题.fis3上线编译已经做了兼容,所有gitlab项目都会自动同步到 `fe/react` 这个大svn目录下,上线只编译当前开发的子项目,对开发者来说,一个项目就是一个git仓库,干净利落

> 新项目不需要新建模块吗?

不需要,在 http://gitlab.baidu.com/groups/tb 下新建git仓库即可,发布时的 `moduleName` 和 `subModuleName`可以随意填写

> 代码规范提示错误咋办?

所有js后缀名改为`jsx`,就可以通过百度代码规范了,目前还没有针对次的代码规范出台,继续关注中

> 如何以 `GBK` 编码上线?

`index.html` 中 `charset` 改为 `gbk` ,同时 `fis-conf.js` 中设置 `charset: 'gbk'`