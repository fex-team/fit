
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Tabs, TabPanel } from 'fit-tabs'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/radio/readme.md'
                import '../../../../lib/pc/radio/demo'

                
                        import RadioSource from '../../../../lib/pc/radio/src/radio'
                        import RadioSourceCode from 'text!../../../../lib/pc/radio/src/radio'
                        
                        import RadioGroupSource from '../../../../lib/pc/radio/src/radio-group'
                        import RadioGroupSourceCode from 'text!../../../../lib/pc/radio/src/radio-group'
                        
                        import RadioButtonSource from '../../../../lib/pc/radio/src/radio-button'
                        import RadioButtonSourceCode from 'text!../../../../lib/pc/radio/src/radio-button'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/radio/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/radio/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/radio/demo/lists/basic.md'
                    
                    import ButtonComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/radio/demo/lists/button.js'
                    import ButtonCode from 'text!../../../../lib/pc/radio/demo/lists/button.js'
                    import ButtonMarkdown from '../../../../lib/pc/radio/demo/lists/button.md'
                    
                    import CallbackComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/radio/demo/lists/callback.js'
                    import CallbackCode from 'text!../../../../lib/pc/radio/demo/lists/callback.js'
                    import CallbackMarkdown from '../../../../lib/pc/radio/demo/lists/callback.md'
                    
                    import CustomComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/radio/demo/lists/custom.js'
                    import CustomCode from 'text!../../../../lib/pc/radio/demo/lists/custom.js'
                    import CustomMarkdown from '../../../../lib/pc/radio/demo/lists/custom.md'
                    
                    import DisableComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/radio/demo/lists/disable.js'
                    import DisableCode from 'text!../../../../lib/pc/radio/demo/lists/disable.js'
                    import DisableMarkdown from '../../../../lib/pc/radio/demo/lists/disable.md'
                    
                    import GroupComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/radio/demo/lists/group.js'
                    import GroupCode from 'text!../../../../lib/pc/radio/demo/lists/group.js'
                    import GroupMarkdown from '../../../../lib/pc/radio/demo/lists/group.md'
                    
                    import LabelComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/radio/demo/lists/label.js'
                    import LabelCode from 'text!../../../../lib/pc/radio/demo/lists/label.js'
                    import LabelMarkdown from '../../../../lib/pc/radio/demo/lists/label.md'
                    
                    import SizeComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/radio/demo/lists/size.js'
                    import SizeCode from 'text!../../../../lib/pc/radio/demo/lists/size.js'
                    import SizeMarkdown from '../../../../lib/pc/radio/demo/lists/size.md'
                    

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
                        document.title = '单选框'
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
                        <CodeView md={ButtonMarkdown} code={ButtonCode}>
                            <ButtonComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={CallbackMarkdown} code={CallbackCode}>
                            <CallbackComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={CustomMarkdown} code={CustomCode}>
                            <CustomComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={DisableMarkdown} code={DisableCode}>
                            <DisableComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={GroupMarkdown} code={GroupCode}>
                            <GroupComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={LabelMarkdown} code={LabelCode}>
                            <LabelComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={SizeMarkdown} code={SizeCode}>
                            <SizeComponent/>
                        </CodeView>
                    </Col>
                    
                                    </Row>
                                </TabPanel>
                                <TabPanel tab="文档"
                                          key="2">
                                    
                        <div style={docStyle}>
                            <CodeDoc code={RadioSourceCode} instance={RadioSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={RadioGroupSourceCode} instance={RadioGroupSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={RadioButtonSourceCode} instance={RadioButtonSource} />
                        </div>
                        
                                    </TabPanel>
                                </Tabs>
                            </div>
                        )
                    }
                }
                