
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/input/readme.md'
                import '../../../../lib/pc/input/demo'

                

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/input/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/input/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/input/demo/lists/basic.md'
                    
                    import CallbackComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/input/demo/lists/callback.js'
                    import CallbackCode from 'text!../../../../lib/pc/input/demo/lists/callback.js'
                    import CallbackMarkdown from '../../../../lib/pc/input/demo/lists/callback.md'
                    
                    import DisabledComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/input/demo/lists/disabled.js'
                    import DisabledCode from 'text!../../../../lib/pc/input/demo/lists/disabled.js'
                    import DisabledMarkdown from '../../../../lib/pc/input/demo/lists/disabled.md'
                    
                    import FlexComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/input/demo/lists/flex.js'
                    import FlexCode from 'text!../../../../lib/pc/input/demo/lists/flex.js'
                    import FlexMarkdown from '../../../../lib/pc/input/demo/lists/flex.md'
                    
                    import IconComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/input/demo/lists/icon.js'
                    import IconCode from 'text!../../../../lib/pc/input/demo/lists/icon.js'
                    import IconMarkdown from '../../../../lib/pc/input/demo/lists/icon.md'
                    
                    import TextareaComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/input/demo/lists/textarea.js'
                    import TextareaCode from 'text!../../../../lib/pc/input/demo/lists/textarea.js'
                    import TextareaMarkdown from '../../../../lib/pc/input/demo/lists/textarea.md'
                    

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
                        document.title = '输入框'
                    }

                    render() {
                        return (
                            <div className="_namespace">
                                <Title>{readme}</Title>

                                <Row>
                                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={BasicMarkdown} code={BasicCode}>
                            <BasicComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={CallbackMarkdown} code={CallbackCode}>
                            <CallbackComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={DisabledMarkdown} code={DisabledCode}>
                            <DisabledComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={FlexMarkdown} code={FlexCode}>
                            <FlexComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={IconMarkdown} code={IconCode}>
                            <IconComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={TextareaMarkdown} code={TextareaCode}>
                            <TextareaComponent/>
                        </CodeView>
                    </Col>
                    
                                </Row>

                                

                            </div>
                        )
                    }
                }
                