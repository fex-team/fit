
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/progress/readme.md'
                import '../../../../lib/pc/progress/demo'

                const store = createStore()

                
                            import ProgressSource from '../../../../lib/pc/progress/src/progress/index.tsx'
                            import ProgressSourceCode from '-!text!../../../../lib/pc/progress/src/progress/index.tsx'
                            
                                import * as ProgressModule from '../../../../lib/pc/progress/src/progress/module.tsx'
                                import ProgressModuleCode from '-!text!../../../../lib/pc/progress/src/progress/module.tsx'
                                
                            import ProgressCircleSource from '../../../../lib/pc/progress/src/progress-circle/index.tsx'
                            import ProgressCircleSourceCode from '-!text!../../../../lib/pc/progress/src/progress-circle/index.tsx'
                            
                                import * as ProgressCircleModule from '../../../../lib/pc/progress/src/progress-circle/module.tsx'
                                import ProgressCircleModuleCode from '-!text!../../../../lib/pc/progress/src/progress-circle/module.tsx'
                                

                
                        import BasicComponent from '../../../../lib/pc/progress/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/pc/progress/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/pc/progress/demo/lists/basic.md'
                        
                        import StatusComponent from '../../../../lib/pc/progress/demo/lists/status.tsx'
                        import StatusCode from '-!text!../../../../lib/pc/progress/demo/lists/status.tsx'
                        import StatusMarkdown from '../../../../lib/pc/progress/demo/lists/status.md'
                        
                        import CircleComponent from '../../../../lib/pc/progress/demo/lists/circle.tsx'
                        import CircleCode from '-!text!../../../../lib/pc/progress/demo/lists/circle.tsx'
                        import CircleMarkdown from '../../../../lib/pc/progress/demo/lists/circle.md'
                        
                        import LabelComponent from '../../../../lib/pc/progress/demo/lists/label.tsx'
                        import LabelCode from '-!text!../../../../lib/pc/progress/demo/lists/label.tsx'
                        import LabelMarkdown from '../../../../lib/pc/progress/demo/lists/label.md'
                        
                        import LabelCircleComponent from '../../../../lib/pc/progress/demo/lists/label-circle.tsx'
                        import LabelCircleCode from '-!text!../../../../lib/pc/progress/demo/lists/label-circle.tsx'
                        import LabelCircleMarkdown from '../../../../lib/pc/progress/demo/lists/label-circle.md'
                        

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
                        document.title = '进度条'
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
                                      npmName="fit-progress">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={StatusMarkdown}
                                      code={StatusCode}
                                      npmName="fit-progress">

                                    <StatusComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CircleMarkdown}
                                      code={CircleCode}
                                      npmName="fit-progress">

                                    <CircleComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={LabelMarkdown}
                                      code={LabelCode}
                                      npmName="fit-progress">

                                    <LabelComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={LabelCircleMarkdown}
                                      code={LabelCircleCode}
                                      npmName="fit-progress">

                                    <LabelCircleComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={ProgressSourceCode} instance={ProgressSource} moduleCode={ProgressModuleCode} moduleInstance={ProgressModule} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={ProgressCircleSourceCode} instance={ProgressCircleSource} moduleCode={ProgressCircleModuleCode} moduleInstance={ProgressCircleModule} />
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
                                        <SidebarComponent gitlabUrl="https://github.com/fit-component/pc-progress/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                