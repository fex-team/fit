import React from 'react'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let style = {
            position: 'absolute',
            top: this.props.top || 0,
            bottom: this.props.bottom || 0,
            overflow: 'auto',
            left: this.props.left || 0,
            right: this.props.right || 0
        }

        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}
