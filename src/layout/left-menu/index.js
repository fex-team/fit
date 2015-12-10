import React from 'react'
import './index.scss'
import {Link} from 'react-router'
import classnames from 'classnames'
import { Row, Col } from 'antd'

const menus = [{
    title: '布局',
    path: '/layout',
    icon: 'th'
}, {
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
                    <Row>
                        <Col span="6"
                             style={{paddingLeft:10}}>
                            <i style={{marginRight:10}}
                               className={iconClass}></i>
                        </Col>
                        <Col span="18">
                            {item.title}
                        </Col>
                    </Row>
                </Link>
            )
        })

        return (
            <div className="_namespace">
                <div className="title">基本</div>
                {Menus}
            </div>
        )
    }
}