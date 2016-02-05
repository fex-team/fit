import React from 'react'
import Checkbox from 'fit-checkbox'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Checkbox/>
                <Checkbox checked/>
                <Checkbox>点击选中</Checkbox>
            </div>
        )
    }
}