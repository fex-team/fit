import React from 'react'
import Datepicker from 'conic-datepicker'

export default class formatDemo extends React.Component {
    render () {
        return (
            <Datepicker defaultValue="2015/01/01" format="yyyy/MM/dd" />
        )
    }
}