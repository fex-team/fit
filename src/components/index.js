import React from 'react'
import './index.scss'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '组件库'
    }

    render() {
        return (
            <div className="_namespace">
                123
            </div>
        )
    }
}