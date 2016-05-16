
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/modal/readme.md'
                import '../../../../lib/pc/modal/demo'

                const store = createStore()

                
                        import ModalSource from '../../../../lib/pc/modal/src/modal/index.tsx'
                        import ModalSourceCode from '-!text!../../../../lib/pc/modal/src/modal/index.tsx'
                        

                
                        import BasicComponent from '../../../../lib/pc/modal/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/pc/modal/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/pc/modal/demo/lists/basic.md'
                        
                        import RenderComponent from '../../../../lib/pc/modal/demo/lists/render.tsx'
                        import RenderCode from '-!text!../../../../lib/pc/modal/demo/lists/render.tsx'
                        import RenderMarkdown from '../../../../lib/pc/modal/demo/lists/render.md'
                        
                        import CustomComponent from '../../../../lib/pc/modal/demo/lists/custom.tsx'
                        import CustomCode from '-!text!../../../../lib/pc/modal/demo/lists/custom.tsx'
                        import CustomMarkdown from '../../../../lib/pc/modal/demo/lists/custom.md'
                        
                        import SizeComponent from '../../../../lib/pc/modal/demo/lists/size.tsx'
                        import SizeCode from '-!text!../../../../lib/pc/modal/demo/lists/size.tsx'
                        import SizeMarkdown from '../../../../lib/pc/modal/demo/lists/size.md'
                        
                        import BackdropComponent from '../../../../lib/pc/modal/demo/lists/backdrop.tsx'
                        import BackdropCode from '-!text!../../../../lib/pc/modal/demo/lists/backdrop.tsx'
                        import BackdropMarkdown from '../../../../lib/pc/modal/demo/lists/backdrop.md'
                        

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
                        document.title = '模态框'
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
                                      npmName="fit-modal">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={RenderMarkdown}
                                      code={RenderCode}
                                      npmName="fit-modal">

                                    <RenderComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CustomMarkdown}
                                      code={CustomCode}
                                      npmName="fit-modal">

                                    <CustomComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={SizeMarkdown}
                                      code={SizeCode}
                                      npmName="fit-modal">

                                    <SizeComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={BackdropMarkdown}
                                      code={BackdropCode}
                                      npmName="fit-modal">

                                    <BackdropComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={ModalSourceCode} instance={ModalSource} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-modal/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                