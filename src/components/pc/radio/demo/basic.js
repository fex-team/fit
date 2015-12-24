import React from 'react'
import Radio from 'fit-radio'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Radio/>
                <Radio checked/>
                <Radio>点击选中</Radio>
            </div>
        )
    }
}