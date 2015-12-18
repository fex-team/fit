import React from 'react'
import Checkbox from 'tb-checkbox'

export default class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }

    handleCheck(checked) {
        this.setState({
            checked: checked
        })
    }

    render() {
        return (
            <div>
                <Checkbox onChange={this.handleCheck.bind(this)}
                          style={{marginRight:10}}
                          label="回调函数"/>
                {this.state.checked ? '已选中' : '未选中'}
            </div>
        )
    }
}