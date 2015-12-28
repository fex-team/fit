import React from 'react'
import { DateRange } from 'react-date-range'

export default class formatDemo extends React.Component {
    handleChange(date) {
        console.log(date.startDate.format('YYYY MM DD'), date.endDate.format('YYYY MM DD'))
    }

    render() {
        return (
            <div>
                <DateRange onChange={this.handleChange.bind(this)}/>
            </div>
        )
    }
}