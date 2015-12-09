import React from 'react'
import './index.scss'
import {Link} from 'react-router'

import LeftMenu from './left-menu'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div _namespace>
                <div className="g-hd">
                    <div className="tb-navbar">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand">贴吧组件库</Link>
                            <div className="navbar-right">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="g-sd">
                    <LeftMenu/>
                </div>
                <div className="g-mn">
                    {this.props.children}
                </div>
                <div className="g-ft">
                    贴吧组件库
                </div>
            </div>
        )
    }
}