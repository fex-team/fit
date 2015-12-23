import React from 'react'
import Button from 'fit-button'

const style = {
    margin: 3
}

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Button type="primary" size="lg" addon-left="music" style={style}>最大</Button>
                <Button type="primary" size="lg" style={style}>最大</Button>
                <Button type="primary" size="lg" addon-right="star" style={style}>最大</Button>
                <Button type="success" style={style}>适中</Button>
                <Button type="warning" size="xs" addon-left="bus" style={style}>小</Button>
                <Button type="warning" size="xs" style={style}>小</Button>
                <Button type="warning" size="xs" addon-right="book" style={style}>小</Button>
                <Button type="info" size="sm" addon-right="bomb" style={style}>最小</Button>
                <Button type="info" size="sm" style={style}>最小</Button>
                <Button type="info" size="sm" addon-left="bank" style={style}>最小</Button>
            </div>
        )
    }
}