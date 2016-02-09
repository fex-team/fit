# 组件编写遵守准则

开源项目由大家一起贡献,为保证项目质量,让组件具有良好的复用性,下面列出的组件编写准则请务必遵守!

## `_namespace`的运用

在`render`函数中,最外层`div`添加 `className="_namespace"`,就可以让当前目录引用的`scss`生效啦

## 如果有`value`,必须包含`defaultValue`属性

`value` 属性的含义是,这个组件的属性可以被外部定义,外部赋予的`value`被改变后,组件value属性请务必刷新,也就是说这是一个强约束

`defaultValue` 是默认属性,初始化时如果没有定义 `value`,则它生效,并且后续 `props.value`被改变,组件请务必**不要刷新**其控制的值

值得一提的是,把`value`从`props`放到`state`中管理,而不要直接从`props`中获取

下面是一种实现通用的写法:

````js
constructor(props) {
    super(props)
    this.state = {
        value: this.props.value || this.props.defaultValue
    }
}

componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
        this.setState({
            value: nextProps.value
        })
    }
}
````

## 在`render`中正确透传

````js
render() {
    const {className, ...others} = this.props
    const classes = classNames({
        '_namespace': true,
        [className]: className
    })
    return (
        <div {...others} className={classes}>
            {this.props.children}
        </div>
    )
}
````

注意将用到的`props`内容先通过枚举的方式定义出来,带来的好处是可以通过`{...others}`将额外的props正确透传

引用classnames,将className也透传到className中,这种组件被引用时,不但可以通过`style`标签定制最外层属性,还可以通过className定义额外的class属性