
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/tb/icon/readme.md'
                import '../../../../lib/tb/icon/demo'

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/tb/icon/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/tb/icon/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/tb/icon/demo/lists/basic.md'
                    
                    import ColorComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/tb/icon/demo/lists/color.js'
                    import ColorCode from 'text!../../../../lib/tb/icon/demo/lists/color.js'
                    import ColorMarkdown from '../../../../lib/tb/icon/demo/lists/color.md'
                    
                    import SizeComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/tb/icon/demo/lists/size.js'
                    import SizeCode from 'text!../../../../lib/tb/icon/demo/lists/size.js'
                    import SizeMarkdown from '../../../../lib/tb/icon/demo/lists/size.md'
                    

                const colStyle = {
                    padding: 10
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {}
                        document.title = '字体图标'
                    }

                    render() {
                        return (
                            <div className="_namespace">
                                <Title>{readme}</Title>

                                <Row>
                                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={BasicMarkdown} code={BasicCode}>
                            <BasicComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={ColorMarkdown} code={ColorCode}>
                            <ColorComponent/>
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
                