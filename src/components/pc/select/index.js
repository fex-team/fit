
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/select/readme.md'
                import '../../../../lib/pc/select/demo'

                const store = createStore()

                
                            import SelectSource from '../../../../lib/pc/select/src/select/index.tsx'
                            import SelectSourceCode from '-!text!../../../../lib/pc/select/src/select/index.tsx'
                            
                                import * as SelectModule from '../../../../lib/pc/select/src/select/module.tsx'
                                import SelectModuleCode from '-!text!../../../../lib/pc/select/src/select/module.tsx'
                                
                            import OptionSource from '../../../../lib/pc/select/src/option/index.tsx'
                            import OptionSourceCode from '-!text!../../../../lib/pc/select/src/option/index.tsx'
                            
                                import * as OptionModule from '../../../../lib/pc/select/src/option/module.tsx'
                                import OptionModuleCode from '-!text!../../../../lib/pc/select/src/option/module.tsx'
                                
                            import OptGroupSource from '../../../../lib/pc/select/src/opt-group/index.tsx'
                            import OptGroupSourceCode from '-!text!../../../../lib/pc/select/src/opt-group/index.tsx'
                            
                                import * as OptGroupModule from '../../../../lib/pc/select/src/opt-group/module.tsx'
                                import OptGroupModuleCode from '-!text!../../../../lib/pc/select/src/opt-group/module.tsx'
                                

                
                        import BasicComponent from '../../../../lib/pc/select/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/pc/select/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/pc/select/demo/lists/basic.md'
                        
                        import DisabledComponent from '../../../../lib/pc/select/demo/lists/disabled.tsx'
                        import DisabledCode from '-!text!../../../../lib/pc/select/demo/lists/disabled.tsx'
                        import DisabledMarkdown from '../../../../lib/pc/select/demo/lists/disabled.md'
                        
                        import GroupComponent from '../../../../lib/pc/select/demo/lists/group.tsx'
                        import GroupCode from '-!text!../../../../lib/pc/select/demo/lists/group.tsx'
                        import GroupMarkdown from '../../../../lib/pc/select/demo/lists/group.md'
                        
                        import SearchComponent from '../../../../lib/pc/select/demo/lists/search.tsx'
                        import SearchCode from '-!text!../../../../lib/pc/select/demo/lists/search.tsx'
                        import SearchMarkdown from '../../../../lib/pc/select/demo/lists/search.md'
                        
                        import SimpleComponent from '../../../../lib/pc/select/demo/lists/simple.tsx'
                        import SimpleCode from '-!text!../../../../lib/pc/select/demo/lists/simple.tsx'
                        import SimpleMarkdown from '../../../../lib/pc/select/demo/lists/simple.md'
                        

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
                        document.title = '选择框'
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
                                      npmName="fit-select">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={DisabledMarkdown}
                                      code={DisabledCode}
                                      npmName="fit-select">

                                    <DisabledComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={GroupMarkdown}
                                      code={GroupCode}
                                      npmName="fit-select">

                                    <GroupComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={SearchMarkdown}
                                      code={SearchCode}
                                      npmName="fit-select">

                                    <SearchComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={SimpleMarkdown}
                                      code={SimpleCode}
                                      npmName="fit-select">

                                    <SimpleComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={SelectSourceCode} instance={SelectSource} moduleCode={SelectModuleCode} moduleInstance={SelectModule} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={OptionSourceCode} instance={OptionSource} moduleCode={OptionModuleCode} moduleInstance={OptionModule} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={OptGroupSourceCode} instance={OptGroupSource} moduleCode={OptGroupModuleCode} moduleInstance={OptGroupModule} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-select/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                