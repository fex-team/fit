import React from 'react'
import ReactDOM from 'react-dom'

export default class Iframe extends React.Component {
    componentDidMount() {
        this.renderFrameContents()
    }

    componentDidUpdate() {
        this.renderFrameContents()
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).contentDocument.body)
    }

    renderFrameContents() {
        const doc = ReactDOM.findDOMNode(this).contentDocument
        const div = doc.createElement('div')
        div.setAttribute('id', 'react-dom')
        doc.body.appendChild(div)
        if (doc.readyState === 'complete') {
            ReactDOM.render(this.props.children, doc.getElementById('react-dom'))
        } else {
            setTimeout(this.renderFrameContents, 0)
        }
    }

    render() {
        return <iframe />
    }
}