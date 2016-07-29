
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

                
                            import NumberSource from '../../../../lib/pc/number/src/number/index.tsx'
                            import NumberSourceCode from '-!text!../../../../lib/pc/number/src/number/index.tsx'
                            
                                import * as NumberModule from '../../../../lib/pc/number/src/number/module.tsx'
                                import NumberModuleCode from '-!text!../../../../lib/pc/number/src/number/module.tsx'
                                

                
                        import FloatComponent from '../../../../lib/pc/number/demo/lists/float.tsx'
                        import FloatCode from '-!text!../../../../lib/pc/number/demo/lists/float.tsx'
                        import FloatMarkdown from '../../../../lib/pc/number/demo/lists/float.md'
                        
                        import LimitComponent from '../../../../lib/pc/number/demo/lists/limit.tsx'
                        import LimitCode from '-!text!../../../../lib/pc/number/demo/lists/limit.tsx'
                        import LimitMarkdown from '../../../../lib/pc/number/demo/lists/limit.md'
                        
                        import SpeedComponent from '../../../../lib/pc/number/demo/lists/speed.tsx'
                        import SpeedCode from '-!text!../../../../lib/pc/number/demo/lists/speed.tsx'
                        import SpeedMarkdown from '../../../../lib/pc/number/demo/lists/speed.md'
                        
                        import StepComponent from '../../../../lib/pc/number/demo/lists/step.tsx'
                        import StepCode from '-!text!../../../../lib/pc/number/demo/lists/step.tsx'
                        import StepMarkdown from '../../../../lib/pc/number/demo/lists/step.md'
                        

                const colStyle = {
                    padding: 10,
                    boxSizing: 'border-box'
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
                                      md={FloatMarkdown}
                                      code={FloatCode}
                                      npmName="fit-number">

                                    <FloatComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={LimitMarkdown}
                                      code={LimitCode}
                                      npmName="fit-number">

                                    <LimitComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={SpeedMarkdown}
                                      code={SpeedCode}
                                      npmName="fit-number">

                                    <SpeedComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={StepMarkdown}
                                      code={StepCode}
                                      npmName="fit-number">

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
                                <CodeDoc code={NumberSourceCode} instance={NumberSource} moduleCode={NumberModuleCode} moduleInstance={NumberModule} />
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
                                        <SidebarComponent gitlabUrl="https://github.com/fit-component/pc-number/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                