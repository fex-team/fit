import React from 'react'
import Emoji from 'tb-emoji'
import Tappable from 'react-tappable'
import send from '../send'
import Icon from 'tb-icon'
import Captcha from 'tb-captcha'
import classNames from 'classnames'
import './index.scss'

export default class Submit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            showEmoji: false,
            showCaptcha: false
        }
    }

    handleSubmit(event, vcode = null) {
        const sendParams = {
            content: this.state.content,
            forumId: this.props.forumId,
            forumName: this.props.forumName,
            title: this.props.title,
            threadId: this.props.threadId,
            postId: this.props.postId,
            type: this.props.type
        }

        // 包含验证码
        if (vcode) {
            sendParams.bs = this.vcodeMd5
            sendParams['input_vcode'] = vcode
        }

        send(sendParams, (res)=> {
            // 成功后删除发送内容
            this.setState({
                content: '',
                showCaptcha: false
            })
            this.props.onSuccess(res, sendParams)
        }, (errCode, res)=> {
            // 失败回调
            switch (errCode) {
            case 402:
            case 10101:
                if (vcode === null) {
                    // 不是验证码提交的,刷出验证码
                    this.vcodeMd5 = res.data.vcode_md5
                    this.setState({
                        showCaptcha: true
                    })
                } else {
                    // 在提交验证码,刷新验证码
                    this.refs['captcha'].prepareFreshCaptcha()
                }
                break
            case 419:
                // 操作过于频繁
                if (vcode !== null) {
                    // 在提交验证码,刷新验证码
                    this.refs['captcha'].prepareFreshCaptcha()
                }
                break
            }
        })
    }

    handleInputChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    handleToggleEmoji() {
        this.setState({
            showEmoji: !this.state.showEmoji
        })
    }

    handleHideEmoji() {
        this.setState({
            showEmoji: false
        })
    }

    handleEmojiChange(value) {
        this.setState({
            content: this.state.content + value
        })
    }

    // 验证码输入完毕
    handleCaptchaComplete(vcode) {
        // 带着vcode发帖
        this.handleSubmit(null, vcode)
    }

    render() {
        let containerClass = classNames({
            '_namespace': true,
            'container-bottom': this.props.position === 'bottom'
        })

        return (
            <div style={this.props.style}
                 className={containerClass}>
                <div className="input-container">
                    <Tappable onTap={this.handleToggleEmoji.bind(this)}
                              className="font">
                        <Icon type="smile"/>
                    </Tappable>
                    <input onChange={this.handleInputChange.bind(this)}
                           onFocus={this.handleHideEmoji.bind(this)}
                           className="input"
                           value={this.state.content}
                           placeholder="想说点什么.."/>
                    <Tappable onTap={this.handleSubmit.bind(this)}
                              className="submit">发送
                    </Tappable>
                </div>
                {!this.state.showCaptcha ?
                    <Emoji control
                           visible={this.state.showEmoji}
                           onChange={this.handleEmojiChange.bind(this)}/> : null}
                {this.state.showCaptcha ?
                    <Captcha type="web"
                             vcodeMd5={this.vcodeMd5}
                             ref="captcha"
                             onComplete={this.handleCaptchaComplete.bind(this)}/> : null}
            </div>
        )
    }
}

Submit.defaultProps = {
    // @desc 外层样式
    // @type object
    style: {},

    // @desc 类型 发帖:post 回帖:reply 回复楼中楼:comment
    // @type string
    // @enum post reply comment
    type: 'post',

    // @desc 帖子id
    // @type int
    threadId: -1,

    // @desc 回复id
    // @type int
    postId: -1,

    // @desc 吧id
    // @type int
    forumId: -1,

    // @desc 吧名
    // @type string
    forumName: '',

    // @desc 发帖标题,只有发帖时有效
    // @type string
    title: '',

    // @desc 发帖内容,只有独立模式有效
    // @type string
    content: '',

    // @desc 位置 free表示当前位置,bottom固定在底部
    // @type string
    // @enum free bottom
    position: 'free',

    // @desc 发帖成功后的回调 第一个参数是返回值,第二个参数是当前发送的参数
    // @type function
    onSuccess: (res, params)=> {
    }
}