
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

                

                
                        import BasicComponent from 'react-hot-loader!ts-loader!../../../../lib/tb/color/demo/lists/basic.tsx'
                        import BasicCode from 'text!../../../../lib/tb/color/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/tb/color/demo/lists/basic.md'
                        
                        import AssitComponent from 'react-hot-loader!ts-loader!../../../../lib/tb/color/demo/lists/assit.tsx'
                        import AssitCode from 'text!../../../../lib/tb/color/demo/lists/assit.tsx'
                        import AssitMarkdown from '../../../../lib/tb/color/demo/lists/assit.md'
                        
                        import ButtonComponent from 'react-hot-loader!ts-loader!../../../../lib/tb/color/demo/lists/button.tsx'
                        import ButtonCode from 'text!../../../../lib/tb/color/demo/lists/button.tsx'
                        import ButtonMarkdown from '../../../../lib/tb/color/demo/lists/button.md'
                        
                        import CarrierComponent from 'react-hot-loader!ts-loader!../../../../lib/tb/color/demo/lists/carrier.tsx'
                        import CarrierCode from 'text!../../../../lib/tb/color/demo/lists/carrier.tsx'
                        import CarrierMarkdown from '../../../../lib/tb/color/demo/lists/carrier.md'
                        
                        import NightComponent from 'react-hot-loader!ts-loader!../../../../lib/tb/color/demo/lists/night.tsx'
                        import NightCode from 'text!../../../../lib/tb/color/demo/lists/night.tsx'
                        import NightMarkdown from '../../../../lib/tb/color/demo/lists/night.md'
                        
                        import NightAssitComponent from 'react-hot-loader!ts-loader!../../../../lib/tb/color/demo/lists/night-assit.tsx'
                        import NightAssitCode from 'text!../../../../lib/tb/color/demo/lists/night-assit.tsx'
                        import NightAssitMarkdown from '../../../../lib/tb/color/demo/lists/night-assit.md'
                        
                        import NightCarrierComponent from 'react-hot-loader!ts-loader!../../../../lib/tb/color/demo/lists/night-carrier.tsx'
                        import NightCarrierCode from 'text!../../../../lib/tb/color/demo/lists/night-carrier.tsx'
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
                                      code={BasicCode}
                                      npmName="tb-color">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={AssitMarkdown}
                                      code={AssitCode}
                                      npmName="tb-color">

                                    <AssitComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ButtonMarkdown}
                                      code={ButtonCode}
                                      npmName="tb-color">

                                    <ButtonComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CarrierMarkdown}
                                      code={CarrierCode}
                                      npmName="tb-color">

                                    <CarrierComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={NightMarkdown}
                                      code={NightCode}
                                      npmName="tb-color">

                                    <NightComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={NightAssitMarkdown}
                                      code={NightAssitCode}
                                      npmName="tb-color">

                                    <NightAssitComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={NightCarrierMarkdown}
                                      code={NightCarrierCode}
                                      npmName="tb-color">

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
                