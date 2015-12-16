import React from 'react'

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let style = {
            position: 'absolute',
            left: 0,
            top: this.props.header,
            bottom: this.props.footer,
            overflow: 'auto',
            width: this.props.width
        }

        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}
