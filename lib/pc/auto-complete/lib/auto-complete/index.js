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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _fitInput = require('fit-input');

var _fitInput2 = _interopRequireDefault(_fitInput);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var interval = null;

var reg = function reg(input) {
    var flags = 'g';
    return new RegExp(input, flags);
};

var AutoComplete = function (_React$Component) {
    (0, _inherits3.default)(AutoComplete, _React$Component);

    function AutoComplete(props) {
        (0, _classCallCheck3.default)(this, AutoComplete);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AutoComplete).call(this, props));

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

    (0, _createClass3.default)(AutoComplete, [{
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
                _react2.default.createElement(_fitInput2.default, (0, _extends3.default)({ onFocus: this.handleFocus.bind(this),
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