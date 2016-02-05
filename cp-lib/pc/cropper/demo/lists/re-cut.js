import React from 'react'
import Cropper from 'fit-cropper'
import Image from '../image/baidu-logo.jpg'
import Button from 'fit-button'

export default class Demo extends React.Component {
    handleClick() {
        this.refs['cropper'].cut()
    }

    render() {
        return (
            <div>
                <Cropper ref="cropper"
                         src={Image}/>
                <Button onClick={this.handleClick.bind(this)}>裁剪</Button>
            </div>
        )
    }
}