import React from 'react'
import { Menu, SubMenu, MenuItem } from 'tb-menu'

export default class Demo extends React.Component {
    render() {
        return (
            <Menu inverse vertical style={{width:150}}>
                <MenuItem brand>管理系统</MenuItem>
                <MenuItem>菜单项</MenuItem>
                <MenuItem>菜单项</MenuItem>
            </Menu>
        )
    }
}