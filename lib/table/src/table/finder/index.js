import React from 'react'
import './index.scss'

export default class Finder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            params: {}
        }
    }

    render() {
        let Finders = this.props.finder.map((item)=> {
            switch (item.type) {
            case 'text':
                return (
                    <div>123</div>
                )
            }
        })

        return (
            <div className="_namespace">
                {Finders}
            </div>
        )
    }
}

Finder.defaultProps = {
    finder: []
}