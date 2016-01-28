import React from 'react'

export default class TabPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        if (!this.props.active) {
            return null
        }

        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

TabPanel.defaultProps = {
    // @desc 对应Tabs的defaultActiveKey
    key: '',

    // @desc 标签名
    tab: '标签',

    // @desc 是否处于显示状态
    active: false
}