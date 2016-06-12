
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/mobile/chat-box/readme.md'
                import '../../../../lib/mobile/chat-box/demo'

                const store = createStore()

                
                            import ChatBoxSource from '../../../../lib/mobile/chat-box/src/chat-box/index.tsx'
                            import ChatBoxSourceCode from '-!text!../../../../lib/mobile/chat-box/src/chat-box/index.tsx'
                            
                                import * as ChatBoxModule from '../../../../lib/mobile/chat-box/src/chat-box/module.tsx'
                                import ChatBoxModuleCode from '-!text!../../../../lib/mobile/chat-box/src/chat-box/module.tsx'
                                

                
                        import BasicComponent from '../../../../lib/mobile/chat-box/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/mobile/chat-box/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/mobile/chat-box/demo/lists/basic.md'
                        
                        import BackBottomComponent from '../../../../lib/mobile/chat-box/demo/lists/back-bottom.tsx'
                        import BackBottomCode from '-!text!../../../../lib/mobile/chat-box/demo/lists/back-bottom.tsx'
                        import BackBottomMarkdown from '../../../../lib/mobile/chat-box/demo/lists/back-bottom.md'
                        
                        import LoadingComponent from '../../../../lib/mobile/chat-box/demo/lists/loading.tsx'
                        import LoadingCode from '-!text!../../../../lib/mobile/chat-box/demo/lists/loading.tsx'
                        import LoadingMarkdown from '../../../../lib/mobile/chat-box/demo/lists/loading.md'
                        
                        import ReverseComponent from '../../../../lib/mobile/chat-box/demo/lists/reverse.tsx'
                        import ReverseCode from '-!text!../../../../lib/mobile/chat-box/demo/lists/reverse.tsx'
                        import ReverseMarkdown from '../../../../lib/mobile/chat-box/demo/lists/reverse.md'
                        

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
                        document.title = '聊天盒子'
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
                                      npmName="fit-chat-box">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={BackBottomMarkdown}
                                      code={BackBottomCode}
                                      npmName="fit-chat-box">

                                    <BackBottomComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={LoadingMarkdown}
                                      code={LoadingCode}
                                      npmName="fit-chat-box">

                                    <LoadingComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ReverseMarkdown}
                                      code={ReverseCode}
                                      npmName="fit-chat-box">

                                    <ReverseComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={ChatBoxSourceCode} instance={ChatBoxSource} moduleCode={ChatBoxModuleCode} moduleInstance={ChatBoxModule} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/mobile-chat-box/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                