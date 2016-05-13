import React from 'react'
import { Row, Col } from 'fit-layout'
import marked from 'marked'
import developReadme from './develop.md'
import nodeDevelopReadme from './node-develop.md'
import nodeApiReadme from './node-api.md'
import typescriptReadme from './typescript.md'
import qaReadme from './qa.md'
import { Tabs, TabPanel } from 'fit-tabs'
import './index.scss'

const colStyle = {
    padding: '10px 20px 20px 20px',
    background: 'white'
}

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = 'Fit Design'
    }

    render() {
        return (
            <div className="_namespace">
                <Row>
                    <Col span="24"
                         style={colStyle}>
                        <Tabs defaultActiveKey="1">
                            <TabPanel tab="Php开发流程"
                                      key="1">
                                <div className="markdown-body"
                                     dangerouslySetInnerHTML={{__html: marked(developReadme)}}></div>
                            </TabPanel>
                            <TabPanel tab="Node开发流程"
                                      key="2">
                                <div className="markdown-body"
                                     dangerouslySetInnerHTML={{__html: marked(nodeDevelopReadme)}}></div>
                            </TabPanel>
                            <TabPanel tab="node组件"
                                      key="3">
                                <div className="markdown-body"
                                     dangerouslySetInnerHTML={{__html: marked(nodeApiReadme)}}></div>
                            </TabPanel>
                            <TabPanel tab="使用typescript开发"
                                      key="4">
                                <div className="markdown-body"
                                     dangerouslySetInnerHTML={{__html: marked(typescriptReadme)}}></div>
                            </TabPanel>
                            <TabPanel tab="Q & A"
                                      key="5">
                                <div className="markdown-body"
                                     dangerouslySetInnerHTML={{__html: marked(qaReadme)}}></div>
                            </TabPanel>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        )
    }
}