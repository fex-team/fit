
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Tabs, TabPanel } from 'fit-tabs'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/number/readme.md'
                import '../../../../lib/pc/number/demo'

                

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/number/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/number/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/number/demo/lists/basic.md'
                    
                    import CallbackComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/number/demo/lists/callback.js'
                    import CallbackCode from 'text!../../../../lib/pc/number/demo/lists/callback.js'
                    import CallbackMarkdown from '../../../../lib/pc/number/demo/lists/callback.md'
                    
                    import FloatComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/number/demo/lists/float.js'
                    import FloatCode from 'text!../../../../lib/pc/number/demo/lists/float.js'
                    import FloatMarkdown from '../../../../lib/pc/number/demo/lists/float.md'
                    
                    import LimitComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/number/demo/lists/limit.js'
                    import LimitCode from 'text!../../../../lib/pc/number/demo/lists/limit.js'
                    import LimitMarkdown from '../../../../lib/pc/number/demo/lists/limit.md'
                    
                    import SpeedComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/number/demo/lists/speed.js'
                    import SpeedCode from 'text!../../../../lib/pc/number/demo/lists/speed.js'
                    import SpeedMarkdown from '../../../../lib/pc/number/demo/lists/speed.md'
                    
                    import StepComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/number/demo/lists/step.js'
                    import StepCode from 'text!../../../../lib/pc/number/demo/lists/step.js'
                    import StepMarkdown from '../../../../lib/pc/number/demo/lists/step.md'
                    

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
                        document.title = '数字框'
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
                        <CodeView md={CallbackMarkdown} code={CallbackCode}>
                            <CallbackComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={FloatMarkdown} code={FloatCode}>
                            <FloatComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={LimitMarkdown} code={LimitCode}>
                            <LimitComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={SpeedMarkdown} code={SpeedCode}>
                            <SpeedComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={StepMarkdown} code={StepCode}>
                            <StepComponent/>
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
                