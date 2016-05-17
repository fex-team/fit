
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

                
                            import SubmitSource from '../../../../lib/tb/submit/src/submit/index.tsx'
                            import SubmitSourceCode from '-!text!../../../../lib/tb/submit/src/submit/index.tsx'
                            
                                import SubmitSourceModuleCode from '-!text!../../../../lib/tb/submit/src/submit/module.tsx'
                                import SubmitSourceModule from '../../../../lib/tb/submit/src/submit/module.tsx'
                                
                            import sendSource from '../../../../lib/tb/submit/src/send/index.tsx'
                            import sendSourceCode from '-!text!../../../../lib/tb/submit/src/send/index.tsx'
                            
                                import sendSourceModuleCode from '-!text!../../../../lib/tb/submit/src/send/module.tsx'
                                import sendSourceModule from '../../../../lib/tb/submit/src/send/module.tsx'
                                

                
                        import PostComponent from '../../../../lib/tb/submit/demo/lists/post.tsx'
                        import PostCode from '-!text!../../../../lib/tb/submit/demo/lists/post.tsx'
                        import PostMarkdown from '../../../../lib/tb/submit/demo/lists/post.md'
                        
                        import ReplyComponent from '../../../../lib/tb/submit/demo/lists/reply.tsx'
                        import ReplyCode from '-!text!../../../../lib/tb/submit/demo/lists/reply.tsx'
                        import ReplyMarkdown from '../../../../lib/tb/submit/demo/lists/reply.md'
                        
                        import CommentComponent from '../../../../lib/tb/submit/demo/lists/comment.tsx'
                        import CommentCode from '-!text!../../../../lib/tb/submit/demo/lists/comment.tsx'
                        import CommentMarkdown from '../../../../lib/tb/submit/demo/lists/comment.md'
                        
                        import SingleComponent from '../../../../lib/tb/submit/demo/lists/single.tsx'
                        import SingleCode from '-!text!../../../../lib/tb/submit/demo/lists/single.tsx'
                        import SingleMarkdown from '../../../../lib/tb/submit/demo/lists/single.md'
                        

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
                                <CodeDoc code={SubmitSourceCode} instance={SubmitSource} moduleCode={SubmitSourceModuleCode} moduleInstance={SubmitModule} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={sendSourceCode} instance={sendSource} moduleCode={sendSourceModuleCode} moduleInstance={sendModule} />
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
                