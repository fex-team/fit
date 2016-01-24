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
    // @type string
    key: '',

    // @desc 标签名
    // @type string
    tab: '标签',

    // @desc 是否处于显示状态
    // @type bool
    active: false
}