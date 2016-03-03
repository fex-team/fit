import React from 'react'
import Menu from './layout/top-menu'
import marked from 'marked'
import readme from './readme.md'

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
                         style={{marginTop:40,marginBottom:40}}>
                        <div className="markdown-body"
                             dangerouslySetInnerHTML={{__html: marked(readme)}}></div>
                    </div>
                </div>
                <div className="g-ft">
                    联系我们: fex@baidu.com
                </div>
            </div>
        )
    }
}