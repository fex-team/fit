
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/tree/readme.md'
                import '../../../../lib/pc/tree/demo'

                const store = createStore()

                
                            import TreeSource from '../../../../lib/pc/tree/src/tree/index.tsx'
                            import TreeSourceCode from '-!text!../../../../lib/pc/tree/src/tree/index.tsx'
                            
                                import * as TreeModule from '../../../../lib/pc/tree/src/tree/module.tsx'
                                import TreeModuleCode from '-!text!../../../../lib/pc/tree/src/tree/module.tsx'
                                
                            import TreeNodeSource from '../../../../lib/pc/tree/src/tree-node/index.tsx'
                            import TreeNodeSourceCode from '-!text!../../../../lib/pc/tree/src/tree-node/index.tsx'
                            
                                import * as TreeNodeModule from '../../../../lib/pc/tree/src/tree-node/module.tsx'
                                import TreeNodeModuleCode from '-!text!../../../../lib/pc/tree/src/tree-node/module.tsx'
                                

                
                        import BasicComponent from '../../../../lib/pc/tree/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/pc/tree/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/pc/tree/demo/lists/basic.md'
                        
                        import ExpendAllComponent from '../../../../lib/pc/tree/demo/lists/expend-all.tsx'
                        import ExpendAllCode from '-!text!../../../../lib/pc/tree/demo/lists/expend-all.tsx'
                        import ExpendAllMarkdown from '../../../../lib/pc/tree/demo/lists/expend-all.md'
                        

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
                        document.title = '树形控件'
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
                                      npmName="fit-tree">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ExpendAllMarkdown}
                                      code={ExpendAllCode}
                                      npmName="fit-tree">

                                    <ExpendAllComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={TreeSourceCode} instance={TreeSource} moduleCode={TreeModuleCode} moduleInstance={TreeModule} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={TreeNodeSourceCode} instance={TreeNodeSource} moduleCode={TreeNodeModuleCode} moduleInstance={TreeNodeModule} />
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
                                        <SidebarComponent gitlabUrl="https://github.com/fit-component/pc-tree/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                