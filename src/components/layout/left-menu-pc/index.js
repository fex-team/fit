
        import React from 'react'
        import menuFactory from '../menu-factory'

        
const menu4092ed98e9035652d4c9ca9441701ed7 = [
                    {
                        title: '全屏布局 LayoutGlobal',
                        path: '/pc/layout-global',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '布局 Layout',
                        path: '/pc/layout',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '按钮 Button',
                        path: '/pc/button',
                        icon: 'undefined'
                    },
                    ]
const menu027446c2f9070b0f5b16a18208bf5fc7 = [
                    {
                        title: '分页 Pagination',
                        path: '/pc/pagination',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '表格 Table',
                        path: '/pc/table',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '模态框 Modal',
                        path: '/pc/modal',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '提示 Message',
                        path: '/pc/message',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '折叠面板 Collapse',
                        path: '/pc/collapse',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '树形控件 Tree',
                        path: '/pc/tree',
                        icon: 'undefined'
                    },
                    
                    {
                        title: 'JSON树 JsonTree',
                        path: '/pc/json-tree',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '图片容器 Image',
                        path: '/pc/image',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '组件嵌入 RenderTo',
                        path: '/pc/render-to',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '滚动监听 ScrollListen',
                        path: '/pc/scroll-listen',
                        icon: 'undefined'
                    },
                    ]
const menueee1e2258d7ea163fec625ee44be9637 = [
                    {
                        title: '输入框 Input',
                        path: '/pc/input',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '数字框 Number',
                        path: '/pc/number',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '自动完成 AutoComplete',
                        path: '/pc/auto-complete',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '选择框 Select',
                        path: '/pc/select',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '开关 Switch',
                        path: '/pc/switch',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '多选框 Checkbox',
                        path: '/pc/checkbox',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '单选框 Radio',
                        path: '/pc/radio',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '时间选择器 Timepicker',
                        path: '/pc/timepicker',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '日期选择器 Datepicker',
                        path: '/pc/datepicker',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '上传 Upload',
                        path: '/pc/upload',
                        icon: 'undefined'
                    },
                    ]
const menu056f2d7df6e6b64625c3a2d27ce07b05 = [
                    {
                        title: '菜单 Menu',
                        path: '/pc/menu',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '标签页 Tabs',
                        path: '/pc/tabs',
                        icon: 'undefined'
                    },
                    ]
const menu39003734d1d700d5bd97bf1e7a2fcf73 = [
                    {
                        title: '手机壳 Phone',
                        path: '/pc/phone',
                        icon: 'undefined'
                    },
                    ]
const menu5a0afc9dbd6c2e98769d4620d4fb5b13 = [
                    {
                        title: '内嵌网页 Iframe',
                        path: '/pc/iframe',
                        icon: 'undefined'
                    },
                    
                    {
                        title: '图像裁剪 Cropper',
                        path: '/pc/cropper',
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
            
            let Menu027446c2f9070b0f5b16a18208bf5fc7 = menuFactory(menu027446c2f9070b0f5b16a18208bf5fc7)
            
            let Menueee1e2258d7ea163fec625ee44be9637 = menuFactory(menueee1e2258d7ea163fec625ee44be9637)
            
            let Menu056f2d7df6e6b64625c3a2d27ce07b05 = menuFactory(menu056f2d7df6e6b64625c3a2d27ce07b05)
            
            let Menu39003734d1d700d5bd97bf1e7a2fcf73 = menuFactory(menu39003734d1d700d5bd97bf1e7a2fcf73)
            
            let Menu5a0afc9dbd6c2e98769d4620d4fb5b13 = menuFactory(menu5a0afc9dbd6c2e98769d4620d4fb5b13)
            

                return (
                    <div className="_namespace">
                        
            <div className="title">基本</div>
            {Menu4092ed98e9035652d4c9ca9441701ed7}
            
            <div className="title">展示</div>
            {Menu027446c2f9070b0f5b16a18208bf5fc7}
            
            <div className="title">表单</div>
            {Menueee1e2258d7ea163fec625ee44be9637}
            
            <div className="title">导航</div>
            {Menu056f2d7df6e6b64625c3a2d27ce07b05}
            
            <div className="title">样式</div>
            {Menu39003734d1d700d5bd97bf1e7a2fcf73}
            
            <div className="title">其它</div>
            {Menu5a0afc9dbd6c2e98769d4620d4fb5b13}
            
                    </div>
                )
            }
        }
        