
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/common/transmit-transparently/readme.md'
                import '../../../../lib/common/transmit-transparently/demo'

                const store = createStore()

                
                        import TransmitTransparentlySource from '../../../../lib/common/transmit-transparently/src/transmit-transparently/index.tsx'
                        import TransmitTransparentlySourceCode from 'text!../../../../lib/common/transmit-transparently/src/transmit-transparently/index.tsx'
                        
                        import othersSource from '../../../../lib/common/transmit-transparently/src/others/index.tsx'
                        import othersSourceCode from 'text!../../../../lib/common/transmit-transparently/src/others/index.tsx'
                        

                
                        import BasicComponent from 'react-hot-loader!ts-loader!../../../../lib/common/transmit-transparently/demo/lists/basic.tsx'
                        import BasicCode from 'text!../../../../lib/common/transmit-transparently/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/common/transmit-transparently/demo/lists/basic.md'
                        

                const colStyle = {
                    padding: 10
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
                        document.title = '透传'
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
                                      code={BasicCode}>

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
                            <CodeDoc code={TransmitTransparentlySourceCode} instance={TransmitTransparentlySource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={othersSourceCode} instance={othersSource} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/transmit-transparently/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                