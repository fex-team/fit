import React from 'react'
import { DateRange } from 'fit-datepicker'

export default class Demo extends React.Component {
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