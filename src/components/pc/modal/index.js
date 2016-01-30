
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Tabs, TabPanel } from 'fit-tabs'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/modal/readme.md'
                import '../../../../lib/pc/modal/demo'

                
                        import ModalSource from '../../../../lib/pc/modal/src/modal'
                        import ModalSourceCode from 'text!../../../../lib/pc/modal/src/modal'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/modal/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/modal/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/modal/demo/lists/basic.md'
                    
                    import CustomComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/modal/demo/lists/custom.js'
                    import CustomCode from 'text!../../../../lib/pc/modal/demo/lists/custom.js'
                    import CustomMarkdown from '../../../../lib/pc/modal/demo/lists/custom.md'
                    

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
                        document.title = '模态框'
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
                        <CodeView md={CustomMarkdown} code={CustomCode}>
                            <CustomComponent/>
                        </CodeView>
                    </Col>
                    
                                    </Row>
                                </TabPanel>
                                <TabPanel tab="文档"
                                          key="2">
                                    
                        <div style={docStyle}>
                            <CodeDoc code={ModalSourceCode} instance={ModalSource} />
                        </div>
                        
                                    </TabPanel>
                                </Tabs>
                            </div>
                        )
                    }
                }
                