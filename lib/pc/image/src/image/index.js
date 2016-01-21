import React from 'react'
import ReactDOM from 'react-dom'

import classnames from 'classnames'
import assign from 'object-assign'

export default class Image extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            imageLoaded: false,
            imageWidth: null,
            imageHeight: null
        }
    }

    onImageLoad (e) {
        let image = e.target

        this.setState({
            imageWidth: image.width,
            imageHeight: image.height
        })

    }

    render () {
        let classNames = ['image-wrapper']

        if (this.props.className) {
            classNames = classNames.concat(this.props.className.split(' '))
        }

        let wrapperWidth = this.props.width
        let wrapperHeight = this.props.height
        let wrapperStyle = {}

        if (this.state.imageWidth > this.state.imageHeight) {
            wrapperStyle = {
                backgroundImage: 'url(' + this.props.src + ')',
                backgroundSize: 'auto ' + wrapperHeight + 'px',
                backgroundPosition: '-' + ((this.state.imageWidth * wrapperWidth / this.state.imageHeight - wrapperWidth) / 2) + 'px 0px',
                backgroundRepeat: 'no-repeat',
                width: wrapperWidth,
                height: wrapperHeight
            }
        }
        else {
            wrapperStyle = {
                backgroundImage: 'url(' + this.props.src + ')',
                backgroundSize: wrapperWidth + 'px',
                backgroundPosition: '0px -' + ((this.state.imageHeight * wrapperWidth / this.state.imageWidth - wrapperWidth) / 2) + 'px',
                backgroundRepeat: 'no-repeat',
                width: wrapperWidth,
                height: wrapperHeight
            }
        }

        assign(wrapperStyle, this.props.style)

        return (
            <div className={classnames.apply(null, classNames)} style={wrapperStyle}>
                <img onLoad={this.onImageLoad.bind(this)} style={{display: 'none'}} src={this.props.src}/>
            </div>
        )
    }
}

Image.defaultProps = {
    // @desc 图片地址
    // @type string
    src: '',

    // @desc 宽度
    // @type number
    width: 200,

    // @desc 高度
    // @type number
    height: 200,

    // @desc class属性
    // @type string
    className: '',

    // @desc 样式属性
    // @type object
    style: {}
}