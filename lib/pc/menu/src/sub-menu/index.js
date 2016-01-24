import React from 'react'
import classNames from 'classnames'
import './index.scss'

export default class SubMenu extends React.Component {
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

        return (
            <div {...this.props} className={className}>
                {this.props.title}
            </div>
        )
    }
}