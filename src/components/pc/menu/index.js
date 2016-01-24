import React from 'react'
import CodeView from '../../../code-view'
import Highlight from 'react-highlight'
import Title from '../../title.js'
import readme from './readme.md'
import { Row, Col } from 'fit-layout'

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

import SubTree from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/sub-tree.js'
import subTreeCode from 'text!./demo/sub-tree.js'
import subTreeMarkdown from './demo/sub-tree.md'

import SubTreeVertical from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/sub-tree-vertical.js'
import subTreeVerticalCode from 'text!./demo/sub-tree-vertical.js'
import subTreeVerticalMarkdown from './demo/sub-tree-vertical.md'

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
                    <Col span="24"
                         style={colStyle}>
                        <CodeView md={basicMarkdown}
                                  code={basicCode}>
                            <Basic />
                        </CodeView>

                        <CodeView style={{marginTop:10}}
                                  md={reverseMarkdown}
                                  code={reverseCode}>
                            <Reverse />
                        </CodeView>

                        <CodeView style={{marginTop:10}}
                                  md={verticalMarkdown}
                                  code={verticalCode}>
                            <Vertical />
                        </CodeView>

                        <CodeView style={{marginTop:10}}
                                  md={subTreeMarkdown}
                                  code={subTreeCode}>
                            <SubTree />
                        </CodeView>

                        <CodeView style={{marginTop:10}}
                                  md={subTreeVerticalMarkdown}
                                  code={subTreeVerticalCode}>
                            <SubTreeVertical />
                        </CodeView>
                    </Col>
                </Row>
            </div>
        )
    }
}