import React from 'react'
import CodeView from '../../../code-view'
import Highlight from 'react-highlight'
import Title from '../../title.js'
import readme from './readme.md'
import { Row, Col } from 'antd'

const colStyle = {
    padding: 10
}

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Reverse from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/reverse.js'
import reverseCode from 'text!./demo/reverse.js'
import reverseMarkdown from './demo/reverse.md'

import Vertical from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/vertical.js'
import verticalCode from 'text!./demo/vertical.js'
import verticalMarkdown from './demo/vertical.md'

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '菜单'
    }

    render() {
        return (
            <div className="_namespace">
                <Title>{readme}</Title>

                <Row>
                    <Col span="24" style={colStyle}>
                        <CodeView md={basicMarkdown} code={basicCode}>
                            <Basic />
                        </CodeView>

                        <CodeView style={{marginTop:10}} md={reverseMarkdown} code={reverseCode}>
                            <Reverse />
                        </CodeView>

                        <CodeView style={{marginTop:10}} md={verticalMarkdown} code={verticalCode}>
                            <Vertical />
                        </CodeView>
                    </Col>
                </Row>
            </div>
        )
    }
}