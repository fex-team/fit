import React from 'react'
import './index.scss'
import {Link} from 'react-router'
import classnames from 'classnames'

const menus = [{
    title: '按钮',
    path: '/button',
    icon: 'square-o'
}]

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let Menus = menus.map((item, index)=> {
            let iconClass = classnames(['fa', 'fa-' + item.icon])
            return (
                <Link key={index}
                      className="item"
                      activeClassName="active"
                      to={item.path}>
                    <i style={{marginRight:10}}
                       className={iconClass}></i>
                    {item.title}
                </Link>
            )
        })

        return (
            <div _namespace>
                <div className="title">基本</div>
                {Menus}
            </div>
        )
    }
}