import React from 'react'
import Highlight from 'react-highlight'
import { Collapse, CollPanel } from 'fit-collapse'
import marked from 'marked'
import './index.scss'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCode: false
        }
    }

    handleCollapseChange() {
        if (this.state.showCode)return
        this.setState({
            showCode: true
        })
    }

    render() {
        // 解析markdown标题
        let title = /^#\s(.*)/g.exec(this.props.md)

        // 内容
        let content = this.props.md.replace(/^#\s.*\n*/g, '')

        // 代码
        let code = this.props.code.replace(/^import\s*React\s*from\s*\'react\'\n/g, '')

        let codeDetail = null
        if (this.state.showCode) {
            codeDetail = (
                <Highlight className='jsx'>
                    {code}
                </Highlight>
            )
        }

        return (
            <div className="_namespace" {...this.props}>
                <div className="container">
                    <div className="example-container">
                        {this.props.children}
                    </div>
                    <div className="code custom">
                        <Collapse onChange={this.handleCollapseChange.bind(this)}>
                            <CollPanel style={{padding:'0 10px'}} header={title[1]}>
                                <div className="description"
                                     dangerouslySetInnerHTML={{__html: marked(content)}}></div>
                                {codeDetail ? codeDetail : null}
                            </CollPanel>
                        </Collapse>
                    </div>
                </div>
            </div>
        )
    }
}