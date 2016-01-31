
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenContainer, ScrollListenBox, ScrollListenNail , ScrollListen } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/layout/readme.md'
                import '../../../../lib/pc/layout/demo'

                
                        import RowSource from '../../../../lib/pc/layout/src/row'
                        import RowSourceCode from 'text!../../../../lib/pc/layout/src/row'
                        
                        import ColSource from '../../../../lib/pc/layout/src/col'
                        import ColSourceCode from 'text!../../../../lib/pc/layout/src/col'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/layout/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/layout/demo/lists/basic.md'
                    
                    import CenterComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout/demo/lists/center.js'
                    import CenterCode from 'text!../../../../lib/pc/layout/demo/lists/center.js'
                    import CenterMarkdown from '../../../../lib/pc/layout/demo/lists/center.md'
                    
                    import FlexComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout/demo/lists/flex.js'
                    import FlexCode from 'text!../../../../lib/pc/layout/demo/lists/flex.js'
                    import FlexMarkdown from '../../../../lib/pc/layout/demo/lists/flex.md'
                    
                    import OffsetComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout/demo/lists/offset.js'
                    import OffsetCode from 'text!../../../../lib/pc/layout/demo/lists/offset.js'
                    import OffsetMarkdown from '../../../../lib/pc/layout/demo/lists/offset.md'
                    
                    import OrderComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout/demo/lists/order.js'
                    import OrderCode from 'text!../../../../lib/pc/layout/demo/lists/order.js'
                    import OrderMarkdown from '../../../../lib/pc/layout/demo/lists/order.md'
                    

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
                        document.title = '布局'
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
                        <CodeView md={CenterMarkdown} code={CenterCode}>
                            <CenterComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={FlexMarkdown} code={FlexCode}>
                            <FlexComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={OffsetMarkdown} code={OffsetCode}>
                            <OffsetComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={OrderMarkdown} code={OrderCode}>
                            <OrderComponent/>
                        </CodeView>
                    </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={RowSourceCode} instance={RowSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={ColSourceCode} instance={ColSource} />
                        </div>
                        
                                </div>
                            )
                            break
                        }

                        return (
                            <ScrollListenContainer className="_namespace">
                                <Layout>
                                    <Header>
                                        <Title gitlabUrl="http://gitlab.baidu.com/tb-component/pc-layout/tree/master"
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
                