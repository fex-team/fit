import React from 'react'
import { Row, Col } from 'fit-layout'
import marked from 'marked'
import readme from './readme.md'
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
                            <TabPanel tab="开发流程"
                                      key="1">
                                <div className="markdown-body"
                                     dangerouslySetInnerHTML={{__html: marked(readme)}}></div>
                            </TabPanel>
                            <TabPanel tab="node开发流程"
                                      key="2">选项卡二内容</TabPanel>
                            <TabPanel tab="选项卡三"
                                      key="3">选项卡三内容</TabPanel>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        )
    }
}