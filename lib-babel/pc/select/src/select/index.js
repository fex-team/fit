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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('./index.scss');

require('./chosen.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = (function (_React$Component) {
    _inherits(Select, _React$Component);

    function Select(props) {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, props));

        _this.state = {
            open: false,
            value: _this.props.value || _this.props.defaultValue,
            searchValue: ''
        };

        // 点击document
        _this.handleDocumentClick = function (event) {
            if (!_this._isMounted) return;
            if (!_jquery2.default.contains(_this.dom, event.target)) {
                _this.setState({
                    open: false
                });
            }
        };
        return _this;
    }

    _createClass(Select, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._isMounted = true;
            this.dom = _reactDom2.default.findDOMNode(this);
            (0, _jquery2.default)(document).on('click', this.handleDocumentClick);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._isMounted = false;
            (0, _jquery2.default)(document).off('click', this.handleDocumentClick);
        }

        // 选择框点击

    }, {
        key: 'handleSelectClick',
        value: function handleSelectClick() {
            var _this2 = this;

            this.setState({
                open: !this.state.open
            }, function () {
                if (_this2.state.open) {
                    (0, _jquery2.default)(_this2.dom).find('#j-search').focus();
                }
            });
        }

        // 选择栏目点击

    }, {
        key: 'handleClick',
        value: function handleClick(value) {
            var _this3 = this;

            this.setState({
                open: false,
                value: value
            }, function () {
                _this3.props.onChange(value);
            });
        }

        // 搜索框改变

    }, {
        key: 'handleSearchChange',
        value: function handleSearchChange(event) {
            this.setState({
                searchValue: event.target.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props = this.props;
            var className = _props.className;
            var width = _props.width;
            var search = _props.search;
            var placeholder = _props.placeholder;
            var children = _props.children;
            var simple = _props.simple;
            var label = _props.label;
            var labelWidth = _props.labelWidth;
            var addonLeft = _props.addonLeft;
            var addonRight = _props.addonRight;

            var others = _objectWithoutProperties(_props, ['className', 'width', 'search', 'placeholder', 'children', 'simple', 'label', 'labelWidth', 'addonLeft', 'addonRight']);

            var classes = (0, _classnames2.default)(_defineProperty({
                '_namespace': true
            }, className, className));

            var chosenDropStyle = {
                display: this.state.open ? null : 'none',
                left: 0,
                width: width
            };

            var chosenSingleClass = (0, _classnames2.default)({
                'chosen-single': true,
                'active': this.state.open
            });

            // 搜索框
            var Search = null;
            if (search === true) {
                Search = _react2.default.createElement(
                    'div',
                    { className: 'chosen-search' },
                    _react2.default.createElement('input', { id: 'j-search',
                        className: 'form-control search-input',
                        type: 'text',
                        value: this.state.searchValue,
                        autoComplete: 'off',
                        placeholder: placeholder,
                        onChange: this.handleSearchChange.bind(this) })
                );
            }

            // 循环子元素,同时获取value,同时判断search
            var valueLabel = "";
            var Children = _react2.default.Children.map(children, function (item, index) {
                var active = false;
                if (item.props.value === _this4.state.value) {
                    valueLabel = item.props.children;
                    active = true;
                }

                if (_lodash2.default.isArray(item.props.children)) {
                    item.props.children.map(function (childItem) {
                        if (childItem.props.value === _this4.state.value) {
                            valueLabel = childItem.props.children;
                            active = true;
                        }
                    });
                }

                return _react2.default.cloneElement(item, {
                    onClick: _this4.handleClick.bind(_this4),
                    key: index,
                    active: active,
                    activeValue: _this4.state.value,
                    searchValue: _this4.state.searchValue
                });
            });

            var chosenContainerClass = (0, _classnames2.default)({
                'chosen-container': true,
                'chosen-container-single': true,
                'simple': simple
            });

            others.style = others.style || {};
            others.style.width = others.style.width || width;

            var SelectContent = _react2.default.createElement(
                'div',
                _extends({}, others, { className: classes }),
                _react2.default.createElement(
                    'div',
                    { className: chosenContainerClass,
                        style: { width: simple ? null : width } },
                    _react2.default.createElement(
                        'a',
                        { className: chosenSingleClass,
                            tabIndex: '-1',
                            onClick: this.handleSelectClick.bind(this) },
                        _react2.default.createElement(
                            'span',
                            null,
                            valueLabel
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement('b', null)
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'j-chosen',
                            className: 'chosen-drop',
                            style: chosenDropStyle },
                        Search ? Search : null,
                        _react2.default.createElement(
                            'ul',
                            { className: 'chosen-results' },
                            Children
                        )
                    )
                )
            );

            if (!_lodash2.default.isEmpty(label)) {
                return _react2.default.createElement(
                    'div',
                    { className: 'form-container' },
                    _react2.default.createElement(
                        'label',
                        { style: { width: labelWidth || null, marginRight: 10 } },
                        label
                    ),
                    SelectContent
                );
            }

            if (!_lodash2.default.isEmpty(addonLeft) || !_lodash2.default.isEmpty(addonRight)) {
                return _react2.default.createElement(
                    'form',
                    { className: 'form-inline' },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'div',
                            { className: 'input-group' },
                            _lodash2.default.isEmpty(addonLeft) ? null : _react2.default.createElement(
                                'div',
                                { className: 'input-group-addon' },
                                addonLeft
                            ),
                            SelectContent,
                            _lodash2.default.isEmpty(addonRight) ? null : _react2.default.createElement(
                                'div',
                                { className: 'input-group-addon' },
                                addonRight
                            )
                        )
                    )
                );
            }

            return SelectContent;
        }
    }]);

    return Select;
})(_react2.default.Component);

exports.default = Select;

Select.defaultProps = {
    // @desc 宽度
    width: 200,

    // @desc 选择后的回调
    onChange: function onChange(value) {},

    // @desc 是否可筛选
    search: false,

    // @desc 极简模式,适合在文本中做选择框
    simple: false,

    // @desc 值
    value: null,

    // @desc 初始值
    defaultValue: null
};