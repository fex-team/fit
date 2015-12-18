import React from 'react'
import classNames from 'classnames'
import './index.scss'

export default class SimplePagination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: this.props.defaultPage
        }
    }

    // 翻页
    handleChange(page, disable) {
        if (disable)return
        this.setState({
            currentPage: page
        }, ()=> {
            this.props.onChange(page)
        })
    }

    render() {
        let beforeClass = classNames({
            'before': true,
            'disabled': this.state.currentPage === 1
        })

        let afterClass = classNames({
            'after': true,
            'disabled': !this.props.next
        })

        return (
            <nav className="_namespace">
                <ul className="pager">
                    <li>
                        <span onClick={this.handleChange.bind(this,this.state.currentPage-1,this.state.currentPage === 1)}
                              className={beforeClass}>上一页</span>
                    </li>
                    <li>
                        <span onClick={this.handleChange.bind(this,this.state.currentPage+1,!this.props.next)}
                              className={afterClass}>下一页</span>
                    </li>
                </ul>
            </nav>
        )
    }
}

SimplePagination.defaultProps = {
    defaultPage: 1
}