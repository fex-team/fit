import React from 'react'
import Frame from 'fit-iframe'

export default class Demo extends React.Component {
    render() {
        return (
            <Frame>
                <div>Iframe内容</div>
            </Frame>
        )
    }
}