import React from 'react'
import { DateRange } from 'react-date-range'
import defaultRanges from './default-ranges'
import './index.scss'

export default class FitDateRange extends React.Component {
    render() {
        let customOpts = {}

        if (this.props.toolbar) {
            customOpts.ranges = defaultRanges
        }

        return (
            <div className="_namespace">
                <DateRange calendars={this.props.calendars}
                           onChange={this.props.onChange.bind(this)} {...customOpts}/>
            </div>
        )
    }
}

FitDateRange.defaultProps = {
    onChange: ()=> {
    },
    calendars: 1,
    toolbar: false
}