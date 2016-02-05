
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/upload/readme.md'
                import '../../../../lib/pc/upload/demo'

                const store = createStore()

                
                        import UploadSource from '../../../../lib/pc/upload/src/upload'
                        import UploadSourceCode from 'text!../../../../lib/pc/upload/src/upload'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/upload/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/upload/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/upload/demo/lists/basic.md'
                    
                    import ButtonComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/upload/demo/lists/button.js'
                    import ButtonCode from 'text!../../../../lib/pc/upload/demo/lists/button.js'
                    import ButtonMarkdown from '../../../../lib/pc/upload/demo/lists/button.md'
                    
                    import FilesComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/upload/demo/lists/files.js'
                    import FilesCode from 'text!../../../../lib/pc/upload/demo/lists/files.js'
                    import FilesMarkdown from '../../../../lib/pc/upload/demo/lists/files.md'
                    
                    import DragComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/upload/demo/lists/drag.js'
                    import DragCode from 'text!../../../../lib/pc/upload/demo/lists/drag.js'
                    import DragMarkdown from '../../../../lib/pc/upload/demo/lists/drag.md'
                    
                    import DemoComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/upload/demo/lists/demo.js'
                    import DemoCode from 'text!../../../../lib/pc/upload/demo/lists/demo.js'
                    import DemoMarkdown from '../../../../lib/pc/upload/demo/lists/demo.md'
                    

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
                                      code={BasicCode}>

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ButtonMarkdown}
                                      code={ButtonCode}>

                                    <ButtonComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={FilesMarkdown}
                                      code={FilesCode}>

                                    <FilesComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={DragMarkdown}
                                      code={DragCode}>

                                    <DragComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={DemoMarkdown}
                                      code={DemoCode}>

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
                            <CodeDoc code={UploadSourceCode} instance={UploadSource} />
                        </div>
                        
                                </div>
                            )
                            break
                        }

                        return (
                            <div className="_namespace">
                                <Layout>
                                    <Header>
                                        <Title gitlabUrl="http://gitlab.baidu.com/tb-component/pc-upload/tree/master"
                                               onChange={this.handlePageChange.bind(this)}>{readme}</Title>
                                    </Header>

                                    <Section>
                                        <ScrollListenBox store={store}>
                                            {Content}
                                        </ScrollListenBox>
                                    </Section>
                                    <Sidebar direction="right"
                                             width="120">
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                