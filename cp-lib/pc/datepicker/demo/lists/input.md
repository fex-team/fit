# 输入框 & 回调

`width` 参数控制输入框的宽度

`type` 有两个值 `calendar` `dateRange` 分别是日历和范围日历

`onChange` 回调返回值是显示在输入框的字符串,同时也会存储在其`state.date` 或 `state.startDate` `state.endState`中,第一个参数是moment对象