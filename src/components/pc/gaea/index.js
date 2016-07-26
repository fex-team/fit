
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/gaea/readme.md'
                import '../../../../lib/pc/gaea/demo'

                const store = createStore()

                
                            import GaeaSource from '../../../../lib/pc/gaea/src/gaea/index.tsx'
                            import GaeaSourceCode from '-!text!../../../../lib/pc/gaea/src/gaea/index.tsx'
                            
                                import * as GaeaModule from '../../../../lib/pc/gaea/src/gaea/module.tsx'
                                import GaeaModuleCode from '-!text!../../../../lib/pc/gaea/src/gaea/module.tsx'
                                
                            import PreviewSource from '../../../../lib/pc/gaea/src/preview/index.tsx'
                            import PreviewSourceCode from '-!text!../../../../lib/pc/gaea/src/preview/index.tsx'
                            
                                import * as PreviewModule from '../../../../lib/pc/gaea/src/preview/module.tsx'
                                import PreviewModuleCode from '-!text!../../../../lib/pc/gaea/src/preview/module.tsx'
                                

                
                        import BasicComponent from '../../../../lib/pc/gaea/demo/lists/basic.js'
                        import BasicCode from '-!text!../../../../lib/pc/gaea/demo/lists/basic.js'
                        import BasicMarkdown from '../../../../lib/pc/gaea/demo/lists/basic.md'
                        
                        import PreviewComponent from '../../../../lib/pc/gaea/demo/lists/preview.js'
                        import PreviewCode from '-!text!../../../../lib/pc/gaea/demo/lists/preview.js'
                        import PreviewMarkdown from '../../../../lib/pc/gaea/demo/lists/preview.md'
                        
                        import PluginComponent from '../../../../lib/pc/gaea/demo/lists/plugin.js'
                        import PluginCode from '-!text!../../../../lib/pc/gaea/demo/lists/plugin.js'
                        import PluginMarkdown from '../../../../lib/pc/gaea/demo/lists/plugin.md'
                        
<<<<<<< 940228823dbe9f0824ca791cae3f5be794204602
                        import ConfigComponent from '../../../../lib/pc/gaea/demo/lists/config.js'
                        import ConfigCode from '-!text!../../../../lib/pc/gaea/demo/lists/config.js'
=======
                        import ConfigComponent from '../../../../lib/pc/gaea/demo/lists/config.tsx'
                        import ConfigCode from '-!text!../../../../lib/pc/gaea/demo/lists/config.tsx'
>>>>>>> quick push
                        import ConfigMarkdown from '../../../../lib/pc/gaea/demo/lists/config.md'
                        

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
                        document.title = '盖亚可视化编辑器'
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
                                      npmName="fit-gaea">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={PreviewMarkdown}
                                      code={PreviewCode}
                                      npmName="fit-gaea">

                                    <PreviewComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={PluginMarkdown}
                                      code={PluginCode}
                                      npmName="fit-gaea">

                                    <PluginComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ConfigMarkdown}
                                      code={ConfigCode}
                                      npmName="fit-gaea">

                                    <ConfigComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={GaeaSourceCode} instance={GaeaSource} moduleCode={GaeaModuleCode} moduleInstance={GaeaModule} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={PreviewSourceCode} instance={PreviewSource} moduleCode={PreviewModuleCode} moduleInstance={PreviewModule} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-gaea/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                