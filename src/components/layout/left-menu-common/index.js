
        import React from 'react'
        import menuFactory from '../menu-factory'

        
const menu027446c2f9070b0f5b16a18208bf5fc7 = [
                    {
                        title: '载入动画 Loading',
                        path: '/common/loading'
                    },
                    
                    {
                        title: '徽标数 Badge',
                        path: '/common/badge'
                    },
                    ]
const menu35b4b419fa4b8c97858f967daf196f96 = [
                    {
                        title: '友好时间 Timeago',
                        path: '/common/timeago'
                    },
                    ]
const menu91c813f98aa65cf79ea90750f463b6f5 = [
                    {
                        title: '任意渲染 RenderTo',
                        path: '/common/render-to'
                    },
                    ]
const menu83b5c25c39e6342cb2a7e4a56205f4d4 = [
                    {
                        title: '透传 TransmitTransparently',
                        path: '/common/transmit-transparently'
                    },
                    
                    {
                        title: '同构 IsomorphicReduxTools',
                        path: '/common/isomorphic-redux-tools'
                    },
                    ]
const menu27470a0ac3af4bafd415ca0aa498e297 = []

        export default class Layout extends React.Component {
            constructor(props) {
                super(props)
                this.state = {}
            }

            render() {
                
            let Menu027446c2f9070b0f5b16a18208bf5fc7 = menuFactory(menu027446c2f9070b0f5b16a18208bf5fc7)
            
            let Menu35b4b419fa4b8c97858f967daf196f96 = menuFactory(menu35b4b419fa4b8c97858f967daf196f96)
            
            let Menu91c813f98aa65cf79ea90750f463b6f5 = menuFactory(menu91c813f98aa65cf79ea90750f463b6f5)
            
            let Menu83b5c25c39e6342cb2a7e4a56205f4d4 = menuFactory(menu83b5c25c39e6342cb2a7e4a56205f4d4)
            
            let Menu27470a0ac3af4bafd415ca0aa498e297 = menuFactory(menu27470a0ac3af4bafd415ca0aa498e297)
            

                return (
                    <div className="_namespace">
                        
            <div className="title">展示</div>
            {Menu027446c2f9070b0f5b16a18208bf5fc7}
            
            <div className="title">计算</div>
            {Menu35b4b419fa4b8c97858f967daf196f96}
            
            <div className="title">展示辅助</div>
            {Menu91c813f98aa65cf79ea90750f463b6f5}
            
            <div className="title">代码工具</div>
            {Menu83b5c25c39e6342cb2a7e4a56205f4d4}
            
            <div className="title">编译脚本</div>
            {Menu27470a0ac3af4bafd415ca0aa498e297}
            
                    </div>
                )
            }
        }
        