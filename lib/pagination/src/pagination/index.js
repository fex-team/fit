import React from 'react'
import classnames from 'classnames'

export default class ButtonGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <nav>
                <ul className="pager">
                    <li><span className="before">Previous</span></li>
                    <li><span className="after">Next</span></li>
                </ul>
            </nav>
        )
    }
}
