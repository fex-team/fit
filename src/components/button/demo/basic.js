import React from 'react'
import Button from '../../../lib/button'

const style = {
    marginLeft: 5
}

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Button>default</Button>
                <Button disabled
                        style={style}>disabled</Button>
            </div>
        )
    }
}