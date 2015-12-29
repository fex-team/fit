import React from 'react'
import { Calendar } from 'react-date-range'

export default class FitCalendar extends React.Component {
    render() {
        return (
            <div>
                <Calendar onChange={this.props.onChange.bind(this)}/>
            </div>
        )
    }
}

FitCalendar.defaultProps = {
    onChange: ()=> {
    }
}