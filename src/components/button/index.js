import React from 'react'
import CodeView from '../../code-view'
import Highlight from 'react-highlight'
import { Row, Col } from 'antd'
import Title from '../title.js'
import readme from './readme.md'

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Color from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/color.js'
import colorCode from 'text!./demo/color.js'
import colorMarkdown from './demo/color.md'

import Addon from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/addon.js'
import addonCode from 'text!./demo/addon.js'
import addonMarkdown from './demo/addon.md'

import Rounded from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/rounded.js'
import roundedCode from 'text!./demo/rounded.js'
import roundedMarkdown from './demo/rounded.md'

import Group from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/group.js'
import groupCode from 'text!./demo/group.js'
import groupMarkdown from './demo/group.md'

const colStyle = {
    padding: 10
}

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '按钮'
    }

    render() {
        return (
            <div _namespace>
                <Title>{readme}</Title>

                <Row>
                    <Col span="12"
                         style={colStyle}>
                        <CodeView md={basicMarkdown}
                                  code={basicCode}>
                            <Basic/>
                        </CodeView>
                        <CodeView md={addonMarkdown}
                                  code={addonCode}
                                  style={{marginTop:10}}>
                            <Addon/>
                        </CodeView>
                    </Col>
                    <Col span="12"
                         style={colStyle}>
                        <CodeView md={colorMarkdown}
                                  code={colorCode}>
                            <Color/>
                        </CodeView>
                        <CodeView md={roundedMarkdown}
                                  style={{marginTop:10}}
                                  code={roundedCode}>
                            <Rounded/>
                        </CodeView>
                        <CodeView md={groupMarkdown}
                                  code={groupCode}
                                  style={{marginTop:10}}>
                            <Group/>
                        </CodeView>
                    </Col>
                </Row>

            </div>
        )
    }
}