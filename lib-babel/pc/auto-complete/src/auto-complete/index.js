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

var _fitInput = require('fit-input');

var _fitInput2 = _interopRequireDefault(_fitInput);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var interval = null;

var reg = function reg(input) {
    var flags = 'g';
    return new RegExp(input, flags);
};

var AutoComplete = (function (_React$Component) {
    _inherits(AutoComplete, _React$Component);

    function AutoComplete(props) {
        _classCallCheck(this, AutoComplete);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AutoComplete).call(this, props));

        _this.state = {
            inputWidth: 0,
            showComplete: false,

            // 预设或者是后端返回的全部datas
            datas: [],

            // 去重后的datas
            filterDatas: [],

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

            if (this.props.url !== '') {
                clearInterval(interval);
                interval = setTimeout(function () {
                    _jquery2.default.ajax({
                        url: _this2.props.url,
                        method: _this2.props.method,
                        data: _this2.props.beforeSend(value)
                    }).done(function (res) {
                        var datas = _this2.props.complete(res);
                        _this2.setState({
                            datas: datas,
                            filterDatas: _this2.filterDatas(datas),
                            selectIndex: -1,
                            showComplete: true
                        });
                    });
                }, this.props.delay);
            } else {
                this.setState({
                    datas: this.props.datas,
                    filterDatas: this.filterDatas(this.props.datas),
                    selectIndex: -1,
                    showComplete: true
                });
            }
        }
    }, {
        key: 'filterDatas',
        value: function filterDatas(datas) {
            var _this3 = this;

            var newDatas = [];

            var count = 0;
            datas.map(function (item, index) {
                var regex = reg(_this3.searchValue);
                if (_this3.searchValue === '' || _this3.props.autoFilter && !regex.test(item[_this3.props.parse.text])) {
                    return;
                }

                count++;

                // 超过最大数量则取消显示
                if (count > _this3.props.maxNumber) {
                    return;
                }

                newDatas.push(item);
            });

            return newDatas;
        }
    }, {
        key: 'handleSelect',
        value: function handleSelect(text, value, index) {
            var _this4 = this;

            var close = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
            var realSelect = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];

            this.setState({
                value: text,
                selectIndex: index,
                showComplete: !close
            }, function () {
                if (realSelect) {
                    _this4.props.onSelect(value);
                }
            });
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            var _this5 = this;

            if (this.state.filterDatas.length === 0) return;

            switch (event.keyCode) {
                case 40:
                    // 上
                    var newUpIndex = this.state.selectIndex + 1;
                    if (newUpIndex > this.state.filterDatas.length - 1) {
                        newUpIndex = 0;
                    }
                    this.handleSelect(this.state.filterDatas[newUpIndex][this.props.parse.text], this.state.filterDatas[newUpIndex][this.props.parse.value], newUpIndex, false, false);
                    break;
                case 38:
                    // 下
                    var newDownIndex = this.state.selectIndex - 1;
                    if (newDownIndex < 0) {
                        newDownIndex = this.state.filterDatas.length - 1;
                    }
                    this.handleSelect(this.state.filterDatas[newDownIndex][this.props.parse.text], this.state.filterDatas[newDownIndex][this.props.parse.value], newDownIndex, false, false);
                    break;
                case 13:
                    // enter
                    // 如果所填没有在显示列表里,则无效
                    var hasFind = false;
                    this.state.filterDatas.map(function (item) {
                        if (item[_this5.props.parse.text] === _this5.state.value) {
                            hasFind = true;
                        }
                    });
                    if (!hasFind) return;

                    this.handleSelect(this.state.filterDatas[this.state.selectIndex][this.props.parse.text], this.state.filterDatas[this.state.selectIndex][this.props.parse.value], this.state.selectIndex, true, true);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var _props = this.props;
            var className = _props.className;
            var inputOpts = _props.inputOpts;
            var parse = _props.parse;
            var onSelect = _props.onSelect;

            var others = _objectWithoutProperties(_props, ['className', 'inputOpts', 'parse', 'onSelect']);

            var classes = (0, _classnames2.default)(_defineProperty({
                '_namespace': true
            }, className, className));

            // 是否为空
            var isEmpty = true;

            var Items = this.state.filterDatas.map(function (item, index) {
                var itemClass = (0, _classnames2.default)({
                    'item': true,
                    'active': index === _this6.state.selectIndex
                });

                var regex = reg(_this6.searchValue);
                var matchedString = item[parse.text].replace(regex, '<span class="highlight">' + _this6.searchValue + '</span>');

                isEmpty = false;

                return _react2.default.createElement('div', { onClick: _this6.handleSelect.bind(_this6, item[parse.text], item[parse.value], index, true, true),
                    key: index,
                    className: itemClass,
                    dangerouslySetInnerHTML: { __html: matchedString } });
            });

            var completeContainerStyle = {
                width: this.state.inputWidth,
                display: this.state.showComplete && !isEmpty ? 'block' : null
            };

            return _react2.default.createElement(
                'div',
                _extends({}, others, { className: classes }),
                _react2.default.createElement(_fitInput2.default, _extends({}, inputOpts, { onFocus: this.handleFocus.bind(this),
                    value: this.state.value,
                    onKeyDown: this.handleKeyDown.bind(this),
                    onChange: this.handleChange.bind(this),
                    autocomplete: false })),
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
})(_react2.default.Component);

exports.default = AutoComplete;

AutoComplete.defaultProps = {
    // @desc 本地数据,如果不设置url,则使用此数据模拟查询
    datas: [],

    // @desc 自动筛选,当设置datas时请设置为true,如果服务器返回的结果有杂质需要过滤,也可以设置此参数
    autoFilter: false,

    // @desc 最大显示数量
    maxNumber: 10,

    // @desc 输入框参数
    inputOpts: {},

    // @desc 请求类型
    method: 'get',

    // @desc 访问地址
    url: '',

    // @desc 选中时回调
    onSelect: function onSelect(value) {},

    // @desc 发送前执行函数
    beforeSend: function beforeSend(value) {
        return value;
    },

    // @desc 发送后执行函数
    complete: function complete(res) {
        return res;
    },

    // @desc 解析后端内容时,显示值(text)与实际值(value)的参数名
    parse: {
        text: 'text',
        value: 'value'
    },

    // @desc 发送延迟
    delay: 0
};