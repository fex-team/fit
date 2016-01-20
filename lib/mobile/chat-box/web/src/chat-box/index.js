import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import $ from 'jquery'
import ReactList from '../infinite-list'
import './index.scss'

export default class ChatBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newMessage: 0,
            scrollTop: 0
        }

        this.handleScroll = (event)=> {
            if (!this._isMounted)return

            const $dom = $(this.dom)
            const $content = $dom.find('#j-content')
            const scrollTop = $dom.scrollTop()

            if (scrollTop > $content.height() - $dom.height()) {
                this._touchBottom = true
                if (this.state.newMessage > 0) {
                    this.setState({
                        newMessage: 0,
                        scrollTop: scrollTop
                    })
                }
            } else {
                this._touchBottom = false
                this.setState({
                    scrollTop: scrollTop
                })
            }

            if (scrollTop === 0) {
                this.props.onHitTop()
            }
        }
    }

    componentWillMount() {
        this._isMounted = true
        this._touchBottom = false
    }

    componentDidMount() {
        this.dom = ReactDOM.findDOMNode(this)
        $(this.dom).on('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        this._isMounted = false
        $(this.dom).off('scroll', this.handleScroll)
    }

    componentWillReceiveProps(nextProps) {
        // 如果强制滚动到底部,或者本来就触碰到了底部,就滑动到底部
        if (nextProps.isFixBottom === true || this._touchBottom) {
            setTimeout(()=> {
                this.fixToBottom()
                this.setState({
                    newMessage: 0
                })
            })
        } else {
            // 没有在底部,却接收了新内容,提示
            let newNumber = parseInt(this.state.newMessage) + React.Children.count(nextProps.children) - React.Children.count(this.props.children)
            if (newNumber >= 99) {
                newNumber = '99+'
            }
            this.setState({
                newMessage: newNumber
            })
        }
    }

    fixToBottom() {
        const $dom = $(this.dom)
        $dom.animate({
            scrollTop: $dom.find('#j-content').height()
        })
    }

    render() {
        let containerStyle = {
            height: this.props.height
        }
        if (this.props.direction === 'column-reverse') {
            containerStyle.display = 'flex'
            containerStyle.flexDirection = 'column-reverse'
        }

        return (
            <div className="_namespace"
                 style={containerStyle}>
                <ReactList
                    itemRenderer={this.props.renderItem.bind(this)}
                    length={this.props.count}
                    useTranslate3d={true}
                    direction={this.props.direction}
                    ref="reactList"/>
                {this.state.newMessage === 0 ? null :
                    <div onTouchStart={this.fixToBottom.bind(this)}
                         style={{bottom:-this.state.scrollTop+20}}
                         className="fixed-number">{this.state.newMessage}</div>
                }
            </div>
        )
    }
}

ChatBox.defaultProps = {
    // @desc 高度
    // @type int/string
    height: 200,

    // @desc 是否固定到底部
    // @type bool
    isFixBottom: false,

    // @desc 渲染每个元素的方法
    // @type function
    renderItem: (index, key)=> {

    },

    // @desc 元素总数
    // @type int
    // @required
    count: 0,

    // @desc 触碰到顶部/底时的回调
    // @type function
    onHitTop: ()=> {
    },

    // @desc 从上往下显示或者从下往上显示
    // @type string
    // @enum column column-reverse
    direction: 'column'
}