
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/tabs/readme.md'
                import '../../../../lib/pc/tabs/demo'

                const store = createStore()

                
                            import TabsSource from '../../../../lib/pc/tabs/src/tabs/index.tsx'
                            import TabsSourceCode from '-!text!../../../../lib/pc/tabs/src/tabs/index.tsx'
                            
                                import * as TabsModule from '../../../../lib/pc/tabs/src/tabs/module.tsx'
                                import TabsModuleCode from '-!text!../../../../lib/pc/tabs/src/tabs/module.tsx'
                                
                            import TabPanelSource from '../../../../lib/pc/tabs/src/tab-panel/index.tsx'
                            import TabPanelSourceCode from '-!text!../../../../lib/pc/tabs/src/tab-panel/index.tsx'
                            
                                import * as TabPanelModule from '../../../../lib/pc/tabs/src/tab-panel/module.tsx'
                                import TabPanelModuleCode from '-!text!../../../../lib/pc/tabs/src/tab-panel/module.tsx'
                                

                
                        import BasicComponent from '../../../../lib/pc/tabs/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/pc/tabs/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/pc/tabs/demo/lists/basic.md'
                        
                        import OldStyleComponent from '../../../../lib/pc/tabs/demo/lists/old-style.tsx'
                        import OldStyleCode from '-!text!../../../../lib/pc/tabs/demo/lists/old-style.tsx'
                        import OldStyleMarkdown from '../../../../lib/pc/tabs/demo/lists/old-style.md'
                        

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
                        document.title = '标签页'
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
                                      npmName="fit-tabs">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={OldStyleMarkdown}
                                      code={OldStyleCode}
                                      npmName="fit-tabs">

                                    <OldStyleComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={TabsSourceCode} instance={TabsSource} moduleCode={TabsModuleCode} moduleInstance={TabsModule} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={TabPanelSourceCode} instance={TabPanelSource} moduleCode={TabPanelModuleCode} moduleInstance={TabPanelModule} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-tabs/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                