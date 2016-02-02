
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenContainer, ScrollListenBox, ScrollListenNail , ScrollListen } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/scroll-listen/readme.md'
                import '../../../../lib/pc/scroll-listen/demo'

                
                        import ScrollListenContainerSource from '../../../../lib/pc/scroll-listen/src/scroll-listen-container'
                        import ScrollListenContainerSourceCode from 'text!../../../../lib/pc/scroll-listen/src/scroll-listen-container'
                        
                        import ScrollListenBoxSource from '../../../../lib/pc/scroll-listen/src/scroll-listen-box'
                        import ScrollListenBoxSourceCode from 'text!../../../../lib/pc/scroll-listen/src/scroll-listen-box'
                        
                        import ScrollListenNailSource from '../../../../lib/pc/scroll-listen/src/scroll-listen-nail'
                        import ScrollListenNailSourceCode from 'text!../../../../lib/pc/scroll-listen/src/scroll-listen-nail'
                        
                        import ScrollListenSource from '../../../../lib/pc/scroll-listen/src/scroll-listen'
                        import ScrollListenSourceCode from 'text!../../../../lib/pc/scroll-listen/src/scroll-listen'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/scroll-listen/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/scroll-listen/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/scroll-listen/demo/lists/basic.md'
                    

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
                        document.title = '滚动监听'
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
                            <ScrollListenNail>
                                <BasicComponent/>
                            </ScrollListenNail>
                        </CodeView>
                    </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={ScrollListenContainerSourceCode} instance={ScrollListenContainerSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={ScrollListenBoxSourceCode} instance={ScrollListenBoxSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={ScrollListenNailSourceCode} instance={ScrollListenNailSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={ScrollListenSourceCode} instance={ScrollListenSource} />
                        </div>
                        
                                </div>
                            )
                            break
                        }

                        return (
                            <ScrollListenContainer className="_namespace">
                                <Layout>
                                    <Header>
                                        <Title gitlabUrl="http://gitlab.baidu.com/tb-component/pc-scroll-listen/tree/master"
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
                