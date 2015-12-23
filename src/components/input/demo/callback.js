import React from 'react'
import Input from 'tb-input'

export default class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null
        }
    }

    handleChange(value) {
        this.setState({
            value: value
        })
    }

    render() {
        return (
            <div>
                <Input value={this.state.value} onChange={this.handleChange.bind(this)}/>
                {this.state.value}
            </div>
        )
    }
}