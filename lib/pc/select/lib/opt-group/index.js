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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptGroup = function (_React$Component) {
    (0, _inherits3.default)(OptGroup, _React$Component);

    function OptGroup() {
        (0, _classCallCheck3.default)(this, OptGroup);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(OptGroup).apply(this, arguments));
    }

    (0, _createClass3.default)(OptGroup, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            // 循环子元素
            var Children = _react2.default.Children.map(this.props.children, function (item, index) {
                var active = false;
                if (item.props.value === _this2.props.activeValue) {
                    active = true;
                }

                return _react2.default.cloneElement(item, (0, _extends3.default)({}, item.props, {
                    onClick: _this2.props.onClick,
                    key: index,
                    active: active,
                    searchValue: _this2.props.searchValue
                }));
            });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'li',
                    { className: 'group-result' },
                    this.props.label
                ),
                Children
            );
        }
    }]);
    return OptGroup;
}(_react2.default.Component);

exports.default = OptGroup;

OptGroup.defaultProps = {
    style: {},
    searchValue: ''
};