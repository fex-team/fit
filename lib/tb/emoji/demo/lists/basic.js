import React from 'react'
import Emoji from 'tb-emoji'

export default class Demo extends React.Component {
    handleChange(value) {
        console.log('基本用法', value)
    }

    render() {
        return (
            <Emoji onChange={this.handleChange.bind(this)}/>
        )
    }
}