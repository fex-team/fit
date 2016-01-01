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
                        rounded
                        style={style}>Primary</Button>
                <Button type="success"
                        rounded
                        style={style}>Success</Button>
                <Button type="info"
                        size="xs"
                        rounded
                        style={style}>Info</Button>
                <Button type="warning"
                        size="sm"
                        rounded
                        style={style}>Warning</Button>
                <Button type="danger"
                        rounded
                        style={style}>Danger</Button>
                <Button type="dark"
                        rounded
                        style={style}>Dark</Button>
            </div>
        )
    }
}