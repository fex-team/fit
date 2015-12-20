import React from 'react'
import CodeView from '../../code-view'
import Highlight from 'react-highlight'
import Title from '../title.js'
import readme from './readme.md'
import { Row, Col } from 'antd'
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


                    </Col>
                </Row>

            </div>
        )
    }
}

//<CodeView md={findMarkdown}
//          code={findCode}
//          style={{marginTop:10}}>
//    <Find/>
//</CodeView>
//
//<CodeView md={sortMarkdown}
//code={sortCode}
//style={{marginTop:10}}>
//<Sort/>
//</CodeView>
//
//<CodeView md={customMarkdown}
//code={customCode}
//style={{marginTop:10}}>
//<Custom/>
//</CodeView>
//
//<CodeView md={sortableMarkdown}
//code={sortableCode}
//style={{marginTop:10}}>
//<Sortable/>
//</CodeView>