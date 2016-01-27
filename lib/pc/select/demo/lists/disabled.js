import React from 'react'
import { Select, Option } from 'fit-select'

export default class Demo extends React.Component {
    render() {
        return (
            <Select value="a">
                <Option value="a">小明</Option>
                <Option value="b">小红</Option>
                <Option value="d"
                        disabled>小王</Option>
                <Option value="e">小李</Option>
            </Select>
        )
    }
}