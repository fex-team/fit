import React from 'react'
import {Link} from 'react-router'
import cookie from 'js-cookie'
import './index.scss'

const isBaidu = cookie.get('IS_BAIDU')

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
                        {isBaidu === '1' ?
                            <Link className="item"
                                  activeClassName="active"
                                  to="/components/tb">贴吧</Link> : null
                        }
                        {isBaidu === '1' ?
                            <Link className="item"
                                  activeClassName="active"
                                  to="/components/oxp">Oxp</Link> : null
                        }
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
                           href="https://github.com/fex-team/fit"
                           target="_blank">Github</a>
                    </div>
                </div>
            </div>
        )
    }
}