import React from 'react'
import Highlight from 'react-highlight'
import { Collapse } from 'antd'
import marked from 'marked'
import './index.scss'

const Panel = Collapse.Panel

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        // 解析markdown标题
        let title = /^#\s(.*)/g.exec(this.props.md)

        // 内容
        let content = this.props.md.replace(/^#\s.*\n*/g, '')

        // 代码
        let code = this.props.code.replace(/^import\s*React\s*from\s*\'react\'\n/g, '')

        return (
            <div _namespace>
                <div className="container">
                    <div className="example-container">
                        {this.props.children}
                    </div>
                    <div className="code">
                        <Collapse>
                            <Panel header={title[1]}>
                                <div className="description"
                                     dangerouslySetInnerHTML={{__html: marked(content)}}></div>
                                <Highlight className='javascript'>
                                    {code}
                                </Highlight>
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
        )
    }
}