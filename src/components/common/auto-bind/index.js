
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/common/auto-bind/readme.md'
                import '../../../../lib/common/auto-bind/demo'

                const store = createStore()

                
                            import autoBindMethodSource from '../../../../lib/common/auto-bind/src/auto-bind-method/index.tsx'
                            import autoBindMethodSourceCode from '-!text!../../../../lib/common/auto-bind/src/auto-bind-method/index.tsx'
                            
                            import autoBindClassSource from '../../../../lib/common/auto-bind/src/auto-bind-class/index.tsx'
                            import autoBindClassSourceCode from '-!text!../../../../lib/common/auto-bind/src/auto-bind-class/index.tsx'
                            

                

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
                        document.title = '自动绑定'
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
                                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={autoBindMethodSourceCode} instance={autoBindMethodSource} />
                            </div>
                            
                            <div style={docStyle}>
                                <CodeDoc code={autoBindClassSourceCode} instance={autoBindClassSource} />
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
                                        <SidebarComponent gitlabUrl="https://github.com/fit-component/auto-bind/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                