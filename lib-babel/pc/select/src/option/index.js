'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reg = function reg(input) {
    var flags = 'g';
    return new RegExp(input, flags);
};

var Option = (function (_React$Component) {
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
            var _props = this.props;
            var className = _props.className;
            var active = _props.active;
            var disabled = _props.disabled;
            var searchValue = _props.searchValue;
            var children = _props.children;

            var others = _objectWithoutProperties(_props, ['className', 'active', 'disabled', 'searchValue', 'children']);

            var classes = (0, _classnames2.default)(_defineProperty({
                '_namespace': true,
                'active-result': true,
                'group-option': true,
                'active': active,
                'disabled': disabled
            }, className, className));

            if (!_lodash2.default.isEmpty(searchValue)) {
                var regex = reg(searchValue);
                if (regex.test(children)) {
                    var matchedString = children.replace(regex, '<span class="active">' + searchValue + '</span>');
                    return _react2.default.createElement('li', _extends({ onClick: this.handleClick.bind(this)
                    }, others, {
                        className: classes,
                        dangerouslySetInnerHTML: { __html: matchedString } }));
                } else {
                    return null;
                }
            }

            return _react2.default.createElement(
                'li',
                _extends({}, others, { onClick: this.handleClick.bind(this),
                    className: classes }),
                this.props.children
            );
        }
    }]);

    return Option;
})(_react2.default.Component);

exports.default = Option;

Option.defaultProps = {
    // @desc 是否处于激活状态
    active: false,

    // @desc 当前查询的值
    searchValue: '',

    // @desc 是否禁用
    disabled: false
};