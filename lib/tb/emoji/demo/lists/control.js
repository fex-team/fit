import React from 'react'
import Emoji from 'tb-emoji'

export default class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showEmoji: false
        }
    }

    handleChange(value) {
        console.log('外部控制', value)
    }

    handleToggleShow() {
        this.setState({
            showEmoji: !this.state.showEmoji
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleToggleShow.bind(this)}>点我在自定义位置展示</button>
                <Emoji control
                       visible={this.state.showEmoji}
                       onChange={this.handleChange.bind(this)}/>
            </div>
        )
    }
}