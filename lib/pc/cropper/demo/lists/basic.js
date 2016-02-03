import React from 'react'
import Cropper from 'fit-cropper'
import Image from '../image/baidu-logo.jpg'

export default class Demo extends React.Component {
    render() {
        return (
            <Cropper src={Image}/>
        )
    }
}