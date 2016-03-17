
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/tooltip/readme.md'
                import '../../../../lib/pc/tooltip/demo'

                const store = createStore()

                
                        import TooltipSource from '../../../../lib/pc/tooltip/src/tooltip'
                        import TooltipSourceCode from 'text!../../../../lib/pc/tooltip/src/tooltip'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/tooltip/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/tooltip/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/tooltip/demo/lists/basic.md'
                    
                    import RenderComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/tooltip/demo/lists/render.js'
                    import RenderCode from 'text!../../../../lib/pc/tooltip/demo/lists/render.js'
                    import RenderMarkdown from '../../../../lib/pc/tooltip/demo/lists/render.md'
                    
                    import PositionComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/tooltip/demo/lists/position.js'
                    import PositionCode from 'text!../../../../lib/pc/tooltip/demo/lists/position.js'
                    import PositionMarkdown from '../../../../lib/pc/tooltip/demo/lists/position.md'
                    
                    import TriggerComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/tooltip/demo/lists/trigger.js'
                    import TriggerCode from 'text!../../../../lib/pc/tooltip/demo/lists/trigger.js'
                    import TriggerMarkdown from '../../../../lib/pc/tooltip/demo/lists/trigger.md'
                    
                    import FollowComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/tooltip/demo/lists/follow.js'
                    import FollowCode from 'text!../../../../lib/pc/tooltip/demo/lists/follow.js'
                    import FollowMarkdown from '../../../../lib/pc/tooltip/demo/lists/follow.md'
                    

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
                        document.title = '文字提示'
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
                                      md={RenderMarkdown}
                                      code={RenderCode}>

                                    <RenderComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={PositionMarkdown}
                                      code={PositionCode}>

                                    <PositionComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={TriggerMarkdown}
                                      code={TriggerCode}>

                                    <TriggerComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={FollowMarkdown}
                                      code={FollowCode}>

                                    <FollowComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={TooltipSourceCode} instance={TooltipSource} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-tooltip/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                