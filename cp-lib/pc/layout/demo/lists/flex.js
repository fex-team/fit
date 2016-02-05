import React from 'react'
import { Row, Col } from 'fit-layout'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <p>子元素居左排列</p>
                <Row type="flex"
                     justify="start">
                    <Col span="4">.col-4</Col>
                    <Col span="4">.col-4</Col>
                    <Col span="4">.col-4</Col>
                    <Col span="4">.col-4</Col>
                </Row>

                <p>子元素居中排列</p>
                <Row type="flex"
                     justify="center">
                    <Col span="4">.col-4</Col>
                    <Col span="4">.col-4</Col>
                    <Col span="4">.col-4</Col>
                    <Col span="4">.col-4</Col>
                </Row>

                <p>子元素居右排列</p>
                <Row type="flex"
                     justify="end">
                    <Col span="4">.col-4</Col>
                    <Col span="4">.col-4</Col>
                    <Col span="4">.col-4</Col>
                    <Col span="4">.col-4</Col>
                </Row>

                <p>子元素等宽排列</p>
                <Row type="flex"
                     justify="space-between">
                    <Col span="4">.col-4</Col>
                    <Col span="4">.col-4</Col>
                    <Col span="4">.col-4</Col>
                    <Col span="4">.col-4</Col>
                </Row>

                <p>子元素分散对齐</p>
                <Row type="flex"
                     justify="space-around">
                    <Col span="4">.col-4</Col>
                    <Col span="4">.col-4</Col>
                    <Col span="4">.col-4</Col>
                    <Col span="4">.col-4</Col>
                </Row>
            </div>
        )
    }
}