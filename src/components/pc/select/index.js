import React from 'react'
import CodeView from '../../../code-view'
import Highlight from 'react-highlight'
import Title from '../../title.js'
import readme from './readme.md'
import { Row, Col } from 'fit-layout'

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Group from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/group.js'
import groupCode from 'text!./demo/group.js'
import groupMarkdown from './demo/group.md'

import Search from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/search.js'
import searchCode from 'text!./demo/search.js'
import searchMarkdown from './demo/search.md'

import Label from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/label.js'
import labelCode from 'text!./demo/label.js'
import labelMarkdown from './demo/label.md'

import Simple from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/simple.js'
import simpleCode from 'text!./demo/simple.js'
import simpleMarkdown from './demo/simple.md'

import Disabled from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/disabled.js'
import disabledCode from 'text!./demo/disabled.js'
import disabledMarkdown from './demo/disabled.md'

const colStyle = {
    padding: 10
}

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '选择框'
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

                        <CodeView md={searchMarkdown}
                                  code={searchCode}
                                  style={{marginTop:10}}>
                            <Search/>
                        </CodeView>

                        <CodeView md={simpleMarkdown}
                                  code={simpleCode}
                                  style={{marginTop:10}}>
                            <Simple/>
                        </CodeView>
                    </Col>

                    <Col style={colStyle}
                         span="12">
                        <CodeView md={groupMarkdown}
                                  code={groupCode}>
                            <Group/>
                        </CodeView>

                        <CodeView md={labelMarkdown}
                                  code={labelCode}
                                  style={{marginTop:10}}>
                            <Label/>
                        </CodeView>

                        <CodeView md={disabledMarkdown}
                                  code={disabledCode}
                                  style={{marginTop:10}}>
                            <Disabled/>
                        </CodeView>
                    </Col>
                </Row>

            </div>
        )
    }
}