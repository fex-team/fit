import React from 'react'
import { Row, Col } from 'fit-layout'
import marked from 'marked'
import readme from './readme.md'

const colStyle = {
    padding: 20,
    background: 'white'
}

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        document.title = 'Fit Design'
    }

    render() {
        return (
            <div className="_namespace">
                <Row>
                    <Col span="24"
                         style={colStyle}>
                        <div className="markdown-body"
                             dangerouslySetInnerHTML={{__html: marked(readme)}}></div>
                    </Col>
                </Row>
            </div>
        )
    }
}