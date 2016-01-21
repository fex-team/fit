import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import $ from 'jquery'
import ReactList from 'react-list'
import _ from 'lodash'
import './index.scss'

export default class ChatBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newMessage: 0,
            scrollTop: 0,
            datas: []
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

    // @external
    // @desc 在底部添加 datas:添加的数据,object/array toBottom:是否滚动到底部 (滚动到底部只有fullScreen时有效)
    // @type function
    append(datas, toBottom = false) {
        let newDatas = this.state.datas
        newDatas = newDatas.concat(datas)
        this.setState({
            datas: newDatas
        }, ()=> {
            if (toBottom) {
                this.refs['reactList'].scrollTo(this.state.datas.length)
            }
        })
    }

    // @external
    // @desc 在顶部添加 datas:添加的数据,object/array toBottom:是否滚动到底部
    // @type function
    prepend(datas, toBottom = false) {
        let newDatas = this.state.datas
        newDatas = datas.concat(newDatas)
        this.setState({
            datas: newDatas
        }, ()=> {
            if (toBottom) {
                this.refs['reactList'].scrollTo(this.state.datas.length)
            }
        })
    }

    // 封装 renderItem
    renderItem(index, key) {
        return this.props.renderItem(this.state.datas[index], index)
    }

    render() {
        let containerStyle = {
            height: this.props.height
        }

        return (
            <div className="_namespace"
                 style={containerStyle}>
                <ReactList
                    itemRenderer={this.renderItem.bind(this)}
                    length={this.state.datas.length}
                    useTranslate3d={true}
                    pageSize={this.props.fullScreen?this.state.datas.length:10}
                    initialIndex={this.props.fullScreen?-1:null}
                    type="variable"
                    ref="reactList"/>
                {this.state.newMessage === 0 ? null :
                    <div style={{bottom:-this.state.scrollTop+20}}
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

    // @desc 渲染每个元素的方法
    // @type function
    renderItem: (item, index)=> {

    },

    // @desc 是否显示完全（不完全的地方会随着滚动渐渐补全）
    // @type bool
    fullScreen: false,

    // @desc 触碰到顶部/底时的回调
    // @type function
    onHitTop: ()=> {
    }
}