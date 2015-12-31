import React from 'react'
import { DateInput } from 'fit-datepicker'
import Button from 'fit-button'

export default class Demo extends React.Component {
    handleCalendarChange(date) {
        return date.format('YYYY-MM-DD')
    }

    handleDateRangeChange(date) {
        return {
            start: date.startDate.format('YYYY-MM-DD'),
            end: date.endDate.format('YYYY-MM-DD')
        }
    }

    render() {
        return (
            <div style={{display:'flex'}}>
                <DateInput type="calendar"
                           onChange={this.handleCalendarChange.bind(this)}/>
                <DateInput style={{marginLeft:10}}
                           type="dateRange"
                           width="300"
                           onChange={this.handleDateRangeChange.bind(this)}/>
            </div>
        )
    }
}