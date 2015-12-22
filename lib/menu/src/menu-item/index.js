import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'
import './index.scss'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
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
            'vertical': this.props.vertical
        })

        let style = {
            width:this.props.vertical?'100%':null
        }

        return (
            <div {...this.props} style={style} className={className}>
                <Link>{this.props.children}</Link>
            </div>
        )
    }
}