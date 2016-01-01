import React from 'react'
import Button from 'fit-button'
import Modal from 'fit-modal'

export default class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    handleShowModal() {
        this.setState({
            show: true
        })
    }

    handleOk() {
        this.setState({
            show: false
        })
    }

    handleCancel() {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleShowModal.bind(this)}>点我弹出模态框</Button>
                <Modal show={this.state.show}
                       onOk={this.handleOk.bind(this)}
                       onCancel={this.handleCancel.bind(this)}>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                </Modal>
            </div>
        )
    }
}