import React from 'react'
import TimePicker from 'fit-timepicker'

export default class Demo extends React.Component {
    handleChange(moment) {

    }

    render() {
        return (
            <div>
                <TimePicker onChange={this.handleChange.bind(this)}/>
            </div>
        )
    }
}