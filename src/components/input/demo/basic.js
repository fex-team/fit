import React from 'react'
import Input from 'tb-input'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Input/>
                <Input label="姓名"
                       label-width={60}
                       style={{marginTop:10}}/>
                <Input addon-left="高度"
                       addon-right="%"
                       style={{marginTop:10}}/>
            </div>
        )
    }
}