
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/number/readme.md'
                import '../../../../lib/pc/number/demo'

                const store = createStore()

                
                        import NumberSource from '../../../../lib/pc/number/src/number'
                        import NumberSourceCode from 'text!../../../../lib/pc/number/src/number'
                        

                
                        import BasicComponent from 'react-hot-loader!babel-loader!../../../../lib/pc/number/demo/lists/basic.js'
                        import BasicCode from 'text!../../../../lib/pc/number/demo/lists/basic.js'
                        import BasicMarkdown from '../../../../lib/pc/number/demo/lists/basic.md'
                        
                        import CallbackComponent from 'react-hot-loader!babel-loader!../../../../lib/pc/number/demo/lists/callback.js'
                        import CallbackCode from 'text!../../../../lib/pc/number/demo/lists/callback.js'
                        import CallbackMarkdown from '../../../../lib/pc/number/demo/lists/callback.md'
                        
                        import FloatComponent from 'react-hot-loader!babel-loader!../../../../lib/pc/number/demo/lists/float.js'
                        import FloatCode from 'text!../../../../lib/pc/number/demo/lists/float.js'
                        import FloatMarkdown from '../../../../lib/pc/number/demo/lists/float.md'
                        
                        import LimitComponent from 'react-hot-loader!babel-loader!../../../../lib/pc/number/demo/lists/limit.js'
                        import LimitCode from 'text!../../../../lib/pc/number/demo/lists/limit.js'
                        import LimitMarkdown from '../../../../lib/pc/number/demo/lists/limit.md'
                        
                        import SpeedComponent from 'react-hot-loader!babel-loader!../../../../lib/pc/number/demo/lists/speed.js'
                        import SpeedCode from 'text!../../../../lib/pc/number/demo/lists/speed.js'
                        import SpeedMarkdown from '../../../../lib/pc/number/demo/lists/speed.md'
                        
                        import StepComponent from 'react-hot-loader!babel-loader!../../../../lib/pc/number/demo/lists/step.js'
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
                        this.state = {
                            page: 'demo'
                        }
                        document.title = '数字框'
                    }

                    handlePageChange(value) {
                        this.setState({
                            page: value
                        })
                    }

                    render() {
                        let Content = null

                        switch (this.state.page) {
                        case 'demo':
                            Content = (
                                <Row>
                                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={BasicMarkdown}
                                      code={BasicCode}>

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CallbackMarkdown}
                                      code={CallbackCode}>

                                    <CallbackComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={FloatMarkdown}
                                      code={FloatCode}>

                                    <FloatComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={LimitMarkdown}
                                      code={LimitCode}>

                                    <LimitComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={SpeedMarkdown}
                                      code={SpeedCode}>

                                    <SpeedComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={StepMarkdown}
                                      code={StepCode}>

                                    <StepComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={NumberSourceCode} instance={NumberSource} />
                        </div>
                        
                                </div>
                            )
                            break
                        }

                        return (
                            <div className="_namespace">
                                <Layout>
                                    <Section>
                                        <Title>{readme}</Title>
                                        <ScrollListenBox store={store}>
                                            {Content}
                                        </ScrollListenBox>
                                    </Section>
                                    <Sidebar direction="right"
                                             width={120}>
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-number/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                