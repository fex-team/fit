
        import React from 'react'
        import menuFactory from '../menu-factory'

        
const menu4092ed98e9035652d4c9ca9441701ed7 = [
                    {
                        title: '日志请求 Track',
                        path: '/tb/track'
                    },
                    
                    {
                        title: '验证码 Captcha',
                        path: '/tb/captcha'
                    },
                    
                    {
                        title: '拖拽验证码 CaptchaDrag',
                        path: '/tb/captcha-drag'
                    },
                    
                    {
                        title: '发帖 Submit',
                        path: '/tb/submit'
                    },
                    
                    {
                        title: '上传 Upload',
                        path: '/tb/upload'
                    },
                    ]
const menu027446c2f9070b0f5b16a18208bf5fc7 = [
                    {
                        title: '字体图标 Icon',
                        path: '/tb/icon'
                    },
                    
                    {
                        title: '表情库 Emoji',
                        path: '/tb/emoji'
                    },
                    ]
const menu88e7de9fe51dafa4c34996adf25f0373 = []

        export default class Layout extends React.Component {
            constructor(props) {
                super(props)
                this.state = {}
            }

            render() {
                
            let Menu4092ed98e9035652d4c9ca9441701ed7 = menuFactory(menu4092ed98e9035652d4c9ca9441701ed7)
            
            let Menu027446c2f9070b0f5b16a18208bf5fc7 = menuFactory(menu027446c2f9070b0f5b16a18208bf5fc7)
            
            let Menu88e7de9fe51dafa4c34996adf25f0373 = menuFactory(menu88e7de9fe51dafa4c34996adf25f0373)
            

                return (
                    <div className="_namespace">
                        
            <div className="title">基本</div>
            {Menu4092ed98e9035652d4c9ca9441701ed7}
            
            <div className="title">展示</div>
            {Menu027446c2f9070b0f5b16a18208bf5fc7}
            
            <div className="title">综合</div>
            {Menu88e7de9fe51dafa4c34996adf25f0373}
            
                    </div>
                )
            }
        }
        