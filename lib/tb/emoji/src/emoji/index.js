import React from 'react'
import request from 'superagent'
import defaultStyle from './style'
import emojiImg from './image/emoji.png'
import emojiArray from './emoji-list'
import emojiTextArray from './text-emoji-list'

export default class Emoji extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            type: 'default'
        }
    }

    handleOuterButtonClick() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    handleEmojiClick(value) {
        this.props.onChange(`#(${value})`)
    }

    handleChangeType(value) {
        this.setState({
            type: value
        })
    }

    closeModal() {
        this.setState({
            showModal: false
        })
    }

    render() {
        let style = Object.assign({}, defaultStyle, this.props.style)

        // emoji表情额外样式
        let emojiBg = {
            backgroundImage: `url(${emojiImg})`
        }

        let EmojiContent = null

        switch (this.state.type) {
        case 'default':
            EmojiContent = emojiArray.map((item, index)=> {
                let emojiPosition = {
                    backgroundPosition: `0 -${index * 30}px`
                }
                return (
                    <div key={index}
                         onClick={this.handleEmojiClick.bind(this,item)}
                         style={style.emojiContainer}>
                        <div style={Object.assign({},style.emojiItem,emojiBg,emojiPosition)}></div>
                    </div>
                )
            })
            break
        case 'text':
            EmojiContent = emojiTextArray.map((item, index)=> {
                return (
                    <div key={index}
                         onClick={this.handleEmojiClick.bind(this,item)}
                         style={style.emojiTextContainer}>
                        <div style={style.emojiTextItem}>
                            {item}
                        </div>
                    </div>
                )
            })
            break
        }

        // 显示emoji模态框的逻辑
        let showModalDisplay = 'none'
        if (this.props.control) {
            showModalDisplay = this.props.visible ? 'flex' : 'none'
        } else {
            showModalDisplay = this.state.showModal ? 'flex' : 'none'
        }
        let modalContainerVisible = {
            display: showModalDisplay
        }

        // 根据不同展现方式,对模态框样式进行追加
        let modalContainerCustom = {}
        if (this.props.control) {
            modalContainerCustom.position = 'relative'
            modalContainerCustom.left = 0
            modalContainerCustom.top = 0
        }

        return (
            <div style={style.container}>
                {!this.props.control ?
                    <div onClick={this.handleOuterButtonClick.bind(this)}>按钮</div> : null
                }
                <div style={Object.assign({},style.modalContainer,modalContainerVisible,modalContainerCustom)}>
                    <div style={style.modalEmojiContainer}>
                        {EmojiContent}
                    </div>
                    <div style={style.addonContainer}>
                        <div onClick={this.handleChangeType.bind(this,'default')}
                             style={Object.assign({},style.addonItem,this.state.type==='default'?style.addonItemActive:null)}>
                            默认
                        </div>
                        <div onClick={this.handleChangeType.bind(this,'text')}
                             style={Object.assign({},style.addonItem,this.state.type==='text'?style.addonItemActive:null)}>
                            颜表情
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Emoji.defaultProps = {
    // @desc 样式
    // @type object
    style: {},

    // @desc 选择一个表情的回调函数,第一个传参为选择表情的内容
    // @type function
    onChange: (value)=> {
    },

    // @desc 是否受外部控制
    // @type bool
    control: false,

    // @desc 是否显示表情框,只有受控时才有效
    // @type bool
    visible: false
}