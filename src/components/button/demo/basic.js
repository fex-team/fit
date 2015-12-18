import React from 'react'
import Button from 'conic-button'

const style = {
    margin: 3
}

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Button style={style}>Default</Button>
                <Button disabled
                        style={style}>Disabled</Button>
            </div>
        )
    }
}