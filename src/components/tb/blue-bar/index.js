
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/tb/blue-bar/readme.md'
                import '../../../../lib/tb/blue-bar/demo'

                const store = createStore()

                
                        import BlueBarSource from '../../../../lib/tb/blue-bar/src/blue-bar'
                        import BlueBarSourceCode from 'text!../../../../lib/tb/blue-bar/src/blue-bar'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/tb/blue-bar/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/tb/blue-bar/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/tb/blue-bar/demo/lists/basic.md'
                    
                    import FixedComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/tb/blue-bar/demo/lists/fixed.js'
                    import FixedCode from 'text!../../../../lib/tb/blue-bar/demo/lists/fixed.js'
                    import FixedMarkdown from '../../../../lib/tb/blue-bar/demo/lists/fixed.md'
                    
                    import ShareComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/tb/blue-bar/demo/lists/share.js'
                    import ShareCode from 'text!../../../../lib/tb/blue-bar/demo/lists/share.js'
                    import ShareMarkdown from '../../../../lib/tb/blue-bar/demo/lists/share.md'
                    

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
                        document.title = '顶部蓝条'
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
                                      code={BasicCode}>

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={FixedMarkdown}
                                      code={FixedCode}>

                                    <FixedComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ShareMarkdown}
                                      code={ShareCode}>

                                    <ShareComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={BlueBarSourceCode} instance={BlueBarSource} />
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
                                             width="120">
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/tb-blue-bar/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                