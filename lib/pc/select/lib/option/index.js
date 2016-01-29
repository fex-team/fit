'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reg = function reg(input) {
    var flags = 'g';
    return new RegExp(input, flags);
};

var Option = function (_React$Component) {
    _inherits(Option, _React$Component);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Option).apply(this, arguments));
    }

    _createClass(Option, [{
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