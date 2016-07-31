
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/checkbox/readme.md'
                import '../../../../lib/pc/checkbox/demo'

                const store = createStore()

                
                            import CheckboxSource from '../../../../lib/pc/checkbox/src/checkbox/index.tsx'
                            import CheckboxSourceCode from '-!text!../../../../lib/pc/checkbox/src/checkbox/index.tsx'
                            
                                import * as CheckboxModule from '../../../../lib/pc/checkbox/src/checkbox/module.tsx'
                                import CheckboxModuleCode from '-!text!../../../../lib/pc/checkbox/src/checkbox/module.tsx'
                                

                
                        import BasicComponent from '../../../../lib/pc/checkbox/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/pc/checkbox/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/pc/checkbox/demo/lists/basic.md'
                        
                        import CallbackComponent from '../../../../lib/pc/checkbox/demo/lists/callback.tsx'
                        import CallbackCode from '-!text!../../../../lib/pc/checkbox/demo/lists/callback.tsx'
                        import CallbackMarkdown from '../../../../lib/pc/checkbox/demo/lists/callback.md'
                        
                        import CustomComponent from '../../../../lib/pc/checkbox/demo/lists/custom.tsx'
                        import CustomCode from '-!text!../../../../lib/pc/checkbox/demo/lists/custom.tsx'
                        import CustomMarkdown from '../../../../lib/pc/checkbox/demo/lists/custom.md'
                        
                        import DisableComponent from '../../../../lib/pc/checkbox/demo/lists/disable.tsx'
                        import DisableCode from '-!text!../../../../lib/pc/checkbox/demo/lists/disable.tsx'
                        import DisableMarkdown from '../../../../lib/pc/checkbox/demo/lists/disable.md'
                        
                        import LabelComponent from '../../../../lib/pc/checkbox/demo/lists/label.tsx'
                        import LabelCode from '-!text!../../../../lib/pc/checkbox/demo/lists/label.tsx'
                        import LabelMarkdown from '../../../../lib/pc/checkbox/demo/lists/label.md'
                        
                        import SizeComponent from '../../../../lib/pc/checkbox/demo/lists/size.tsx'
                        import SizeCode from '-!text!../../../../lib/pc/checkbox/demo/lists/size.tsx'
                        import SizeMarkdown from '../../../../lib/pc/checkbox/demo/lists/size.md'
                        

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
                        document.title = '多选框'
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
                                      code={BasicCode}
                                      npmName="fit-checkbox">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CallbackMarkdown}
                                      code={CallbackCode}
                                      npmName="fit-checkbox">

                                    <CallbackComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CustomMarkdown}
                                      code={CustomCode}
                                      npmName="fit-checkbox">

                                    <CustomComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={DisableMarkdown}
                                      code={DisableCode}
                                      npmName="fit-checkbox">

                                    <DisableComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={LabelMarkdown}
                                      code={LabelCode}
                                      npmName="fit-checkbox">

                                    <LabelComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={SizeMarkdown}
                                      code={SizeCode}
                                      npmName="fit-checkbox">

                                    <SizeComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={CheckboxSourceCode} instance={CheckboxSource} moduleCode={CheckboxModuleCode} moduleInstance={CheckboxModule} />
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
                                        <SidebarComponent gitlabUrl="https://github.com/fit-component/pc-checkbox/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                