
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/collapse/readme.md'
                import '../../../../lib/pc/collapse/demo'

                const store = createStore()

                
                            import CollapseSource from '../../../../lib/pc/collapse/src/collapse/index.tsx'
                            import CollapseSourceCode from '-!text!../../../../lib/pc/collapse/src/collapse/index.tsx'
                            
                                import * as CollapseModule from '../../../../lib/pc/collapse/src/collapse/module.tsx'
                                import CollapseModuleCode from '-!text!../../../../lib/pc/collapse/src/collapse/module.tsx'
                                
                            import CollPanelSource from '../../../../lib/pc/collapse/src/coll-panel/index.tsx'
                            import CollPanelSourceCode from '-!text!../../../../lib/pc/collapse/src/coll-panel/index.tsx'
                            
                                import * as CollPanelModule from '../../../../lib/pc/collapse/src/coll-panel/module.tsx'
                                import CollPanelModuleCode from '-!text!../../../../lib/pc/collapse/src/coll-panel/module.tsx'
                                

                
                        import BasicComponent from '../../../../lib/pc/collapse/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/pc/collapse/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/pc/collapse/demo/lists/basic.md'
                        
                        import AccordionComponent from '../../../../lib/pc/collapse/demo/lists/accordion.tsx'
                        import AccordionCode from '-!text!../../../../lib/pc/collapse/demo/lists/accordion.tsx'
                        import AccordionMarkdown from '../../../../lib/pc/collapse/demo/lists/accordion.md'
                        

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
                        document.title = '折叠面板'
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
                                      npmName="fit-collapse">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={AccordionMarkdown}
                                      code={AccordionCode}
                                      npmName="fit-collapse">

                                    <AccordionComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={CollapseSourceCode} instance={CollapseSource} moduleCode={CollapseModuleCode} moduleInstance={CollapseModule} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={CollPanelSourceCode} instance={CollPanelSource} moduleCode={CollPanelModuleCode} moduleInstance={CollPanelModule} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-collapse/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                