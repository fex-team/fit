import React from 'react'
import Button from 'fit-button'

const style = {
    margin: 3
}

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Button type="primary" style={style} addon-left="plus">Primary</Button>
                <Button type="info" style={style} addon-left="trash-o">Info</Button>
                <Button type="success" style={style} addon-right="minus">Success</Button>
                <Button type="warning" style={style} addon-left="circle">Warning</Button>
                <Button style={style} addon-left="plus">Deafult</Button>
            </div>
        )
    }
}