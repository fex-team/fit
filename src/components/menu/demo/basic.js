import React from 'react'
import { Menu, SubMenu, MenuItem } from 'tb-menu'

export default class Demo extends React.Component {
    render() {
        return (
            <Menu style={{height:100}}>
                <MenuItem brand style={{width:100}}>管理系统</MenuItem>
                <MenuItem>菜单项</MenuItem>
                <MenuItem>菜单项</MenuItem>
            </Menu>
        )
    }
}