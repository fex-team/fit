
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/common/timeago/readme.md'
                import '../../../../lib/common/timeago/demo'

                const store = createStore()

                
                        import TimeagoSource from '../../../../lib/common/timeago/src/timeago/index.tsx'
                        import TimeagoSourceCode from 'text!../../../../lib/common/timeago/src/timeago/index.tsx'
                        

                
                        import BasicComponent from '../../../../lib/common/timeago/demo/lists/basic.tsx'
                        import BasicCode from 'text!../../../../lib/common/timeago/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/common/timeago/demo/lists/basic.md'
                        
                        import ChineseComponent from '../../../../lib/common/timeago/demo/lists/chinese.tsx'
                        import ChineseCode from 'text!../../../../lib/common/timeago/demo/lists/chinese.tsx'
                        import ChineseMarkdown from '../../../../lib/common/timeago/demo/lists/chinese.md'
                        
                        import LoseComponent from '../../../../lib/common/timeago/demo/lists/lose.tsx'
                        import LoseCode from 'text!../../../../lib/common/timeago/demo/lists/lose.tsx'
                        import LoseMarkdown from '../../../../lib/common/timeago/demo/lists/lose.md'
                        

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
                        document.title = '友好时间'
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
                                      npmName="fit-timeago">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ChineseMarkdown}
                                      code={ChineseCode}
                                      npmName="fit-timeago">

                                    <ChineseComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={LoseMarkdown}
                                      code={LoseCode}
                                      npmName="fit-timeago">

                                    <LoseComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={TimeagoSourceCode} instance={TimeagoSource} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/timeago/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                