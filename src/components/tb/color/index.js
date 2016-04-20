
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/tb/color/readme.md'
                import '../../../../lib/tb/color/demo'

                const store = createStore()

                

                
                        import BasicComponent from 'react-hot-loader!babel-loader!../../../../lib/tb/color/demo/lists/basic.js'
                        import BasicCode from 'text!../../../../lib/tb/color/demo/lists/basic.js'
                        import BasicMarkdown from '../../../../lib/tb/color/demo/lists/basic.md'
                        
                        import AssitComponent from 'react-hot-loader!babel-loader!../../../../lib/tb/color/demo/lists/assit.js'
                        import AssitCode from 'text!../../../../lib/tb/color/demo/lists/assit.js'
                        import AssitMarkdown from '../../../../lib/tb/color/demo/lists/assit.md'
                        
                        import ButtonComponent from 'react-hot-loader!babel-loader!../../../../lib/tb/color/demo/lists/button.js'
                        import ButtonCode from 'text!../../../../lib/tb/color/demo/lists/button.js'
                        import ButtonMarkdown from '../../../../lib/tb/color/demo/lists/button.md'
                        
                        import CarrierComponent from 'react-hot-loader!babel-loader!../../../../lib/tb/color/demo/lists/carrier.js'
                        import CarrierCode from 'text!../../../../lib/tb/color/demo/lists/carrier.js'
                        import CarrierMarkdown from '../../../../lib/tb/color/demo/lists/carrier.md'
                        
                        import NightComponent from 'react-hot-loader!babel-loader!../../../../lib/tb/color/demo/lists/night.js'
                        import NightCode from 'text!../../../../lib/tb/color/demo/lists/night.js'
                        import NightMarkdown from '../../../../lib/tb/color/demo/lists/night.md'
                        
                        import NightAssitComponent from 'react-hot-loader!babel-loader!../../../../lib/tb/color/demo/lists/night-assit.js'
                        import NightAssitCode from 'text!../../../../lib/tb/color/demo/lists/night-assit.js'
                        import NightAssitMarkdown from '../../../../lib/tb/color/demo/lists/night-assit.md'
                        
                        import NightCarrierComponent from 'react-hot-loader!babel-loader!../../../../lib/tb/color/demo/lists/night-carrier.js'
                        import NightCarrierCode from 'text!../../../../lib/tb/color/demo/lists/night-carrier.js'
                        import NightCarrierMarkdown from '../../../../lib/tb/color/demo/lists/night-carrier.md'
                        

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
                        document.title = '颜色'
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
                                      md={AssitMarkdown}
                                      code={AssitCode}>

                                    <AssitComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ButtonMarkdown}
                                      code={ButtonCode}>

                                    <ButtonComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CarrierMarkdown}
                                      code={CarrierCode}>

                                    <CarrierComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={NightMarkdown}
                                      code={NightCode}>

                                    <NightComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={NightAssitMarkdown}
                                      code={NightAssitCode}>

                                    <NightAssitComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={NightCarrierMarkdown}
                                      code={NightCarrierCode}>

                                    <NightCarrierComponent/>

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
                                    <Section>
                                        <Title>{readme}</Title>
                                        <ScrollListenBox store={store}>
                                            {Content}
                                        </ScrollListenBox>
                                    </Section>
                                    <Sidebar direction="right"
                                             width={120}>
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/tb-color/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                