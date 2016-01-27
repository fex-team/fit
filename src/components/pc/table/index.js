
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/table/readme.md'
                import '../../../../lib/pc/table/demo'

                
                    import DataComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/table/demo/lists/data.js'
                    import DataCode from 'text!../../../../lib/pc/table/demo/lists/data.js'
                    import DataMarkdown from '../../../../lib/pc/table/demo/lists/data.md'
                    
                    import AjaxComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/table/demo/lists/ajax.js'
                    import AjaxCode from 'text!../../../../lib/pc/table/demo/lists/ajax.js'
                    import AjaxMarkdown from '../../../../lib/pc/table/demo/lists/ajax.md'
                    
                    import AddComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/table/demo/lists/add.js'
                    import AddCode from 'text!../../../../lib/pc/table/demo/lists/add.js'
                    import AddMarkdown from '../../../../lib/pc/table/demo/lists/add.md'
                    
                    import CustomComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/table/demo/lists/custom.js'
                    import CustomCode from 'text!../../../../lib/pc/table/demo/lists/custom.js'
                    import CustomMarkdown from '../../../../lib/pc/table/demo/lists/custom.md'
                    
                    import CustomColComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/table/demo/lists/custom-col.js'
                    import CustomColCode from 'text!../../../../lib/pc/table/demo/lists/custom-col.js'
                    import CustomColMarkdown from '../../../../lib/pc/table/demo/lists/custom-col.md'
                    
                    import DeleteComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/table/demo/lists/delete.js'
                    import DeleteCode from 'text!../../../../lib/pc/table/demo/lists/delete.js'
                    import DeleteMarkdown from '../../../../lib/pc/table/demo/lists/delete.md'
                    
                    import EditComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/table/demo/lists/edit.js'
                    import EditCode from 'text!../../../../lib/pc/table/demo/lists/edit.js'
                    import EditMarkdown from '../../../../lib/pc/table/demo/lists/edit.md'
                    
                    import FieldsComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/table/demo/lists/fields.js'
                    import FieldsCode from 'text!../../../../lib/pc/table/demo/lists/fields.js'
                    import FieldsMarkdown from '../../../../lib/pc/table/demo/lists/fields.md'
                    
                    import FindComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/table/demo/lists/find.js'
                    import FindCode from 'text!../../../../lib/pc/table/demo/lists/find.js'
                    import FindMarkdown from '../../../../lib/pc/table/demo/lists/find.md'
                    
                    import MockDeleteComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/table/demo/lists/mock-delete.js'
                    import MockDeleteCode from 'text!../../../../lib/pc/table/demo/lists/mock-delete.js'
                    import MockDeleteMarkdown from '../../../../lib/pc/table/demo/lists/mock-delete.md'
                    
                    import OutsideComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/table/demo/lists/outside.js'
                    import OutsideCode from 'text!../../../../lib/pc/table/demo/lists/outside.js'
                    import OutsideMarkdown from '../../../../lib/pc/table/demo/lists/outside.md'
                    
                    import PaginationComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/table/demo/lists/pagination.js'
                    import PaginationCode from 'text!../../../../lib/pc/table/demo/lists/pagination.js'
                    import PaginationMarkdown from '../../../../lib/pc/table/demo/lists/pagination.md'
                    
                    import ResponsiveComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/table/demo/lists/responsive.js'
                    import ResponsiveCode from 'text!../../../../lib/pc/table/demo/lists/responsive.js'
                    import ResponsiveMarkdown from '../../../../lib/pc/table/demo/lists/responsive.md'
                    
                    import SelectComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/table/demo/lists/select.js'
                    import SelectCode from 'text!../../../../lib/pc/table/demo/lists/select.js'
                    import SelectMarkdown from '../../../../lib/pc/table/demo/lists/select.md'
                    
                    import SimpleAjaxComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/table/demo/lists/simple-ajax.js'
                    import SimpleAjaxCode from 'text!../../../../lib/pc/table/demo/lists/simple-ajax.js'
                    import SimpleAjaxMarkdown from '../../../../lib/pc/table/demo/lists/simple-ajax.md'
                    
                    import SortComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/table/demo/lists/sort.js'
                    import SortCode from 'text!../../../../lib/pc/table/demo/lists/sort.js'
                    import SortMarkdown from '../../../../lib/pc/table/demo/lists/sort.md'
                    
                    import SortableComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/table/demo/lists/sortable.js'
                    import SortableCode from 'text!../../../../lib/pc/table/demo/lists/sortable.js'
                    import SortableMarkdown from '../../../../lib/pc/table/demo/lists/sortable.md'
                    

                const colStyle = {
                    padding: 10
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {}
                        document.title = '表格'
                    }

                    render() {
                        return (
                            <div className="_namespace">
                                <Title>{readme}</Title>

                                <Row>
                                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={DataMarkdown} code={DataCode}>
                            <DataComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={AjaxMarkdown} code={AjaxCode}>
                            <AjaxComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={AddMarkdown} code={AddCode}>
                            <AddComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={CustomMarkdown} code={CustomCode}>
                            <CustomComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={CustomColMarkdown} code={CustomColCode}>
                            <CustomColComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={DeleteMarkdown} code={DeleteCode}>
                            <DeleteComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={EditMarkdown} code={EditCode}>
                            <EditComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={FieldsMarkdown} code={FieldsCode}>
                            <FieldsComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={FindMarkdown} code={FindCode}>
                            <FindComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={MockDeleteMarkdown} code={MockDeleteCode}>
                            <MockDeleteComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={OutsideMarkdown} code={OutsideCode}>
                            <OutsideComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={PaginationMarkdown} code={PaginationCode}>
                            <PaginationComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={ResponsiveMarkdown} code={ResponsiveCode}>
                            <ResponsiveComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={SelectMarkdown} code={SelectCode}>
                            <SelectComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={SimpleAjaxMarkdown} code={SimpleAjaxCode}>
                            <SimpleAjaxComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={SortMarkdown} code={SortCode}>
                            <SortComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="24" style={colStyle}>
                        <CodeView md={SortableMarkdown} code={SortableCode}>
                            <SortableComponent/>
                        </CodeView>
                    </Col>
                    
                                </Row>

                            </div>
                        )
                    }
                }
                