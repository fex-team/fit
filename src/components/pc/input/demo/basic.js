import React from 'react'
import Input from 'fit-input'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Input/>
                <Input label="姓名"
                       labelWidth={60}
                       style={{marginTop:10}}/>
                <Input addonLeft="高度"
                       addonRight="%"
                       style={{marginTop:10}}/>
            </div>
        )
    }
}