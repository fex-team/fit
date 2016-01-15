import React from 'react'
import request from 'superagent'
import defaultStyle from './style'

export default class Submit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
    }

    handleSubmit() {
        // ti 标题
        // co 内容
        // fid 吧id
        // word 吧名
        // src 来源 发帖:2 回复,楼中楼:1
        // z 帖子id
        // floor 楼层,楼中楼使用
        // tag 未知,一般是11
        // upload_img_info 图片信息
        // tbs csrf防御

        let data = {
            co: this.state.content,
            tag: 11,
            fid: this.props.forumId,
            word: this.props.forumName,
            tbs: window.tbs
        }

        switch (this.props.type) {
        case 'post':
            data.ti = this.props.title
            data.src = 2
            break
        case 'reply':
            data.src = 1
            data.z = this.props.threadId
            break
        case 'comment':
            data.src = 1
            data.z = this.props.threadId
            data.pid = this.props.postId
            break
        }

        request.post('/mo/q/apubpost')
            .send(data)
            .type('form')
            .end((err, res)=> {
                if (err) {
                    return console.log(err)
                }

                if (res.body.no !== 0) {
                    console.log(res.body.error)
                }
            })
    }

    handleInputChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    render() {
        let style = Object.assign({}, defaultStyle, this.props.style)

        return (
            <div style={style.container}>
                <div style={style.font}></div>
                <input onChange={this.handleInputChange.bind(this)}
                       style={style.input}
                       placeholder="想说点什么.."/>
                <div onClick={this.handleSubmit.bind(this)}
                     style={style.submit}>发送
                </div>
            </div>
        )
    }
}

Submit.defaultProps = {
    // @desc 样式
    // @type object
    // @enum
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
    title: ''
}