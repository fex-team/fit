
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Tabs, TabPanel } from 'fit-tabs'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/mobile/chat-box/readme.md'
                import '../../../../lib/mobile/chat-box/demo'

                
                        import ChatBoxSource from '../../../../lib/mobile/chat-box/src/chat-box'
                        import ChatBoxSourceCode from 'text!../../../../lib/mobile/chat-box/src/chat-box'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/mobile/chat-box/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/mobile/chat-box/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/mobile/chat-box/demo/lists/basic.md'
                    
                    import ReverseComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/mobile/chat-box/demo/lists/reverse.js'
                    import ReverseCode from 'text!../../../../lib/mobile/chat-box/demo/lists/reverse.js'
                    import ReverseMarkdown from '../../../../lib/mobile/chat-box/demo/lists/reverse.md'
                    
                    import BackBottomComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/mobile/chat-box/demo/lists/back-bottom.js'
                    import BackBottomCode from 'text!../../../../lib/mobile/chat-box/demo/lists/back-bottom.js'
                    import BackBottomMarkdown from '../../../../lib/mobile/chat-box/demo/lists/back-bottom.md'
                    
                    import LoadingComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/mobile/chat-box/demo/lists/loading.js'
                    import LoadingCode from 'text!../../../../lib/mobile/chat-box/demo/lists/loading.js'
                    import LoadingMarkdown from '../../../../lib/mobile/chat-box/demo/lists/loading.md'
                    

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
                        document.title = '聊天盒子'
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
                        <CodeView md={ReverseMarkdown} code={ReverseCode}>
                            <ReverseComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={BackBottomMarkdown} code={BackBottomCode}>
                            <BackBottomComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={LoadingMarkdown} code={LoadingCode}>
                            <LoadingComponent/>
                        </CodeView>
                    </Col>
                    
                                    </Row>
                                </TabPanel>
                                <TabPanel tab="文档"
                                          key="2">
                                    
                        <div style={docStyle}>
                            <CodeDoc code={ChatBoxSourceCode} instance={ChatBoxSource} />
                        </div>
                        
                                    </TabPanel>
                                </Tabs>
                            </div>
                        )
                    }
                }
                