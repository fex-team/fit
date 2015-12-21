import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'
import './index.scss'
import { setActive } from  '../actions'
import Store from '../store'

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: this.props.active || false
        }
    }

    onClick () {
        if (this.props.noneclick) {
            return
        }
        location.hash = '#' + this.props.to
        this.active()
        setActive(this)
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
        if (this.props.globalInverse) {
            inverse = !inverse
        }

        let className = classNames({
            '_namespace': true,
            'brand': this.props.brand,
            'inverse': inverse,
            'vertical': this.props.vertical,
            'active': this.state.active
        })

        return (
            <div {...this.props} className={className} onClick={this.onClick.bind(this)}>
                <Link to={this.props.to || '#'}>{this.props.children}</Link>
            </div>
        )
    }
}
