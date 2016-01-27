
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/layout-global/readme.md'
                import '../../../../lib/pc/layout-global/demo'

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout-global/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/layout-global/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/layout-global/demo/lists/basic.md'
                    
                    import HeaderComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout-global/demo/lists/header.js'
                    import HeaderCode from 'text!../../../../lib/pc/layout-global/demo/lists/header.js'
                    import HeaderMarkdown from '../../../../lib/pc/layout-global/demo/lists/header.md'
                    
                    import RightFooterComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout-global/demo/lists/right-footer.js'
                    import RightFooterCode from 'text!../../../../lib/pc/layout-global/demo/lists/right-footer.js'
                    import RightFooterMarkdown from '../../../../lib/pc/layout-global/demo/lists/right-footer.md'
                    
                    import HeaderSectionComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout-global/demo/lists/header-section.js'
                    import HeaderSectionCode from 'text!../../../../lib/pc/layout-global/demo/lists/header-section.js'
                    import HeaderSectionMarkdown from '../../../../lib/pc/layout-global/demo/lists/header-section.md'
                    
                    import AllComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/layout-global/demo/lists/all.js'
                    import AllCode from 'text!../../../../lib/pc/layout-global/demo/lists/all.js'
                    import AllMarkdown from '../../../../lib/pc/layout-global/demo/lists/all.md'
                    

                const colStyle = {
                    padding: 10
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {}
                        document.title = '全屏布局'
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
                        <CodeView md={HeaderMarkdown} code={HeaderCode}>
                            <HeaderComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={RightFooterMarkdown} code={RightFooterCode}>
                            <RightFooterComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={HeaderSectionMarkdown} code={HeaderSectionCode}>
                            <HeaderSectionComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={AllMarkdown} code={AllCode}>
                            <AllComponent/>
                        </CodeView>
                    </Col>
                    
                                </Row>

                            </div>
                        )
                    }
                }
                