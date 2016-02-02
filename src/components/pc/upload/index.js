
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenContainer, ScrollListenBox, ScrollListenNail , ScrollListen } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/upload/readme.md'
                import '../../../../lib/pc/upload/demo'

                

                
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
                                    
                        <ScrollListenNail title={/^#\s(.*)/g.exec(BasicMarkdown)[1]}>
                            <Col span="24" style={colStyle}>
                                <CodeView md={BasicMarkdown} code={BasicCode}>

                                        <BasicComponent/>

                                </CodeView>
                            </Col>
                        </ScrollListenNail>
                    
                        <ScrollListenNail title={/^#\s(.*)/g.exec(ButtonMarkdown)[1]}>
                            <Col span="24" style={colStyle}>
                                <CodeView md={ButtonMarkdown} code={ButtonCode}>

                                        <ButtonComponent/>

                                </CodeView>
                            </Col>
                        </ScrollListenNail>
                    
                        <ScrollListenNail title={/^#\s(.*)/g.exec(FilesMarkdown)[1]}>
                            <Col span="24" style={colStyle}>
                                <CodeView md={FilesMarkdown} code={FilesCode}>

                                        <FilesComponent/>

                                </CodeView>
                            </Col>
                        </ScrollListenNail>
                    
                        <ScrollListenNail title={/^#\s(.*)/g.exec(DragMarkdown)[1]}>
                            <Col span="24" style={colStyle}>
                                <CodeView md={DragMarkdown} code={DragCode}>

                                        <DragComponent/>

                                </CodeView>
                            </Col>
                        </ScrollListenNail>
                    
                        <ScrollListenNail title={/^#\s(.*)/g.exec(DemoMarkdown)[1]}>
                            <Col span="24" style={colStyle}>
                                <CodeView md={DemoMarkdown} code={DemoCode}>

                                        <DemoComponent/>

                                </CodeView>
                            </Col>
                        </ScrollListenNail>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                                </div>
                            )
                            break
                        }

                        return (
                            <ScrollListenContainer className="_namespace">
                                <Layout>
                                    <Header>
                                        <Title gitlabUrl="http://gitlab.baidu.com/tb-component/pc-upload/tree/master"
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
                