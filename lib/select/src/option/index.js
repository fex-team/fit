import React from 'react'
import classNames from 'classnames'

export default class Option extends React.Component {
    handleClick() {
        this.props.onClick(this.props.value)
    }

    render() {
        let classname = classNames({
            'active-result':true,
            'group-option':true,
            'active':this.props.active
        })
        return (
            <li onClick={this.handleClick.bind(this)} className={classname}>{this.props.children}</li>
        )
    }
}

Option.defaultProps = {
    active: false
}