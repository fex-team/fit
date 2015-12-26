import React from 'react'
import Button from 'fit-button'
import Message from 'fit-message'

export default class Demo extends React.Component {
    onClick() {
        Message.info('显示提示', 2, ()=> {
            Message.error('关闭了')
        })
    }

    render() {
        return (
            <Button onClick={this.onClick.bind(this)}>关闭回调</Button>
        )
    }
}