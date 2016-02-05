import React from 'react'
import { Menu, SubMenu, MenuItem } from 'fit-menu'

export default class Demo extends React.Component {
    render() {
        return (
            <Menu inverse
                  vertical>
                <MenuItem style={{height:50}}
                          brand>管理系统</MenuItem>
                <MenuItem>菜单项</MenuItem>
                <MenuItem>菜单项</MenuItem>
            </Menu>
        )
    }
}