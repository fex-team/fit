import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import $ from 'jquery'
import './index.scss'

export default class ChatBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newMessage: 0
        }

        this.handleScroll = (event)=> {
            if (!this._isMounted)return

            const $dom = $(this.dom)
            const $content = $dom.find('#j-content')

            if ($dom.scrollTop() > $content.height() - $dom.height()) {
                this._touchBottom = true
                if (this.state.newMessage > 0) {
                    this.setState({
                        newMessage: 0
                    })
                }
            } else {
                this._touchBottom = false
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
            this.setState({
                newMessage: 1
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
        return (
            <div className="_namespace"
                 style={{height:this.props.height}}>
                <div id="j-content">
                    {this.props.children}
                </div>

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
    isFixBottom: false
}