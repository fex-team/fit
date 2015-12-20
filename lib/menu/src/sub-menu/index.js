import React from 'react'
import classNames from 'classnames'
import './index.scss'
import { setActive } from  '../actions'

export default class SubMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapse: this.props.collapse || true,
            active: this.props.active || false
        }
    }

    handleClick () {
        let childrenCount = React.Children.count(this.props.children)

        if (childrenCount === 0) {
            location.hash = this.props.to
            this.active()
            setActive(this)
        }
        else {
            this.setState({
                collapse: !this.state.collapse
            })
        }
    }

    active () {
        this.setState({
            active: true
        })
    }

    unActive () {
        this.setState({
            active: false
        })
    }

    render() {
        let inverse = this.props.inverse
        let childrenCount = React.Children.count(this.props.children)

        if (this.props.globalInverse) {
            inverse = !inverse
        }

        let className = classNames({
            '_namespace': true,
            'brand': this.props.brand,
            'inverse': inverse,
            'vertical':this.props.vertical
        })

        let titleClassName = classNames({
            'title': true,
            'active': this.state.active
        })

        let subList = this.state.collapse ? <ul className="sub-list" style={{height: 42 * childrenCount}}>{this.props.children}</ul> :
            <ul className="sub-list" style={{height: 0}}>{this.props.children}</ul>

        let angle = (childrenCount > 0) && (this.state.collapse ? <i className="fa fa-angle-down"></i> :
            <i className="fa fa-angle-down rotate-90"></i>)

        return (
            <div {...this.props} className={className}>
                <div className={titleClassName} onClick={this.handleClick.bind(this)}>
                    {this.props.title}
                    {angle}
                </div>
                {subList}
            </div>
        )
    }
}