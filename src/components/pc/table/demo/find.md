# 查询过滤条件

`finder`参数是查询项数组,每个数组的参数如下:

- `label` 标题
- `key` 提交查询时对应的传参
- `type` 类型,有 `text` `select` `enum` `date` `time`
- `props` 传给上述组件的参数
- `placeholder` 占位字符
- `defaultValue` 默认值
- `width` 控制输入框的宽度
- `select` 当 `type` 为 `select` 时, 此参数为选择数组,每一项分别有 `key` `value` 两个属性
- `format` 只有当 `type` 为 `date` 或 `time` 时,这个属性才生效,表示取值规范,默认是 `YYYY-MM-DD HH:mm:ss`
- `beforeSend` 发送请求之前的回调,返回值是一个对象,会与发送参数做merge,第一个传参是`key`,第二个传参是`value`(当`type=time`且`props.type='dateRange'`即范围日历时,`value`是个对象,`start`为开始时间,`end`为结束时间).默认返回值是`{[key]:value}`
- `enum` 当 `type` 为 `enum` 时,此参数为数组,表示从多个选项中选出一项填写过滤内容, 每一项都分别有如上所有属性,但是`type`不能再为`enum`