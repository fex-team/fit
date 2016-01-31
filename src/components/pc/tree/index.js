
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenContainer, ScrollListenBox, ScrollListenNail , ScrollListen } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/tree/readme.md'
                import '../../../../lib/pc/tree/demo'

                
                        import TreeSource from '../../../../lib/pc/tree/src/tree'
                        import TreeSourceCode from 'text!../../../../lib/pc/tree/src/tree'
                        
                        import TreeNodeSource from '../../../../lib/pc/tree/src/tree-node'
                        import TreeNodeSourceCode from 'text!../../../../lib/pc/tree/src/tree-node'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/tree/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/tree/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/tree/demo/lists/basic.md'
                    
                    import ExpendAllComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/tree/demo/lists/expend-all.js'
                    import ExpendAllCode from 'text!../../../../lib/pc/tree/demo/lists/expend-all.js'
                    import ExpendAllMarkdown from '../../../../lib/pc/tree/demo/lists/expend-all.md'
                    

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
                        document.title = '树形控件'
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
                        <CodeView md={BasicMarkdown} code={BasicCode}>
                            <BasicComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={ExpendAllMarkdown} code={ExpendAllCode}>
                            <ExpendAllComponent/>
                        </CodeView>
                    </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={TreeSourceCode} instance={TreeSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={TreeNodeSourceCode} instance={TreeNodeSource} />
                        </div>
                        
                                </div>
                            )
                            break
                        }

                        return (
                            <ScrollListenContainer className="_namespace">
                                <Layout>
                                    <Header>
                                        <Title gitlabUrl="http://gitlab.baidu.com/tb-component/pc-tree/tree/master"
                                               onChange={this.handlePageChange.bind(this)}>{readme}</Title>
                                    </Header>

                                    <Section>
                                        <ScrollListenBox>
                                            {Content}
                                        </ScrollListenBox>
                                    </Section>
                                    <Sidebar direction="right"
                                             width="120">
                                        <ScrollListen/>
                                    </Sidebar>
                                </Layout>
                            </ScrollListenContainer>
                        )
                    }
                }
                