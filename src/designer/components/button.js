import React from 'react'
import Button from 'fit-button'

export default class ButtonComponent extends React.Component {
    render() {
        return (
            <Button>{this.props.options.text.value}</Button>
        )
    }
}

ButtonComponent.defaultProps = {
    name     : '按钮',
    uniqueKey: 'button',
    options  : {
        text: {
            label   : '文字',
            value   : '按钮',
            editor  : 'text',
            editable: true
        },
        id  : {
            label   : 'id',
            value   : '5',
            editor  : 'text',
            editable: true
        }
    }
}