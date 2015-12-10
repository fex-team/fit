import React from 'react'
import CodeView from '../../code-view'
import Highlight from 'react-highlight'
import Title from '../title.js'
import readme from './readme.md'
import { Row, Col } from 'antd'
import './index.scss'

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Offset from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/offset.js'
import offsetCode from 'text!./demo/offset.js'
import offsetMarkdown from './demo/offset.md'

import Flex from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/flex.js'
import flexCode from 'text!./demo/flex.js'
import flexMarkdown from './demo/flex.md'

import Center from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/center.js'
import centerCode from 'text!./demo/center.js'
import centerMarkdown from './demo/center.md'

import Order from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/order.js'
import orderCode from 'text!./demo/order.js'
import orderMarkdown from './demo/order.md'

const colStyle = {
    padding: 10
}

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '布局'
    }

    render() {
        return (
            <div _namespace>
                <Title>{readme}</Title>

                <Row style={colStyle}>
                    <Col span="24">
                        <CodeView md={basicMarkdown}
                                  code={basicCode}
                                  style={{marginTop:10}}>
                            <Basic/>
                        </CodeView>

                        <CodeView md={offsetMarkdown}
                                  code={offsetCode}
                                  style={{marginTop:10}}>
                            <Offset/>
                        </CodeView>

                        <CodeView md={flexMarkdown}
                                  code={flexCode}
                                  style={{marginTop:10}}>
                            <Flex/>
                        </CodeView>

                        <CodeView md={centerMarkdown}
                                  code={centerCode}
                                  style={{marginTop:10}}>
                            <Center/>
                        </CodeView>

                        <CodeView md={orderMarkdown}
                                  code={orderCode}
                                  style={{marginTop:10}}>
                            <Order/>
                        </CodeView>
                    </Col>
                </Row>

            </div>
        )
    }
}