import React from 'react'
import './index.scss'
import './theme.scss'
import { Link } from 'react-router'
import classnames from 'classnames'

import LeftMenuPC from './left-menu-pc'
import LeftMenuMobile from './left-menu-mobile'
import LeftMenuTb from './left-menu-tb'

function getPageType(scope) {
    var url = scope.props.location.pathname.split('/')

    return {
        base: url[0],
        branch: url[1]
    }
}

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            logoligten: false,
            type: 'pc'
        }
    }

    componentWillMount() {
        this.setState({
            type: getPageType(this).base
        })
    }

    componentWillReceiveProps() {
        setTimeout(() => {
            this.setState({
                type: getPageType(this).base
            })
        })
    }

    onSwitchMouseOver() {
        this.setState({
            logoligten: true
        })
    }

    onSwitchMouseOut() {
        this.setState({
            logoligten: false
        })
    }

    render() {
        let logoClass = classnames({
            en: this.state.type === 'pc',
            'en-mobile': this.state.type === 'mobile',
            active: this.state.logoligten
        })

        let textClass = classnames({
            move: this.state.type === 'pc',
            'move-mobile': this.state.type === 'mobile',
            active: this.state.logoligten
        })

        let navBrand = classnames({
            'navbar-brand': true,
            [this.state.type]: true
        })

        let menuColor = classnames({
            'g-sd': true,
            [this.state.type]: true
        })

        let LeftMenu = null
        switch (this.state.type) {
        case 'pc':
            LeftMenu = (
                <LeftMenuPC />
            )
            break
        case 'mobile':
            LeftMenu = (
                <LeftMenuMobile />
            )
            break
        case 'tb':
            LeftMenu = (
                <LeftMenuTb />
            )
            break
        }

        return (
            <div className="_namespace">
                <div className="g-hd">
                    <div className="tb-navbar">
                        <div className="navbar-header">
                            <div className={navBrand}>
                                <Link to="/">FIT</Link>
                            </div>
                            <div className="navbar-left">
                                <Link className="item"
                                      activeClassName="active"
                                      to="/pc">Pc</Link>
                                <Link className="item"
                                      activeClassName="active"
                                      to="/mobile">Mobile</Link>
                                <Link className="item"
                                      activeClassName="active"
                                      to="/tb">Tieba</Link>
                                <Link className="item"
                                      activeClassName="active"
                                      to="/oxp">Oxp</Link>
                            </div>
                            <div className="navbar-right">
                                <a className="item"
                                   href="/gaea"
                                   target="_blank">Fit-Pro</a>
                                <a className="item"
                                   href="http://gitlab.baidu.com/tb-component/awesome"
                                   target="_blank">Gitlab</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={menuColor}>
                    {LeftMenu ? LeftMenu : null}
                </div>
                <div className="g-mn">
                    {this.props.children}
                </div>
                <div className="g-ft">
                    联系我们: fex@baidu.com
                </div>
            </div>
        )
    }
}

Layout.contextTypes = {
    history: React.PropTypes.object
}