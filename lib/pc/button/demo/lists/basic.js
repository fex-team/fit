import React from 'react'
import Button from 'fit-button'

const style = {
    margin: 3
}

export default class Demo extends React.Component {
    handleClick() {
        console.log('基本用法 点击')
    }

    render() {
        return (
            <div>
                <Button style={style}
                        onClick={this.handleClick.bind(this)}>Default</Button>
                <Button disabled
                        style={style}>Disabled</Button>
            </div>
        )
    }
}