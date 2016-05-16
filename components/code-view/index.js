import React from 'react'
import Highlight from 'react-highlight'
import {Collapse, CollPanel} from 'fit-collapse'
import {ScrollListenNail} from 'fit-scroll-listen'
import Switch from 'fit-switch'
import marked from 'marked'
import classNames from 'classnames'
import './index.scss'

export default class CodeView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCode    : false,
            useDemoStyle: true
        }
    }

    handleCollapseChange() {
        if (this.state.showCode)return
        this.setState({
            showCode: true
        })
    }

    handleUseDemoStyle(checked) {
        this.setState({
            useDemoStyle: !checked
        })
    }

    render() {
        // 解析markdown标题
        let title = /^#\s(.*)/g.exec(this.props.md)

        // 内容
        let content = this.props.md.replace(/^#\s.*\n*/g, '')

        // 代码
        // 将 ../../src 换成 npm 包路径
        let code = this.props.code.replace(/..\/..\/src/g, this.props.npmName)

        let codeDetail = null
        if (this.state.showCode) {
            codeDetail = (
                <Highlight className='jsx'>
                    {code}
                </Highlight>
            )
        }

        const rightToolsClassName = classNames({
            'right-tools'       : true,
            'right-tools-active': !this.state.useDemoStyle
        })

        const exampleContainerClassName = classNames({
            'example-container-box': true,
            'reset'                : this.state.useDemoStyle
        })

        return (
            <div className="_namespace" {...this.props}>
                <ScrollListenNail store={this.props.store}
                                  title={title[1]}
                                  className="demo-title">
                    {title[1]}
                    <div className={rightToolsClassName}>原始样式 <Switch onChange={this.handleUseDemoStyle.bind(this)}/>
                    </div>
                </ScrollListenNail>
                <div className="code-container">
                    <div className="example-container">
                        <div className={exampleContainerClassName}>
                            {this.props.children}
                        </div>
                    </div>
                    <div className="code custom">
                        <Collapse onChange={this.handleCollapseChange.bind(this)}>
                            <CollPanel style={{padding:'0 10px'}}
                                       header="源码">
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

CodeView.defaultProps = {
    store: {}
}