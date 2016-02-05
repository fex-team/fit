import React from 'react'
import Checkbox from 'fit-checkbox'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Checkbox size="large">大尺寸</Checkbox>
                <Checkbox size="small"
                          style={{marginLeft:20}}>小尺寸</Checkbox>
            </div>
        )
    }
}