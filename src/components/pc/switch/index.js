import React from 'react'
import CodeView from '../../../code-view'
import Highlight from 'react-highlight'
import Title from '../../title.js'
import readme from './readme.md'
import { Row, Col } from 'fit-layout'

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Type from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/type.js'
import typeCode from 'text!./demo/type.js'
import typeMarkdown from './demo/type.md'

import Control from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/control.js'
import controlCode from 'text!./demo/control.js'
import controlMarkdown from './demo/control.md'

import Size from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/size.js'
import sizeCode from 'text!./demo/size.js'
import sizeMarkdown from './demo/size.md'

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
        document.title = '开关'
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

                        <CodeView md={controlMarkdown}
                                  code={controlCode}
                                  style={{marginTop:10}}>
                            <Control/>
                        </CodeView>

                        <CodeView md={labelMarkdown}
                                  code={labelCode}
                                  style={{marginTop:10}}>
                            <Label/>
                        </CodeView>
                    </Col>

                    <Col style={colStyle}
                         span="12">
                        <CodeView md={typeMarkdown}
                                  code={typeCode}>
                            <Type/>
                        </CodeView>

                        <CodeView md={sizeMarkdown}
                                  code={sizeCode}
                                  style={{marginTop:10}}>
                            <Size/>
                        </CodeView>
                    </Col>
                </Row>

            </div>
        )
    }
}