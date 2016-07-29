
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/button/readme.md'
                import '../../../../lib/pc/button/demo'

                const store = createStore()

                
                            import ButtonSource from '../../../../lib/pc/button/src/button/index.tsx'
                            import ButtonSourceCode from '-!text!../../../../lib/pc/button/src/button/index.tsx'
                            
                                import * as ButtonModule from '../../../../lib/pc/button/src/button/module.tsx'
                                import ButtonModuleCode from '-!text!../../../../lib/pc/button/src/button/module.tsx'
                                
                            import ButtonGroupSource from '../../../../lib/pc/button/src/button-group/index.tsx'
                            import ButtonGroupSourceCode from '-!text!../../../../lib/pc/button/src/button-group/index.tsx'
                            
                                import * as ButtonGroupModule from '../../../../lib/pc/button/src/button-group/module.tsx'
                                import ButtonGroupModuleCode from '-!text!../../../../lib/pc/button/src/button-group/module.tsx'
                                

                
                        import BasicComponent from '../../../../lib/pc/button/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/pc/button/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/pc/button/demo/lists/basic.md'
                        
                        import ActiveComponent from '../../../../lib/pc/button/demo/lists/active.tsx'
                        import ActiveCode from '-!text!../../../../lib/pc/button/demo/lists/active.tsx'
                        import ActiveMarkdown from '../../../../lib/pc/button/demo/lists/active.md'
                        
                        import AddonComponent from '../../../../lib/pc/button/demo/lists/addon.tsx'
                        import AddonCode from '-!text!../../../../lib/pc/button/demo/lists/addon.tsx'
                        import AddonMarkdown from '../../../../lib/pc/button/demo/lists/addon.md'
                        
                        import ColorComponent from '../../../../lib/pc/button/demo/lists/color.tsx'
                        import ColorCode from '-!text!../../../../lib/pc/button/demo/lists/color.tsx'
                        import ColorMarkdown from '../../../../lib/pc/button/demo/lists/color.md'
                        
                        import GroupComponent from '../../../../lib/pc/button/demo/lists/group.tsx'
                        import GroupCode from '-!text!../../../../lib/pc/button/demo/lists/group.tsx'
                        import GroupMarkdown from '../../../../lib/pc/button/demo/lists/group.md'
                        
                        import LoadingComponent from '../../../../lib/pc/button/demo/lists/loading.tsx'
                        import LoadingCode from '-!text!../../../../lib/pc/button/demo/lists/loading.tsx'
                        import LoadingMarkdown from '../../../../lib/pc/button/demo/lists/loading.md'
                        
                        import RoundedComponent from '../../../../lib/pc/button/demo/lists/rounded.tsx'
                        import RoundedCode from '-!text!../../../../lib/pc/button/demo/lists/rounded.tsx'
                        import RoundedMarkdown from '../../../../lib/pc/button/demo/lists/rounded.md'
                        
                        import SizeComponent from '../../../../lib/pc/button/demo/lists/size.tsx'
                        import SizeCode from '-!text!../../../../lib/pc/button/demo/lists/size.tsx'
                        import SizeMarkdown from '../../../../lib/pc/button/demo/lists/size.md'
                        

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
                        document.title = '按钮'
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
                                      npmName="fit-button">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ActiveMarkdown}
                                      code={ActiveCode}
                                      npmName="fit-button">

                                    <ActiveComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={AddonMarkdown}
                                      code={AddonCode}
                                      npmName="fit-button">

                                    <AddonComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ColorMarkdown}
                                      code={ColorCode}
                                      npmName="fit-button">

                                    <ColorComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={GroupMarkdown}
                                      code={GroupCode}
                                      npmName="fit-button">

                                    <GroupComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={LoadingMarkdown}
                                      code={LoadingCode}
                                      npmName="fit-button">

                                    <LoadingComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={RoundedMarkdown}
                                      code={RoundedCode}
                                      npmName="fit-button">

                                    <RoundedComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={SizeMarkdown}
                                      code={SizeCode}
                                      npmName="fit-button">

                                    <SizeComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={ButtonSourceCode} instance={ButtonSource} moduleCode={ButtonModuleCode} moduleInstance={ButtonModule} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={ButtonGroupSourceCode} instance={ButtonGroupSource} moduleCode={ButtonGroupModuleCode} moduleInstance={ButtonGroupModule} />
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
                                        <SidebarComponent gitlabUrl="https://github.com/fit-component/pc-button/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                