import React from 'react'
import TimePicker from 'fit-timepicker'

export default class Demo extends React.Component {
    handleChange(date) {
        console.log(date.format('YYYY MM DD'))
    }

    render() {
        return (
            <div>
                <TimePicker onChange={this.handleChange.bind(this)}/>
            </div>
        )
    }
}