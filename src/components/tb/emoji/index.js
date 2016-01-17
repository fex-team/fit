import React from 'react'
import CodeView from '../../../code-view/index'
import Highlight from 'react-highlight'
import { Row, Col } from 'fit-layout'
import Title from '../../title.js'
import readme from './readme.md'
import CodeDoc from '../../../code-doc/index'

import EmojiSourceCode from 'text!../../../../lib/tb/emoji/src/emoji/index'

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Control from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/control.js'
import controlCode from 'text!./demo/control.js'
import controlMarkdown from './demo/control.md'

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
        document.title = '表情库'
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
                            <Basic/>
                        </CodeView>
                    </Col>
                    <Col span="12"
                         style={colStyle}>
                        <CodeView md={controlMarkdown}
                                  code={controlCode}>
                            <Control/>
                        </CodeView>
                    </Col>
                </Row>

                <div style={docStyle}>
                    <CodeDoc code={EmojiSourceCode}/>
                </div>

            </div>
        )
    }
}