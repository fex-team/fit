
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Tabs, TabPanel } from 'fit-tabs'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/mobile/color/readme.md'
                import '../../../../lib/mobile/color/demo'

                

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/mobile/color/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/mobile/color/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/mobile/color/demo/lists/basic.md'
                    
                    import AssitComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/mobile/color/demo/lists/assit.js'
                    import AssitCode from 'text!../../../../lib/mobile/color/demo/lists/assit.js'
                    import AssitMarkdown from '../../../../lib/mobile/color/demo/lists/assit.md'
                    
                    import ButtonComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/mobile/color/demo/lists/button.js'
                    import ButtonCode from 'text!../../../../lib/mobile/color/demo/lists/button.js'
                    import ButtonMarkdown from '../../../../lib/mobile/color/demo/lists/button.md'
                    
                    import CarrierComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/mobile/color/demo/lists/carrier.js'
                    import CarrierCode from 'text!../../../../lib/mobile/color/demo/lists/carrier.js'
                    import CarrierMarkdown from '../../../../lib/mobile/color/demo/lists/carrier.md'
                    
                    import NightComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/mobile/color/demo/lists/night.js'
                    import NightCode from 'text!../../../../lib/mobile/color/demo/lists/night.js'
                    import NightMarkdown from '../../../../lib/mobile/color/demo/lists/night.md'
                    
                    import NightAssitComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/mobile/color/demo/lists/night-assit.js'
                    import NightAssitCode from 'text!../../../../lib/mobile/color/demo/lists/night-assit.js'
                    import NightAssitMarkdown from '../../../../lib/mobile/color/demo/lists/night-assit.md'
                    
                    import NightCarrierComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/mobile/color/demo/lists/night-carrier.js'
                    import NightCarrierCode from 'text!../../../../lib/mobile/color/demo/lists/night-carrier.js'
                    import NightCarrierMarkdown from '../../../../lib/mobile/color/demo/lists/night-carrier.md'
                    

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
                        document.title = '颜色'
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
                        <CodeView md={AssitMarkdown} code={AssitCode}>
                            <AssitComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={ButtonMarkdown} code={ButtonCode}>
                            <ButtonComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={CarrierMarkdown} code={CarrierCode}>
                            <CarrierComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={NightMarkdown} code={NightCode}>
                            <NightComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={NightAssitMarkdown} code={NightAssitCode}>
                            <NightAssitComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={NightCarrierMarkdown} code={NightCarrierCode}>
                            <NightCarrierComponent/>
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
                