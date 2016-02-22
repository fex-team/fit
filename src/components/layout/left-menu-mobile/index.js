
        import React from 'react'
        import menuFactory from '../menu-factory'

        
const menu4092ed98e9035652d4c9ca9441701ed7 = [
                    {
                        title: '样式重置 Reset',
                        path: '/mobile/reset',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '颜色 Color',
                        path: '/mobile/color',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '页面缩放 Scale',
                        path: '/mobile/scale',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '聊天气泡 Chat',
                        path: '/mobile/chat',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '聊天盒子 ChatBox',
                        path: '/mobile/chat-box',
                        icon: 'undefined'
                    },
                    ]

        export default class Layout extends React.Component {
            constructor(props) {
                super(props)
                this.state = {}
            }

            render() {
                
            let Menu4092ed98e9035652d4c9ca9441701ed7 = menuFactory(menu4092ed98e9035652d4c9ca9441701ed7)
            

                return (
                    <div className="_namespace">
                        
            <div className="title">基本</div>
            {Menu4092ed98e9035652d4c9ca9441701ed7}
            
                    </div>
                )
            }
        }
        