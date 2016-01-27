# 基本

- `type` 为分布场景,ios&andoird设置为 `native`, pc&h5设置为 `web`,默认为 `web`
- `vcodeMd5` web模式中初始化用
- `onComplete` web模式中用户输入完毕的回调

`native` 模式下,会自动被客户端调起,并自动完成验证流程

`web` 模式下,手动显示出来,并设置其传入 `vcodeMd5` 会自动初始化,输入完成时 `onComplete` 函数第一个参数是用户输入的 `vcode` ,第二个回调函数 `refresh()` 可以刷新验证码,如果提交失败的话