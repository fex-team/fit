import React from 'react'
import { Menu, SubMenu, MenuItem } from 'fit-menu'

export default class Demo extends React.Component {
    render() {
        return (
            <Menu>
                <MenuItem to="/">组件库</MenuItem>
                <SubMenu title="子菜单一">
                    <MenuItem to="/pc/input">输入框组件</MenuItem>
                    <MenuItem to="/pc/switch">开关</MenuItem>
                    <SubMenu title="子菜单二">
                        <MenuItem to="/pc/input">输入框组件</MenuItem>
                        <MenuItem to="/pc/switch">开关</MenuItem>
                    </SubMenu>
                </SubMenu>
                <SubMenu title="子菜单三">
                    <MenuItem to="/pc/input">输入框组件</MenuItem>
                    <MenuItem to="/pc/switch">开关</MenuItem>
                    <SubMenu title="子菜单四">
                        <MenuItem to="/pc/input">输入框组件</MenuItem>
                        <MenuItem to="/pc/switch">开关</MenuItem>
                        <SubMenu title="子菜单五">
                            <MenuItem to="/pc/input">输入框组件</MenuItem>
                            <MenuItem to="/pc/switch">开关</MenuItem>
                            <SubMenu title="子菜单六">
                                <MenuItem to="/pc/input">输入框组件</MenuItem>
                                <MenuItem to="/pc/switch">开关</MenuItem>
                            </SubMenu>
                        </SubMenu>
                    </SubMenu>
                </SubMenu>
            </Menu>
        )
    }
}