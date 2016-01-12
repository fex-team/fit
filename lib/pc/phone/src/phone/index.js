import React from 'react'
import './index.scss'
import statusBarImg from './image/status-bar.png'

export default class Phone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="_namespace mobile phone">
                <img src={statusBarImg}
                     className="status-bar"/>
                <div className="phone-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Phone.defaultProps = {}