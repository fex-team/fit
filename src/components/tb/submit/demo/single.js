import React from 'react'
import Button from 'fit-button'
import { send } from 'tb-submit'

export default class Demo extends React.Component {
    handleClick() {
        send({
            content: '独立测试内容',
            forumId: 18778278,
            forumName: 'ascode',
            threadId: 3741817563,
            type: 'reply'
        })
    }

    render() {
        return (
            <Button onClick={this.handleClick.bind(this)}>点击发送请求</Button>
        )
    }
}