# 动态获取数据 + 简单分页

- `beforeSend`的第二个参数是分页回调,`page`表示当前页数
- `success`的第二个参数是分页回调,`next`赋值为`true`表示还有下一页,为`false`则下一页按钮变灰