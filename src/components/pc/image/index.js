
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenContainer, ScrollListenBox, ScrollListenNail , ScrollListen } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/image/readme.md'
                import '../../../../lib/pc/image/demo'

                
                        import ImageSource from '../../../../lib/pc/image/src/image'
                        import ImageSourceCode from 'text!../../../../lib/pc/image/src/image'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/image/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/image/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/image/demo/lists/basic.md'
                    
                    import WideComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/image/demo/lists/wide.js'
                    import WideCode from 'text!../../../../lib/pc/image/demo/lists/wide.js'
                    import WideMarkdown from '../../../../lib/pc/image/demo/lists/wide.md'
                    

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
                        document.title = '图片容器'
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
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={WideMarkdown} code={WideCode}>
                            <ScrollListenNail>
                                <WideComponent/>
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
                            <CodeDoc code={ImageSourceCode} instance={ImageSource} />
                        </div>
                        
                                </div>
                            )
                            break
                        }

                        return (
                            <ScrollListenContainer className="_namespace">
                                <Layout>
                                    <Header>
                                        <Title gitlabUrl="http://gitlab.baidu.com/tb-component/pc-image/tree/master"
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
                