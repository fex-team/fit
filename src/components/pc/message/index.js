
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/message/readme.md'
                import '../../../../lib/pc/message/demo'

                

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/message/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/message/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/message/demo/lists/basic.md'
                    
                    import CallbackComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/message/demo/lists/callback.js'
                    import CallbackCode from 'text!../../../../lib/pc/message/demo/lists/callback.js'
                    import CallbackMarkdown from '../../../../lib/pc/message/demo/lists/callback.md'
                    
                    import DurationComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/message/demo/lists/duration.js'
                    import DurationCode from 'text!../../../../lib/pc/message/demo/lists/duration.js'
                    import DurationMarkdown from '../../../../lib/pc/message/demo/lists/duration.md'
                    
                    import TypeComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/message/demo/lists/type.js'
                    import TypeCode from 'text!../../../../lib/pc/message/demo/lists/type.js'
                    import TypeMarkdown from '../../../../lib/pc/message/demo/lists/type.md'
                    

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
                        document.title = '提示'
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
                        <CodeView md={CallbackMarkdown} code={CallbackCode}>
                            <CallbackComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={DurationMarkdown} code={DurationCode}>
                            <DurationComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={TypeMarkdown} code={TypeCode}>
                            <TypeComponent/>
                        </CodeView>
                    </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                                </div>
                            )
                            break
                        }

                        return (
                            <div className="_namespace">
                                <Layout>
                                    <Header>
                                        <Title gitlabUrl="http://gitlab.baidu.com/tb-component/pc-message/tree/master"
                                               onChange={this.handlePageChange.bind(this)}>{readme}</Title>
                                    </Header>

                                    <Section>
                                        {Content}
                                    </Section>
                                    <Sidebar direction="right"
                                             width="120">
                                        5555555
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                