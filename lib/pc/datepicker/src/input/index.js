import React from 'react'
import Calendar from '../calendar'
import DateRange from '../date-range'
import Input from 'fit-input'

export default class DateInput extends React.Component {
    render() {
        return (
            <div>
                <Input/>
            </div>
        )
    }
}

DateInput.defaultProps = {
    onChange: ()=> {
    }
}