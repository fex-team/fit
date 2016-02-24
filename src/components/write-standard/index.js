import React from 'react'
import Menu from '../layout/top-menu'
import marked from 'marked'
import readme from './readme.md'

import '../index.scss'

export default class WriteStandard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '编写规范'
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
                        <div className="markdown-body"
                             dangerouslySetInnerHTML={{__html: marked(readme)}}></div>
                    </div>
                </div>
            </div>
        )
    }
}