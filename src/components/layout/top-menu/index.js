import React from 'react'
import { Link } from 'react-router'
import './index.scss'

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="_namespace">
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
                              to="/components/mobile">移动端</Link>
                        <Link className="item"
                              activeClassName="active"
                              to="/components/common">通用</Link>
                        <Link className="item"
                              activeClassName="active"
                              to="/components/tb">贴吧</Link>
                        <Link className="item"
                              activeClassName="active"
                              to="/components/oxp">Oxp</Link>
                    </div>
                    <div className="navbar-right">
                        <Link className="item"
                              activeClassName="active"
                              to="/components/doc">贡献者文档</Link>
                        <Link className="item"
                              activeClassName="active"
                              to="/components/write-standard">编写规范</Link>
                        <Link className="item"
                              activeClassName="active"
                              to="/components/change-log">ChangeLog</Link>
                        <a className="item"
                           href="http://gitlab.baidu.com/tb-component/awesome"
                           target="_blank">Gitlab</a>
                    </div>
                </div>
            </div>
        )
    }
}