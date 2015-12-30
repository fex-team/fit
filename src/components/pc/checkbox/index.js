import React from 'react'
import CodeView from '../../../code-view'
import Highlight from 'react-highlight'
import Title from '../../title.js'
import readme from './readme.md'
import { Row, Col } from 'fit-layout'
import './index.scss'

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Size from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/size.js'
import sizeCode from 'text!./demo/size.js'
import sizeMarkdown from './demo/size.md'

import Callback from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/callback.js'
import callbackCode from 'text!./demo/callback.js'
import callbackMarkdown from './demo/callback.md'

import Disable from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/disable.js'
import disableCode from 'text!./demo/disable.js'
import disableMarkdown from './demo/disable.md'

import Custom from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/custom.js'
import customCode from 'text!./demo/custom.js'
import customMarkdown from './demo/custom.md'

import Label from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/label.js'
import labelCode from 'text!./demo/label.js'
import labelMarkdown from './demo/label.md'

const colStyle = {
    padding: 10
}

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '多选框'
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

                        <CodeView md={callbackMarkdown}
                                  code={callbackCode}
                                  style={{marginTop:10}}>
                            <Callback/>
                        </CodeView>

                        <CodeView md={customMarkdown}
                                  code={customCode}
                                  style={{marginTop:10}}>
                            <Custom/>
                        </CodeView>
                    </Col>

                    <Col style={colStyle}
                         span="12">
                        <CodeView md={sizeMarkdown}
                                  code={sizeCode}>
                            <Size/>
                        </CodeView>

                        <CodeView md={disableMarkdown}
                                  code={disableCode}
                                  style={{marginTop:10}}>
                            <Disable/>
                        </CodeView>

                        <CodeView md={labelMarkdown}
                                  code={labelCode}
                                  style={{marginTop:10}}>
                            <Label/>
                        </CodeView>
                    </Col>
                </Row>

            </div>
        )
    }
}