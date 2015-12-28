import React from 'react'
import CodeView from '../../../code-view'
import Highlight from 'react-highlight'
import Title from '../../title.js'
import readme from './readme.md'
import { Row, Col } from 'fit-layout'

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Accordion from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/accordion.js'
import accordionCode from 'text!./demo/accordion.js'
import accordionMarkdown from './demo/accordion.md'

const colStyle = {
    padding: 10
}

export default class CollapseExamples extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '折叠面板'
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
                    </Col>

                    <Col style={colStyle}
                         span="12">
                        <CodeView md={accordionMarkdown}
                                  code={accordionCode}>
                            <Accordion/>
                        </CodeView>
                    </Col>
                </Row>

            </div>
        )
    }
}