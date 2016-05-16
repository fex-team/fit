
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/cropper/readme.md'
                import '../../../../lib/pc/cropper/demo'

                const store = createStore()

                
                        import CropperSource from '../../../../lib/pc/cropper/src/cropper'
                        import CropperSourceCode from '-!text!../../../../lib/pc/cropper/src/cropper'
                        

                
                        import BasicComponent from '../../../../lib/pc/cropper/demo/lists/basic.js'
                        import BasicCode from '-!text!../../../../lib/pc/cropper/demo/lists/basic.js'
                        import BasicMarkdown from '../../../../lib/pc/cropper/demo/lists/basic.md'
                        
                        import ReCutComponent from '../../../../lib/pc/cropper/demo/lists/re-cut.js'
                        import ReCutCode from '-!text!../../../../lib/pc/cropper/demo/lists/re-cut.js'
                        import ReCutMarkdown from '../../../../lib/pc/cropper/demo/lists/re-cut.md'
                        

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
                        document.title = '图像裁剪'
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
                                      npmName="fit-cropper">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ReCutMarkdown}
                                      code={ReCutCode}
                                      npmName="fit-cropper">

                                    <ReCutComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={CropperSourceCode} instance={CropperSource} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-cropper/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                