# 查询过滤条件

`finder`参数是查询项数组,每个数组的参数如下:

- `label` 标题
- `key` 提交查询时对应的传参
- `type` 类型,有 `text` `select`
- `placeholder` 占位字符
- `defaultValue` 默认值
- `select` 当 `type` 为 `select` 时, 此参数为选择数组,每一项分别有 `key` `value` 两个属性