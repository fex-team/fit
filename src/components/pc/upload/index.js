
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/upload/readme.md'
                import '../../../../lib/pc/upload/demo'

                const store = createStore()

                
                            import UploadSource from '../../../../lib/pc/upload/src/upload/index.tsx'
                            import UploadSourceCode from '-!text!../../../../lib/pc/upload/src/upload/index.tsx'
                            
                                import * as UploadModule from '../../../../lib/pc/upload/src/upload/module.tsx'
                                import UploadModuleCode from '-!text!../../../../lib/pc/upload/src/upload/module.tsx'
                                

                
                        import BasicComponent from '../../../../lib/pc/upload/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/pc/upload/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/pc/upload/demo/lists/basic.md'
                        
                        import ButtonComponent from '../../../../lib/pc/upload/demo/lists/button.tsx'
                        import ButtonCode from '-!text!../../../../lib/pc/upload/demo/lists/button.tsx'
                        import ButtonMarkdown from '../../../../lib/pc/upload/demo/lists/button.md'
                        
                        import FilesComponent from '../../../../lib/pc/upload/demo/lists/files.tsx'
                        import FilesCode from '-!text!../../../../lib/pc/upload/demo/lists/files.tsx'
                        import FilesMarkdown from '../../../../lib/pc/upload/demo/lists/files.md'
                        
                        import DragComponent from '../../../../lib/pc/upload/demo/lists/drag.tsx'
                        import DragCode from '-!text!../../../../lib/pc/upload/demo/lists/drag.tsx'
                        import DragMarkdown from '../../../../lib/pc/upload/demo/lists/drag.md'
                        
                        import DemoComponent from '../../../../lib/pc/upload/demo/lists/demo.tsx'
                        import DemoCode from '-!text!../../../../lib/pc/upload/demo/lists/demo.tsx'
                        import DemoMarkdown from '../../../../lib/pc/upload/demo/lists/demo.md'
                        

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
                        document.title = '上传'
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
                                      npmName="fit-upload">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ButtonMarkdown}
                                      code={ButtonCode}
                                      npmName="fit-upload">

                                    <ButtonComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={FilesMarkdown}
                                      code={FilesCode}
                                      npmName="fit-upload">

                                    <FilesComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={DragMarkdown}
                                      code={DragCode}
                                      npmName="fit-upload">

                                    <DragComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={DemoMarkdown}
                                      code={DemoCode}
                                      npmName="fit-upload">

                                    <DemoComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={UploadSourceCode} instance={UploadSource} moduleCode={UploadModuleCode} moduleInstance={UploadModule} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-upload/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                