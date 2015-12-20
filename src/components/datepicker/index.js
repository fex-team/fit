import React from 'react'
import CodeView from '../../code-view'
import Highlight from 'react-highlight'
import Title from '../title.js'
import readme from './readme.md'
import { Row, Col } from 'antd'

const colStyle = {
    padding: 10
}

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Format from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/format.js'
import FormatCode from 'text!./demo/format.js'
import FormatMarkdown from './demo/format.md'

import Size from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/size.js'
import SizeCode from 'text!./demo/size.js'
import SizeMarkdown from './demo/size.md'

export default class Datepicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '日期'
    }

    render() {
        return (
            <div className="_namespace">
                <Title>{readme}</Title>

                <Row>
                    <Col span="12" style={colStyle}>
                        <CodeView md={basicMarkdown} code={basicCode}>
                            <Basic />
                        </CodeView>
                    </Col>
                    <Col span="12" style={colStyle}>
                        <CodeView md={FormatMarkdown} code={FormatCode}>
                            <Format />
                        </CodeView>
                    </Col>
                </Row>

                <Row>
                    <Col span="12" style={colStyle}>
                        <CodeView md={SizeMarkdown} code={SizeCode}>
                            <Size />
                        </CodeView>
                    </Col>
                </Row>
            </div>
        )
    }
}