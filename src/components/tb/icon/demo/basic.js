import React from 'react'
import Icon from 'tb-icon'

const fontStyle = {
    fontSize: 30
}

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Icon type="post"
                      style={fontStyle}/>
                <Icon type="reply"
                      style={fontStyle}/>
            </div>
        )
    }
}