
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenContainer, ScrollListenBox, ScrollListenNail , ScrollListen } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/tb/icon/readme.md'
                import '../../../../lib/tb/icon/demo'

                
                        import IconSource from '../../../../lib/tb/icon/src/icon'
                        import IconSourceCode from 'text!../../../../lib/tb/icon/src/icon'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/tb/icon/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/tb/icon/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/tb/icon/demo/lists/basic.md'
                    
                    import ColorComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/tb/icon/demo/lists/color.js'
                    import ColorCode from 'text!../../../../lib/tb/icon/demo/lists/color.js'
                    import ColorMarkdown from '../../../../lib/tb/icon/demo/lists/color.md'
                    
                    import SizeComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/tb/icon/demo/lists/size.js'
                    import SizeCode from 'text!../../../../lib/tb/icon/demo/lists/size.js'
                    import SizeMarkdown from '../../../../lib/tb/icon/demo/lists/size.md'
                    

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
                        document.title = '字体图标'
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
                                    
                        <ScrollListenNail title={/^#\s(.*)/g.exec(BasicMarkdown)[1]}>
                            <Col span="24" style={colStyle}>
                                <CodeView md={BasicMarkdown} code={BasicCode}>

                                        <BasicComponent/>

                                </CodeView>
                            </Col>
                        </ScrollListenNail>
                    
                        <ScrollListenNail title={/^#\s(.*)/g.exec(ColorMarkdown)[1]}>
                            <Col span="24" style={colStyle}>
                                <CodeView md={ColorMarkdown} code={ColorCode}>

                                        <ColorComponent/>

                                </CodeView>
                            </Col>
                        </ScrollListenNail>
                    
                        <ScrollListenNail title={/^#\s(.*)/g.exec(SizeMarkdown)[1]}>
                            <Col span="24" style={colStyle}>
                                <CodeView md={SizeMarkdown} code={SizeCode}>

                                        <SizeComponent/>

                                </CodeView>
                            </Col>
                        </ScrollListenNail>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={IconSourceCode} instance={IconSource} />
                        </div>
                        
                                </div>
                            )
                            break
                        }

                        return (
                            <ScrollListenContainer className="_namespace">
                                <Layout>
                                    <Header>
                                        <Title gitlabUrl="http://gitlab.baidu.com/tb-component/tb-icon/tree/master"
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
                