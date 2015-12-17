import React from 'react'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let childs = React.Children.map(this.props.children, (child, index)=> {
            return React.cloneElement(child, {
                key: index,
                header: this.props.header || 0,
                sidebar: this.props.sidebar || 0,
                footer: this.props.footer || 0
            })
        })

        return (
            <div>
                {childs}
            </div>
        )
    }
}