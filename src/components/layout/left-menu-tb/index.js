
        import React from 'react'
        import menuFactory from '../menu-factory'

        
const menu4092ed98e9035652d4c9ca9441701ed7 = [
                    {
                        title: '日志请求 Track',
                        path: '/tb/track',
                        icon: 'send'
                    },
                    
                    {
                        title: '验证码 Captcha',
                        path: '/tb/captcha',
                        icon: 'bullseye'
                    },
                    
                    {
                        title: '发帖 Submit',
                        path: '/tb/submit',
                        icon: 'comment'
                    },
                    
                    {
                        title: '上传 Upload',
                        path: '/tb/upload',
                        icon: 'upload'
                    },
                    ]
const menu027446c2f9070b0f5b16a18208bf5fc7 = [
                    {
                        title: '字体图标 Icon',
                        path: '/tb/icon',
                        icon: 'fonticons'
                    },
                    
                    {
                        title: '表情库 Emoji',
                        path: '/tb/emoji',
                        icon: 'fonticons'
                    },
                    ]

        export default class Layout extends React.Component {
            constructor(props) {
                super(props)
                this.state = {}
            }

            render() {
                
            let Menu4092ed98e9035652d4c9ca9441701ed7 = menuFactory(menu4092ed98e9035652d4c9ca9441701ed7)
            
            let Menu027446c2f9070b0f5b16a18208bf5fc7 = menuFactory(menu027446c2f9070b0f5b16a18208bf5fc7)
            

                return (
                    <div className="_namespace">
                        
            <div className="title">基本</div>
            {Menu4092ed98e9035652d4c9ca9441701ed7}
            
            <div className="title">展示</div>
            {Menu027446c2f9070b0f5b16a18208bf5fc7}
            
                    </div>
                )
            }
        }
        