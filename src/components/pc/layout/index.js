
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/layout/readme.md'
                import '../../../../lib/pc/layout/demo'

                const store = createStore()

                
                            import RowSource from '../../../../lib/pc/layout/src/row/index.tsx'
                            import RowSourceCode from '-!text!../../../../lib/pc/layout/src/row/index.tsx'
                            
                                import * as RowModule from '../../../../lib/pc/layout/src/row/module.tsx'
                                import RowModuleCode from '-!text!../../../../lib/pc/layout/src/row/module.tsx'
                                
                            import ColSource from '../../../../lib/pc/layout/src/col/index.tsx'
                            import ColSourceCode from '-!text!../../../../lib/pc/layout/src/col/index.tsx'
                            
                                import * as ColModule from '../../../../lib/pc/layout/src/col/module.tsx'
                                import ColModuleCode from '-!text!../../../../lib/pc/layout/src/col/module.tsx'
                                

                
                        import BasicComponent from '../../../../lib/pc/layout/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/pc/layout/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/pc/layout/demo/lists/basic.md'
                        
                        import CenterComponent from '../../../../lib/pc/layout/demo/lists/center.tsx'
                        import CenterCode from '-!text!../../../../lib/pc/layout/demo/lists/center.tsx'
                        import CenterMarkdown from '../../../../lib/pc/layout/demo/lists/center.md'
                        
                        import FlexComponent from '../../../../lib/pc/layout/demo/lists/flex.tsx'
                        import FlexCode from '-!text!../../../../lib/pc/layout/demo/lists/flex.tsx'
                        import FlexMarkdown from '../../../../lib/pc/layout/demo/lists/flex.md'
                        
                        import OffsetComponent from '../../../../lib/pc/layout/demo/lists/offset.tsx'
                        import OffsetCode from '-!text!../../../../lib/pc/layout/demo/lists/offset.tsx'
                        import OffsetMarkdown from '../../../../lib/pc/layout/demo/lists/offset.md'
                        
                        import OrderComponent from '../../../../lib/pc/layout/demo/lists/order.tsx'
                        import OrderCode from '-!text!../../../../lib/pc/layout/demo/lists/order.tsx'
                        import OrderMarkdown from '../../../../lib/pc/layout/demo/lists/order.md'
                        

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
                        document.title = '布局'
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
                                      npmName="fit-layout">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CenterMarkdown}
                                      code={CenterCode}
                                      npmName="fit-layout">

                                    <CenterComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={FlexMarkdown}
                                      code={FlexCode}
                                      npmName="fit-layout">

                                    <FlexComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={OffsetMarkdown}
                                      code={OffsetCode}
                                      npmName="fit-layout">

                                    <OffsetComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={OrderMarkdown}
                                      code={OrderCode}
                                      npmName="fit-layout">

                                    <OrderComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={RowSourceCode} instance={RowSource} moduleCode={RowModuleCode} moduleInstance={RowModule} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={ColSourceCode} instance={ColSource} moduleCode={ColModuleCode} moduleInstance={ColModule} />
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
                                        <SidebarComponent gitlabUrl="https://github.com/fit-component/pc-layout/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                