import React from 'react'
import Button from 'tb-button'

const style = {
    marginLeft: 5
}

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Button type="primary">primary</Button>
                <Button type="success"
                        style={style}>primary</Button>
                <Button type="info"
                        style={style}>info</Button>
                <Button type="warning"
                        style={style}>warning</Button>
                <Button type="danger"
                        style={style}>danger</Button>
                <Button type="dark"
                        style={style}>dark</Button>
            </div>
        )
    }
}