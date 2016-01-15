import React from 'react'
import CodeView from '../../../code-view/index'
import Highlight from 'react-highlight'
import CodeDoc from '../../../code-doc/index'
import { Row, Col } from 'fit-layout'
import Title from '../../title.js'
import readme from './readme.md'

import SubmitSourceCode from 'text!../../../../lib/tb/submit/src/submit/index'

import Post from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/post.js'
import postCode from 'text!./demo/post.js'
import postMarkdown from './demo/post.md'

import Reply from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/reply.js'
import replyCode from 'text!./demo/reply.js'
import replyMarkdown from './demo/reply.md'

import Comment from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/comment.js'
import commentCode from 'text!./demo/comment.js'
import commentMarkdown from './demo/comment.md'

import Single from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/single.js'
import singleCode from 'text!./demo/single.js'
import singleMarkdown from './demo/single.md'

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
        document.title = '发帖'
    }

    render() {
        return (
            <div className="_namespace">
                <Title>{readme}</Title>

                <Row>
                    <Col span="12"
                         style={colStyle}>
                        <CodeView md={postMarkdown}
                                  code={postCode}>
                            <Post/>
                        </CodeView>

                        <CodeView md={commentMarkdown}
                                  style={{marginTop:10}}
                                  code={commentCode}>
                            <Comment/>
                        </CodeView>
                    </Col>
                    <Col span="12"
                         style={colStyle}>
                        <CodeView md={replyMarkdown}
                                  code={replyCode}>
                            <Reply/>
                        </CodeView>

                        <CodeView md={singleMarkdown}
                                  style={{marginTop:10}}
                                  code={singleCode}>
                            <Single/>
                        </CodeView>
                    </Col>
                </Row>

                <div style={docStyle}>
                    <CodeDoc code={SubmitSourceCode}/>
                </div>

            </div>
        )
    }
}