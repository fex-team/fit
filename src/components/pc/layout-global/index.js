
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenContainer, ScrollListenBox, ScrollListenNail , ScrollListen } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/layout-global/readme.md'
                import '../../../../lib/pc/layout-global/demo'

                
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
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout-global/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/layout-global/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/layout-global/demo/lists/basic.md'
                    
                    import HeaderComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout-global/demo/lists/header.js'
                    import HeaderCode from 'text!../../../../lib/pc/layout-global/demo/lists/header.js'
                    import HeaderMarkdown from '../../../../lib/pc/layout-global/demo/lists/header.md'
                    
                    import RightFooterComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout-global/demo/lists/right-footer.js'
                    import RightFooterCode from 'text!../../../../lib/pc/layout-global/demo/lists/right-footer.js'
                    import RightFooterMarkdown from '../../../../lib/pc/layout-global/demo/lists/right-footer.md'
                    
                    import HeaderSectionComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout-global/demo/lists/header-section.js'
                    import HeaderSectionCode from 'text!../../../../lib/pc/layout-global/demo/lists/header-section.js'
                    import HeaderSectionMarkdown from '../../../../lib/pc/layout-global/demo/lists/header-section.md'
                    
                    import AllComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout-global/demo/lists/all.js'
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
                        <CodeView md={BasicMarkdown} code={BasicCode}>
                            <ScrollListenNail>
                                <BasicComponent/>
                            </ScrollListenNail>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={HeaderMarkdown} code={HeaderCode}>
                            <ScrollListenNail>
                                <HeaderComponent/>
                            </ScrollListenNail>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={RightFooterMarkdown} code={RightFooterCode}>
                            <ScrollListenNail>
                                <RightFooterComponent/>
                            </ScrollListenNail>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={HeaderSectionMarkdown} code={HeaderSectionCode}>
                            <ScrollListenNail>
                                <HeaderSectionComponent/>
                            </ScrollListenNail>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={AllMarkdown} code={AllCode}>
                            <ScrollListenNail>
                                <AllComponent/>
                            </ScrollListenNail>
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
                            <ScrollListenContainer className="_namespace">
                                <Layout>
                                    <Header>
                                        <Title gitlabUrl="http://gitlab.baidu.com/tb-component/pc-layout-global/tree/master"
                                               onChange={this.handlePageChange.bind(this)}>{readme}</Title>
                                    </Header>

                                    <Section>
                                        <ScrollListenBox>
                                            {Content}
                                        </ScrollListenBox>
                                    </Section>
                                    <Sidebar direction="right"
                                             width="120">
                                        <ScrollListen/>
                                    </Sidebar>
                                </Layout>
                            </ScrollListenContainer>
                        )
                    }
                }
                