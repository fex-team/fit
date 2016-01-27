
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/menu/readme.md'
                import '../../../../lib/pc/menu/demo'

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/menu/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/menu/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/menu/demo/lists/basic.md'
                    
                    import ReverseComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/menu/demo/lists/reverse.js'
                    import ReverseCode from 'text!../../../../lib/pc/menu/demo/lists/reverse.js'
                    import ReverseMarkdown from '../../../../lib/pc/menu/demo/lists/reverse.md'
                    
                    import VerticalComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/menu/demo/lists/vertical.js'
                    import VerticalCode from 'text!../../../../lib/pc/menu/demo/lists/vertical.js'
                    import VerticalMarkdown from '../../../../lib/pc/menu/demo/lists/vertical.md'
                    
                    import SubTreeComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/menu/demo/lists/sub-tree.js'
                    import SubTreeCode from 'text!../../../../lib/pc/menu/demo/lists/sub-tree.js'
                    import SubTreeMarkdown from '../../../../lib/pc/menu/demo/lists/sub-tree.md'
                    
                    import SubTreeVerticalComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/menu/demo/lists/sub-tree-vertical.js'
                    import SubTreeVerticalCode from 'text!../../../../lib/pc/menu/demo/lists/sub-tree-vertical.js'
                    import SubTreeVerticalMarkdown from '../../../../lib/pc/menu/demo/lists/sub-tree-vertical.md'
                    

                const colStyle = {
                    padding: 10
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {}
                        document.title = '菜单'
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
                        <CodeView md={ReverseMarkdown} code={ReverseCode}>
                            <ReverseComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={VerticalMarkdown} code={VerticalCode}>
                            <VerticalComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={SubTreeMarkdown} code={SubTreeCode}>
                            <SubTreeComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={SubTreeVerticalMarkdown} code={SubTreeVerticalCode}>
                            <SubTreeVerticalComponent/>
                        </CodeView>
                    </Col>
                    
                                </Row>

                            </div>
                        )
                    }
                }
                