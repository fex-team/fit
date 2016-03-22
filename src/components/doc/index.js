import React from 'react'
import Menu from '../layout/top-menu'
import marked from 'marked'
import readme from './readme.md'

import './index.scss'

export default class Doc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '贡献者文档'
    }

    render() {
        return (
            <div className="_namespace">
                <div className="g-hd">
                    <Menu/>
                </div>
                <div className="g-mn">
                    <div className="container"
                         style={{paddingTop:40,padingBottom:40}}>
                        <div className="video">
                            <video controls="controls"
                                   className="video-box"
                                   preload="auto"
                                   height="500">
                                <source src="http://agroup.baidu.com:8964/static/5b/c2327af7daaec6b1f8888bcf1ea8007613261d.webm?filename=fit-learning.webm"
                                        type="video/webm"/>
                                <source src="http://agroup.baidu.com:8964/static/0c/e432642f982e7643559cd1a707e6086b53371e.mp4?filename=fit-learning.mp4"
                                        type="video/mp4"/>
                            </video>
                        </div>
                        <div className="markdown-body"
                             dangerouslySetInnerHTML={{__html: marked(readme)}}></div>
                    </div>
                </div>
            </div>
        )
    }
}