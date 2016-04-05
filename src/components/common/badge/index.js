
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/common/badge/readme.md'
                import '../../../../lib/common/badge/demo'

                const store = createStore()

                
                        import BadgeSource from '../../../../lib/common/badge/src/badge'
                        import BadgeSourceCode from 'text!../../../../lib/common/badge/src/badge'
                        

                
                    import BasicComponent from 'react-hot-loader!babel-loader!../../../../lib/common/badge/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/common/badge/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/common/badge/demo/lists/basic.md'
                    
                    import LimitComponent from 'react-hot-loader!babel-loader!../../../../lib/common/badge/demo/lists/limit.js'
                    import LimitCode from 'text!../../../../lib/common/badge/demo/lists/limit.js'
                    import LimitMarkdown from '../../../../lib/common/badge/demo/lists/limit.md'
                    
                    import StandAloneComponent from 'react-hot-loader!babel-loader!../../../../lib/common/badge/demo/lists/stand-alone.js'
                    import StandAloneCode from 'text!../../../../lib/common/badge/demo/lists/stand-alone.js'
                    import StandAloneMarkdown from '../../../../lib/common/badge/demo/lists/stand-alone.md'
                    
                    import DotComponent from 'react-hot-loader!babel-loader!../../../../lib/common/badge/demo/lists/dot.js'
                    import DotCode from 'text!../../../../lib/common/badge/demo/lists/dot.js'
                    import DotMarkdown from '../../../../lib/common/badge/demo/lists/dot.md'
                    
                    import CustomLimitComponent from 'react-hot-loader!babel-loader!../../../../lib/common/badge/demo/lists/custom-limit.js'
                    import CustomLimitCode from 'text!../../../../lib/common/badge/demo/lists/custom-limit.js'
                    import CustomLimitMarkdown from '../../../../lib/common/badge/demo/lists/custom-limit.md'
                    
                    import AnimateComponent from 'react-hot-loader!babel-loader!../../../../lib/common/badge/demo/lists/animate.js'
                    import AnimateCode from 'text!../../../../lib/common/badge/demo/lists/animate.js'
                    import AnimateMarkdown from '../../../../lib/common/badge/demo/lists/animate.md'
                    

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
                        document.title = '徽标数'
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
                                      md={LimitMarkdown}
                                      code={LimitCode}>

                                    <LimitComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={StandAloneMarkdown}
                                      code={StandAloneCode}>

                                    <StandAloneComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={DotMarkdown}
                                      code={DotCode}>

                                    <DotComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CustomLimitMarkdown}
                                      code={CustomLimitCode}>

                                    <CustomLimitComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={AnimateMarkdown}
                                      code={AnimateCode}>

                                    <AnimateComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={BadgeSourceCode} instance={BadgeSource} />
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
                                             width="120">
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/badge/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                