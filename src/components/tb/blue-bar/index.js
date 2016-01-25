import React from 'react'
import CodeView from '../../../code-view'
import Highlight from 'react-highlight'
import Title from '../../title.js'
import readme from './readme.md'
import { Row, Col } from 'fit-layout'
import CodeDoc from '../../../code-doc/index'

const colStyle = {
    padding: 10
}

const docStyle = {
    margin: 10,
    padding: 10,
    background: 'white'
}

import BluebarSourceCode from 'text!../../../../lib/tb/blue-bar/src/index'


import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Share from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/share.js'
import shareCode from 'text!./demo/share.js'
import shareMarkdown from './demo/share.md'

export default class Datepicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '顶部蓝条'
    }

    render() {
        return (
            <div className="_namespace">
                <Title>{readme}</Title>

                <Row>
                    <Col span="18"
                         style={colStyle}>
                        <CodeView md={basicMarkdown}
                                  code={basicCode}>
                            <Basic />
                        </CodeView>
                    </Col>
                </Row>

                <Row>
                    <Col span="18"
                         style={colStyle}>
                        <CodeView md={shareMarkdown}
                                  code={shareCode}>
                            <Share />
                        </CodeView>
                    </Col>
                </Row>

                <div style={docStyle}>
                    <CodeDoc code={BluebarSourceCode} />
                </div>
            </div>
        )
    }
}