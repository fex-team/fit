
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/tb/submit/readme.md'
                import '../../../../lib/tb/submit/demo'

                const store = createStore()

                
                        import SubmitSource from '../../../../lib/tb/submit/src/submit'
                        import SubmitSourceCode from 'text!../../../../lib/tb/submit/src/submit'
                        
                        import sendSource from '../../../../lib/tb/submit/src/send'
                        import sendSourceCode from 'text!../../../../lib/tb/submit/src/send'
                        

                
                        import PostComponent from 'react-hot-loader!babel-loader!../../../../lib/tb/submit/demo/lists/post.js'
                        import PostCode from 'text!../../../../lib/tb/submit/demo/lists/post.js'
                        import PostMarkdown from '../../../../lib/tb/submit/demo/lists/post.md'
                        
                        import ReplyComponent from 'react-hot-loader!babel-loader!../../../../lib/tb/submit/demo/lists/reply.js'
                        import ReplyCode from 'text!../../../../lib/tb/submit/demo/lists/reply.js'
                        import ReplyMarkdown from '../../../../lib/tb/submit/demo/lists/reply.md'
                        
                        import CommentComponent from 'react-hot-loader!babel-loader!../../../../lib/tb/submit/demo/lists/comment.js'
                        import CommentCode from 'text!../../../../lib/tb/submit/demo/lists/comment.js'
                        import CommentMarkdown from '../../../../lib/tb/submit/demo/lists/comment.md'
                        
                        import SingleComponent from 'react-hot-loader!babel-loader!../../../../lib/tb/submit/demo/lists/single.js'
                        import SingleCode from 'text!../../../../lib/tb/submit/demo/lists/single.js'
                        import SingleMarkdown from '../../../../lib/tb/submit/demo/lists/single.md'
                        

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
                        document.title = '发帖'
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
                                      md={PostMarkdown}
                                      code={PostCode}
                                      npmName="tb-submit">

                                    <PostComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ReplyMarkdown}
                                      code={ReplyCode}
                                      npmName="tb-submit">

                                    <ReplyComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CommentMarkdown}
                                      code={CommentCode}
                                      npmName="tb-submit">

                                    <CommentComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={SingleMarkdown}
                                      code={SingleCode}
                                      npmName="tb-submit">

                                    <SingleComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={SubmitSourceCode} instance={SubmitSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={sendSourceCode} instance={sendSource} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/tb-submit/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                