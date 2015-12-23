import React from 'react'
import { Select, Option } from 'tb-select'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Select width="300" value="a" label="姓名">
                    <Option value="a">小明</Option>
                    <Option value="b">小红</Option>
                    <Option value="c">小白</Option>
                    <Option value="d">小王</Option>
                    <Option value="e">小李</Option>
                    <Option value="f">小刚</Option>
                </Select>

                <Select width="300" style={{marginTop:10}} value="a" addonLeft="左侧" addonRight="右侧">
                    <Option value="a">小明</Option>
                    <Option value="b">小红</Option>
                    <Option value="c">小白</Option>
                    <Option value="d">小王</Option>
                    <Option value="e">小李</Option>
                    <Option value="f">小刚</Option>
                </Select>
            </div>
        )
    }
}