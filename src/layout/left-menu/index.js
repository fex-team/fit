import React from 'react'
import './index.scss'
import {Link} from 'react-router'
import classnames from 'classnames'
import { Row, Col } from 'antd'

const menuBase = [{
    title: '全屏布局 Layouts',
    path: '/layout-global',
    icon: 'columns'
}, {
    title: '布局 Layout',
    path: '/layout',
    icon: 'th'
}, {
    title: '按钮 Button',
    path: '/button',
    icon: 'square-o'
}]

const menuShow = [{
    title: '分页 Pagination',
    path: 'pagination',
    icon: 'sticky-note-o'
}, {
    title: '表格 Table',
    path: '/table',
    icon: 'table'
}]

const menuForm = [{
    title: '输入框 Input',
    path: '/input',
    icon: 'font'
}, {
    title: '选择框 Select',
    path: '/select',
    icon: 'navicon'
}, {
    title: '开关 Switch',
    path: '/switch',
    icon: 'toggle-off'
}, {
    title: '多选框 Checkbox',
    path: '/checkbox',
    icon: 'check-square'
}, {
    title: '单选框 Radio',
    path: '/radio',
    icon: 'check-circle'
}, {
    title: '日期 Datepiacker',
    path: '/datepicker',
    icon: 'calendar'
}]

const menuNav = [{
    title: '导航菜单 Menu',
    path: '/menu',
    icon: 'bars'
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
        let MenuShow = menuFactory(menuShow)
        let MenuTable = menuFactory(menuForm)
        let MenuNavigate = menuFactory(menuNav)

        return (
            <div className="_namespace">
                <div className="title">基本</div>
                {MenuBase}
                <div className="title">展示</div>
                {MenuShow}
                <div className="title">表单</div>
                {MenuTable}
                <div className="title">导航</div>
                {MenuNavigate}
            </div>
        )
    }
}