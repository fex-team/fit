import React from 'react'
import './index.scss'
import {Link} from 'react-router'
import classnames from 'classnames'
import { Row, Col } from 'fit-layout'

const menuBase = [{
    title: '全屏布局 Layouts',
    path: '/pc/layout-global',
    icon: 'columns'
}, {
    title: '布局 Layout',
    path: '/pc/layout',
    icon: 'th'
}, {
    title: '按钮 Button',
    path: '/pc/button',
    icon: 'square-o'
}]

const menuShow = [{
    title: '分页 Pagination',
    path: '/pc/pagination',
    icon: 'sticky-note-o'
}, {
    title: '表格 Table',
    path: '/pc/table',
    icon: 'table'
}, {
    title: '模态框 Modal',
    path: '/pc/modal',
    icon: 'list-alt'
}, {
    title: '提示 Message',
    path: '/pc/message',
    icon: 'exclamation-circle'
}, {
    title: '折叠面板 Collapse',
    path: '/pc/collapse',
    icon: 'plus-square'
}]

const menuForm = [{
    title: '输入框 Input',
    path: '/pc/input',
    icon: 'font'
}, {
    title: '选择框 Select',
    path: '/pc/select',
    icon: 'navicon'
}, {
    title: '开关 Switch',
    path: '/pc/switch',
    icon: 'toggle-off'
}, {
    title: '多选框 Checkbox',
    path: '/pc/checkbox',
    icon: 'check-square'
}, {
    title: '单选框 Radio',
    path: '/pc/radio',
    icon: 'check-circle'
}, {
    title: '日期 Datepiacker',
    path: '/pc/datepicker',
    icon: 'calendar'
}]

const menuNavigation = [{
    title: '菜单 Menu',
    path: '/pc/menu',
    icon: 'bars'
}, {
    title: '标签页 Tabs',
    path: '/pc/tabs',
    icon: 'clone'
}]

const menuTieba = [{
    title: '验证码 captcha',
    path: '/pc/captcha',
    icon: 'bullseye'
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
        let MenuTieba = menuFactory(menuTieba)

        return (
            <div className="_namespace">
                <div className="title">基本</div>
                {MenuBase}
                <div className="title">展示</div>
                {MenuShow}
                <div className="title">表单</div>
                {MenuTable}
                <div className="title">导航</div>
                {menuNavigation}
                <div className="title">贴吧内部</div>
                {MenuTieba}
            </div>
        )
    }
}