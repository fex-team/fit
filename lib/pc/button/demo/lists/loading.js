import React from 'react'
import Button from 'fit-button'

export default class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    handleLoadingClick() {
        this.setState({
            loading: true
        })
    }

    handleCancelLoadingClick() {
        this.setState({
            loading: false
        })
    }

    render() {
        return (
            <div>
                <Button type="primary"
                        loading={this.state.loading}>按钮</Button>
                <Button onClick={this.handleLoadingClick.bind(this)}
                        style={{marginLeft:10}}>点我进入loading</Button>
                <Button onClick={this.handleCancelLoadingClick.bind(this)}
                        style={{marginLeft:10}}>点我取消loading</Button>
            </div>
        )
    }
}