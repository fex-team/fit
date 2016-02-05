import React from 'react'
import Number from 'fit-number'

export default class Demo extends React.Component {
    handleChange(value) {
        console.log('number callback', value)
    }

    render() {
        return (
            <Number float="1"
                    step="1.5"
                    onChange={this.handleChange.bind(this)}/>
        )
    }
}