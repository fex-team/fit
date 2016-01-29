'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _fitInput = require('fit-input');

var _fitInput2 = _interopRequireDefault(_fitInput);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var interval = null;

var reg = function reg(input) {
    var flags = 'g';
    return new RegExp(input, flags);
};

var AutoComplete = function (_React$Component) {
    _inherits(AutoComplete, _React$Component);

    function AutoComplete(props) {
        _classCallCheck(this, AutoComplete);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AutoComplete).call(this, props));

        _this.state = {
            inputWidth: 0,
            showComplete: false,
            datas: [],
            value: '',

            // 当前选中第几个
            selectIndex: -1
        };

        // 点击document
        _this.handleDocumentClick = function (event) {
            if (!_this._isMounted) return;
            if (!_jquery2.default.contains(_this.dom, event.target)) {
                _this.setState({
                    showComplete: false
                });
            }
        };
        return _this;
    }

    _createClass(AutoComplete, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._isMounted = true;
            this.dom = ReactDOM.findDOMNode(this);
            (0, _jquery2.default)(document).on('click', this.handleDocumentClick);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._isMounted = false;
            (0, _jquery2.default)(document).off('click', this.handleDocumentClick);
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus() {
            this.setState({
                inputWidth: (0, _jquery2.default)(this.dom).find('#j-input').outerWidth(),
                showComplete: true
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(value) {
            var _this2 = this;

            this.setState({
                value: value
            });
            this.searchValue = value;

            clearInterval(interval);
            interval = setTimeout(function () {
                _jquery2.default.ajax({
                    url: _this2.props.url,
                    method: _this2.props.method,
                    data: _this2.props.beforeSend(value)
                }).done(function (res) {
                    _this2.setState({
                        datas: _this2.props.complete(res),
                        selectIndex: -1
                    });
                });
            }, this.props.delay);
        }
    }, {
        key: 'handleSelect',
        value: function handleSelect(value, index) {
            var _this3 = this;

            var close = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

            this.setState({
                value: value,
                selectIndex: index,
                showComplete: !close
            }, function () {
                _this3.props.onSelect(value);
            });
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            if (this.state.datas.length === 0) return;

            switch (event.keyCode) {
                case 40:
                    var newUpIndex = this.state.selectIndex + 1;
                    if (newUpIndex > this.state.datas.length - 1) {
                        newUpIndex = 0;
                    }
                    this.handleSelect(this.state.datas[newUpIndex], newUpIndex, false);
                    // 上
                    break;
                case 38:
                    var newDownIndex = this.state.selectIndex - 1;
                    if (newDownIndex < 0) {
                        newDownIndex = this.state.datas.length - 1;
                    }
                    this.handleSelect(this.state.datas[newDownIndex], newDownIndex, false);
                    // 下
                    break;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var completeContainerStyle = {
                width: this.state.inputWidth,
                display: this.state.showComplete ? 'block' : null
            };

            var Items = this.state.datas.map(function (item, index) {
                var itemClass = (0, _classnames2.default)({
                    'item': true,
                    'active': index === _this4.state.selectIndex
                });

                var regex = reg(_this4.searchValue);
                var matchedString = item.replace(regex, '<span class="highlight">' + _this4.searchValue + '</span>');

                return _react2.default.createElement('div', { onClick: _this4.handleSelect.bind(_this4, item, index),
                    key: index,
                    className: itemClass,
                    dangerouslySetInnerHTML: { __html: matchedString } });
            });

            return _react2.default.createElement(
                'div',
                { className: 'lib-pc-auto-complete-lib-auto-complete' },
                _react2.default.createElement(_fitInput2.default, _extends({ onFocus: this.handleFocus.bind(this),
                    value: this.state.value,
                    onKeyDown: this.handleKeyDown.bind(this),
                    onChange: this.handleChange.bind(this)
                }, this.props.inputOpts)),
                _react2.default.createElement(
                    'div',
                    { className: 'complete-container',
                        style: completeContainerStyle },
                    Items
                )
            );
        }
    }]);

    return AutoComplete;
}(_react2.default.Component);

exports.default = AutoComplete;

AutoComplete.defaultProps = {
    // 输入框参数
    inputOpts: {},

    // 请求类型
    method: 'get',

    // 访问地址
    url: '',

    // 选中时回调
    onSelect: function onSelect(value) {},

    // 发送前
    beforeSend: function beforeSend(value) {
        return value;
    },

    // 发送后
    complete: function complete(res) {
        return res;
    },

    // 发送延迟
    delay: 0
};