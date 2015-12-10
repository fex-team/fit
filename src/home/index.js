import React from 'react'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '贴吧组件库'
    }

    render() {
        return (
            <div _namespace>
                bootstrap4（基础） + Angulr（样式覆盖） + antd（交互）
            </div>
        )
    }
}