import React from 'react'
import Number from 'fit-number'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Number width="150"/>
                <Number style={{marginTop:10}}/>
                <Number label="长度"
                        labelWidth={60}
                        style={{marginTop:10}}/>
                <Number addonLeft="高度"
                        addonRight="%"
                        style={{marginTop:10}}/>
            </div>
        )
    }
}