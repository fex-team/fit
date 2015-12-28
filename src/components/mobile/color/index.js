import CodeView from '../../../code-view/index'
import Highlight from 'react-highlight'
import { Row, Col } from 'fit-layout'
import Title from '../../title.js'
import readme from './readme.md'

import Basic from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js'
import basicCode from 'text!./demo/basic.js'
import basicMarkdown from './demo/basic.md'

import Night from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/night.js'
import NightCode from 'text!./demo/night.js'
import NightMarkdown from './demo/night.md'

import Carrier from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/carrier.js'
import CarrierCode from 'text!./demo/carrier.js'
import CarrierMarkdown from './demo/carrier.md'

import NightCarrier from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/nightCarrier.js'
import NightCarrierCode from 'text!./demo/nightCarrier.js'
import NightCarrierMarkdown from './demo/nightCarrier.md'

import Assit from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/assit.js'
import AssitCode from 'text!./demo/assit.js'
import AssitMarkdown from './demo/assit.md'

import NightAssit from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/nightAssit.js'
import NightAssitCode from 'text!./demo/nightAssit.js'
import NightAssitMarkdown from './demo/nightAssit.md'

import Button from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/button.js'
import ButtonCode from 'text!./demo/button.js'
import ButtonMarkdown from './demo/button.md'


const colStyle = {
    padding: 10
}

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = '样式'
    }

    render() {
        return (
            <div className="_namespace">
                <Title>{readme}</Title>

                <Row>
                    <Col span="18"
                         style={colStyle}>
                        <CodeView md={basicMarkdown}
                                  code={basicCode}>
                            <Basic/>
                        </CodeView>
                    </Col>

                </Row>
                <Row>
                    <Col span="18" style={colStyle}>
                        <CodeView md={NightMarkdown} code={NightCode}>
                            <Night />
                        </CodeView>
                    </Col>
                </Row>
                <Row>
                    <Col span="18" style={colStyle}>
                        <CodeView md={CarrierMarkdown}
                                  code={CarrierCode}>
                            <Carrier />
                        </CodeView>
                    </Col>
                </Row>
                <Row>
                    <Col span="18" style={colStyle}>
                        <CodeView md={NightCarrierMarkdown}
                                  code={NightCarrierCode}>
                            <NightCarrier />
                        </CodeView>
                    </Col>
                </Row>
                <Row>
                    <Col span="18" style={colStyle}>
                        <CodeView md={AssitMarkdown}
                                  code={AssitCode}>
                            <Assit />
                        </CodeView>
                    </Col>
                </Row>

                <Row>
                    <Col span="18" style={colStyle}>
                        <CodeView md={NightAssitMarkdown}
                                  code={NightAssitCode}>
                            <NightAssit />
                        </CodeView>
                    </Col>
                </Row>
                <Row>
                    <Col span="18" style={colStyle}>
                        <CodeView md={ButtonMarkdown}
                                  code={ButtonCode}>
                            <Button />
                        </CodeView>
                    </Col>
                </Row>

            </div>
        )
    }
}