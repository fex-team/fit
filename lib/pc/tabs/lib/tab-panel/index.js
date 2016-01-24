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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabPanel = function (_React$Component) {
    (0, _inherits3.default)(TabPanel, _React$Component);

    function TabPanel(props) {
        (0, _classCallCheck3.default)(this, TabPanel);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TabPanel).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(TabPanel, [{
        key: 'render',
        value: function render() {
            if (!this.props.active) {
                return null;
            }

            return _react2.default.createElement(
                'div',
                null,
                this.props.children
            );
        }
    }]);
    return TabPanel;
}(_react2.default.Component);

exports.default = TabPanel;

TabPanel.defaultProps = {
    // @desc 对应Tabs的defaultActiveKey
    // @type string
    key: '',

    // @desc 标签名
    // @type string
    tab: '标签',

    // @desc 是否处于显示状态
    // @type bool
    active: false
};