'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

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

var Image = function (_React$Component) {
    (0, _inherits3.default)(Image, _React$Component);

    function Image(props) {
        (0, _classCallCheck3.default)(this, Image);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Image).call(this, props));

        _this.state = {
            imageLoaded: false,
            imageWidth: null,
            imageHeight: null
        };
        return _this;
    }

    (0, _createClass3.default)(Image, [{
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

            (0, _extends3.default)(wrapperStyle, this.props.style);

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
};