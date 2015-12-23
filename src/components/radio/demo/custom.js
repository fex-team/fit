import React from 'react'
import Radio from 'fit-radio'
import Checkbox from 'fit-checkbox'

export default class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            disable: false
        }
    }

    handleCheck(checked) {
        this.setState({
            checked: checked
        })
    }

    handleDisable(checked) {
        this.setState({
            disabled: checked
        })
    }

    render() {
        return (
            <div>
                <Radio checked={this.state.checked}
                       disabled={this.state.disabled}
                       style={{marginBottom:10}}>可受外部控制</Radio>
                <br/>
                <Checkbox onChange={this.handleCheck.bind(this)}>选中</Checkbox>
                <Checkbox style={{marginLeft:10}}
                          onChange={this.handleDisable.bind(this)}>禁用</Checkbox>
            </div>
        )
    }
}