import React from 'react'
import Pagination from 'tb-pagination'

export default class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 1
        }
    }

    handleChange(page) {
        this.setState({
            page: page
        })
    }

    render() {
        return (
            <div>
                <Pagination onChange={this.handleChange.bind(this)}
                            next={true}/>
                {this.state.page}
            </div>
        )
    }
}