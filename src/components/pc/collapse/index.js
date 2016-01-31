
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/collapse/readme.md'
                import '../../../../lib/pc/collapse/demo'

                
                        import CollapseSource from '../../../../lib/pc/collapse/src/collapse'
                        import CollapseSourceCode from 'text!../../../../lib/pc/collapse/src/collapse'
                        
                        import CollPanelSource from '../../../../lib/pc/collapse/src/coll-panel'
                        import CollPanelSourceCode from 'text!../../../../lib/pc/collapse/src/coll-panel'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/collapse/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/collapse/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/collapse/demo/lists/basic.md'
                    
                    import AccordionComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/collapse/demo/lists/accordion.js'
                    import AccordionCode from 'text!../../../../lib/pc/collapse/demo/lists/accordion.js'
                    import AccordionMarkdown from '../../../../lib/pc/collapse/demo/lists/accordion.md'
                    

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
                        this.state = {
                            page: 'demo'
                        }
                        document.title = '折叠面板'
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
                        <CodeView md={BasicMarkdown} code={BasicCode}>
                            <BasicComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={AccordionMarkdown} code={AccordionCode}>
                            <AccordionComponent/>
                        </CodeView>
                    </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                        <div style={docStyle}>
                            <CodeDoc code={CollapseSourceCode} instance={CollapseSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={CollPanelSourceCode} instance={CollPanelSource} />
                        </div>
                        
                                </div>
                            )
                            break
                        }

                        return (
                            <div className="_namespace">
                                <Layout>
                                    <Header>
                                        <Title gitlabUrl="http://gitlab.baidu.com/tb-component/pc-collapse/tree/master"
                                               onChange={this.handlePageChange.bind(this)}>{readme}</Title>
                                    </Header>

                                    <Section>
                                        {Content}
                                    </Section>
                                    <Sidebar direction="right"
                                             width="120">
                                        5555555
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                