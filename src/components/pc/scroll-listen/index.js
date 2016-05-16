
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/scroll-listen/readme.md'
                import '../../../../lib/pc/scroll-listen/demo'

                const store = createStore()

                
                        import ScrollListenBoxSource from '../../../../lib/pc/scroll-listen/src/scroll-listen-box'
                        import ScrollListenBoxSourceCode from '-!text!../../../../lib/pc/scroll-listen/src/scroll-listen-box'
                        
                        import ScrollListenNailSource from '../../../../lib/pc/scroll-listen/src/scroll-listen-nail'
                        import ScrollListenNailSourceCode from '-!text!../../../../lib/pc/scroll-listen/src/scroll-listen-nail'
                        
                        import ScrollListenSource from '../../../../lib/pc/scroll-listen/src/scroll-listen'
                        import ScrollListenSourceCode from '-!text!../../../../lib/pc/scroll-listen/src/scroll-listen'
                        
                        import createStoreSource from '../../../../lib/pc/scroll-listen/src/create-store'
                        import createStoreSourceCode from '-!text!../../../../lib/pc/scroll-listen/src/create-store'
                        

                
                        import BasicComponent from '../../../../lib/pc/scroll-listen/demo/lists/basic.js'
                        import BasicCode from '-!text!../../../../lib/pc/scroll-listen/demo/lists/basic.js'
                        import BasicMarkdown from '../../../../lib/pc/scroll-listen/demo/lists/basic.md'
                        

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
                        document.title = '滚动监听'
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
                                      npmName="fit-scroll-listen">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={ScrollListenBoxSourceCode} instance={ScrollListenBoxSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={ScrollListenNailSourceCode} instance={ScrollListenNailSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={ScrollListenSourceCode} instance={ScrollListenSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={createStoreSourceCode} instance={createStoreSource} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-scroll-listen/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                