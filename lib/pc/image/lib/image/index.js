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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_React$Component) {
    _inherits(Image, _React$Component);

    function Image(props) {
        _classCallCheck(this, Image);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Image).call(this, props));

        _this.state = {
            imageLoaded: false,
            imageWidth: null,
            imageHeight: null
        };
        return _this;
    }

    _createClass(Image, [{
        key: 'onImageLoad',
        value: function onImageLoad(e) {
            var image = e.target;

            this.setState({
                imageWidth: image.width,
                imageHeight: image.height
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var classNames = ['image-wrapper'];

            if (this.props.className) {
                classNames = classNames.concat(this.props.className.split(' '));
            }

            var wrapperWidth = this.props.width;
            var wrapperHeight = this.props.height;
            var wrapperStyle = {};

            if (this.state.imageWidth > this.state.imageHeight) {
                wrapperStyle = {
                    backgroundImage: 'url(' + this.props.src + ')',
                    backgroundSize: 'auto ' + wrapperHeight + 'px',
                    backgroundPosition: '-' + (this.state.imageWidth * wrapperWidth / this.state.imageHeight - wrapperWidth) / 2 + 'px 0px',
                    backgroundRepeat: 'no-repeat',
                    width: wrapperWidth,
                    height: wrapperHeight
                };
            } else {
                wrapperStyle = {
                    backgroundImage: 'url(' + this.props.src + ')',
                    backgroundSize: wrapperWidth + 'px',
                    backgroundPosition: '0px -' + (this.state.imageHeight * wrapperWidth / this.state.imageWidth - wrapperWidth) / 2 + 'px',
                    backgroundRepeat: 'no-repeat',
                    width: wrapperWidth,
                    height: wrapperHeight
                };
            }

            _extends(wrapperStyle, this.props.style);

            return _react2.default.createElement(
                'div',
                { className: _classnames2.default.apply(null, classNames), style: wrapperStyle },
                _react2.default.createElement('img', { onLoad: this.onImageLoad.bind(this), style: { display: 'none' }, src: this.props.src })
            );
        }
    }]);

    return Image;
}(_react2.default.Component);

exports.default = Image;

Image.defaultProps = {
    // @desc 图片地址
    src: '',

    // @desc 宽度
    width: 200,

    // @desc 高度
    height: 200,

    // @desc class属性
    className: '',

    // @desc 样式属性
    style: {}
};