
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/datepicker/readme.md'
                import '../../../../lib/pc/datepicker/demo'

                const store = createStore()

                
                            import CalendarSource from '../../../../lib/pc/datepicker/src/calendar'
                            import CalendarSourceCode from '-!text!../../../../lib/pc/datepicker/src/calendar'
                            
                            import DateRangeSource from '../../../../lib/pc/datepicker/src/date-range'
                            import DateRangeSourceCode from '-!text!../../../../lib/pc/datepicker/src/date-range'
                            
                            import DateInputSource from '../../../../lib/pc/datepicker/src/date-input'
                            import DateInputSourceCode from '-!text!../../../../lib/pc/datepicker/src/date-input'
                            

                
                        import BasicComponent from '../../../../lib/pc/datepicker/demo/lists/basic.js'
                        import BasicCode from '-!text!../../../../lib/pc/datepicker/demo/lists/basic.js'
                        import BasicMarkdown from '../../../../lib/pc/datepicker/demo/lists/basic.md'
                        
                        import RangeComponent from '../../../../lib/pc/datepicker/demo/lists/range.js'
                        import RangeCode from '-!text!../../../../lib/pc/datepicker/demo/lists/range.js'
                        import RangeMarkdown from '../../../../lib/pc/datepicker/demo/lists/range.md'
                        
                        import ToolbarComponent from '../../../../lib/pc/datepicker/demo/lists/toolbar.js'
                        import ToolbarCode from '-!text!../../../../lib/pc/datepicker/demo/lists/toolbar.js'
                        import ToolbarMarkdown from '../../../../lib/pc/datepicker/demo/lists/toolbar.md'
                        
                        import InputComponent from '../../../../lib/pc/datepicker/demo/lists/input.js'
                        import InputCode from '-!text!../../../../lib/pc/datepicker/demo/lists/input.js'
                        import InputMarkdown from '../../../../lib/pc/datepicker/demo/lists/input.md'
                        
                        import DefaultValueComponent from '../../../../lib/pc/datepicker/demo/lists/default-value.js'
                        import DefaultValueCode from '-!text!../../../../lib/pc/datepicker/demo/lists/default-value.js'
                        import DefaultValueMarkdown from '../../../../lib/pc/datepicker/demo/lists/default-value.md'
                        
                        import LabelComponent from '../../../../lib/pc/datepicker/demo/lists/label.js'
                        import LabelCode from '-!text!../../../../lib/pc/datepicker/demo/lists/label.js'
                        import LabelMarkdown from '../../../../lib/pc/datepicker/demo/lists/label.md'
                        
                        import ShowTimeComponent from '../../../../lib/pc/datepicker/demo/lists/show-time.js'
                        import ShowTimeCode from '-!text!../../../../lib/pc/datepicker/demo/lists/show-time.js'
                        import ShowTimeMarkdown from '../../../../lib/pc/datepicker/demo/lists/show-time.md'
                        

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
                        document.title = '日期选择器'
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
                                      npmName="fit-datepicker">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={RangeMarkdown}
                                      code={RangeCode}
                                      npmName="fit-datepicker">

                                    <RangeComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ToolbarMarkdown}
                                      code={ToolbarCode}
                                      npmName="fit-datepicker">

                                    <ToolbarComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={InputMarkdown}
                                      code={InputCode}
                                      npmName="fit-datepicker">

                                    <InputComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={DefaultValueMarkdown}
                                      code={DefaultValueCode}
                                      npmName="fit-datepicker">

                                    <DefaultValueComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={LabelMarkdown}
                                      code={LabelCode}
                                      npmName="fit-datepicker">

                                    <LabelComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ShowTimeMarkdown}
                                      code={ShowTimeCode}
                                      npmName="fit-datepicker">

                                    <ShowTimeComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={CalendarSourceCode} instance={CalendarSource} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={DateRangeSourceCode} instance={DateRangeSource} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={DateInputSourceCode} instance={DateInputSource} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-datepicker/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                