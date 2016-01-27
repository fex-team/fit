import React from 'react'
import Checkbox from 'fit-checkbox'

export default class Demo extends React.Component {
    render() {
        return (
            <Checkbox label="我爱fit"
                      labelWidth="100">点击选中</Checkbox>
        )
    }
}