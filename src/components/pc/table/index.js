
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/table/readme.md'
                import '../../../../lib/pc/table/demo'

                const store = createStore()

                
                            import TableSource from '../../../../lib/pc/table/src/table'
                            import TableSourceCode from '-!text!../../../../lib/pc/table/src/table'
                            

                
                        import Component from '../../../../lib/pc/table/demo/lists/<<<<<<<.tsx'
                        import Code from '-!text!../../../../lib/pc/table/demo/lists/<<<<<<<.tsx'
                        import Markdown from '../../../../lib/pc/table/demo/lists/<<<<<<<.md'
                        
                        import HeadComponent from '../../../../lib/pc/table/demo/lists/HEAD.tsx'
                        import HeadCode from '-!text!../../../../lib/pc/table/demo/lists/HEAD.tsx'
                        import HeadMarkdown from '../../../../lib/pc/table/demo/lists/HEAD.md'
                        

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
                        document.title = '表格'
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
                                      md={Markdown}
                                      code={Code}
                                      npmName="fit-table">

                                    <Component/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={HeadMarkdown}
                                      code={HeadCode}
                                      npmName="fit-table">

                                    <HeadComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={TableSourceCode} instance={TableSource} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-table/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                