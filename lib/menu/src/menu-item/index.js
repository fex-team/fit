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
            'vertical': this.props.vertical
        })

        let style = {
            width: this.props.vertical ? '100%' : null
        }

        if (this.props.to) {
            return (
                <div {...this.props} style={style} className={className}>
                    <Link to={this.props.to}>{this.props.children}</Link>
                </div>
            )
        }

        return (
            <div {...this.props} style={style} className={className} onClick={this.props.onClick}>
                <span className="text-label">{this.props.children}</span>
            </div>
        )
    }
}

MenuItem.defaultProps = {
    onClick: ()=> {
    }
}