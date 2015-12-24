import React from 'react'
import './index.scss'
import {Link} from 'react-router'
import classnames from 'classnames'
import { Row, Col } from 'antd'

const menuBase = [{
    title: '全屏布局 Layouts',
    path: '/mobile/layout-global',
    icon: 'columns'
}]

const menuFactory = (data)=> {
    return data.map((item, index)=> {
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
}

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