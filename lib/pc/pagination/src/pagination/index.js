import React from 'react'
import Simple from './simple'
import AllPage from './all-page'

export default class ButtonGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let child = null

        if (this.props.allPage) {
            child = (
                <AllPage {...this.props}/>
            )
        } else {
            child = (
                <Simple {...this.props}/>
            )
        }

        return (
            <div>{child}</div>
        )
    }
}
