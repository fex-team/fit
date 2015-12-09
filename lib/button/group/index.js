import React from 'react'
import classnames from 'classnames'

export default class ButtonGroup extends React.Component {
    render() {
        return (
            <div className="btn-group">
                {this.props.children}
            </div>
        )
    }
}
