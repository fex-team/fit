
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/pagination/readme.md'
                import '../../../../lib/pc/pagination/demo'

                const store = createStore()

                
                            import PaginationSource from '../../../../lib/pc/pagination/src/pagination/index.tsx'
                            import PaginationSourceCode from '-!text!../../../../lib/pc/pagination/src/pagination/index.tsx'
                            
                                import * as PaginationModule from '../../../../lib/pc/pagination/src/pagination/module.tsx'
                                import PaginationModuleCode from '-!text!../../../../lib/pc/pagination/src/pagination/module.tsx'
                                
                            import PaginationFullSource from '../../../../lib/pc/pagination/src/pagination-full/index.tsx'
                            import PaginationFullSourceCode from '-!text!../../../../lib/pc/pagination/src/pagination-full/index.tsx'
                            
                                import * as PaginationFullModule from '../../../../lib/pc/pagination/src/pagination-full/module.tsx'
                                import PaginationFullModuleCode from '-!text!../../../../lib/pc/pagination/src/pagination-full/module.tsx'
                                

                
                        import BasicComponent from '../../../../lib/pc/pagination/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/pc/pagination/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/pc/pagination/demo/lists/basic.md'
                        
                        import AllPageComponent from '../../../../lib/pc/pagination/demo/lists/all-page.tsx'
                        import AllPageCode from '-!text!../../../../lib/pc/pagination/demo/lists/all-page.tsx'
                        import AllPageMarkdown from '../../../../lib/pc/pagination/demo/lists/all-page.md'
                        
                        import LoadingComponent from '../../../../lib/pc/pagination/demo/lists/loading.tsx'
                        import LoadingCode from '-!text!../../../../lib/pc/pagination/demo/lists/loading.tsx'
                        import LoadingMarkdown from '../../../../lib/pc/pagination/demo/lists/loading.md'
                        
                        import SizeComponent from '../../../../lib/pc/pagination/demo/lists/size.tsx'
                        import SizeCode from '-!text!../../../../lib/pc/pagination/demo/lists/size.tsx'
                        import SizeMarkdown from '../../../../lib/pc/pagination/demo/lists/size.md'
                        
                        import LoadingAllComponent from '../../../../lib/pc/pagination/demo/lists/loading-all.tsx'
                        import LoadingAllCode from '-!text!../../../../lib/pc/pagination/demo/lists/loading-all.tsx'
                        import LoadingAllMarkdown from '../../../../lib/pc/pagination/demo/lists/loading-all.md'
                        
                        import EnableJumpComponent from '../../../../lib/pc/pagination/demo/lists/enable-jump.tsx'
                        import EnableJumpCode from '-!text!../../../../lib/pc/pagination/demo/lists/enable-jump.tsx'
                        import EnableJumpMarkdown from '../../../../lib/pc/pagination/demo/lists/enable-jump.md'
                        

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
                        document.title = '分页'
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
                                      npmName="fit-pagination">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={AllPageMarkdown}
                                      code={AllPageCode}
                                      npmName="fit-pagination">

                                    <AllPageComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={LoadingMarkdown}
                                      code={LoadingCode}
                                      npmName="fit-pagination">

                                    <LoadingComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={SizeMarkdown}
                                      code={SizeCode}
                                      npmName="fit-pagination">

                                    <SizeComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={LoadingAllMarkdown}
                                      code={LoadingAllCode}
                                      npmName="fit-pagination">

                                    <LoadingAllComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={EnableJumpMarkdown}
                                      code={EnableJumpCode}
                                      npmName="fit-pagination">

                                    <EnableJumpComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={PaginationSourceCode} instance={PaginationSource} moduleCode={PaginationModuleCode} moduleInstance={PaginationModule} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={PaginationFullSourceCode} instance={PaginationFullSource} moduleCode={PaginationFullModuleCode} moduleInstance={PaginationFullModule} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-pagination/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                