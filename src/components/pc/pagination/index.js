
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenContainer, ScrollListenBox, ScrollListenNail , ScrollListen } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/pagination/readme.md'
                import '../../../../lib/pc/pagination/demo'

                

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/pagination/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/pagination/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/pagination/demo/lists/basic.md'
                    
                    import AllPageComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/pagination/demo/lists/all-page.js'
                    import AllPageCode from 'text!../../../../lib/pc/pagination/demo/lists/all-page.js'
                    import AllPageMarkdown from '../../../../lib/pc/pagination/demo/lists/all-page.md'
                    
                    import LoadingComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/pagination/demo/lists/loading.js'
                    import LoadingCode from 'text!../../../../lib/pc/pagination/demo/lists/loading.js'
                    import LoadingMarkdown from '../../../../lib/pc/pagination/demo/lists/loading.md'
                    
                    import LoadingAllComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/pagination/demo/lists/loading-all.js'
                    import LoadingAllCode from 'text!../../../../lib/pc/pagination/demo/lists/loading-all.js'
                    import LoadingAllMarkdown from '../../../../lib/pc/pagination/demo/lists/loading-all.md'
                    
                    import SizeComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/pagination/demo/lists/size.js'
                    import SizeCode from 'text!../../../../lib/pc/pagination/demo/lists/size.js'
                    import SizeMarkdown from '../../../../lib/pc/pagination/demo/lists/size.md'
                    

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
                        document.title = '分页'
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
                    
                        <ScrollListenNail title={/^#\s(.*)/g.exec(AllPageMarkdown)[1]}>
                            <Col span="24" style={colStyle}>
                                <CodeView md={AllPageMarkdown} code={AllPageCode}>

                                        <AllPageComponent/>

                                </CodeView>
                            </Col>
                        </ScrollListenNail>
                    
                        <ScrollListenNail title={/^#\s(.*)/g.exec(LoadingMarkdown)[1]}>
                            <Col span="24" style={colStyle}>
                                <CodeView md={LoadingMarkdown} code={LoadingCode}>

                                        <LoadingComponent/>

                                </CodeView>
                            </Col>
                        </ScrollListenNail>
                    
                        <ScrollListenNail title={/^#\s(.*)/g.exec(LoadingAllMarkdown)[1]}>
                            <Col span="24" style={colStyle}>
                                <CodeView md={LoadingAllMarkdown} code={LoadingAllCode}>

                                        <LoadingAllComponent/>

                                </CodeView>
                            </Col>
                        </ScrollListenNail>
                    
                        <ScrollListenNail title={/^#\s(.*)/g.exec(SizeMarkdown)[1]}>
                            <Col span="24" style={colStyle}>
                                <CodeView md={SizeMarkdown} code={SizeCode}>

                                        <SizeComponent/>

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
                                        <Title gitlabUrl="http://gitlab.baidu.com/tb-component/pc-pagination/tree/master"
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
                