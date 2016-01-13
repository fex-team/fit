import React from 'react'
import request from 'superagent'
import defaultStyle from './style'

export default class Submit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleSubmit() {
        request.post('/mo/q/apubpost')
            .send({
                // 标题
                ti: '标题',
                // 内容
                co: '内容',
                tag: 11,
                // 图片信息
                upload_img_info: null,
                // 吧id
                fid: 1,
                // 吧名
                word: '吧名',
                src: 1,
                // csrf防御token
                tbs: window.tbs,
                // 帖子id
                z: 1
            })
            .end((res)=> {
                console.log(res)
            })
    }

    render() {
        let style = Object.assign({}, defaultStyle, this.props.style)

        return (
            <div style={style.container}>
                <input style={style.input}/>
                <div onClick={this.handleSubmit.bind(this)}
                     style={style.submit}>发送
                </div>
            </div>
        )
    }
}

Submit.defaultProps = {
    style: {}
}