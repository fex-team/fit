
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/timepicker/readme.md'
                import '../../../../lib/pc/timepicker/demo'

                const store = createStore()

                
                            import TimepickerSource from '../../../../lib/pc/timepicker/src/timepicker/index.tsx'
                            import TimepickerSourceCode from '-!text!../../../../lib/pc/timepicker/src/timepicker/index.tsx'
                            
                                import * as TimepickerModule from '../../../../lib/pc/timepicker/src/timepicker/module.tsx'
                                import TimepickerModuleCode from '-!text!../../../../lib/pc/timepicker/src/timepicker/module.tsx'
                                

                
                        import BasicComponent from '../../../../lib/pc/timepicker/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/pc/timepicker/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/pc/timepicker/demo/lists/basic.md'
                        
                        import LabelComponent from '../../../../lib/pc/timepicker/demo/lists/label.tsx'
                        import LabelCode from '-!text!../../../../lib/pc/timepicker/demo/lists/label.tsx'
                        import LabelMarkdown from '../../../../lib/pc/timepicker/demo/lists/label.md'
                        
                        import LimitComponent from '../../../../lib/pc/timepicker/demo/lists/limit.tsx'
                        import LimitCode from '-!text!../../../../lib/pc/timepicker/demo/lists/limit.tsx'
                        import LimitMarkdown from '../../../../lib/pc/timepicker/demo/lists/limit.md'
                        

                const colStyle = {
                    padding: 10,
                    boxSizing: 'border-box'
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
                        document.title = '时间选择器'
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
                                      npmName="fit-timepicker">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={LabelMarkdown}
                                      code={LabelCode}
                                      npmName="fit-timepicker">

                                    <LabelComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={LimitMarkdown}
                                      code={LimitCode}
                                      npmName="fit-timepicker">

                                    <LimitComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={TimepickerSourceCode} instance={TimepickerSource} moduleCode={TimepickerModuleCode} moduleInstance={TimepickerModule} />
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
                                        <SidebarComponent gitlabUrl="https://github.com/fit-component/pc-timepicker/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                