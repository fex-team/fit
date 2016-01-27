import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import './index.scss'

export default class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let containerClass = classNames({
            '_namespace': true,
            'left': this.props.position === 'left',
            'right': this.props.position === 'right'
        })

        let textContentClass = classNames({
            'text-content': true,
            'left': this.props.position === 'left',
            'right': this.props.position === 'right'
        })

        let rightContentClass = classNames({
            'right-content': true,
            'left': this.props.position === 'left',
            'right': this.props.position === 'right'
        })

        return (
            <div className={containerClass}>
                <img className="portrait"
                     src={this.props.portrait}/>
                <div className={rightContentClass}>
                    <div className="name">
                        {!_.isEmpty(this.props.nameRender()) ? this.props.nameRender() : this.props.name}
                    </div>
                    <div className={textContentClass}>
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
}

Chat.defaultProps = {
    // @desc 聊天内容
    // @type string
    content: '',

    // @desc 位置,聊天冒泡在左边或者右边
    // @type string
    // @enum left right
    position: 'left',

    // @desc 头像的url地址
    // @type string
    portrait: '',

    // @desc 用户名
    // @type string
    name: '',

    // @desc 用户名（自定义渲染）
    // @type function
    nameRender: ()=> {}
}