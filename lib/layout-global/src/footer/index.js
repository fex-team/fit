import React from 'react'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let style = {
            position: 'absolute',
            left: 0,
            bottom: 0,
            height: this.props.footer,
            width: '100%'
        }

        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}