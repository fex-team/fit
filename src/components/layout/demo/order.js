import React from 'react'
import { Row, Col } from 'fit-layout'

export default class Demo extends React.Component {
    render() {
        return (
            <Row type="flex">
                <Col span="6"
                     order="4">1 col-order-4</Col>
                <Col span="6"
                     order="3">2 col-order-3</Col>
                <Col span="6"
                     order="2">3 col-order-2</Col>
                <Col span="6"
                     order="1">4 col-order-1</Col>
            </Row>
        )
    }
}