import React from 'react'
import { DateInput } from 'fit-datepicker'
import Button from 'fit-button'

export default class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: ''
        }
    }

    handleCalendarChange(date) {
        console.log(date.format('YYYY-MM-DD'))
    }

    handleDateRangeChange(date) {
        console.log(date.startDate.format('YYYY-MM-DD'), date.endDate.format('YYYY-MM-DD'))
    }

    getDate() {
        this.setState({
            date: this.dateRangeRef.state.startDate
        })
    }

    render() {
        return (
            <div style={{display:'flex'}}>
                <DateInput type="calendar"
                           onChange={this.handleCalendarChange.bind(this)}/>
                <DateInput style={{marginLeft:10}}
                           type="dateRange"
                           width="300"
                           ref={(ref)=>{
                                this.dateRangeRef = ref
                           }}
                           onChange={this.handleDateRangeChange.bind(this)}/>
                <Button onClick={this.getDate.bind(this)}
                        style={{marginLeft:10}}>获取日期</Button>
                <span style={{marginLeft:10}}>{this.state.date}</span>
            </div>
        )
    }
}