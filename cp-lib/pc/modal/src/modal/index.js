import React from 'react'
import './index.scss'

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
    }

    // 确定
    handleOk() {
        this.props.onOk()
    }

    // 取消
    handleCancel() {
        this.props.onCancel()
    }

    handleOutClick() {
        this.handleCancel()
    }

    handleModalClick(event) {
        event.stopPropagation()
    }

    render() {
        return (
            <div className="_namespace modal fade in"
                 onClick={this.handleOutClick.bind(this)}
                 tabIndex="-1"
                 style={{display:this.props.show?'block':null}}>
                <div className="modal-dialog"
                     onClick={this.handleModalClick.bind(this)}>
                    <div className="modal-content">
                        {this.props.title === '' ? null :
                            <div className="modal-header">
                                <button type="button"
                                        className="close">
                                    <span onClick={this.handleCancel.bind(this)}>×</span>
                                    <span className="sr-only">Close</span>
                                </button>
                                <h4 className="modal-title">{this.props.title}</h4>
                            </div>
                        }
                        <div className="modal-body"
                             style={{marginTop:this.props.title===''?20:null}}>
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            {this.props.renderOperateButton() ? this.props.renderOperateButton(this.handleOk.bind(this), this.handleCancel.bind(this)) :
                                <div>
                                    <button type="button"
                                            onClick={this.handleCancel.bind(this)}
                                            className="btn btn-secondary">
                                        {this.props.cancelText}
                                    </button>
                                    <button type="button"
                                            className="btn btn-primary"
                                            onClick={this.handleOk.bind(this)}>{this.props.okText}</button>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

Modal.defaultProps = {
    // @desc 取消按钮文字
    cancelText: '取消',

    // @desc 确认按钮文字
    okText: '确定',

    // @desc 是否显示模态框
    show: false,

    // @desc 模态框标题
    title: '',

    // @desc 点击确认回调
    onOk: ()=> {
    },

    // @desc 点击取消回调
    onCancel: ()=> {
    },

    // @desc 自定义按钮
    renderOperateButton: ()=> {
    }
}