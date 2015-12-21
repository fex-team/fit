import React from 'react'
import Button from 'tb-button'

const style = {
    margin: 3
}

export default class Demo extends React.Component {
    handleClick() {
    }

    render() {
        return (
            <div>
                <Button style={style} onClick={this.handleClick.bind(this)}>Default</Button>
                <Button disabled style={style}>Disabled</Button>
            </div>
        )
    }
}