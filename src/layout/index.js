import React from 'react'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let childs = this.props.children.map((children, index)=> {
            return React.cloneElement(children, {
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
