
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/tb/node-api/readme.md'
                import '../../../../lib/tb/node-api/demo'

                const store = createStore()

                
                        import currentUserSource from '../../../../lib/tb/node-api/src/current-user/index.tsx'
                        import currentUserSourceCode from 'text!../../../../lib/tb/node-api/src/current-user/index.tsx'
                        
                        import ralSource from '../../../../lib/tb/node-api/src/ral/index.tsx'
                        import ralSourceCode from 'text!../../../../lib/tb/node-api/src/ral/index.tsx'
                        
                        import tbsSource from '../../../../lib/tb/node-api/src/tbs/index.tsx'
                        import tbsSourceCode from 'text!../../../../lib/tb/node-api/src/tbs/index.tsx'
                        
                        import userSource from '../../../../lib/tb/node-api/src/user/index.tsx'
                        import userSourceCode from 'text!../../../../lib/tb/node-api/src/user/index.tsx'
                        

                

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
                        document.title = 'nodeApi'
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
                                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={currentUserSourceCode} instance={currentUserSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={ralSourceCode} instance={ralSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={tbsSourceCode} instance={tbsSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={userSourceCode} instance={userSource} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/tb-node-api/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                