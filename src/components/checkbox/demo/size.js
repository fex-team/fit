import React from 'react'
import Checkbox from 'tb-checkbox'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Checkbox size="large" label="大尺寸"/>
                <Checkbox size="small" label="小尺寸"
                          style={{marginLeft:20}}/>
            </div>
        )
    }
}