# 查询过滤条件

`finder`参数是查询项数组,每个数组的参数如下:

- `label` 标题
- `key` 提交查询时对应的传参
- `type` 类型,有 `text` `select` `enum`
- `placeholder` 占位字符
- `defaultValue` 默认值
- `width` 控制输入框的宽度
- `select` 当 `type` 为 `select` 时, 此参数为选择数组,每一项分别有 `key` `value` 两个属性
- `enum` 当 `type` 为 `enum` 时,此参数为数组,表示从多个选项中选出一项填写过滤内容, 每一项都分别有如上所有属性,但是`type`不能再为`enum`