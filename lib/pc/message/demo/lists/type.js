import React from 'react'
import Button from 'fit-button'
import Message from 'fit-message'

export default class Demo extends React.Component {
    onClick(type) {
        switch (type) {
        case 'info':
            Message.info('默认', 3, 'info')
            break
        case 'success':
            Message.success('成功', 3, 'success')
            break
        case 'error':
            Message.error('错误', 3, 'error')
            break
        case 'warning':
            Message.warning('警告', 3, 'warning')
            break
        case 'loading':
            Message.loading('加载', 3, 'loading')
            break
        }
    }

    render() {
        return (
            <div>
                <Button onClick={this.onClick.bind(this,'info')}>默认</Button>
                <Button onClick={this.onClick.bind(this,'success')}
                        style={{marginLeft:10}}>成功</Button>
                <Button onClick={this.onClick.bind(this,'error')}
                        style={{marginLeft:10}}>错误</Button>
                <Button onClick={this.onClick.bind(this,'warning')}
                        style={{marginLeft:10}}>警告</Button>
                <Button onClick={this.onClick.bind(this,'loading')}
                        style={{marginLeft:10}}>加载</Button>
            </div>
        )
    }
}