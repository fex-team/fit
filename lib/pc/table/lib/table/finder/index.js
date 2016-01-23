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

var _fitInput = require('fit-input');

var _fitInput2 = _interopRequireDefault(_fitInput);

var _fitButton = require('fit-button');

var _fitButton2 = _interopRequireDefault(_fitButton);

var _fitSelect = require('fit-select');

var _fitDatepicker = require('fit-datepicker');

var _fitTimepicker = require('fit-timepicker');

var _fitTimepicker2 = _interopRequireDefault(_fitTimepicker);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Finder = function (_React$Component) {
    (0, _inherits3.default)(Finder, _React$Component);

    function Finder(props) {
        (0, _classCallCheck3.default)(this, Finder);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Finder).call(this, props));

        var finder = _this.props.finder;

        // 设置defaultValue
        finder.map(function (item) {
            item.value = item.value || item.defaultValue || '';
            if (item.type === 'enum') {
                item.enum.map(function (elItem) {
                    elItem.value = elItem.value || elItem.defaultValue || '';
                });
            }
        });

        _this.state = {
            opts: finder,
            loading: false
        };

        _this.getChilds = function (lists, notEnum, parentIndex) {
            return lists.map(function (item, index) {
                var itemStyle = {
                    marginLeft: index === 0 ? null : 10,
                    width: item.width || null,
                    display: 'flex'
                };

                switch (item.type) {
                    case 'text':
                        return _react2.default.createElement(_fitInput2.default, (0, _extends3.default)({ key: 'item' + index,
                            style: itemStyle
                        }, item.props, {
                            label: notEnum ? null : item.label,
                            value: item.value,
                            onChange: _this.handleChange.bind(_this, index, parentIndex) }));
                    case 'select':
                        var Options = item.select.map(function (elItem, elIndex) {
                            return _react2.default.createElement(
                                _fitSelect.Option,
                                (0, _extends3.default)({ key: elIndex
                                }, item.props, {
                                    value: elItem.key }),
                                elItem.value
                            );
                        });
                        return _react2.default.createElement(
                            _fitSelect.Select,
                            (0, _extends3.default)({ width: '100%',
                                style: itemStyle,
                                key: 'item' + index
                            }, item.props, {
                                label: notEnum ? null : item.label,
                                value: item.value || item.defaultValue || item.select[0].key,
                                onChange: _this.handleChange.bind(_this, index, parentIndex) }),
                            Options
                        );
                    case 'time':
                        return _react2.default.createElement(_fitTimepicker2.default, (0, _extends3.default)({ key: 'item' + index,
                            style: itemStyle,
                            input: { label: notEnum ? null : item.label },
                            defaultValue: item.value
                        }, item.props, {
                            onChange: _this.handleChangeDate.bind(_this, index, parentIndex, item.format) }));
                    case 'date':
                        return _react2.default.createElement(_fitDatepicker.DateInput, (0, _extends3.default)({ key: 'item' + index,
                            style: itemStyle,
                            input: { label: notEnum ? null : item.label }
                        }, item.props, {
                            defaultValue: item.value,
                            onChange: _this.handleChangeDate.bind(_this, index, parentIndex, item.format) }));
                    case 'enum':
                        if (notEnum) break;
                        // 循环出option列表
                        var EnumOptions = item.enum.map(function (elItem, elIndex) {
                            return _react2.default.createElement(
                                _fitSelect.Option,
                                { key: elIndex,
                                    value: elItem.key },
                                elItem.label
                            );
                        });

                        // 显示当前的child
                        var Children = null;
                        var Childrens = _this.getChilds(item.enum, true, index);
                        item.enum.map(function (elItem, elIndex) {
                            if (elItem.key === (item.value || item.defaultValue)) {
                                Children = Childrens[elIndex];
                            }
                        });

                        return _react2.default.createElement(
                            'div',
                            { key: 'item' + index,
                                style: itemStyle },
                            _react2.default.createElement(
                                _fitSelect.Select,
                                { onChange: _this.handleEnumChange.bind(_this, index),
                                    width: '120',
                                    simple: true,
                                    key: index,
                                    value: item.value || item.defaultValue },
                                EnumOptions
                            ),
                            Children
                        );
                }
            });
        };
        return _this;
    }

    // 选项被修改

    (0, _createClass3.default)(Finder, [{
        key: 'handleChange',
        value: function handleChange(index, parentIndex, value) {
            var newOpts = this.state.opts;

            if (!parentIndex) {
                newOpts[index].value = value;
            } else {
                newOpts[parentIndex].enum[index].value = value;
            }

            this.setState({
                opts: newOpts
            });
        }

        // 修改的选项是时间类型,做预处理

    }, {
        key: 'handleChangeDate',
        value: function handleChangeDate(index, parentIndex) {
            var format = arguments.length <= 2 || arguments[2] === undefined ? 'YYYY-MM-DD HH:mm:ss' : arguments[2];
            var value = arguments[3];

            if (value.format) {
                this.handleChange(index, parentIndex, value.format(format));
            } else {
                this.handleChange(index, parentIndex, {
                    start: value.startDate.format(format),
                    end: value.endDate.format(format)
                });
            }
        }

        // enum被修改

    }, {
        key: 'handleEnumChange',
        value: function handleEnumChange(index, value) {
            var newOpts = this.state.opts;
            newOpts[index].value = value;
            this.setState({
                opts: newOpts
            });
        }
    }, {
        key: 'handleSearch',
        value: function handleSearch() {
            // 查出当前提交参数
            var params = {};
            this.state.opts.map(function (item) {
                if (item.type === 'enum') {
                    item.enum.map(function (elItem) {
                        if (elItem.key === item.value && elItem.value) {
                            if (elItem.beforeSend) {
                                var newParams = elItem.beforeSend(elItem.key, elItem.value);
                                params = _jquery2.default.extend(params, newParams);
                            } else {
                                params[elItem.key] = elItem.value;
                            }
                        }
                    });
                    return;
                }

                if (item.value) {
                    if (item.beforeSend) {
                        var newParams = item.beforeSend(item.key, item.value);
                        params = _jquery2.default.extend(params, newParams);
                    } else {
                        params[item.key] = item.value;
                    }
                }
            });

            this.props.onSearch(params);
        }
    }, {
        key: 'render',
        value: function render() {
            var Finders = this.getChilds(this.state.opts);

            return _react2.default.createElement(
                'div',
                { className: 'lib-pc-table-lib-table-finder' },
                Finders,
                _react2.default.createElement(
                    'div',
                    { style: { flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItem: 'center' } },
                    _react2.default.createElement(
                        _fitButton2.default,
                        { addonLeft: 'search',
                            onClick: this.handleSearch.bind(this),
                            loading: this.state.loading,
                            type: 'primary' },
                        '查询'
                    )
                )
            );
        }
    }]);
    return Finder;
}(_react2.default.Component);

exports.default = Finder;

Finder.defaultProps = {
    finder: []
};