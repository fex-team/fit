import React from 'react'
import CodeView from '../../code-view'
import Highlight from 'react-highlight'
import Title from '../title.js'
import readme from './readme.md'
import { Row, Col } from 'antd'

const colStyle = {
    padding: 10
}

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '导航'
    }

    render() {
        return (
            <div className="_namespace">
                <Title>{readme}</Title>

                <Row>
                    <Col span="20" style={colStyle}>
                        <CodeView md={basicMarkdown} code={basicCode}>
                            <Basic />
                        </CodeView>
                    </Col>
                </Row>
            </div>
        )
    }
}