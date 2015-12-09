import React from 'react'
import classnames from 'classnames'
import 'tb-style'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let btnClass = classnames({
            'btn': true,
            ['btn-' + this.props.type]: true,
            'disabled': this.props.disabled
        })

        return (
            <button {...this.props} className={btnClass}>{this.props.children}</button>
        )
    }
}

Layout.defaultProps = {
    type: 'default',
    disabled: false
}