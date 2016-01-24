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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reg = function reg(input) {
    var flags = 'g';
    return new RegExp(input, flags);
};

var Option = function (_React$Component) {
    (0, _inherits3.default)(Option, _React$Component);

    function Option() {
        (0, _classCallCheck3.default)(this, Option);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Option).apply(this, arguments));
    }

    (0, _createClass3.default)(Option, [{
        key: 'handleClick',
        value: function handleClick() {
            if (this.props.disabled) return;
            this.props.onClick(this.props.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var classname = (0, _classnames2.default)({
                'lib-pc-select-lib-option': true,
                'active-result': true,
                'group-option': true,
                'active': this.props.active,
                'disabled': this.props.disabled
            });

            if (!_lodash2.default.isEmpty(this.props.searchValue)) {
                var regex = reg(this.props.searchValue);
                if (regex.test(this.props.children)) {
                    var matchedString = this.props.children.replace(regex, '<span class="active">' + this.props.searchValue + '</span>');
                    return _react2.default.createElement('li', { onClick: this.handleClick.bind(this),
                        className: classname,
                        dangerouslySetInnerHTML: { __html: matchedString } });
                } else {
                    return null;
                }
            }

            return _react2.default.createElement(
                'li',
                { onClick: this.handleClick.bind(this),
                    className: classname },
                this.props.children
            );
        }
    }]);
    return Option;
}(_react2.default.Component);

exports.default = Option;

Option.defaultProps = {
    active: false,
    searchValue: '',
    disabled: false
};