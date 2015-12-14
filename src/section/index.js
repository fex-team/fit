import React from 'react'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let style = {
            position: 'absolute',
            top: this.props.header,
            bottom: this.props.footer,
            overflow: 'auto',
            left: this.props.sidebar,
            right: 0
        }

        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}