import React from 'react'
import Core from './core'

export default class Captcha extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        switch (this.props.type) {
        case 'web':
            break
        case 'native':
            // 如果是native模式,暴露客户端回调全局变量
            window.handleFreshCaptcha = (url) => {
                this.core.handleFreshCaptcha(url)
            }
            break
        }
    }

    // @external
    // 预备刷新验证码
    prepareFreshCaptcha() {
        switch (this.props.type) {
        case 'web':
            this.core.handleFreshCaptcha('/cgi-bin/genimg?' + this.props.vcodeMd5)
            break
        case 'native':
            // 客户端会调用 handleFreshCaptcha 触发全局注册的函数
            window.location.href = "objc:jsChangeVcode(handleFreshCaptcha)"
            break
        }
    }

    getCoreRef(ref) {
        this.core = ref
        if (this.core) {
            this.prepareFreshCaptcha()
        }
    }

    handleSubmit(vcode) {
        console.log('handlesubmit',vcode)
        switch (this.props.type) {
        case 'web':
            this.props.onComplete(vcode)
            break
        case 'native':
            window.location.href = 'objc:jsSubmit(handleFreshCaptcha,' + vcode + ')'
            break
        }
    }

    render() {
        return (
            <Core ref={this.getCoreRef.bind(this)}
                  prepareFreshCaptcha={this.prepareFreshCaptcha.bind(this)}
                  onSubmit={this.handleSubmit.bind(this)}/>
        )
    }
}

Captcha.defaultProps = {
    type: 'web', // web native,
    vcodeMd5: '',
    onComplete: ()=> {
    }
}