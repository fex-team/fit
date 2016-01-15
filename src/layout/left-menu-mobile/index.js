import React from 'react'
import classnames from 'classnames'
import menuFactory from '../menu-factory'
import './index.scss'

const menuBase = [{
    title: '颜色',
    path: '/mobile/color',
    icon: 'columns'
},{
    title: '页面缩放',
    path: '/mobile/scale',
    icon: 'modx'
}]

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let MenuBase = menuFactory(menuBase)

        return (
            <div className="_namespace">
                <div className="title">基本</div>
                {MenuBase}
            </div>
        )
    }
}