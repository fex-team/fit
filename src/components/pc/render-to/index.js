import React from 'react'
import CodeView from '../../../code-view/index'
import Highlight from 'react-highlight'
import { Row, Col } from 'fit-layout'
import Title from '../../title.js'
import readme from './readme.md'
import CodeDoc from '../../../code-doc/index'

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

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
        document.title = '组件嵌入'
    }

    render() {
        return (
            <div className="_namespace">
                <Title>{readme}</Title>

                <Row>
                    <Col span="24"
                         style={colStyle}>
                        <CodeView md={basicMarkdown}
                                  code={basicCode}>
                            <Basic/>
                        </CodeView>
                    </Col>
                </Row>

            </div>
        )
    }
}