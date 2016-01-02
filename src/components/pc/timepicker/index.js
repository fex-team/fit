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

import Limit from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/limit.js'
import limitCode from 'text!./demo/limit.js'
import limitMarkdown from './demo/limit.md'

import Label from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/label.js'
import labelCode from 'text!./demo/label.js'
import labelMarkdown from './demo/label.md'

export default class TimePickerDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '时间选择'
    }

    render() {
        return (
            <div className="_namespace">
                <Title>{readme}</Title>

                <Row>
                    <Col span="12"
                         style={colStyle}>
                        <CodeView md={basicMarkdown}
                                  code={basicCode}>
                            <Basic />
                        </CodeView>

                        <CodeView md={labelMarkdown}
                                  code={labelCode}
                                  style={{marginTop:10}}>
                            <Label />
                        </CodeView>
                    </Col>

                    <Col span="12"
                         style={colStyle}>
                        <CodeView md={limitMarkdown}
                                  code={limitCode}>
                            <Limit />
                        </CodeView>
                    </Col>
                </Row>
            </div>
        )
    }
}