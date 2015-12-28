import React from 'react'
import { Calendar } from 'react-date-range'

export default class Demo extends React.Component {
    handleChange(date) {
        console.log(date.format('YYYY MM DD'))
    }

    render() {
        return (
            <div>
                <Calendar onChange={this.handleChange.bind(this)}/>
            </div>
        )
    }
}