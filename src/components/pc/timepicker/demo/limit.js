import React from 'react'
import TimePicker from 'fit-timepicker'

export default class Demo extends React.Component {
    limitHour(number) {
        return number > 7
    }

    limitMinute(number) {
        return number % 2
    }

    limitSecond(number) {
        return !(number % 5)
    }

    render() {
        return (
            <div>
                <TimePicker limitHour={this.limitHour.bind(this)}
                            limitMinute={this.limitMinute.bind(this)}
                            limitSecond={this.limitSecond.bind(this)}/>
            </div>
        )
    }
}