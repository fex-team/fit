import React from 'react'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let style = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: this.props.width || '100%',
            height: this.props.height || '200px'
        }

        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}
