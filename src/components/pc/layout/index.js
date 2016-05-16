
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

                
                        import RowSource from '../../../../lib/pc/layout/src/row'
                        import RowSourceCode from '-!text!../../../../lib/pc/layout/src/row'
                        
                        import ColSource from '../../../../lib/pc/layout/src/col'
                        import ColSourceCode from '-!text!../../../../lib/pc/layout/src/col'
                        

                
                        import BasicComponent from '../../../../lib/pc/layout/demo/lists/basic.js'
                        import BasicCode from '-!text!../../../../lib/pc/layout/demo/lists/basic.js'
                        import BasicMarkdown from '../../../../lib/pc/layout/demo/lists/basic.md'
                        
                        import CenterComponent from '../../../../lib/pc/layout/demo/lists/center.js'
                        import CenterCode from '-!text!../../../../lib/pc/layout/demo/lists/center.js'
                        import CenterMarkdown from '../../../../lib/pc/layout/demo/lists/center.md'
                        
                        import FlexComponent from '../../../../lib/pc/layout/demo/lists/flex.js'
                        import FlexCode from '-!text!../../../../lib/pc/layout/demo/lists/flex.js'
                        import FlexMarkdown from '../../../../lib/pc/layout/demo/lists/flex.md'
                        
                        import OffsetComponent from '../../../../lib/pc/layout/demo/lists/offset.js'
                        import OffsetCode from '-!text!../../../../lib/pc/layout/demo/lists/offset.js'
                        import OffsetMarkdown from '../../../../lib/pc/layout/demo/lists/offset.md'
                        
                        import OrderComponent from '../../../../lib/pc/layout/demo/lists/order.js'
                        import OrderCode from '-!text!../../../../lib/pc/layout/demo/lists/order.js'
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
                            <CodeDoc code={RowSourceCode} instance={RowSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={ColSourceCode} instance={ColSource} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-layout/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                