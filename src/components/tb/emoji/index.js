
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Tabs, TabPanel } from 'fit-tabs'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/tb/emoji/readme.md'
                import '../../../../lib/tb/emoji/demo'

                

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/tb/emoji/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/tb/emoji/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/tb/emoji/demo/lists/basic.md'
                    
                    import ControlComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/tb/emoji/demo/lists/control.js'
                    import ControlCode from 'text!../../../../lib/tb/emoji/demo/lists/control.js'
                    import ControlMarkdown from '../../../../lib/tb/emoji/demo/lists/control.md'
                    

                const colStyle = {
                    padding: 10
                }

                const docStyle = {
                    margin: 10,
                    background: 'white'
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {}
                        document.title = '表情库'
                    }

                    render() {
                        return (
                            <div className="_namespace">
                                <Title>{readme}</Title>

                                <Tabs defaultActiveKey="1">
                                    <TabPanel tab="演示"
                                              key="1">
                                    <Row>
                                        
                    <Col span="24" style={colStyle}>
                        <CodeView md={BasicMarkdown} code={BasicCode}>
                            <BasicComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={ControlMarkdown} code={ControlCode}>
                            <ControlComponent/>
                        </CodeView>
                    </Col>
                    
                                    </Row>
                                </TabPanel>
                                <TabPanel tab="文档"
                                          key="2">
                                    
                                    </TabPanel>
                                </Tabs>
                            </div>
                        )
                    }
                }
                