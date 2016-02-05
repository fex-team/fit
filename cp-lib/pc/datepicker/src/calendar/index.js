import React from 'react'
import { Calendar } from 'react-date-range'

export default class FitCalendar extends React.Component {
    render() {
        return (
            <div>
                <Calendar date={this.props.date}
                          onChange={this.props.onChange.bind(this)}/>
            </div>
        )
    }
}

FitCalendar.defaultProps = {
    onChange: ()=> {
    },
    date: null
}