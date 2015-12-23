import React from 'react'
import Switch from 'fit-switch'

export default class Demo extends React.Component {
    handleChange(checked) {
        console.log('基础回调', checked)
    }

    render() {
        return (
            <Switch onChange={this.handleChange.bind(this)}/>
        )
    }
}