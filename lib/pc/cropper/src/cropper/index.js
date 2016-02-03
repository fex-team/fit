import React from 'react'
import ReactDOM from 'react-dom'
import Cropperjs from 'cropperjs'
import 'cropperjs/dist/cropper.css'

export default class Cropper extends React.Component {
    componentDidMount() {
        let options = {}

        Object.keys(this.props).map((propKey)=> {
            if (propKey !== 'src' && propKey !== 'alt' && propKey !== 'crossOrigin') {
                options[propKey] = this.props[propKey]
            }
        })

        this.img = ReactDOM.findDOMNode(this.refs.img)
        this.cropper = new Cropperjs(this.img, options)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.src !== this.props.src) {
            this.cropper.reset().clear().replace(nextProps.src)
        }
        if (nextProps.aspectRatio !== this.props.aspectRatio) {
            this.setAspectRatio(nextProps.aspectRatio)
        }
    }

    componentWillUnmount() {
        if (this.img) {
            this.cropper.destroy()
            delete this.img
            delete this.cropper
        }
    }

    crop() {
        return this.cropper.crop
    }

    move(offsetX, offsetY) {
        return this.cropper.move(offsetX, offsetY)
    }

    zoom(ratio) {
        return this.cropper.zoom(ratio)
    }

    rotate(degree) {
        return this.cropper.rotate(degree)
    }

    enable() {
        return this.cropper.enable()
    }

    disable() {
        return this.cropper.disable()
    }

    reset() {
        return this.cropper.reset()
    }

    clear() {
        return this.cropper.clear()
    }

    replace(url) {
        return this.cropper.replace(url)
    }

    getData(rounded) {
        return this.cropper.getData(rounded)
    }

    setData(data) {
        return this.cropper.setData(data)
    }

    getContainerData() {
        return this.cropper.getContainerData()
    }

    getImageData() {
        return this.cropper.getImageData()
    }

    getCanvasData() {
        return this.cropper.getCanvasData()
    }

    setCanvasData(data) {
        return this.cropper.setCanvasData(data)
    }

    getCropBoxData() {
        return this.cropper.getCropBoxData()
    }

    setCropBoxData(data) {
        return this.cropper.setCropBoxData(data)
    }

    getCroppedCanvas(options) {
        return this.cropper.getCroppedCanvas(options)
    }

    setAspectRatio(aspectRatio) {
        return this.cropper.setAspectRatio(aspectRatio)
    }

    setDragMode() {
        return this.cropper.setDragMode()
    }

    render() {
        return (
            <div {...this.props}
                src={null}
                crossOrigin={null}
                alt={null}>
                <img
                    crossOrigin={this.props.crossOrigin}
                    ref='img'
                    src={this.props.src}
                    alt={this.props.alt === undefined ? 'picture' : this.props.alt}
                    style={{opacity: 0}}/>
            </div>
        )
    }
}

Cropper.defaultProps = {
    // @desc 图片地址
    src: null,

    // @desc 显示方式
    // @enum 0:比较随意 1:整体要在裁剪框内 2:整体无法被裁剪框覆盖 3:整体都在背景框内
    viewMode: 3,

    // @desc 拖拽方式
    // @enum crop:创建一个裁剪框 move:直接移动canvas图片 none:无法移动
    dragMode: 'crop',

    // @desc 裁剪框长宽比, null 表示自由
    aspectRatio: null,

    // @desc 是否显示背景图
    background: true,

    // @desc 初始化是是否自动裁剪
    autoCrop: true,

    // @desc 初始化自动裁剪区域(x%的图片区域)
    autoCropArea: 0.8,

    // @desc 是否允许移动图片
    movable: true,

    // @desc 是否允许旋转图片
    rotatable: true,

    // @desc 是否允许改变图片大小
    scalable: true,

    // @desc 是否允许缩放图片
    zoomable: true,

    // @desc 是否允许触摸缩放图片
    zoomOnTouch: true,

    // @desc 是否允许鼠标滚轮缩放图片
    zoomOnWheel: true,

    // @desc 写吐血了,更多请参考 https://github.com/fengyuanchen/cropper
    more: undefined
}