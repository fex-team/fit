import React from 'react'
import CodeView from '../../code-view'
import Highlight from 'react-highlight'
import { Row, Col } from 'antd'
import Title from '../title.js'
import readme from './readme.md'

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Color from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/color.js'
import colorCode from 'text!./demo/color.js'
import colorMarkdown from './demo/color.md'

const colStyle = {
    padding: 10
}

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '按钮'
    }

    render() {
        return (
            <div _namespace>
                <Title>{readme}</Title>

                <Row>
                    <Col span="12"
                         style={colStyle}>
                        <CodeView md={basicMarkdown} code={basicCode}>
                            <Basic/>
                        </CodeView>
                    </Col>
                    <Col span="12"
                         style={colStyle}>
                        <CodeView md={colorMarkdown} code={colorCode}>
                            <Color/>
                        </CodeView>
                    </Col>
                </Row>

            </div>
        )
    }
}