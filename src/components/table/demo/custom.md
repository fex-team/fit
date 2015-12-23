# 自定义功能

`extend` 回调属性可以添加自定义内容,返回html内容,添加到 **左下角区域**

第一个传参(table)返回很多可用属性,有:
 
- `table.getCurrentSelectRows()` 获取当前选择的行列表,如果开启了**行选择**功能
- `table.currentPage()` 获取当前页数
- `table.jump(page)` 跳转到某一页
- `table.info(message, type)` 显示表格级别提示,第一个参数为提示内容,第二个为类型,可选项为 `success` `danger`