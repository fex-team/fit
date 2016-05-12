
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/switch/readme.md'
                import '../../../../lib/pc/switch/demo'

                const store = createStore()

                
                        import SwitchSource from '../../../../lib/pc/switch/src/switch'
                        import SwitchSourceCode from '-!text!../../../../lib/pc/switch/src/switch'
                        

                
                        import BasicComponent from '../../../../lib/pc/switch/demo/lists/basic.js'
                        import BasicCode from '-!text!../../../../lib/pc/switch/demo/lists/basic.js'
                        import BasicMarkdown from '../../../../lib/pc/switch/demo/lists/basic.md'
                        
                        import ControlComponent from '../../../../lib/pc/switch/demo/lists/control.js'
                        import ControlCode from '-!text!../../../../lib/pc/switch/demo/lists/control.js'
                        import ControlMarkdown from '../../../../lib/pc/switch/demo/lists/control.md'
                        
                        import LabelComponent from '../../../../lib/pc/switch/demo/lists/label.js'
                        import LabelCode from '-!text!../../../../lib/pc/switch/demo/lists/label.js'
                        import LabelMarkdown from '../../../../lib/pc/switch/demo/lists/label.md'
                        
                        import SizeComponent from '../../../../lib/pc/switch/demo/lists/size.js'
                        import SizeCode from '-!text!../../../../lib/pc/switch/demo/lists/size.js'
                        import SizeMarkdown from '../../../../lib/pc/switch/demo/lists/size.md'
                        
                        import TypeComponent from '../../../../lib/pc/switch/demo/lists/type.js'
                        import TypeCode from '-!text!../../../../lib/pc/switch/demo/lists/type.js'
                        import TypeMarkdown from '../../../../lib/pc/switch/demo/lists/type.md'
                        

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
                        document.title = '开关'
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
                                      npmName="fit-switch">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ControlMarkdown}
                                      code={ControlCode}
                                      npmName="fit-switch">

                                    <ControlComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={LabelMarkdown}
                                      code={LabelCode}
                                      npmName="fit-switch">

                                    <LabelComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={SizeMarkdown}
                                      code={SizeCode}
                                      npmName="fit-switch">

                                    <SizeComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={TypeMarkdown}
                                      code={TypeCode}
                                      npmName="fit-switch">

                                    <TypeComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={SwitchSourceCode} instance={SwitchSource} />
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
                                             width={120}>
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-switch/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                