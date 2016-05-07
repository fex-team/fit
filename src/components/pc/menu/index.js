
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/menu/readme.md'
                import '../../../../lib/pc/menu/demo'

                const store = createStore()

                
                        import Source from '../../../../lib/pc/menu/src//index.tsx'
                        import SourceCode from 'text!../../../../lib/pc/menu/src//index.tsx'
                        

                
                        import BasicComponent from 'react-hot-loader!ts-loader!../../../../lib/pc/menu/demo/lists/basic.tsx'
                        import BasicCode from 'text!../../../../lib/pc/menu/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/pc/menu/demo/lists/basic.md'
                        
                        import ReverseComponent from 'react-hot-loader!ts-loader!../../../../lib/pc/menu/demo/lists/reverse.tsx'
                        import ReverseCode from 'text!../../../../lib/pc/menu/demo/lists/reverse.tsx'
                        import ReverseMarkdown from '../../../../lib/pc/menu/demo/lists/reverse.md'
                        
                        import VerticalComponent from 'react-hot-loader!ts-loader!../../../../lib/pc/menu/demo/lists/vertical.tsx'
                        import VerticalCode from 'text!../../../../lib/pc/menu/demo/lists/vertical.tsx'
                        import VerticalMarkdown from '../../../../lib/pc/menu/demo/lists/vertical.md'
                        
                        import SubTreeComponent from 'react-hot-loader!ts-loader!../../../../lib/pc/menu/demo/lists/sub-tree.tsx'
                        import SubTreeCode from 'text!../../../../lib/pc/menu/demo/lists/sub-tree.tsx'
                        import SubTreeMarkdown from '../../../../lib/pc/menu/demo/lists/sub-tree.md'
                        
                        import SubTreeVerticalComponent from 'react-hot-loader!ts-loader!../../../../lib/pc/menu/demo/lists/sub-tree-vertical.tsx'
                        import SubTreeVerticalCode from 'text!../../../../lib/pc/menu/demo/lists/sub-tree-vertical.tsx'
                        import SubTreeVerticalMarkdown from '../../../../lib/pc/menu/demo/lists/sub-tree-vertical.md'
                        

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
                        document.title = '菜单'
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
                                      npmName="fit-menu">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ReverseMarkdown}
                                      code={ReverseCode}
                                      npmName="fit-menu">

                                    <ReverseComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={VerticalMarkdown}
                                      code={VerticalCode}
                                      npmName="fit-menu">

                                    <VerticalComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={SubTreeMarkdown}
                                      code={SubTreeCode}
                                      npmName="fit-menu">

                                    <SubTreeComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={SubTreeVerticalMarkdown}
                                      code={SubTreeVerticalCode}
                                      npmName="fit-menu">

                                    <SubTreeVerticalComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={SourceCode} instance={Source} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-menu/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                