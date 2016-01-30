
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Tabs, TabPanel } from 'fit-tabs'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/datepicker/readme.md'
                import '../../../../lib/pc/datepicker/demo'

                
                        import CalendarSource from '../../../../lib/pc/datepicker/src/calendar'
                        import CalendarSourceCode from 'text!../../../../lib/pc/datepicker/src/calendar'
                        
                        import DateRangeSource from '../../../../lib/pc/datepicker/src/date-range'
                        import DateRangeSourceCode from 'text!../../../../lib/pc/datepicker/src/date-range'
                        
                        import DateInputSource from '../../../../lib/pc/datepicker/src/date-input'
                        import DateInputSourceCode from 'text!../../../../lib/pc/datepicker/src/date-input'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/datepicker/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/datepicker/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/datepicker/demo/lists/basic.md'
                    
                    import RangeComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/datepicker/demo/lists/range.js'
                    import RangeCode from 'text!../../../../lib/pc/datepicker/demo/lists/range.js'
                    import RangeMarkdown from '../../../../lib/pc/datepicker/demo/lists/range.md'
                    
                    import ToolbarComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/datepicker/demo/lists/toolbar.js'
                    import ToolbarCode from 'text!../../../../lib/pc/datepicker/demo/lists/toolbar.js'
                    import ToolbarMarkdown from '../../../../lib/pc/datepicker/demo/lists/toolbar.md'
                    
                    import InputComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/datepicker/demo/lists/input.js'
                    import InputCode from 'text!../../../../lib/pc/datepicker/demo/lists/input.js'
                    import InputMarkdown from '../../../../lib/pc/datepicker/demo/lists/input.md'
                    
                    import LabelComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/datepicker/demo/lists/label.js'
                    import LabelCode from 'text!../../../../lib/pc/datepicker/demo/lists/label.js'
                    import LabelMarkdown from '../../../../lib/pc/datepicker/demo/lists/label.md'
                    
                    import ShowTimeComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/datepicker/demo/lists/show-time.js'
                    import ShowTimeCode from 'text!../../../../lib/pc/datepicker/demo/lists/show-time.js'
                    import ShowTimeMarkdown from '../../../../lib/pc/datepicker/demo/lists/show-time.md'
                    

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
                        this.state = {}
                        document.title = '日期选择器'
                    }

                    render() {
                        return (
                            <div className="_namespace">
                                <Title>{readme}</Title>

                                <Tabs defaultActiveKey="1">
                                    <TabPanel tab="演示"
                                              key="1">
                                    <Row>
                                        
                    <Col span="24" style={colStyle}>
                        <CodeView md={BasicMarkdown} code={BasicCode}>
                            <BasicComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={RangeMarkdown} code={RangeCode}>
                            <RangeComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={ToolbarMarkdown} code={ToolbarCode}>
                            <ToolbarComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={InputMarkdown} code={InputCode}>
                            <InputComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={LabelMarkdown} code={LabelCode}>
                            <LabelComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={ShowTimeMarkdown} code={ShowTimeCode}>
                            <ShowTimeComponent/>
                        </CodeView>
                    </Col>
                    
                                    </Row>
                                </TabPanel>
                                <TabPanel tab="文档"
                                          key="2">
                                    
                        <div style={docStyle}>
                            <CodeDoc code={CalendarSourceCode} instance={CalendarSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={DateRangeSourceCode} instance={DateRangeSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={DateInputSourceCode} instance={DateInputSource} />
                        </div>
                        
                                    </TabPanel>
                                </Tabs>
                            </div>
                        )
                    }
                }
                