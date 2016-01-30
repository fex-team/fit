
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Tabs, TabPanel } from 'fit-tabs'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/switch/readme.md'
                import '../../../../lib/pc/switch/demo'

                

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/switch/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/switch/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/switch/demo/lists/basic.md'
                    
                    import ControlComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/switch/demo/lists/control.js'
                    import ControlCode from 'text!../../../../lib/pc/switch/demo/lists/control.js'
                    import ControlMarkdown from '../../../../lib/pc/switch/demo/lists/control.md'
                    
                    import LabelComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/switch/demo/lists/label.js'
                    import LabelCode from 'text!../../../../lib/pc/switch/demo/lists/label.js'
                    import LabelMarkdown from '../../../../lib/pc/switch/demo/lists/label.md'
                    
                    import SizeComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/switch/demo/lists/size.js'
                    import SizeCode from 'text!../../../../lib/pc/switch/demo/lists/size.js'
                    import SizeMarkdown from '../../../../lib/pc/switch/demo/lists/size.md'
                    
                    import TypeComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/switch/demo/lists/type.js'
                    import TypeCode from 'text!../../../../lib/pc/switch/demo/lists/type.js'
                    import TypeMarkdown from '../../../../lib/pc/switch/demo/lists/type.md'
                    

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
                        document.title = '开关'
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
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={TypeMarkdown} code={TypeCode}>
                            <TypeComponent/>
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
                