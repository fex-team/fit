import React from 'react'
import Pagination from 'fit-pagination'

export default class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    handleChange() {
        this.setState({
            loading: true
        })
    }

    render() {
        return (
            <Pagination loading={this.state.loading}
                        onChange={this.handleChange.bind(this)}
                        next={true}/>
        )
    }
}