'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('./index.css');

require('./chosen.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

            var chosenDropStyle = {
                display: this.state.open ? null : 'none',
                left: 0,
                width: this.props.width
            };

            var chosenSingleClass = (0, _classnames2.default)({
                'chosen-single': true,
                'active': this.state.open
            });

            // 搜索框
            var Search = null;
            if (this.props.search === true) {
                Search = _react2.default.createElement(
                    'div',
                    { className: 'chosen-search' },
                    _react2.default.createElement('input', { id: 'j-search',
                        className: 'form-control search-input',
                        type: 'text',
                        value: this.state.searchValue,
                        autoComplete: 'off',
                        placeholder: this.props.placeholder,
                        onChange: this.handleSearchChange.bind(this) })
                );
            }

            // 循环子元素,同时获取value,同时判断search
            var valueLabel = "";
            var Children = _react2.default.Children.map(this.props.children, function (item, index) {
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
                'simple': this.props.simple
            });

            var SelectContent = _react2.default.createElement(
                'div',
                { className: 'lib-pc-select-lib-select',
                    style: { width: this.props.width } },
                _react2.default.createElement(
                    'div',
                    { className: chosenContainerClass,
                        style: { width: this.props.simple ? null : this.props.width } },
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

            if (!_lodash2.default.isEmpty(this.props.label)) {
                return _react2.default.createElement(
                    'div',
                    { style: this.props.style,
                        className: 'form-container' },
                    _react2.default.createElement(
                        'label',
                        { style: { width: this.props.labelWidth || null },
                            className: 'form-control-label' },
                        this.props.label
                    ),
                    SelectContent
                );
            }

            if (!_lodash2.default.isEmpty(this.props.addonLeft) || !_lodash2.default.isEmpty(this.props.addonRight)) {
                return _react2.default.createElement(
                    'form',
                    { style: this.props.style,
                        className: 'form-inline' },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'div',
                            { className: 'input-group' },
                            _lodash2.default.isEmpty(this.props.addonLeft) ? null : _react2.default.createElement(
                                'div',
                                { className: 'input-group-addon' },
                                this.props.addonLeft
                            ),
                            SelectContent,
                            _lodash2.default.isEmpty(this.props.addonRight) ? null : _react2.default.createElement(
                                'div',
                                { className: 'input-group-addon' },
                                this.props.addonRight
                            )
                        )
                    )
                );
            }

            return _react2.default.cloneElement(SelectContent, {
                style: this.props.style
            });
        }
    }]);

    return Select;
})(_react2.default.Component);

exports.default = Select;

Select.defaultProps = {
    width: 200,
    style: {},
    onChange: function onChange(value) {},
    search: false,
    simple: false,
    value: null,
    defaultValue: null
};