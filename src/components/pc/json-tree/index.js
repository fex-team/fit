
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenContainer, ScrollListenBox, ScrollListenNail , ScrollListen } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/json-tree/readme.md'
                import '../../../../lib/pc/json-tree/demo'

                
                        import JsonTreeSource from '../../../../lib/pc/json-tree/src/json-tree'
                        import JsonTreeSourceCode from 'text!../../../../lib/pc/json-tree/src/json-tree'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/json-tree/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/json-tree/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/json-tree/demo/lists/basic.md'
                    
                    import RootComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/json-tree/demo/lists/root.js'
                    import RootCode from 'text!../../../../lib/pc/json-tree/demo/lists/root.js'
                    import RootMarkdown from '../../../../lib/pc/json-tree/demo/lists/root.md'
                    

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
                        document.title = 'JSON树'
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
                        <CodeView md={RootMarkdown} code={RootCode}>
                            <RootComponent/>
                        </CodeView>
                    </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={JsonTreeSourceCode} instance={JsonTreeSource} />
                        </div>
                        
                                </div>
                            )
                            break
                        }

                        return (
                            <ScrollListenContainer className="_namespace">
                                <Layout>
                                    <Header>
                                        <Title gitlabUrl="http://gitlab.baidu.com/tb-component/pc-json-tree/tree/master"
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
                