import React from 'react'
import menuFactory from '../menu-factory'

const menuBase = [{
    title: '日志请求 Track',
    path: '/tb/track',
    icon: 'send'
}, {
    title: '验证码 Captcha',
    path: '/tb/captcha',
    icon: 'bullseye'
}, {
    title: '发帖 Submit',
    path: '/tb/submit',
    icon: 'comment'
}, {
    title: '顶部蓝条 BlueBar',
    path: '/tb/bluebar',
    icon: 'bars'
}, {
    title: '图片容器 Image',
    path: '/tb/image',
    icon: 'picture-o'
}]

const menuShow = [{
    title: '字体图标 Icon',
    path: '/tb/icon',
    icon: 'fonticons'
}, {
    title: '表情库 Emoji',
    path: '/tb/emoji',
    icon: 'fonticons'
}]

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let MenuBase = menuFactory(menuBase)
        let MenuShow = menuFactory(menuShow)

        return (
            <div className="_namespace">
                <div className="title">基本</div>
                {MenuBase}
                <div className="title">展示</div>
                {MenuShow}
            </div>
        )
    }
}