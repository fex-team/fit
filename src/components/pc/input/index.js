
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/input/readme.md'
                import '../../../../lib/pc/input/demo'

                const store = createStore()

                
                            import ExtendValidatorStatic from './input/validate'Source from '../../../../lib/pc/input/src/extend-validator-static-from-input-validate/index.tsx'
                            import ExtendValidatorStatic from './input/validate'SourceCode from '-!text!../../../../lib/pc/input/src/extend-validator-static-from-input-validate/index.tsx'
                            
                            import InputSource from '../../../../lib/pc/input/src/input/index.tsx'
                            import InputSourceCode from '-!text!../../../../lib/pc/input/src/input/index.tsx'
                            
                                import * as InputModule from '../../../../lib/pc/input/src/input/module.tsx'
                                import InputModuleCode from '-!text!../../../../lib/pc/input/src/input/module.tsx'
                                

                
                        import BasicComponent from '../../../../lib/pc/input/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/pc/input/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/pc/input/demo/lists/basic.md'
                        
                        import HighlightComponent from '../../../../lib/pc/input/demo/lists/highlight.tsx'
                        import HighlightCode from '-!text!../../../../lib/pc/input/demo/lists/highlight.tsx'
                        import HighlightMarkdown from '../../../../lib/pc/input/demo/lists/highlight.md'
                        
                        import DefaultComponent from '../../../../lib/pc/input/demo/lists/default.tsx'
                        import DefaultCode from '-!text!../../../../lib/pc/input/demo/lists/default.tsx'
                        import DefaultMarkdown from '../../../../lib/pc/input/demo/lists/default.md'
                        
                        import DisabledComponent from '../../../../lib/pc/input/demo/lists/disabled.tsx'
                        import DisabledCode from '-!text!../../../../lib/pc/input/demo/lists/disabled.tsx'
                        import DisabledMarkdown from '../../../../lib/pc/input/demo/lists/disabled.md'
                        
                        import NoLabelComponent from '../../../../lib/pc/input/demo/lists/no-label.tsx'
                        import NoLabelCode from '-!text!../../../../lib/pc/input/demo/lists/no-label.tsx'
                        import NoLabelMarkdown from '../../../../lib/pc/input/demo/lists/no-label.md'
                        
                        import CenterComponent from '../../../../lib/pc/input/demo/lists/center.tsx'
                        import CenterCode from '-!text!../../../../lib/pc/input/demo/lists/center.tsx'
                        import CenterMarkdown from '../../../../lib/pc/input/demo/lists/center.md'
                        
                        import CallbackComponent from '../../../../lib/pc/input/demo/lists/callback.tsx'
                        import CallbackCode from '-!text!../../../../lib/pc/input/demo/lists/callback.tsx'
                        import CallbackMarkdown from '../../../../lib/pc/input/demo/lists/callback.md'
                        
                        import ValidateComponent from '../../../../lib/pc/input/demo/lists/validate.tsx'
                        import ValidateCode from '-!text!../../../../lib/pc/input/demo/lists/validate.tsx'
                        import ValidateMarkdown from '../../../../lib/pc/input/demo/lists/validate.md'
                        

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
                        document.title = '输入框'
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
                                      npmName="fit-input">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={HighlightMarkdown}
                                      code={HighlightCode}
                                      npmName="fit-input">

                                    <HighlightComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={DefaultMarkdown}
                                      code={DefaultCode}
                                      npmName="fit-input">

                                    <DefaultComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={DisabledMarkdown}
                                      code={DisabledCode}
                                      npmName="fit-input">

                                    <DisabledComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={NoLabelMarkdown}
                                      code={NoLabelCode}
                                      npmName="fit-input">

                                    <NoLabelComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CenterMarkdown}
                                      code={CenterCode}
                                      npmName="fit-input">

                                    <CenterComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CallbackMarkdown}
                                      code={CallbackCode}
                                      npmName="fit-input">

                                    <CallbackComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ValidateMarkdown}
                                      code={ValidateCode}
                                      npmName="fit-input">

                                    <ValidateComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={ExtendValidatorStatic from './input/validate'SourceCode} instance={ExtendValidatorStatic from './input/validate'Source} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={InputSourceCode} instance={InputSource} moduleCode={InputModuleCode} moduleInstance={InputModule} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-input/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                