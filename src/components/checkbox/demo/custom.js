import React from 'react'
import Checkbox from 'tb-checkbox'

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
                <Checkbox label="可受外部控制"
                          checked={this.state.checked}
                          disabled={this.state.disabled}
                          style={{marginBottom:10}}/>
                <br/>
                <Checkbox label="选中"
                          onChange={this.handleCheck.bind(this)}/>
                <Checkbox label="禁用"
                          style={{marginLeft:10}}
                          onChange={this.handleDisable.bind(this)}/>
            </div>
        )
    }
}