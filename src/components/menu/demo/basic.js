import React from 'react'
import {Menu, SubMenu, MenuItem} from 'tb-menu'

export default class Demo extends React.Component {
    render() {

        let subMenuConfig = [
            {
                title: '了解服务',
                icon: 'fa fa-book'
            },
            {
                title: '服务申请',
                icon: 'fa fa-info-circle',
                childs: [
                    {
                        title: '用户'
                    },
                    {
                        title: '贴子'
                    },
                    {
                        title: '私聊'
                    },
                    {
                        title: '吧'
                    }
                ]
            },
            {
                title: '申请对象监控',
                icon: 'fa fa-eye',
                href: '/monitor'
            }
        ]

        let subMenu = subMenuConfig.map((config, index) => {
            return (
                <SubMenu key={index} href={config.href} icon={config.icon} title={config.title}>
                    {config.childs && config.childs.map((item, index) => {
                        return <MenuItem title={item.title} inverse to={item.href} key={index}>{item.title}</MenuItem>
                    })}
                </SubMenu>
            )
        })

        return (
            <div>
                <Menu inverse vertical style={{width: 200, paddingTop: 30}}>
                    {subMenu}
                </Menu>
            </div>
        )
    }
}