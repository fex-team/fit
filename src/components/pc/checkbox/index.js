
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/checkbox/readme.md'
                import '../../../../lib/pc/checkbox/demo'

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/checkbox/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/checkbox/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/checkbox/demo/lists/basic.md'
                    
                    import CallbackComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/checkbox/demo/lists/callback.js'
                    import CallbackCode from 'text!../../../../lib/pc/checkbox/demo/lists/callback.js'
                    import CallbackMarkdown from '../../../../lib/pc/checkbox/demo/lists/callback.md'
                    
                    import CustomComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/checkbox/demo/lists/custom.js'
                    import CustomCode from 'text!../../../../lib/pc/checkbox/demo/lists/custom.js'
                    import CustomMarkdown from '../../../../lib/pc/checkbox/demo/lists/custom.md'
                    
                    import DisableComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/checkbox/demo/lists/disable.js'
                    import DisableCode from 'text!../../../../lib/pc/checkbox/demo/lists/disable.js'
                    import DisableMarkdown from '../../../../lib/pc/checkbox/demo/lists/disable.md'
                    
                    import LabelComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/checkbox/demo/lists/label.js'
                    import LabelCode from 'text!../../../../lib/pc/checkbox/demo/lists/label.js'
                    import LabelMarkdown from '../../../../lib/pc/checkbox/demo/lists/label.md'
                    
                    import SizeComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/checkbox/demo/lists/size.js'
                    import SizeCode from 'text!../../../../lib/pc/checkbox/demo/lists/size.js'
                    import SizeMarkdown from '../../../../lib/pc/checkbox/demo/lists/size.md'
                    

                const colStyle = {
                    padding: 10
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {}
                        document.title = '多选框'
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
                        <CodeView md={CustomMarkdown} code={CustomCode}>
                            <CustomComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={DisableMarkdown} code={DisableCode}>
                            <DisableComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={LabelMarkdown} code={LabelCode}>
                            <LabelComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={SizeMarkdown} code={SizeCode}>
                            <SizeComponent/>
                        </CodeView>
                    </Col>
                    
                                </Row>

                            </div>
                        )
                    }
                }
                