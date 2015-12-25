import React from 'react'
import Button from 'fit-button'
import Modal from 'fit-modal'
import Input from 'fit-input'
import { Select, Option } from 'fit-select'
import './index.scss'

export default class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            fields: this.props.fields
        }
    }

    handleShowModal() {
        this.setState({
            show: true
        })
    }

    handleOk() {
        let params = {}

        this.state.fields.map((item)=> {
            if (item.inputValue) {
                params[item.key] = item.inputValue
            }
        })

        this.props.onAdd(params, (info)=> {
            if (info.ok) {
                this.setState({
                    show: false
                })
            } else {
                // 新增失败
                console.log(info.message)
            }
        })
    }

    // 修改选项
    handleChange(index, value) {
        let newFields = this.state.fields
        newFields[index].inputValue = value
        this.setState({
            fields: newFields
        })
    }

    handleCancel() {
        this.setState({
            show: false
        })
    }

    render() {
        let Form = null

        if (typeof this.props.opts.render !== 'function') {
            Form = this.state.fields.map((item, index)=> {
                if (!item.add)return null
                return (
                    <Input label={item.value} onChange={this.handleChange.bind(this,index)} value={item.inputValue}
                           key={index} labelWidth={60}
                           style={{marginTop:10}}/>
                )
            })
        } else {
            Form = this.props.opts.render()
        }

        return (
            <div className="_namespace">
                <Button onClick={this.handleShowModal.bind(this)} style={{marginLeft:10}} size="xs"
                        addonLeft="plus">新增</Button>
                <Modal title="新增" show={this.state.show} onOk={this.handleOk.bind(this)}
                       onCancel={this.handleCancel.bind(this)}>
                    {Form}
                </Modal>
            </div>
        )
    }
}

Add.defaultProps = {
    opts: {},
    fields: [],
    onAdd: ()=> {
    }
}