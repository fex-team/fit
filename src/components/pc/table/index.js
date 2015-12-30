import React from 'react'
import CodeView from '../../../code-view'
import Highlight from 'react-highlight'
import Title from '../../title.js'
import readme from './readme.md'
import { Row, Col } from 'fit-layout'
import $ from 'jquery'
import './mock'
import './index.scss'

import Fields from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/fields.js'
import fieldsCode from 'text!./demo/fields.js'
import fieldsMarkdown from './demo/fields.md'

import Data from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/data.js'
import dataCode from 'text!./demo/data.js'
import dataMarkdown from './demo/data.md'

import SimpleAjax from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/simple-ajax.js'
import simpleAjaxCode from 'text!./demo/simple-ajax.js'
import simpleAjaxMarkdown from './demo/simple-ajax.md'

import Ajax from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/ajax.js'
import ajaxCode from 'text!./demo/ajax.js'
import ajaxMarkdown from './demo/ajax.md'

import Pagination from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/pagination.js'
import paginationCode from 'text!./demo/pagination.js'
import paginationMarkdown from './demo/pagination.md'

import Select from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/select.js'
import selectCode from 'text!./demo/select.js'
import selectMarkdown from './demo/select.md'

import Find from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/find.js'
import findCode from 'text!./demo/find.js'
import findMarkdown from './demo/find.md'

import Sort from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/sort.js'
import sortCode from 'text!./demo/sort.js'
import sortMarkdown from './demo/sort.md'

import Custom from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/custom.js'
import customCode from 'text!./demo/custom.js'
import customMarkdown from './demo/custom.md'

import Sortable from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/sortable.js'
import sortableCode from 'text!./demo/sortable.js'
import sortableMarkdown from './demo/sortable.md'

import Delete from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/delete.js'
import deleteCode from 'text!./demo/delete.js'
import deleteMarkdown from './demo/delete.md'

import CustomCol from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/custom-col.js'
import customColCode from 'text!./demo/custom-col.js'
import customColMarkdown from './demo/custom-col.md'

import Add from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/add.js'
import addCode from 'text!./demo/add.js'
import addMarkdown from './demo/add.md'

import Edit from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/edit.js'
import editCode from 'text!./demo/edit.js'
import editMarkdown from './demo/edit.md'

import Responsive from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/responsive.js'
import responsiveCode from 'text!./demo/responsive.js'
import responsiveMarkdown from './demo/responsive.md'

import Outside from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/outside.js'
import outsideCode from 'text!./demo/outside.js'
import outsideMarkdown from './demo/outside.md'

console.log(Outside)

const colStyle = {
    padding: 10
}

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '表格'
    }

    render() {
        return (
            <div className="_namespace">
                <Title>{readme}</Title>

                <Row style={colStyle}>
                    <Col span="24">
                        <CodeView md={fieldsMarkdown}
                                  code={fieldsCode}>
                            <Fields/>
                        </CodeView>

                        <CodeView md={dataMarkdown}
                                  code={dataCode}
                                  style={{marginTop:10}}>
                            <Data/>
                        </CodeView>

                        <CodeView md={simpleAjaxMarkdown}
                                  code={simpleAjaxCode}
                                  style={{marginTop:10}}>
                            <SimpleAjax/>
                        </CodeView>

                        <CodeView md={ajaxMarkdown}
                                  code={ajaxCode}
                                  style={{marginTop:10}}>
                            <Ajax/>
                        </CodeView>

                        <CodeView md={paginationMarkdown}
                                  code={paginationCode}
                                  style={{marginTop:10}}>
                            <Pagination/>
                        </CodeView>

                        <CodeView md={selectMarkdown}
                                  code={selectCode}
                                  style={{marginTop:10}}>
                            <Select/>
                        </CodeView>

                        <CodeView md={customMarkdown}
                                  code={customCode}
                                  style={{marginTop:10}}>
                            <Custom/>
                        </CodeView>

                        <CodeView md={customColMarkdown}
                                  code={customColCode}
                                  style={{marginTop:10}}>
                            <CustomCol/>
                        </CodeView>

                        <CodeView md={deleteMarkdown}
                                  code={deleteCode}
                                  style={{marginTop:10}}>
                            <Delete/>
                        </CodeView>

                        <CodeView md={addMarkdown}
                                  code={addCode}
                                  style={{marginTop:10}}>
                            <Add/>
                        </CodeView>

                        <CodeView md={findMarkdown}
                                  code={findCode}
                                  style={{marginTop:10}}>
                            <Find/>
                        </CodeView>

                        <CodeView md={sortMarkdown}
                                  code={sortCode}
                                  style={{marginTop:10}}>
                            <Sort/>
                        </CodeView>

                        <CodeView md={editMarkdown}
                                  code={editCode}
                                  style={{marginTop:10}}>
                            <Edit/>
                        </CodeView>

                        <CodeView md={responsiveMarkdown}
                                  code={responsiveCode}
                                  style={{marginTop:10}}>
                            <Responsive/>
                        </CodeView>

                        <CodeView md={outsideMarkdown}
                                  code={outsideCode}>
                            <Outside />
                        </CodeView>
                    </Col>
                </Row>

            </div>
        )
    }
}


//
//<CodeView md={sortableMarkdown}
//code={sortableCode}
//style={{marginTop:10}}>
//<Sortable/>
//</CodeView>