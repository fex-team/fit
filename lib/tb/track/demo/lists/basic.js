import React from 'react'
import Button from 'fit-button'
import Track from 'tb-track'

const style = {
    margin: 3
}

export default class Demo extends React.Component {
    handleClick() {
        Track({
            task: 'Fit'
        })
    }

    render() {
        return (
            <Button style={style}
                    onClick={this.handleClick.bind(this)}>发送日志</Button>
        )
    }
}