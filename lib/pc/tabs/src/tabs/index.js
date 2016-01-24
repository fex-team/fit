import React from 'react'
import classNames from 'classnames'
import $ from 'jquery'
import './index.scss'

export default class Tabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeKey: this.props.activeKey || this.props.defaultActiveKey,
            moveBarStyle: {},
            isForward: false
        }
    }

    componentWillMount() {
        this.previousTitleIndex = -1
    }

    componentDidMount() {
        this.dom = ReactDOM.findDOMNode(this)

        let activeIndex = -1
        React.Children.map(this.props.children, (item, index)=> {
            if (this.state.activeKey === item.key) {
                activeIndex = index
            }
        })
        this.setActive(this.state.activeKey, activeIndex)
    }

    componentWillReceiveProps(nextProps) {
        if ('activeKey' in nextProps) {
            this.setState({
                activeKey: nextProps.activeKey
            })
        }
    }

    setActive(value, index) {
        if (index === this.previousTitleIndex)return

        const $dom = $(this.dom)

        // tab标题容器
        const titleContainer = $dom.find('.title-container')

        // 当前选择标题元素
        const titleItem = $dom.find(`.title-item-${index}`)

        // 当前标题元素距离容器的做边距
        const currentLeft = titleItem.offset().left - titleContainer.offset().left

        this.setState({
            activeKey: value,
            isForward: index > this.previousTitleIndex,
            moveBarStyle: {
                left: currentLeft,
                right: titleContainer.width() - currentLeft - titleItem.width() - 20
            }
        })

        this.previousTitleIndex = index
    }

    handleTitleClick(value, index) {
        this.setActive(value, index)
        this.props.onChange(value)
    }

    render() {
        let Title = React.Children.map(this.props.children, (item, index)=> {
            let titleClassNames = classNames({
                'active': this.state.activeKey === item.key,
                'title-item': true,
                [`title-item-${index}`]: true
            })
            return (
                <div onClick={this.handleTitleClick.bind(this,item.key,index)}
                     className={titleClassNames}>{item.props.tab}</div>
            )
        })

        let Children = React.Children.map(this.props.children, (item)=> {
            return React.cloneElement(item, {
                active: this.state.activeKey === item.key
            })
        })

        let moveBarClassnames = classNames({
            'move-bar': true,
            'forward': this.state.isForward,
            'backward': !this.state.isForward
        })

        return (
            <div className="_namespace">
                <div className="title-container">
                    <div className={moveBarClassnames}
                         style={this.state.moveBarStyle}></div>
                    {Title}
                </div>
                <div className="content-container">
                    {Children}
                </div>
            </div>
        )
    }
}

Tabs.defaultProps = {
    // @desc 设置默认打开哪个tab,与tabPanel的key对应,只有初始化有效
    // @type string
    defaultActiveKey: '',

    // @desc 同defaultActiveKey,但是可以让其受外部控制
    // @type string
    activeKey: '',

    // @desc 切换tab时的回调
    // @type function
    // @param key:切换tab的key
    onChange: ()=> {
    }
}