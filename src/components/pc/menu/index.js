
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/menu/readme.md'
                import '../../../../lib/pc/menu/demo'

                const store = createStore()

                
                            import MenuSource from '../../../../lib/pc/menu/src/menu/index.tsx'
                            import MenuSourceCode from '-!text!../../../../lib/pc/menu/src/menu/index.tsx'
                            
                                import * as MenuModule from '../../../../lib/pc/menu/src/menu/module.tsx'
                                import MenuModuleCode from '-!text!../../../../lib/pc/menu/src/menu/module.tsx'
                                
                            import MenuItemSource from '../../../../lib/pc/menu/src/menu-item/index.tsx'
                            import MenuItemSourceCode from '-!text!../../../../lib/pc/menu/src/menu-item/index.tsx'
                            
                                import * as MenuItemModule from '../../../../lib/pc/menu/src/menu-item/module.tsx'
                                import MenuItemModuleCode from '-!text!../../../../lib/pc/menu/src/menu-item/module.tsx'
                                
                            import SubMenuSource from '../../../../lib/pc/menu/src/sub-menu/index.tsx'
                            import SubMenuSourceCode from '-!text!../../../../lib/pc/menu/src/sub-menu/index.tsx'
                            
                                import * as SubMenuModule from '../../../../lib/pc/menu/src/sub-menu/module.tsx'
                                import SubMenuModuleCode from '-!text!../../../../lib/pc/menu/src/sub-menu/module.tsx'
                                
                            import RightMenuSource from '../../../../lib/pc/menu/src/right-menu/index.tsx'
                            import RightMenuSourceCode from '-!text!../../../../lib/pc/menu/src/right-menu/index.tsx'
                            
                                import * as RightMenuModule from '../../../../lib/pc/menu/src/right-menu/module.tsx'
                                import RightMenuModuleCode from '-!text!../../../../lib/pc/menu/src/right-menu/module.tsx'
                                

                
                        import BasicComponent from '../../../../lib/pc/menu/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/pc/menu/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/pc/menu/demo/lists/basic.md'
                        
                        import ReverseComponent from '../../../../lib/pc/menu/demo/lists/reverse.tsx'
                        import ReverseCode from '-!text!../../../../lib/pc/menu/demo/lists/reverse.tsx'
                        import ReverseMarkdown from '../../../../lib/pc/menu/demo/lists/reverse.md'
                        
                        import RightComponent from '../../../../lib/pc/menu/demo/lists/right.tsx'
                        import RightCode from '-!text!../../../../lib/pc/menu/demo/lists/right.tsx'
                        import RightMarkdown from '../../../../lib/pc/menu/demo/lists/right.md'
                        
                        import VerticalComponent from '../../../../lib/pc/menu/demo/lists/vertical.tsx'
                        import VerticalCode from '-!text!../../../../lib/pc/menu/demo/lists/vertical.tsx'
                        import VerticalMarkdown from '../../../../lib/pc/menu/demo/lists/vertical.md'
                        
                        import SubTreeComponent from '../../../../lib/pc/menu/demo/lists/sub-tree.tsx'
                        import SubTreeCode from '-!text!../../../../lib/pc/menu/demo/lists/sub-tree.tsx'
                        import SubTreeMarkdown from '../../../../lib/pc/menu/demo/lists/sub-tree.md'
                        
                        import SubTreeVerticalComponent from '../../../../lib/pc/menu/demo/lists/sub-tree-vertical.tsx'
                        import SubTreeVerticalCode from '-!text!../../../../lib/pc/menu/demo/lists/sub-tree-vertical.tsx'
                        import SubTreeVerticalMarkdown from '../../../../lib/pc/menu/demo/lists/sub-tree-vertical.md'
                        
                        import RightSubTreeComponent from '../../../../lib/pc/menu/demo/lists/right-sub-tree.tsx'
                        import RightSubTreeCode from '-!text!../../../../lib/pc/menu/demo/lists/right-sub-tree.tsx'
                        import RightSubTreeMarkdown from '../../../../lib/pc/menu/demo/lists/right-sub-tree.md'
                        

                const colStyle = {
                    padding: 10,
                    boxSizing: 'border-box'
                }

                const docStyle = {
                    margin: 10,
                    background: 'white'
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {
                            page: 'demo'
                        }
                        document.title = '菜单'
                    }

                    handlePageChange(value) {
                        this.setState({
                            page: value
                        })
                    }

                    render() {
                        let Content = null

                        switch (this.state.page) {
                        case 'demo':
                            Content = (
                                <Row>
                                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={BasicMarkdown}
                                      code={BasicCode}
                                      npmName="fit-menu">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ReverseMarkdown}
                                      code={ReverseCode}
                                      npmName="fit-menu">

                                    <ReverseComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={RightMarkdown}
                                      code={RightCode}
                                      npmName="fit-menu">

                                    <RightComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={VerticalMarkdown}
                                      code={VerticalCode}
                                      npmName="fit-menu">

                                    <VerticalComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={SubTreeMarkdown}
                                      code={SubTreeCode}
                                      npmName="fit-menu">

                                    <SubTreeComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={SubTreeVerticalMarkdown}
                                      code={SubTreeVerticalCode}
                                      npmName="fit-menu">

                                    <SubTreeVerticalComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={RightSubTreeMarkdown}
                                      code={RightSubTreeCode}
                                      npmName="fit-menu">

                                    <RightSubTreeComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={MenuSourceCode} instance={MenuSource} moduleCode={MenuModuleCode} moduleInstance={MenuModule} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={MenuItemSourceCode} instance={MenuItemSource} moduleCode={MenuItemModuleCode} moduleInstance={MenuItemModule} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={SubMenuSourceCode} instance={SubMenuSource} moduleCode={SubMenuModuleCode} moduleInstance={SubMenuModule} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={RightMenuSourceCode} instance={RightMenuSource} moduleCode={RightMenuModuleCode} moduleInstance={RightMenuModule} />
                            </div>
                            
                                </div>
                            )
                            break
                        }

                        return (
                            <div className="_namespace">
                                <Layout>
                                    <Section>
                                        <Title>{readme}</Title>
                                        <ScrollListenBox store={store}>
                                            {Content}
                                        </ScrollListenBox>
                                    </Section>
                                    <Sidebar direction="right"
                                             width={120}>
                                        <SidebarComponent gitlabUrl="https://github.com/fit-component/pc-menu/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                