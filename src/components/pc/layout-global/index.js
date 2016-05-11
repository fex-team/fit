
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

                
                        import LayoutSource from '../../../../lib/pc/layout-global/src/layout'
                        import LayoutSourceCode from 'text!../../../../lib/pc/layout-global/src/layout'
                        
                        import HeaderSource from '../../../../lib/pc/layout-global/src/header'
                        import HeaderSourceCode from 'text!../../../../lib/pc/layout-global/src/header'
                        
                        import SidebarSource from '../../../../lib/pc/layout-global/src/sidebar'
                        import SidebarSourceCode from 'text!../../../../lib/pc/layout-global/src/sidebar'
                        
                        import SectionSource from '../../../../lib/pc/layout-global/src/section'
                        import SectionSourceCode from 'text!../../../../lib/pc/layout-global/src/section'
                        
                        import FooterSource from '../../../../lib/pc/layout-global/src/footer'
                        import FooterSourceCode from 'text!../../../../lib/pc/layout-global/src/footer'
                        

                
                        import BasicComponent from '../../../../lib/pc/layout-global/demo/lists/basic.js'
                        import BasicCode from 'text!../../../../lib/pc/layout-global/demo/lists/basic.js'
                        import BasicMarkdown from '../../../../lib/pc/layout-global/demo/lists/basic.md'
                        
                        import HeaderComponent from '../../../../lib/pc/layout-global/demo/lists/header.js'
                        import HeaderCode from 'text!../../../../lib/pc/layout-global/demo/lists/header.js'
                        import HeaderMarkdown from '../../../../lib/pc/layout-global/demo/lists/header.md'
                        
                        import FooterComponent from '../../../../lib/pc/layout-global/demo/lists/footer.js'
                        import FooterCode from 'text!../../../../lib/pc/layout-global/demo/lists/footer.js'
                        import FooterMarkdown from '../../../../lib/pc/layout-global/demo/lists/footer.md'
                        
                        import RightFooterComponent from '../../../../lib/pc/layout-global/demo/lists/right-footer.js'
                        import RightFooterCode from 'text!../../../../lib/pc/layout-global/demo/lists/right-footer.js'
                        import RightFooterMarkdown from '../../../../lib/pc/layout-global/demo/lists/right-footer.md'
                        
                        import HeaderSectionComponent from '../../../../lib/pc/layout-global/demo/lists/header-section.js'
                        import HeaderSectionCode from 'text!../../../../lib/pc/layout-global/demo/lists/header-section.js'
                        import HeaderSectionMarkdown from '../../../../lib/pc/layout-global/demo/lists/header-section.md'
                        
                        import AllComponent from '../../../../lib/pc/layout-global/demo/lists/all.js'
                        import AllCode from 'text!../../../../lib/pc/layout-global/demo/lists/all.js'
                        import AllMarkdown from '../../../../lib/pc/layout-global/demo/lists/all.md'
                        

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
                            <CodeDoc code={LayoutSourceCode} instance={LayoutSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={HeaderSourceCode} instance={HeaderSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={SidebarSourceCode} instance={SidebarSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={SectionSourceCode} instance={SectionSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={FooterSourceCode} instance={FooterSource} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-layout-global/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                