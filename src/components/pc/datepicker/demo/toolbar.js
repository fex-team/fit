import React from 'react'
import { DateRange } from 'fit-datepicker'
import { defaultRanges } from 'react-date-range'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <DateRange toolbar/>
            </div>
        )
    }
}