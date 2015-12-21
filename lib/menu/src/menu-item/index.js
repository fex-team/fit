import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'
import './index.scss'
import { setActive } from  '../actions'

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props)
    }

    onClick () {
        if (this.props.noneclick) {
            return
        }

        this.props.store.dispatch(setActive(this.props.title))
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
            'active': this.props.active
        })

        return (
            <div {...this.props} className={className}>
                <a href={this.props.to}
                      onClick={this.onClick.bind(this)}>
                    {this.props.children}
                </a>
            </div>
        )
    }
}