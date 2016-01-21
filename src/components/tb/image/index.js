import React from 'react'
import CodeView from '../../../code-view/index'
import Highlight from 'react-highlight'
import { Row, Col } from 'fit-layout'
import Title from '../../title.js'
import readme from './readme.md'
import CodeDoc from '../../../code-doc/index'

import ImageSourceCode from 'text!../../../../lib/tb/image/src/image/index'

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Wide from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/wide.js'
import wideCode from 'text!./demo/wide.js'
import wideMarkdown from './demo/wide.md'

const colStyle = {
    padding: 10
}

const docStyle = {
    margin: 10,
    padding: 10,
    background: 'white'
}


export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '图片容器'
    }

    render() {
        return (
            <div className="_namespace">
                <Title>{readme}</Title>

                <Row>
                    <Col span="8"
                         style={colStyle}>
                        <CodeView md={basicMarkdown}
                                  code={basicCode}>
                            <Basic/>
                        </CodeView>
                    </Col>
                    <Col span="8"
                         style={colStyle}>
                        <CodeView md={wideMarkdown}
                                  code={wideCode}>
                            <Wide />
                        </CodeView>
                    </Col>
                </Row>


                <div style={docStyle}>
                    <CodeDoc code={ImageSourceCode} />
                </div>
            </div>
        )
    }
}