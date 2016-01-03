import React from 'react'
import CodeView from '../../../code-view'
import Highlight from 'react-highlight'
import Title from '../../title.js'
import readme from './readme.md'
import { Row, Col } from 'fit-layout'

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Limit from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/limit.js'
import limitCode from 'text!./demo/limit.js'
import limitMarkdown from './demo/limit.md'

import Float from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/float.js'
import floatCode from 'text!./demo/float.js'
import floatMarkdown from './demo/float.md'

import Step from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/step.js'
import stepCode from 'text!./demo/step.js'
import stepMarkdown from './demo/step.md'

import Callback from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/callback.js'
import callbackCode from 'text!./demo/callback.js'
import callbackMarkdown from './demo/callback.md'

import Speed from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/speed.js'
import speedCode from 'text!./demo/speed.js'
import speedMarkdown from './demo/speed.md'

const colStyle = {
    padding: 10
}

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '数字框'
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

                        <CodeView md={floatMarkdown}
                                  code={floatCode}
                                  style={{marginTop:10}}>
                            <Float/>
                        </CodeView>

                        <CodeView md={speedMarkdown}
                                  code={speedCode}
                                  style={{marginTop:10}}>
                            <Speed/>
                        </CodeView>
                    </Col>

                    <Col style={colStyle}
                         span="12">
                        <CodeView md={limitMarkdown}
                                  code={limitCode}>
                            <Limit/>
                        </CodeView>

                        <CodeView md={stepMarkdown}
                                  code={stepCode}
                                  style={{marginTop:10}}>
                            <Step/>
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