
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

                
                        import TimeagoSource from '../../../../lib/common/timeago/src/timeago'
                        import TimeagoSourceCode from 'text!../../../../lib/common/timeago/src/timeago'
                        

                
                    import BasicComponent from 'react-hot-loader!babel-loader!../../../../lib/common/timeago/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/common/timeago/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/common/timeago/demo/lists/basic.md'
                    
                    import ChineseComponent from 'react-hot-loader!babel-loader!../../../../lib/common/timeago/demo/lists/chinese.js'
                    import ChineseCode from 'text!../../../../lib/common/timeago/demo/lists/chinese.js'
                    import ChineseMarkdown from '../../../../lib/common/timeago/demo/lists/chinese.md'
                    
                    import LoseComponent from 'react-hot-loader!babel-loader!../../../../lib/common/timeago/demo/lists/lose.js'
                    import LoseCode from 'text!../../../../lib/common/timeago/demo/lists/lose.js'
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
                                      code={BasicCode}>

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ChineseMarkdown}
                                      code={ChineseCode}>

                                    <ChineseComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={LoseMarkdown}
                                      code={LoseCode}>

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
                                             width="120">
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/timeago/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                