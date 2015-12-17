import React from 'react'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let childs = React.Children.map(this.props.children, (child, index)=> {
            return React.cloneElement(child, {
                key: index
            })
        })

        return (
            <div>
                {childs}
            </div>
        )
    }
}
