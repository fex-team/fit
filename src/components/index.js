import React from 'react'
import Menu from './layout/menu'
import { Link } from 'react-router'

import './index.scss'

export default class Components extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="_namespace">
                <div className="g-hd">
                    <Menu/>
                </div>
                <div className="g-mn">
                    <div className="container"
                         style={{marginTop:40}}>
                        <h4>如何贡献</h4>
                        <p>在任何形式的参与前，请先阅读 <Link to="/">贡献者文档</Link> 与 <Link to="/components/write-standard">编写规范</Link>。有任何建议或意见您可以
                            <a href="http://gitlab.baidu.com/groups/tb-component"
                               target="_blank">Pull Request</a>，给我们 报告 <a href="mailto:fex@baidu.com">Bug</a> 或
                            <a href="http://gitlab.baidu.com/tb-component/awesome/issues"
                               target="_blank">提问</a></p>
                    </div>
                </div>
                <div className="g-ft">
                    联系我们: fex@baidu.com
                </div>
            </div>
        )
    }
}