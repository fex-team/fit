
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/tabs/readme.md'
                import '../../../../lib/pc/tabs/demo'

                
                        import TabsSource from '../../../../lib/pc/tabs/src/tabs'
                        import TabsSourceCode from 'text!../../../../lib/pc/tabs/src/tabs'
                        
                        import TabPanelSource from '../../../../lib/pc/tabs/src/tab-panel'
                        import TabPanelSourceCode from 'text!../../../../lib/pc/tabs/src/tab-panel'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/tabs/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/tabs/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/tabs/demo/lists/basic.md'
                    

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
                        document.title = '标签页'
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
                    
                                </Row>

                                
                        <div style={docStyle}>
                            <CodeDoc code={TabsSourceCode} instance={TabsSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={TabPanelSourceCode} instance={TabPanelSource} />
                        </div>
                        

                            </div>
                        )
                    }
                }
                