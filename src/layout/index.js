import React from 'react'
import './index.scss'
import {Link} from 'react-router'
import classnames from 'classnames'

import LeftMenuPC from './left-menu-pc'
import LeftMenuMobile from './left-menu-mobile'

function getPageType () {
    var url = location.hash.replace(/#\/|\?.+/g, '').split('/')

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

    componentWillMount () {
        this.setState({
            type: getPageType().base
        })
    }

    componentWillReceiveProps () {
        this.setState({
            type: getPageType().base
        })
    }

    onSwitchMouseOver () {
        this.setState({
            logoligten: true
        })
    }

    onSwitchMouseOut () {
        this.setState({
            logoligten: false
        })
    }

    onSwitchStart () {
        location.hash = this.state.type === 'pc' ? '#/mobile' : '#/pc'
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
            'white': this.state.type === 'mobile'
        })

        let menuColor = classnames({
            'g-sd': true,
            'white': this.state.type === 'mobile'
        })

        return (
            <div className="_namespace">
                <div className="g-hd">
                    <div className="tb-navbar">
                        <div className="navbar-header">
                            <div className={navBrand}>
                                <Link to="/"
                                      >Fit<span className={logoClass}>en</span> <span className={textClass}>Design</span></Link>
                                <span onClick={this.onSwitchStart.bind(this)} className="switch">Switch</span>
                            </div>
                            <div className="navbar-right">
                                <a className="item"
                                   href="http://gitlab.baidu.com/tb-component/awesome"
                                   target="_blank">Gitlab</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={menuColor}>
                    { this.state.type === 'pc' ? <LeftMenuPC /> : <LeftMenuMobile /> }
                </div>
                <div className="g-mn">
                    {this.props.children}
                </div>
                <div className="g-ft">
                    { this.state.type === 'pc' ? 'Fit Design' : 'Fiten Design' }
                </div>
            </div>
        )
    }
}