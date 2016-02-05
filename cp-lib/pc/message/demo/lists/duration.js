import React from 'react'
import Button from 'fit-button'
import Message from 'fit-message'

export default class Demo extends React.Component {
    onClick() {
        Message.info('显示提示', 1)
    }

    render() {
        return (
            <Button onClick={this.onClick.bind(this)}>持续一秒</Button>
        )
    }
}