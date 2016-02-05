'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _cropperjs = require('cropperjs');

var _cropperjs2 = _interopRequireDefault(_cropperjs);

require('cropperjs/dist/cropper.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cropper = function (_React$Component) {
    _inherits(Cropper, _React$Component);

    function Cropper() {
        _classCallCheck(this, Cropper);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Cropper).apply(this, arguments));
    }

    _createClass(Cropper, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var options = {};

            Object.keys(this.props).map(function (propKey) {
                if (propKey !== 'src' && propKey !== 'alt' && propKey !== 'crossOrigin') {
                    options[propKey] = _this2.props[propKey];
                }
            });

            this.img = _reactDom2.default.findDOMNode(this.refs.img);
            this.cropper = new _cropperjs2.default(this.img, options);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.src !== this.props.src) {
                this.cropper.reset().clear().replace(nextProps.src);
            }
            if (nextProps.aspectRatio !== this.props.aspectRatio) {
                this.setAspectRatio(nextProps.aspectRatio);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.img) {
                this.cropper.destroy();
                delete this.img;
                delete this.cropper;
            }
        }
    }, {
        key: 'crop',
        value: function crop() {
            return this.cropper.crop;
        }
    }, {
        key: 'move',
        value: function move(offsetX, offsetY) {
            return this.cropper.move(offsetX, offsetY);
        }
    }, {
        key: 'zoom',
        value: function zoom(ratio) {
            return this.cropper.zoom(ratio);
        }
    }, {
        key: 'rotate',
        value: function rotate(degree) {
            return this.cropper.rotate(degree);
        }
    }, {
        key: 'enable',
        value: function enable() {
            return this.cropper.enable();
        }
    }, {
        key: 'disable',
        value: function disable() {
            return this.cropper.disable();
        }
    }, {
        key: 'reset',
        value: function reset() {
            return this.cropper.reset();
        }
    }, {
        key: 'clear',
        value: function clear() {
            return this.cropper.clear();
        }
    }, {
        key: 'replace',
        value: function replace(url) {
            return this.cropper.replace(url);
        }
    }, {
        key: 'getData',
        value: function getData(rounded) {
            return this.cropper.getData(rounded);
        }
    }, {
        key: 'setData',
        value: function setData(data) {
            return this.cropper.setData(data);
        }
    }, {
        key: 'getContainerData',
        value: function getContainerData() {
            return this.cropper.getContainerData();
        }
    }, {
        key: 'getImageData',
        value: function getImageData() {
            return this.cropper.getImageData();
        }
    }, {
        key: 'getCanvasData',
        value: function getCanvasData() {
            return this.cropper.getCanvasData();
        }
    }, {
        key: 'setCanvasData',
        value: function setCanvasData(data) {
            return this.cropper.setCanvasData(data);
        }
    }, {
        key: 'getCropBoxData',
        value: function getCropBoxData() {
            return this.cropper.getCropBoxData();
        }
    }, {
        key: 'setCropBoxData',
        value: function setCropBoxData(data) {
            return this.cropper.setCropBoxData(data);
        }
    }, {
        key: 'getCroppedCanvas',
        value: function getCroppedCanvas(options) {
            return this.cropper.getCroppedCanvas(options);
        }
    }, {
        key: 'setAspectRatio',
        value: function setAspectRatio(aspectRatio) {
            return this.cropper.setAspectRatio(aspectRatio);
        }
    }, {
        key: 'setDragMode',
        value: function setDragMode() {
            return this.cropper.setDragMode();
        }

        // 多次裁剪

    }, {
        key: 'cut',
        value: function cut() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                _extends({}, this.props, {
                    src: null,
                    crossOrigin: null,
                    alt: null }),
                _react2.default.createElement('img', {
                    crossOrigin: this.props.crossOrigin,
                    ref: 'img',
                    src: this.props.src,
                    alt: this.props.alt === undefined ? 'picture' : this.props.alt,
                    style: { opacity: 0 } })
            );
        }
    }]);

    return Cropper;
}(_react2.default.Component);

exports.default = Cropper;

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
};