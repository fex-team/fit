### 改动日志

#### 2016.3.10

- 重构完全部组件,全部Fit组件都支持透传

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