import React from 'react'
import { Row, Col } from 'fit-layout'
import marked from 'marked'
import readme from '../../doc/tb/readme.md'

const colStyle = {
    margin: 10,
    padding: 20,
    border: '1px solid #eee',
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
                    <Col span="24">
                        <div className="markdown-body"
                             style={colStyle}
                             dangerouslySetInnerHTML={{__html: marked(readme)}}></div>
                    </Col>
                </Row>
            </div>
        )
    }
}