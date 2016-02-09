import React from 'react'
import { Link } from 'react-router'

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '组件库'
    }

    render() {
        return (
            <div className="_namespace tb-navbar">
                <div className="navbar-header">
                    <div className="navbar-brand">
                        <Link to="/">FIT</Link>
                    </div>
                    <div className="navbar-left">
                        <Link className="item"
                              activeClassName="active"
                              to="/components"><i className="fa fa-home"/></Link>
                        <Link className="item"
                              activeClassName="active"
                              to="/components/pc">Pc</Link>
                        <Link className="item"
                              activeClassName="active"
                              to="/components/mobile">Mobile</Link>
                        <Link className="item"
                              activeClassName="active"
                              to="/components/tb">Tieba</Link>
                        <Link className="item"
                              activeClassName="active"
                              to="/components/oxp">Oxp</Link>
                    </div>
                    <div className="navbar-right">
                        <Link className="item"
                              activeClassName="active"
                              to="/components/write-standard">编写规范</Link>
                        <a className="item"
                           href="http://gitlab.baidu.com/tb-component/awesome"
                           target="_blank">Gitlab</a>
                    </div>
                </div>
            </div>
        )
    }
}