import React from 'react'
import { Select, Option } from 'fit-select'

export default class Demo extends React.Component {
    handleChange(value) {
        console.log('基础用法', value)
    }

    render() {
        return (
            <Select value="b" simple onChange={this.handleChange.bind(this)}>
                <Option value="a">小明</Option>
                <Option value="b">小红</Option>
                <Option value="c">小白</Option>
                <Option value="d">小王</Option>
                <Option value="e">小李</Option>
                <Option value="f">小刚</Option>
            </Select>
        )
    }
}