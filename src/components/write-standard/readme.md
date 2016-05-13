### 组件编写遵守准则

开源项目由大家一起贡献,为保证项目质量,让组件具有良好的复用性,下面列出的组件编写准则请务必遵守!

#### 1.`_namespace`的运用

在`render`函数中,最外层`div`添加 `className="_namespace"`,就可以让当前目录引用的`scss`生效啦

#### 2.`value`与`defaultValue`

有`value`属性的组件,尽量包含`defaultValue`属性

`value` 属性的含义是,这个组件的属性可以被外部定义,外部赋予的`value`被改变后,组件value属性请务必刷新,也就是说这是一个强约束

`defaultValue` 是默认属性,初始化时如果没有定义 `value`,则它生效,并且后续 `props.value`被改变,组件请务必**不要刷新**其控制的值

值得一提的是,把`value`从`props`放到`state`中管理,而不要直接从`props`中获取

下面是一种实现通用的写法:

~~~js
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
~~~

#### 3.在`render`中正确透传

~~~js
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
~~~

注意将用到的`props`内容先通过枚举的方式定义出来,带来的好处是可以通过`{...others}`将额外的props正确透传

引用classnames,将className也透传到className中,这种组件被引用时,不但可以通过`style`标签定制最外层属性,还可以通过className定义额外的class属性

#### 4.末尾不要添加分号

由于编译产出会在每行末尾默默加上分号,这项体力活就不需要人工参与了,如果因此导致编译出错,请参考第五条

#### 5.正确的代码风格与空行

请统一使用es6风格编码,常量使用`const`,用`let`代替`var`

请统一使用`class`语法糖,函数之间空一行

尽量不要写一些自作聪明看似很神奇的代码,要体谅别人阅读的难处,例如:

~~~js
// bad
const foo = (isDone) => {
    if (isDone) {
        return true
    }
    return false
}

// good
const foo = (isDone) => {
    if (isDone) {
        return true
    } else {
        return false
    }
}
~~~

#### 6.所有监听事件销毁时立即释放

所有监听事件需要在 `componentWillUnmount` 时取消监听

#### 7.对全局产生影响的函数放在生命周期内

例如 `fit-layout-global` 插件需要修改 `body` 的样式,需要在 `componentWillMount` 时进行修改, `componentWillUnmount` 时还原修改,如果写在函数生命周期之外,即便没有引用也会修改 `body` 的样式,可能造成不符合预期的样式

#### 8.使用redux

注意不要执行监听的所有事件,要根据不同触发事件做不同响应,在 `reducers` 中注册一个 `lastAction`:

~~~js
const LastAction = (state = [], action)=> {
    return action
}
~~~

在组件监听中,根据 `lastAction` 执行不同逻辑
~~~js
this.unsubscribe = store.subscribe(() => {
    switch (store.getState().LastAction.type) {
    case CHANGE_ACTIVE_TITLE:
        // do something
        break
    }
})
~~~

#### 9.正确使用路由外部跳转

外部直接使用`react-router`跳转时,不要使用浏览器api,使用如下方法:

升级到 `react-router` `V2.x`:

~~~js
import { browserHistory } from 'react-router'
browserHistory.push(...)
~~~

#### 10.尽量不使用inline-style

避免给拓展和继承带来麻烦,native可以通过脚手架自动生成`inline-style`

#### 11.redux 数据与 组件 state 解耦

不要将 redux 附属与任何组件,页面数据应该与 组件 路由 解耦