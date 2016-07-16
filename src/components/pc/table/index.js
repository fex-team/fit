
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/table/readme.md'
                import '../../../../lib/pc/table/demo'

                const store = createStore()

                
                            import TableSource from '../../../../lib/pc/table/src/table'
                            import TableSourceCode from '-!text!../../../../lib/pc/table/src/table'
                            

                
                        import DataComponent from '../../../../lib/pc/table/demo/lists/data.js'
                        import DataCode from '-!text!../../../../lib/pc/table/demo/lists/data.js'
                        import DataMarkdown from '../../../../lib/pc/table/demo/lists/data.md'
                        
                        import AjaxComponent from '../../../../lib/pc/table/demo/lists/ajax.js'
                        import AjaxCode from '-!text!../../../../lib/pc/table/demo/lists/ajax.js'
                        import AjaxMarkdown from '../../../../lib/pc/table/demo/lists/ajax.md'
                        
                        import PaginationComponent from '../../../../lib/pc/table/demo/lists/pagination.js'
                        import PaginationCode from '-!text!../../../../lib/pc/table/demo/lists/pagination.js'
                        import PaginationMarkdown from '../../../../lib/pc/table/demo/lists/pagination.md'
                        
                        import AddComponent from '../../../../lib/pc/table/demo/lists/add.js'
                        import AddCode from '-!text!../../../../lib/pc/table/demo/lists/add.js'
                        import AddMarkdown from '../../../../lib/pc/table/demo/lists/add.md'
                        
                        import CustomComponent from '../../../../lib/pc/table/demo/lists/custom.js'
                        import CustomCode from '-!text!../../../../lib/pc/table/demo/lists/custom.js'
                        import CustomMarkdown from '../../../../lib/pc/table/demo/lists/custom.md'
                        
                        import CustomColComponent from '../../../../lib/pc/table/demo/lists/custom-col.js'
                        import CustomColCode from '-!text!../../../../lib/pc/table/demo/lists/custom-col.js'
                        import CustomColMarkdown from '../../../../lib/pc/table/demo/lists/custom-col.md'
                        
                        import DeleteComponent from '../../../../lib/pc/table/demo/lists/delete.js'
                        import DeleteCode from '-!text!../../../../lib/pc/table/demo/lists/delete.js'
                        import DeleteMarkdown from '../../../../lib/pc/table/demo/lists/delete.md'
                        
                        import EditComponent from '../../../../lib/pc/table/demo/lists/edit.js'
                        import EditCode from '-!text!../../../../lib/pc/table/demo/lists/edit.js'
                        import EditMarkdown from '../../../../lib/pc/table/demo/lists/edit.md'
                        
                        import FieldsComponent from '../../../../lib/pc/table/demo/lists/fields.js'
                        import FieldsCode from '-!text!../../../../lib/pc/table/demo/lists/fields.js'
                        import FieldsMarkdown from '../../../../lib/pc/table/demo/lists/fields.md'
                        
                        import FindComponent from '../../../../lib/pc/table/demo/lists/find.js'
                        import FindCode from '-!text!../../../../lib/pc/table/demo/lists/find.js'
                        import FindMarkdown from '../../../../lib/pc/table/demo/lists/find.md'
                        
                        import OutsideFindComponent from '../../../../lib/pc/table/demo/lists/outsideFind.js'
                        import OutsideFindCode from '-!text!../../../../lib/pc/table/demo/lists/outsideFind.js'
                        import OutsideFindMarkdown from '../../../../lib/pc/table/demo/lists/outsideFind.md'
                        
                        import MockDeleteComponent from '../../../../lib/pc/table/demo/lists/mock-delete.js'
                        import MockDeleteCode from '-!text!../../../../lib/pc/table/demo/lists/mock-delete.js'
                        import MockDeleteMarkdown from '../../../../lib/pc/table/demo/lists/mock-delete.md'
                        
                        import OutsideComponent from '../../../../lib/pc/table/demo/lists/outside.js'
                        import OutsideCode from '-!text!../../../../lib/pc/table/demo/lists/outside.js'
                        import OutsideMarkdown from '../../../../lib/pc/table/demo/lists/outside.md'
                        
                        import ResponsiveComponent from '../../../../lib/pc/table/demo/lists/responsive.js'
                        import ResponsiveCode from '-!text!../../../../lib/pc/table/demo/lists/responsive.js'
                        import ResponsiveMarkdown from '../../../../lib/pc/table/demo/lists/responsive.md'
                        
                        import SelectComponent from '../../../../lib/pc/table/demo/lists/select.js'
                        import SelectCode from '-!text!../../../../lib/pc/table/demo/lists/select.js'
                        import SelectMarkdown from '../../../../lib/pc/table/demo/lists/select.md'
                        
                        import SimpleAjaxComponent from '../../../../lib/pc/table/demo/lists/simple-ajax.js'
                        import SimpleAjaxCode from '-!text!../../../../lib/pc/table/demo/lists/simple-ajax.js'
                        import SimpleAjaxMarkdown from '../../../../lib/pc/table/demo/lists/simple-ajax.md'
                        
                        import SortComponent from '../../../../lib/pc/table/demo/lists/sort.js'
                        import SortCode from '-!text!../../../../lib/pc/table/demo/lists/sort.js'
                        import SortMarkdown from '../../../../lib/pc/table/demo/lists/sort.md'
                        
                        import StaticSortComponent from '../../../../lib/pc/table/demo/lists/static-sort.js'
                        import StaticSortCode from '-!text!../../../../lib/pc/table/demo/lists/static-sort.js'
                        import StaticSortMarkdown from '../../../../lib/pc/table/demo/lists/static-sort.md'
                        

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
                        document.title = '表格'
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
                                      md={DataMarkdown}
                                      code={DataCode}
                                      npmName="fit-table">

                                    <DataComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={AjaxMarkdown}
                                      code={AjaxCode}
                                      npmName="fit-table">

                                    <AjaxComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={PaginationMarkdown}
                                      code={PaginationCode}
                                      npmName="fit-table">

                                    <PaginationComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={AddMarkdown}
                                      code={AddCode}
                                      npmName="fit-table">

                                    <AddComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CustomMarkdown}
                                      code={CustomCode}
                                      npmName="fit-table">

                                    <CustomComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CustomColMarkdown}
                                      code={CustomColCode}
                                      npmName="fit-table">

                                    <CustomColComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={DeleteMarkdown}
                                      code={DeleteCode}
                                      npmName="fit-table">

                                    <DeleteComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={EditMarkdown}
                                      code={EditCode}
                                      npmName="fit-table">

                                    <EditComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={FieldsMarkdown}
                                      code={FieldsCode}
                                      npmName="fit-table">

                                    <FieldsComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={FindMarkdown}
                                      code={FindCode}
                                      npmName="fit-table">

                                    <FindComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={OutsideFindMarkdown}
                                      code={OutsideFindCode}
                                      npmName="fit-table">

                                    <OutsideFindComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={MockDeleteMarkdown}
                                      code={MockDeleteCode}
                                      npmName="fit-table">

                                    <MockDeleteComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={OutsideMarkdown}
                                      code={OutsideCode}
                                      npmName="fit-table">

                                    <OutsideComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={ResponsiveMarkdown}
                                      code={ResponsiveCode}
                                      npmName="fit-table">

                                    <ResponsiveComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={SelectMarkdown}
                                      code={SelectCode}
                                      npmName="fit-table">

                                    <SelectComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={SimpleAjaxMarkdown}
                                      code={SimpleAjaxCode}
                                      npmName="fit-table">

                                    <SimpleAjaxComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={SortMarkdown}
                                      code={SortCode}
                                      npmName="fit-table">

                                    <SortComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={StaticSortMarkdown}
                                      code={StaticSortCode}
                                      npmName="fit-table">

                                    <StaticSortComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={TableSourceCode} instance={TableSource} />
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
                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/pc-table/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                