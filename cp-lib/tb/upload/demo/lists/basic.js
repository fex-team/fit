import React from 'react'
import TBUpload from 'tb-upload'

export default class Demo extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            uploadUrl: ''
        };
    }
    render() {
        return <TBUpload
            checkSize="200x200"
            name="test"
            value=""
            onChange={(url) => {this.setState({uploadUrl: url})}}
            onMessage={(msg) => {alert(msg)}} />
    }
}