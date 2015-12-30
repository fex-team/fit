import React from 'react'
import CodeView from '../../../code-view'
import Highlight from 'react-highlight'
import Title from '../../title.js'
import readme from './readme.md'
import { Row, Col } from 'fit-layout'

const colStyle = {
    padding: 10
}

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Range from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/range.js'
import rangeCode from 'text!./demo/range.js'
import rangeMarkdown from './demo/range.md'

import Toolbar from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/toolbar.js'
import toolbarCode from 'text!./demo/toolbar.js'
import toolbarMarkdown from './demo/toolbar.md'

import Input from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/input.js'
import inputCode from 'text!./demo/input.js'
import inputMarkdown from './demo/input.md'

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
                    <Col span="24" style={colStyle}>
                        <CodeView md={basicMarkdown} code={basicCode}>
                            <Basic />
                        </CodeView>

                        <CodeView md={rangeMarkdown} code={rangeCode} style={{marginTop:10}}>
                            <Range />
                        </CodeView>

                        <CodeView md={toolbarMarkdown} code={toolbarCode} style={{marginTop:10}}>
                            <Toolbar />
                        </CodeView>

                        <CodeView md={inputMarkdown} code={inputCode} style={{marginTop:10}}>
                            <Input />
                        </CodeView>
                    </Col>
                </Row>
            </div>
        )
    }
}