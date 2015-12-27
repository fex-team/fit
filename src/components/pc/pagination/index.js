import React from 'react'
import CodeView from '../../../code-view'
import Highlight from 'react-highlight'
import Title from '../../title.js'
import readme from './readme.md'
import { Row, Col } from 'fit-layout'

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Loading from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/loading.js'
import loadingCode from 'text!./demo/loading.js'
import loadingMarkdown from './demo/loading.md'

import AllPage from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/all-page.js'
import allPageCode from 'text!./demo/all-page.js'
import allPageMarkdown from './demo/all-page.md'

import Size from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/size.js'
import sizeCode from 'text!./demo/size.js'
import sizeMarkdown from './demo/size.md'

import LoadingAll from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/loading-all.js'
import loadingAllCode from 'text!./demo/loading-all.js'
import loadingAllMarkdown from './demo/loading-all.md'

const colStyle = {
    padding: 10
}

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '分页'
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

                        <CodeView md={allPageMarkdown}
                                  code={allPageCode}
                                  style={{marginTop:10}}>
                            <AllPage/>
                        </CodeView>

                        <CodeView md={loadingAllMarkdown}
                                  code={loadingAllCode}
                                  style={{marginTop:10}}>
                            <LoadingAll/>
                        </CodeView>
                    </Col>

                    <Col style={colStyle}
                         span="12">
                        <CodeView md={loadingMarkdown}
                                  code={loadingCode}>
                            <Loading/>
                        </CodeView>

                        <CodeView md={sizeMarkdown}
                                  code={sizeCode}
                                  style={{marginTop:10}}>
                            <Size/>
                        </CodeView>
                    </Col>
                </Row>

            </div>
        )
    }
}