
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/layout-global/readme.md'
                import '../../../../lib/pc/layout-global/demo'

                const store = createStore()

                
                            import LayoutSource from '../../../../lib/pc/layout-global/src/layout/index.tsx'
                            import LayoutSourceCode from '-!text!../../../../lib/pc/layout-global/src/layout/index.tsx'
                            
                                import * as LayoutModule from '../../../../lib/pc/layout-global/src/layout/module.tsx'
                                import LayoutModuleCode from '-!text!../../../../lib/pc/layout-global/src/layout/module.tsx'
                                
                            import HeaderSource from '../../../../lib/pc/layout-global/src/header/index.tsx'
                            import HeaderSourceCode from '-!text!../../../../lib/pc/layout-global/src/header/index.tsx'
                            
                                import * as HeaderModule from '../../../../lib/pc/layout-global/src/header/module.tsx'
                                import HeaderModuleCode from '-!text!../../../../lib/pc/layout-global/src/header/module.tsx'
                                
                            import SidebarSource from '../../../../lib/pc/layout-global/src/sidebar/index.tsx'
                            import SidebarSourceCode from '-!text!../../../../lib/pc/layout-global/src/sidebar/index.tsx'
                            
                                import * as SidebarModule from '../../../../lib/pc/layout-global/src/sidebar/module.tsx'
                                import SidebarModuleCode from '-!text!../../../../lib/pc/layout-global/src/sidebar/module.tsx'
                                
                            import SectionSource from '../../../../lib/pc/layout-global/src/section/index.tsx'
                            import SectionSourceCode from '-!text!../../../../lib/pc/layout-global/src/section/index.tsx'
                            
                                import * as SectionModule from '../../../../lib/pc/layout-global/src/section/module.tsx'
                                import SectionModuleCode from '-!text!../../../../lib/pc/layout-global/src/section/module.tsx'
                                
                            import FooterSource from '../../../../lib/pc/layout-global/src/footer/index.tsx'
                            import FooterSourceCode from '-!text!../../../../lib/pc/layout-global/src/footer/index.tsx'
                            
                                import * as FooterModule from '../../../../lib/pc/layout-global/src/footer/module.tsx'
                                import FooterModuleCode from '-!text!../../../../lib/pc/layout-global/src/footer/module.tsx'
                                

                
                        import BasicComponent from '../../../../lib/pc/layout-global/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/pc/layout-global/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/pc/layout-global/demo/lists/basic.md'
                        
                        import HeaderComponent from '../../../../lib/pc/layout-global/demo/lists/header.tsx'
                        import HeaderCode from '-!text!../../../../lib/pc/layout-global/demo/lists/header.tsx'
                        import HeaderMarkdown from '../../../../lib/pc/layout-global/demo/lists/header.md'
                        
                        import FooterComponent from '../../../../lib/pc/layout-global/demo/lists/footer.tsx'
                        import FooterCode from '-!text!../../../../lib/pc/layout-global/demo/lists/footer.tsx'
                        import FooterMarkdown from '../../../../lib/pc/layout-global/demo/lists/footer.md'
                        
                        import RightFooterComponent from '../../../../lib/pc/layout-global/demo/lists/right-footer.tsx'
                        import RightFooterCode from '-!text!../../../../lib/pc/layout-global/demo/lists/right-footer.tsx'
                        import RightFooterMarkdown from '../../../../lib/pc/layout-global/demo/lists/right-footer.md'
                        
                        import HeaderSectionComponent from '../../../../lib/pc/layout-global/demo/lists/header-section.tsx'
                        import HeaderSectionCode from '-!text!../../../../lib/pc/layout-global/demo/lists/header-section.tsx'
                        import HeaderSectionMarkdown from '../../../../lib/pc/layout-global/demo/lists/header-section.md'
                        
                        import AllComponent from '../../../../lib/pc/layout-global/demo/lists/all.tsx'
                        import AllCode from '-!text!../../../../lib/pc/layout-global/demo/lists/all.tsx'
                        import AllMarkdown from '../../../../lib/pc/layout-global/demo/lists/all.md'
                        

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
                        document.title = '全屏布局'
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
                                      npmName="fit-layout-global">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={HeaderMarkdown}
                                      code={HeaderCode}
                                      npmName="fit-layout-global">

                                    <HeaderComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={FooterMarkdown}
                                      code={FooterCode}
                                      npmName="fit-layout-global">

                                    <FooterComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={RightFooterMarkdown}
                                      code={RightFooterCode}
                                      npmName="fit-layout-global">

                                    <RightFooterComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={HeaderSectionMarkdown}
                                      code={HeaderSectionCode}
                                      npmName="fit-layout-global">

                                    <HeaderSectionComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={AllMarkdown}
                                      code={AllCode}
                                      npmName="fit-layout-global">

                                    <AllComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={LayoutSourceCode} instance={LayoutSource} moduleCode={LayoutModuleCode} moduleInstance={LayoutModule} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={HeaderSourceCode} instance={HeaderSource} moduleCode={HeaderModuleCode} moduleInstance={HeaderModule} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={SidebarSourceCode} instance={SidebarSource} moduleCode={SidebarModuleCode} moduleInstance={SidebarModule} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={SectionSourceCode} instance={SectionSource} moduleCode={SectionModuleCode} moduleInstance={SectionModule} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={FooterSourceCode} instance={FooterSource} moduleCode={FooterModuleCode} moduleInstance={FooterModule} />
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
                                        <SidebarComponent gitlabUrl="https://github.com/fit-component/pc-layout-global/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                