import React from 'react'
import CodeView from '../../../code-view'
import Highlight from 'react-highlight'
import Title from '../../title.js'
import readme from './readme.md'
import { Row, Col } from 'antd'
import './index.scss'

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Duration from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/duration.js'
import durationCode from 'text!./demo/duration.js'
import durationMarkdown from './demo/duration.md'

import Type from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/type.js'
import typeCode from 'text!./demo/type.js'
import typeMarkdown from './demo/type.md'

import Callback from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/callback.js'
import callbackCode from 'text!./demo/callback.js'
import callbackMarkdown from './demo/callback.md'

const colStyle = {
    padding: 10
}

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '提示'
    }

    render() {
        return (
            <div className="_namespace">
                <Title>{readme}</Title>

                <Row style={colStyle}>
                    <Col style={colStyle}
                         span="12">
                        <CodeView md={basicMarkdown}
                                  code={basicCode}>
                            <Basic/>
                        </CodeView>

                        <CodeView md={typeMarkdown}
                                  code={typeCode}
                                  style={{marginTop:10}}>
                            <Type/>
                        </CodeView>
                    </Col>

                    <Col style={colStyle}
                         span="12">
                        <CodeView md={durationMarkdown}
                                  code={durationCode}>
                            <Duration/>
                        </CodeView>

                        <CodeView md={callbackMarkdown}
                                  code={callbackCode}
                                  style={{marginTop:10}}>
                            <Callback/>
                        </CodeView>
                    </Col>
                </Row>

            </div>
        )
    }
}