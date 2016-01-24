import React from 'react'

export default class Icon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <i style={this.props.style}
               className={`tf-${this.props.type}`}></i>
        )
    }
}

Icon.defaultProps = {
    // @desc 类型,用来区分不同图标
    // @type string
    type: 'post',

    // @desc 样式
    // @type object
    style: {}
}