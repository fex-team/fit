
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Tabs, TabPanel } from 'fit-tabs'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/button/readme.md'
                import '../../../../lib/pc/button/demo'

                
                        import ButtonSource from '../../../../lib/pc/button/src/button'
                        import ButtonSourceCode from 'text!../../../../lib/pc/button/src/button'
                        
                        import ButtonGroupSource from '../../../../lib/pc/button/src/button-group'
                        import ButtonGroupSourceCode from 'text!../../../../lib/pc/button/src/button-group'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/button/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/button/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/button/demo/lists/basic.md'
                    
                    import ActiveComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/button/demo/lists/active.js'
                    import ActiveCode from 'text!../../../../lib/pc/button/demo/lists/active.js'
                    import ActiveMarkdown from '../../../../lib/pc/button/demo/lists/active.md'
                    
                    import AddonComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/button/demo/lists/addon.js'
                    import AddonCode from 'text!../../../../lib/pc/button/demo/lists/addon.js'
                    import AddonMarkdown from '../../../../lib/pc/button/demo/lists/addon.md'
                    
                    import ColorComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/button/demo/lists/color.js'
                    import ColorCode from 'text!../../../../lib/pc/button/demo/lists/color.js'
                    import ColorMarkdown from '../../../../lib/pc/button/demo/lists/color.md'
                    
                    import GroupComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/button/demo/lists/group.js'
                    import GroupCode from 'text!../../../../lib/pc/button/demo/lists/group.js'
                    import GroupMarkdown from '../../../../lib/pc/button/demo/lists/group.md'
                    
                    import LoadingComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/button/demo/lists/loading.js'
                    import LoadingCode from 'text!../../../../lib/pc/button/demo/lists/loading.js'
                    import LoadingMarkdown from '../../../../lib/pc/button/demo/lists/loading.md'
                    
                    import RoundedComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/button/demo/lists/rounded.js'
                    import RoundedCode from 'text!../../../../lib/pc/button/demo/lists/rounded.js'
                    import RoundedMarkdown from '../../../../lib/pc/button/demo/lists/rounded.md'
                    
                    import SizeComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/button/demo/lists/size.js'
                    import SizeCode from 'text!../../../../lib/pc/button/demo/lists/size.js'
                    import SizeMarkdown from '../../../../lib/pc/button/demo/lists/size.md'
                    

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
                        document.title = '按钮'
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
                        <CodeView md={ActiveMarkdown} code={ActiveCode}>
                            <ActiveComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={AddonMarkdown} code={AddonCode}>
                            <AddonComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={ColorMarkdown} code={ColorCode}>
                            <ColorComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={GroupMarkdown} code={GroupCode}>
                            <GroupComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={LoadingMarkdown} code={LoadingCode}>
                            <LoadingComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={RoundedMarkdown} code={RoundedCode}>
                            <RoundedComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={SizeMarkdown} code={SizeCode}>
                            <SizeComponent/>
                        </CodeView>
                    </Col>
                    
                                    </Row>
                                </TabPanel>
                                <TabPanel tab="文档"
                                          key="2">
                                    
                        <div style={docStyle}>
                            <CodeDoc code={ButtonSourceCode} instance={ButtonSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={ButtonGroupSourceCode} instance={ButtonGroupSource} />
                        </div>
                        
                                    </TabPanel>
                                </Tabs>
                            </div>
                        )
                    }
                }
                