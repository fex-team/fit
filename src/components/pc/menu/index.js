
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Tabs, TabPanel } from 'fit-tabs'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/menu/readme.md'
                import '../../../../lib/pc/menu/demo'

                
                        import MenuSource from '../../../../lib/pc/menu/src/menu'
                        import MenuSourceCode from 'text!../../../../lib/pc/menu/src/menu'
                        
                        import MenuItemSource from '../../../../lib/pc/menu/src/menu-item'
                        import MenuItemSourceCode from 'text!../../../../lib/pc/menu/src/menu-item'
                        
                        import SubMenuSource from '../../../../lib/pc/menu/src/sub-menu'
                        import SubMenuSourceCode from 'text!../../../../lib/pc/menu/src/sub-menu'
                        

                
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

                const docStyle = {
                    margin: 10,
                    background: 'white'
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
                                </TabPanel>
                                <TabPanel tab="文档"
                                          key="2">
                                    
                        <div style={docStyle}>
                            <CodeDoc code={MenuSourceCode} instance={MenuSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={MenuItemSourceCode} instance={MenuItemSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={SubMenuSourceCode} instance={SubMenuSource} />
                        </div>
                        
                                    </TabPanel>
                                </Tabs>
                            </div>
                        )
                    }
                }
                