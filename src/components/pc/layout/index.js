
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/layout/readme.md'
                import '../../../../lib/pc/layout/demo'

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/layout/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/layout/demo/lists/basic.md'
                    
                    import CenterComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout/demo/lists/center.js'
                    import CenterCode from 'text!../../../../lib/pc/layout/demo/lists/center.js'
                    import CenterMarkdown from '../../../../lib/pc/layout/demo/lists/center.md'
                    
                    import FlexComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout/demo/lists/flex.js'
                    import FlexCode from 'text!../../../../lib/pc/layout/demo/lists/flex.js'
                    import FlexMarkdown from '../../../../lib/pc/layout/demo/lists/flex.md'
                    
                    import OffsetComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout/demo/lists/offset.js'
                    import OffsetCode from 'text!../../../../lib/pc/layout/demo/lists/offset.js'
                    import OffsetMarkdown from '../../../../lib/pc/layout/demo/lists/offset.md'
                    
                    import OrderComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout/demo/lists/order.js'
                    import OrderCode from 'text!../../../../lib/pc/layout/demo/lists/order.js'
                    import OrderMarkdown from '../../../../lib/pc/layout/demo/lists/order.md'
                    

                const colStyle = {
                    padding: 10
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {}
                        document.title = '布局'
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
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={CenterMarkdown} code={CenterCode}>
                            <CenterComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={FlexMarkdown} code={FlexCode}>
                            <FlexComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={OffsetMarkdown} code={OffsetCode}>
                            <OffsetComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={OrderMarkdown} code={OrderCode}>
                            <OrderComponent/>
                        </CodeView>
                    </Col>
                    
                                </Row>

                            </div>
                        )
                    }
                }
                