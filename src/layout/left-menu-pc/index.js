import React from 'react'
import './index.scss'
import menuFactory from '../menu-factory'

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
}, {
    title: '树形控件 Tree',
    path: '/pc/tree',
    icon: 'tree'
}, {
    title: 'JSON树 JsonTree',
    path: '/pc/json-tree',
    icon: 'tree'
}]

const menuForm = [{
    title: '输入框 Input',
    path: '/pc/input',
    icon: 'font'
}, {
    title: '数字框 Number',
    path: '/pc/number',
    icon: 'chevron-up'
}, {
    title: '自动完成 Auto-Complete',
    path: '/pc/auto-complete',
    icon: 'angle-double-down'
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
    title: '时间选择器 Timepicker',
    path: '/pc/timepicker',
    icon: 'clock-o'
}, {
    title: '日期选择器 Datepiacker',
    path: '/pc/datepicker',
    icon: 'calendar'
}, {
    title: '上传 Upload',
    path: '/pc/upload',
    icon: 'upload'
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

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let MenuBase = menuFactory(menuBase)
        let MenuShow = menuFactory(menuShow)
        let MenuTable = menuFactory(menuForm)
        let MenuNavigation = menuFactory(menuNavigation)

        return (
            <div className="_namespace">
                <div className="title">基本</div>
                {MenuBase}
                <div className="title">展示</div>
                {MenuShow}
                <div className="title">表单</div>
                {MenuTable}
                <div className="title">导航</div>
                {MenuNavigation}
            </div>
        )
    }
}