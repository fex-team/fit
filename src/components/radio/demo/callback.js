import React from 'react'
import Radio from 'fit-radio'

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
                <Radio onChange={this.handleCheck.bind(this)}
                          style={{marginRight:10}}>回调函数</Radio>
                {this.state.checked ? '已选中' : '未选中'}
            </div>
        )
    }
}