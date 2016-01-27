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
                        size="lg"
                        addonLeft="music"
                        style={style}>最大</Button>
                <Button type="primary"
                        size="lg"
                        style={style}>最大</Button>
                <Button type="primary"
                        size="lg"
                        addonRight="star"
                        style={style}>最大</Button>
                <Button type="success"
                        style={style}>适中</Button>
                <Button type="warning"
                        size="xs"
                        addonLeft="bus"
                        style={style}>小</Button>
                <Button type="warning"
                        size="xs"
                        style={style}>小</Button>
                <Button type="warning"
                        size="xs"
                        addonRight="book"
                        style={style}>小</Button>
                <Button type="info"
                        size="sm"
                        addonRight="bomb"
                        style={style}>最小</Button>
                <Button type="info"
                        size="sm"
                        style={style}>最小</Button>
                <Button type="info"
                        size="sm"
                        addonLeft="bank"
                        style={style}>最小</Button>
            </div>
        )
    }
}