import React from 'react'
import './index.scss'

export default class Title extends React.Component {
    render() {
        return (
            <div className="_namespace">
                <div className="title">{this.props.options.text.value}</div>
                <div className="description">{this.props.options.description.value}</div>
            </div>
        )
    }
}

Title.defaultProps = {
    name     : '盖亚标题',
    uniqueKey: 'title',
    icon     : 'flag',
    options  : {
        text: {
            label   : '文字选项',
            value   : 'Gaea',
            editor  : 'text',
            editable: true
        },

        description: {
            label   : '简介',
            value   : '可视化在线编辑器, react + typescript 集成 Fit 组件精华, 以运行效率为第一优先级, 开源免费, 而且您可以通过 npm 安装这个庞大的家伙',
            editor  : 'text',
            editable: true
        }
    }
}