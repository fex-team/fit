import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'
import './index.scss'

export default class MenuItem extends React.Component {
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
            'vertical': this.props.vertical,
            'text-label': true
        })

        let style = {...this.props.style}
        style.minHeight = this.props.height || this.props.minHeight || style.height || style.minHeight

        if (this.props.to) {
            return (
                <Link {...this.props} style={style}
                                      className={className}
                                      to={this.props.to}>{this.props.children}</Link>
            )
        }

        return (
            <div {...this.props} style={style}
                                 className={className}
                                 onClick={this.props.onClick}>{this.props.children}</div>
        )
    }
}

MenuItem.defaultProps = {
    onClick: ()=> {
    }
}