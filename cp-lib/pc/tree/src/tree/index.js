import React from 'react'

export default class Tree extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let Children = React.Children.map(this.props.children, (item)=> {
            return React.cloneElement(item, {
                defaultExpendAll: this.props.defaultExpendAll
            })
        })

        return (
            <div>
                {Children}
            </div>
        )
    }
}

Tree.defaultProps = {
    defaultExpendAll: false
}