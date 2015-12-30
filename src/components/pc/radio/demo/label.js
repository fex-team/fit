import React from 'react'
import { Radio, RadioGroup } from 'fit-radio'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Radio label="fit design"
                       labelWidth="100">点击选中</Radio>

                <RadioGroup value="a"
                            label="fit design"
                            labelWidth="100">
                    <Radio value="a">A</Radio>
                    <Radio value="b">B</Radio>
                    <Radio value="c">C</Radio>
                </RadioGroup>
            </div>
        )
    }
}