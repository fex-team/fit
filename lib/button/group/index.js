import React from 'react'
import classnames from 'classnames'

export default class ButtonGroup extends React.Component {
    render() {
        let groupClass = classnames({
            'btn-group': !this.props.vertical,
            'btn-group-vertical': this.props.vertical
        })

        return (
            <div {...this.props} className={groupClass}>
                {this.props.children}
            </div>
        )
    }
}
