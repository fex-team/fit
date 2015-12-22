import React from 'react'
import { Menu, SubMenu, MenuItem } from 'tb-menu'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Menu>
                    <MenuItem brand style={{width:200}}>管理系统</MenuItem>
                    <MenuItem>菜单项</MenuItem>
                    <MenuItem>菜单项</MenuItem>
                </Menu>

                <Menu style={{marginTop:10}}>
                    <MenuItem brand inverse style={{width:200}}>管理系统</MenuItem>
                    <MenuItem>菜单项</MenuItem>
                    <MenuItem>菜单项</MenuItem>
                </Menu>

                <Menu inverse style={{marginTop:10}}>
                    <MenuItem brand
                              style={{width:200}}>管理系统</MenuItem>
                    <MenuItem>菜单项</MenuItem>
                    <MenuItem>菜单项</MenuItem>
                </Menu>

                <Menu inverse style={{marginTop:10}}>
                    <MenuItem brand inverse style={{width:200}}>管理系统</MenuItem>
                    <MenuItem>菜单项</MenuItem>
                    <MenuItem>菜单项</MenuItem>
                </Menu>
            </div>
        )
    }
}