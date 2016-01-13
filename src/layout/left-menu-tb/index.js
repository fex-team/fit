import React from 'react'
import menuFactory from '../menu-factory'
import './index.scss'

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
}]

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let MenuBase = menuFactory(menuBase)

        return (
            <div className="_namespace">
                <div className="title">基本</div>
                {MenuBase}
            </div>
        )
    }
}