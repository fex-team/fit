### 改动日志

#### 2016.5.22

- `fit-select` 源码改为typescript
- `fit-select` 改为material风格
- `fit-timepicker` 指针拖拽响应范围增大，让指针更容易被选中
- `fit-table` 兼容 `fit-input`
- `fit-table` 响应式表格修复
- `fit-transmit-transparently` 新增第三个参数 ignore 某些 props，可以选择性透传

#### 2016.5.20

- tsx 源码组件的文档可以被正确显示了
- `fit-number` 源码改为typescript
- `fit-number` 兼容fit-input
- `fit-autocomplete` 源码改为typescript
- `fit-autocomplete` 兼容fit-input
- `fit-input` 改为 material 风格
- `fit-input` 源码改为typescript
- `fit-input` `fit-number` `fit-autocomplete` 版本号升级到 4.0
- `fit-datepicker` `fit-timepicker` 兼容fit-input
- `fit-input` 支持验证

#### 2016.5.16

- `fit-modal` 模块源码改为 typescript
- 所有pc模块取消对 `fit-style` 模块的依赖
- 所有组件移除 boostrap 依赖,关键样式抽出来保留在组件局部样式中,避免引入组件对页面样式造成冲突
- `fit-radio` disabled鼠标悬停 cursor:default
- `fit-button` 新增 secondary 样式
- `fit-select` 修正搜索时选择回调参数错误问题
- 为了展示美观，在demo使用了额外样式，在demo页面可以关闭美化样式

#### 2016.5.14

- `fit-menu` 新增 `RightMenu` 组件,使水平菜单可以靠右布局

#### 2016.5.13

- 新增 `fit-isomorphic-build` 通用同构编译脚本
- `fit-isomorphic-redux-tools` `fetch` 如果不设置 url 参数,默认使用 action 作为 url 地址

#### 2016.5.4

- `fit-isomorphic-redux-tools` 新增 `serverRender` `service` 等核心方法,详细用法见 https://github.com/fex-team/fit/issues/1

#### 2016.4.22

- 新增 `fit-isomorphic-redux-tools` ,是同构app的辅助工具,提供了许多类与方法

#### 2016.4.21

- 所有贴吧组件都改为 `typescript`

#### 2016.4.20

- `tb-captcha-drag` 源码已改为 `typescript`

#### 2016.4.18

- 升级到 react 15.x 所有组件升级到 V3 大版本

#### 2016.4.17

- `fit-render-to` 源码已改为 `typescript`
- `tb-share` `tb-track` `tb-captcha` `tb-icon` 源码已改为 `typescript`

#### 2016.4.16

- `fit-badge` `fit-reset` `fit-scale` 源码已改为 `typescript`
- `fit-render-to` 可以任意渲染组件到任何dom结构上,移动到通用组件

#### 2016.4.14

- `fit-table` `edit`:`beforeSend` 参数改为 `rowInfo:Object`, `key:string`, `editValue:any` 分别是:当前修改行信息,当前修改key,当前修改后的值

#### 2016.4.12

- `fit-modal` 设置 `backdropClickToClose` 控制点击背景幕是否自动关闭模态框
- `fit-modal` 设置 `size` 控制模态框大小

#### 2016.4.11

- `fit-tag` 源码已改为 `typescript`

#### 2016.4.7

- `fit-button` 源码已改为 `typescript`

#### 2016.4.6

- `tb-captcha-drag` 新增拖拽验证码组件

#### 2016.4.4

- `fit-timeago` `fit-chat` `fit-chat-box` 源码已改为 `typescript`
- `fit-datepicker` 修复了没有选择小时级别,input 依然会精确到小时的bug

#### 2016.4.1

- 新增 `fit-transmit-transparently` 这是个修饰工具组件,用来做props安全透传

#### 2016.3.27

- 所有组件都发布了v2.0版本,这个版本正在使用typescript重构,0.x,1.x版本将不再更新

#### 2016.3.21

- 新增 `fit-progress` 进度条组件

#### 2016.3.18

- 新增 `fit-tooltip` pc组件,鼠标移上去显示文字提示
- 新增 `fit-tag` pc组件,用到标签的时候就可以使用它啦
- `fit-table` 新增 `getAllRows` 获取当前表格页面所有数据 `getCurrentNotSelectRows` 获取当前表格页面所有未选中的数据

#### 2016.3.16

- 新增 `fit-badge` 通用组件,显示小徽标数

#### 2016.3.15

- 所有移动端组件由`fiten`前缀,改为`fit`前缀,现在所有通用组件格式都是`fit-xxx`
- `fit-color` 移动到 `tb-color`,因为这个颜色是专门为贴吧做的
- 由于fis支持npm的插件正式稳定版发布了,所以移除readme中`fis3 install`的安装提示,所有组件都请使用`npm install`安装

#### 2016.3.11

- `fit-blue-bar` 修正在贴吧客户端不显示的判断逻辑

#### 2016.3.10
- 重构完全部组件,全部Fit组件都支持透传
- `fit-modal` 将模态框渲染到body的直接子元素上,避免出现样式bug
- `fit-scroll-listen` 修复抖动问题

#### 2016.3.9

- `fit-layout-global` `fit-editor` `fit-menu` 支持后端渲染
- 新增 `tb-share` 贴吧分享组件
- 新增 `tb-blur-bar` 贴吧顶部栏条

#### 2016.3.8

- `fit-layout-global` 修复侧边栏出现时,页尾长度会超出的bug
- `fit-layout-global` 可以设置 `footer` 的 `newLine=false` 让其在有侧边栏时,不单独起一行

#### 2016.3.7

- `fit-editor` markdown富文本编辑器诞生,拥有完整markdown功能以及还需完善的菜单功能.这是个简约&丰富的编辑器,我们不会做得大而全,只是为了在遇到 "这里需要富文本编辑器" 的时候,可以轻松完成需求

#### 2016.3.4

- `tb-emoji` 废除inline-style,使用class,修复了在ios8下缺少前缀的显示bug
- `fit-timeago` 现在可以添加 `loseTime` 参数标识失效时间,单位是毫秒.这意味着在比这个时间更久远的日期不会以友好时间显示,而是以格式化时间显示,可以通过 `loseFormat` 参数调整格式

#### 2016.3.3

- 接入自动化测试,后续逐渐添加组件测试用例,避免多人修改造成的未知bug
- `fit-datepicker` 增加 defaultValue 与 value

#### 2016.3.2

- `fit-select` label现在与`fit-input`一样,默认取消padding
- `fit-select` 补上说明文档

#### 2016.3.1

- `fit-pagination` 新增外部控制跳转方法`jump`
- `fit-table` 修复外部调用jump分页不刷新的bug

#### 2016.2.29

- `tb-captcha-drag` 贴吧拖拽验证码第一版
- `fit-table` 添加外部finder
- `fit-timepicker` 支持清除输入框
- `fit-input` 添加清除接口

#### 2016.2.23

- `fit-menu` 如果设置了 `to` 参数,会自动展开当前active项的所有父级

#### 2016.2.17

- `fit-captcha` 修复native支持的bug,现在这个插件是全端通用的了
- `fit-input` 支持 autocomplete 参数控制是否禁用自动填充
- `fit-auto-complete` 新增3个特性

#### 2016.2.16

- 新增通用组件库
- `fit-timeago` 新增一个通用组件:友好时间
- `fit-tabs` 修复缺少的`react-dom`引用

#### 2016.2.11

- 完成40个组件,包括 `pc` + `mobile` + `贴吧`