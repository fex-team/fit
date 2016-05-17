
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/radio/readme.md'
                import '../../../../lib/pc/radio/demo'

                const store = createStore()

                
                            import RadioSource from '../../../../lib/pc/radio/src/radio'
                            import RadioSourceCode from '-!text!../../../../lib/pc/radio/src/radio'
                            
                            import RadioGroupSource from '../../../../lib/pc/radio/src/radio-group'
                            import RadioGroupSourceCode from '-!text!../../../../lib/pc/radio/src/radio-group'
                            
                            import RadioButtonSource from '../../../../lib/pc/radio/src/radio-button'
                            import RadioButtonSourceCode from '-!text!../../../../lib/pc/radio/src/radio-button'
                            

                
                        import BasicComponent from '../../../../lib/pc/radio/demo/lists/basic.js'
                        import BasicCode from '-!text!../../../../lib/pc/radio/demo/lists/basic.js'
                        import BasicMarkdown from '../../../../lib/pc/radio/demo/lists/basic.md'
                        
                        import ButtonComponent from '../../../../lib/pc/radio/demo/lists/button.js'
                        import ButtonCode from '-!text!../../../../lib/pc/radio/demo/lists/button.js'
                        import ButtonMarkdown from '../../../../lib/pc/radio/demo/lists/button.md'
                        
                        import CallbackComponent from '../../../../lib/pc/radio/demo/lists/callback.js'
                        import CallbackCode from '-!text!../../../../lib/pc/radio/demo/lists/callback.js'
                        import CallbackMarkdown from '../../../../lib/pc/radio/demo/lists/callback.md'
                        
                        import CustomComponent from '../../../../lib/pc/radio/demo/lists/custom.js'
                        import CustomCode from '-!text!../../../../lib/pc/radio/demo/lists/custom.js'
                        import CustomMarkdown from '../../../../lib/pc/radio/demo/lists/custom.md'
                        
                        import DisableComponent from '../../../../lib/pc/radio/demo/lists/disable.js'
                        import DisableCode from '-!text!../../../../lib/pc/radio/demo/lists/disable.js'
                        import DisableMarkdown from '../../../../lib/pc/radio/demo/lists/disable.md'
                        
                        import GroupComponent from '../../../../lib/pc/radio/demo/lists/group.js'
                        import GroupCode from '-!text!../../../../lib/pc/radio/demo/lists/group.js'
                        import GroupMarkdown from '../../../../lib/pc/radio/demo/lists/group.md'
                        
                        import LabelComponent from '../../../../lib/pc/radio/demo/lists/label.js'
                        import LabelCode from '-!text!../../../../lib/pc/radio/demo/lists/label.js'
                        import LabelMarkdown from '../../../../lib/pc/radio/demo/lists/label.md'
                        
                        import SizeComponent from '../../../../lib/pc/radio/demo/lists/size.js'
                        import SizeCode from '-!text!../../../../lib/pc/radio/demo/lists/size.js'
                        import SizeMarkdown from '../../../../lib/pc/radio/demo/lists/size.md'
                        

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
                        document.title = '单选框'
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
                                      npmName="fit-radio">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ButtonMarkdown}
                                      code={ButtonCode}
                                      npmName="fit-radio">

                                    <ButtonComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CallbackMarkdown}
                                      code={CallbackCode}
                                      npmName="fit-radio">

                                    <CallbackComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CustomMarkdown}
                                      code={CustomCode}
                                      npmName="fit-radio">

                                    <CustomComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={DisableMarkdown}
                                      code={DisableCode}
                                      npmName="fit-radio">

                                    <DisableComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={GroupMarkdown}
                                      code={GroupCode}
                                      npmName="fit-radio">

                                    <GroupComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={LabelMarkdown}
                                      code={LabelCode}
                                      npmName="fit-radio">

                                    <LabelComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={SizeMarkdown}
                                      code={SizeCode}
                                      npmName="fit-radio">

                                    <SizeComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={RadioSourceCode} instance={RadioSource} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={RadioGroupSourceCode} instance={RadioGroupSource} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={RadioButtonSourceCode} instance={RadioButtonSource} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-radio/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                