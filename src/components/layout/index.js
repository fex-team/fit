import React from 'react'
import classnames from 'classnames'

import LeftMenuPC from './left-menu-pc'
import LeftMenuMobile from './left-menu-mobile'
import LeftMenuTb from './left-menu-tb'
import LeftMenuCommon from './left-menu-common'

import Menu from './top-menu'

import './index.scss'
import './theme.scss'

function getPageType(scope) {
    var url = scope.props.location.pathname.split('/')

    return url[1]
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
            type: getPageType(this)
        })
    }

    componentWillReceiveProps() {
        setTimeout(() => {
            this.setState({
                type: getPageType(this)
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
        case 'common':
            LeftMenu = (
                <LeftMenuCommon />
            )
            break
        }

        return (
            <div className="_namespace">
                <div className="g-hd">
                    <Menu/>
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