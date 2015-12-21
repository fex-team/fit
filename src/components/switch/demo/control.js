import React from 'react'
import Switch from 'tb-switch'

const style = {
    marginRight: 10
}

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Switch checked style={style}/>
                <Switch disabled style={style}/>
            </div>
        )
    }
}