import React from 'react'
import Button from 'fit-button'

const style = {
    margin: 3
}

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Button type="primary"
                        style={style}
                        addonLeft="plus">Primary</Button>
                <Button type="info"
                        style={style}
                        addonLeft="trash-o">Info</Button>
                <Button type="success"
                        style={style}
                        addonRight="minus">Success</Button>
                <Button type="warning"
                        style={style}
                        addonLeft="circle">Warning</Button>
                <Button style={style}
                        addonLeft="plus">Deafult</Button>
            </div>
        )
    }
}