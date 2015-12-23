import React from 'react'
import Radio from 'fit-radio'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Radio size="large">大尺寸</Radio>
                <Radio size="small"
                       style={{marginLeft:20}}>小尺寸</Radio>
            </div>
        )
    }
}