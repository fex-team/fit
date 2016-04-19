
        import React from 'react'
        import menuFactory from '../menu-factory'

        
const menu35b4b419fa4b8c97858f967daf196f96 = [
                    {
                        title: '友好时间 Timeago',
                        path: '/common/timeago'
                    },
                    
                    {
                        title: '徽标数 Badge',
                        path: '/common/badge'
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
                    ]

        export default class Layout extends React.Component {
            constructor(props) {
                super(props)
                this.state = {}
            }

            render() {
                
            let Menu35b4b419fa4b8c97858f967daf196f96 = menuFactory(menu35b4b419fa4b8c97858f967daf196f96)
            
            let Menu91c813f98aa65cf79ea90750f463b6f5 = menuFactory(menu91c813f98aa65cf79ea90750f463b6f5)
            
            let Menu83b5c25c39e6342cb2a7e4a56205f4d4 = menuFactory(menu83b5c25c39e6342cb2a7e4a56205f4d4)
            

                return (
                    <div className="_namespace">
                        
            <div className="title">计算</div>
            {Menu35b4b419fa4b8c97858f967daf196f96}
            
            <div className="title">展示辅助</div>
            {Menu91c813f98aa65cf79ea90750f463b6f5}
            
            <div className="title">代码工具</div>
            {Menu83b5c25c39e6342cb2a7e4a56205f4d4}
            
                    </div>
                )
            }
        }
        