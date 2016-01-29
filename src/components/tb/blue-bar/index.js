
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/tb/blue-bar/readme.md'
                import '../../../../lib/tb/blue-bar/demo'

                

                

                const colStyle = {
                    padding: 10
                }

                const docStyle = {
                    margin: 10,
                    background: 'white'
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {}
                        document.title = '顶部蓝条'
                    }

                    render() {
                        return (
                            <div className="_namespace">
                                <Title>{readme}</Title>

                                <Row>
                                    
                                </Row>

                                

                            </div>
                        )
                    }
                }
                