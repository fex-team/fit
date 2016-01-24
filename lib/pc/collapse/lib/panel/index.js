'use strict';

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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CollPanel = function (_React$Component) {
    (0, _inherits3.default)(CollPanel, _React$Component);

    function CollPanel(props) {
        (0, _classCallCheck3.default)(this, CollPanel);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CollPanel).call(this, props));

        _this.state = {
            contentHeight: 0,
            finish: true
        };

        _this.toggleTimeout = null;
        return _this;
    }

    (0, _createClass3.default)(CollPanel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.$dom = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this));
            this.setState({
                contentHeight: this.$dom.find('#content').outerHeight()
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            this.setState({
                contentHeight: this.$dom.find('#content').outerHeight()
            });
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            var _this2 = this;

            this.setState({
                finish: false
            }, function () {
                _this2.props.onChange(_this2.props._key);
            });

            if (this.toggleTimeout) {
                clearTimeout(this.toggleTimeout);
            }

            this.toggleTimeout = setTimeout(function () {
                _this2.setState({
                    finish: true
                });
            }, 300);
        }
    }, {
        key: 'render',
        value: function render() {
            var panelCollapseClass = (0, _classnames2.default)({
                'panel-collapse': true,
                'collapse': true,
                'in': true,
                'show': this.props.active
            });

            var rightChevronClass = (0, _classnames2.default)({
                'fa': true,
                'fa-chevron-right': true,
                'rotate-pre': true,
                'rotate': this.props.active
            });

            // 设置height属性
            var height = null;
            height = this.props.active ? this.state.contentHeight : null;
            if (this.state.finish) {
                if (this.props.active) {
                    height = 'auto';
                } else {
                    height = 0;
                }
            }
            var contentContainerStyle = {
                height: height
            };

            this.height = height;

            return _react2.default.createElement(
                'div',
                { className: 'lib-pc-collapse-lib-panel panel panel-default' },
                _react2.default.createElement(
                    'div',
                    { className: 'panel-heading',
                        onClick: this.handleClick.bind(this) },
                    _react2.default.createElement('i', { className: rightChevronClass,
                        style: { marginRight: 5 } }),
                    this.props.header
                ),
                _react2.default.createElement(
                    'div',
                    { className: panelCollapseClass,
                        style: contentContainerStyle },
                    _react2.default.createElement(
                        'div',
                        { style: this.props.style,
                            id: 'content' },
                        this.props.children
                    )
                )
            );
        }
    }]);
    return CollPanel;
}(_react2.default.Component);

exports.default = CollPanel;

CollPanel.defaultProps = {
    active: false,
    key: null
};