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
    name     : '自定义按钮',
    uniqueKey: 'button',
    icon     : 'square-o',
    options  : {
        text      : {
            label   : '文字选项',
            value   : '我是自定义按钮',
            editor  : 'text',
            editable: true
        },
        testSelect: {
            label   : '下拉选项',
            value   : '5',
            editor  : 'selector',
            editable: true,
            options : [{
                key  : 'a',
                value: '小明'
            }, {
                key  : 'b',
                value: '小红'
            }, {
                key  : 'c',
                value: '小白'
            }, {
                key  : 'd',
                value: '小王'
            }, {
                key  : 'e',
                value: '小李'
            }, {
                groupValue: '其它',
                children  : [{
                    key  : 'aa',
                    value: '小黑'
                }, {
                    key  : 'bb',
                    value: '小天'
                }]
            }]
        },
        array     : {
            label   : '数组选项',
            editor  : 'array',
            children: {
                name: {
                    label   : '数组内选项1',
                    editor  : 'text',
                    editable: true
                },
                age : {
                    label   : '数组内选项2',
                    editor  : 'text',
                    editable: true
                }
            },
            value   : [{
                name: '小明',
                age : 16
            }, {
                name: '小王',
                age : 18
            }]
        }
    }
}