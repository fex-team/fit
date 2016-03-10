'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactTextareaAutosize = require('react-textarea-autosize');

var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _effect = require('./effect');

var _effect2 = _interopRequireDefault(_effect);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('font-awesome/css/font-awesome.css');

require('./index.scss');

var _table = require('./toolbar/table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 设置渲染模式
_marked2.default.setOptions({
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: false,
    silent: false,
    langPrefix: 'prettyprint',
    smartypants: false,
    headerPrefix: '',
    xhtml: false
});

var Editor = (function (_React$Component) {
    _inherits(Editor, _React$Component);

    function Editor(props) {
        _classCallCheck(this, Editor);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Editor).call(this, props));

        _this.state = {
            value: ''
        };
        return _this;
    }

    _createClass(Editor, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.dom = _reactDom2.default.findDOMNode(this);
            var textareaArray = this.dom.getElementsByClassName('textarea');
            if (textareaArray.length > 0) {
                this.textarea = textareaArray[0];
            }
        }
    }, {
        key: 'handleTextareaChange',
        value: function handleTextareaChange(event) {
            this.setState({
                value: event.target.value
            });
        }
    }, {
        key: 'handleToolbarClick',
        value: function handleToolbarClick(type) {
            (0, _effect2.default)(type, this.textarea, this.forceUpdate.bind(this));
        }

        // 因为jquery操作了dom,所以强制刷新

    }, {
        key: 'forceUpdate',
        value: function forceUpdate() {
            this.setState({
                value: this.textarea.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var autoHeight = _props.autoHeight;
            var height = _props.height;

            var others = _objectWithoutProperties(_props, ['className', 'autoHeight', 'height']);

            var classes = (0, _classnames2.default)(_defineProperty({
                '_namespace': true
            }, className, className));

            var previewStyle = {
                height: !autoHeight ? height : null,
                overflowY: !autoHeight ? 'auto' : null
            };

            return _react2.default.createElement(
                'div',
                _extends({}, others, { className: classes }),
                _react2.default.createElement(
                    'div',
                    { className: 'tool-bar' },
                    _react2.default.createElement(
                        'div',
                        { className: 'i effect fa fa-header j-ul-list',
                            onClick: this.handleToolbarClick.bind(this, 'header') },
                        _react2.default.createElement(
                            'ul',
                            { className: 'f-bln' },
                            _react2.default.createElement(
                                'li',
                                { className: 'effect',
                                    onClick: this.handleToolbarClick.bind(this, 'h1') },
                                'h1'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'effect',
                                    onClick: this.handleToolbarClick.bind(this, 'h2') },
                                'h2'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'effect',
                                    onClick: this.handleToolbarClick.bind(this, 'h3') },
                                'h3'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'effect',
                                    onClick: this.handleToolbarClick.bind(this, 'h4') },
                                'h4'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'effect',
                                    onClick: this.handleToolbarClick.bind(this, 'h5') },
                                'h5'
                            ),
                            _react2.default.createElement(
                                'li',
                                { className: 'effect',
                                    onClick: this.handleToolbarClick.bind(this, 'h6') },
                                'h6'
                            )
                        )
                    ),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-bold',
                        onClick: this.handleToolbarClick.bind(this, 'bold') }),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-italic',
                        onClick: this.handleToolbarClick.bind(this, 'italic') }),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-link',
                        onClick: this.handleToolbarClick.bind(this, 'link') }),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-quote-left',
                        onClick: this.handleToolbarClick.bind(this, 'quote-left') }),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-code',
                        onClick: this.handleToolbarClick.bind(this, 'code') }),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-tag',
                        onClick: this.handleToolbarClick.bind(this, 'tag') }),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-list-ol',
                        onClick: this.handleToolbarClick.bind(this, 'list-ol') }),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-list-ul',
                        onClick: this.handleToolbarClick.bind(this, 'list-ul') }),
                    _react2.default.createElement('div', { className: 'i f-hvc effect fa fa-minus',
                        onClick: this.handleToolbarClick.bind(this, 'minus') })
                ),
                _react2.default.createElement(
                    'div',
                    { style: previewStyle,
                        className: 'textarea-preview-container' },
                    _react2.default.createElement(_reactTextareaAutosize2.default, { onChange: this.handleTextareaChange.bind(this),
                        className: 'textarea' }),
                    _react2.default.createElement('div', { className: 'preview',
                        dangerouslySetInnerHTML: { __html: (0, _marked2.default)(this.state.value) } })
                )
            );
        }
    }]);

    return Editor;
})(_react2.default.Component);

exports.default = Editor;

Editor.defaultProps = {
    // @desc 上传图片地址
    uploadUrl: '',

    // @desc 上传参数
    uploadParams: {},

    // @desc 是否自动拓展高度
    autoHeight: false,

    // @desc 高度,只有设置了 autoHeight 才有效
    height: 200
};

//<div className="i f-hvc effect fa fa-image dz-clickable"
//     onClick={this.handleToolbarClick.bind(this,'image')}></div>
//<div className="i f-hvc effect fa fa-table j-table">
//    <ToolbarTable/>
//</div>
//<div className="i f-hvc effect fa fa-save"
//onClick={this.handleToolbarClick.bind(this,'save')}></div>
//<div className="i f-hvc effect fa fa-paste"
//onClick={this.handleToolbarClick.bind(this,'paste')}></div>