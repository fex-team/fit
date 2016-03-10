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

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 根据当前页,总页数生成展示页数列表,...用null表示
var getMiddleNumbers = function getMiddleNumbers(current, all) {
    if (all <= 7) {
        var arrs = [];
        for (var i = 0; i < all; i++) {
            arrs.push(i + 1);
        }
        return arrs;
    }

    if (current <= 4) {
        return [1, 2, 3, 4, 5, 6, null, all];
    }

    if (all - current < 5) {
        var _arr = [1, null];
        for (var i = all - 6; i <= all; i++) {
            _arr.push(i);
        }
        return _arr;
    }

    var arr = [1, null];
    for (var i = current - 2; i <= current + 3; i++) {
        arr.push(i);
    }
    arr.push(null);
    arr.push(all);
    return arr;
};

var PaginationAll = (function (_React$Component) {
    _inherits(PaginationAll, _React$Component);

    function PaginationAll(props) {
        _classCallCheck(this, PaginationAll);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PaginationAll).call(this, props));

        _this.state = {
            currentPage: _this.props.defaultPage,
            prevPage: _this.props.defaultPage,
            activeButtonName: ''
        };
        return _this;
    }

    // 外部调用翻页

    _createClass(PaginationAll, [{
        key: 'jump',
        value: function jump(page) {
            var activeButtonName = undefined;
            if (page === this.state.currentPage) return;

            this.handleChange(page, false, page);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(page, disable, activeButtonName) {
            var _this2 = this;

            if (disable) return;
            var tempPage = this.state.currentPage;
            this.setState({
                currentPage: page,
                prevPage: tempPage,
                activeButtonName: activeButtonName
            }, function () {
                _this2.props.onChange(page);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props;
            var className = _props.className;
            var loading = _props.loading;
            var allPage = _props.allPage;

            var others = _objectWithoutProperties(_props, ['className', 'loading', 'allPage']);

            var classes = (0, _classnames2.default)(_defineProperty({
                '_namespace': true
            }, className, className));

            var beforeClass = (0, _classnames2.default)({
                'before': true,
                'disabled': this.state.currentPage === 1 || loading
            });

            var afterClass = (0, _classnames2.default)({
                'after': true,
                'disabled': this.state.currentPage === allPage || loading
            });

            var beforeLoading = null;
            var afterLoading = null;

            switch (this.state.activeButtonName) {
                case 'before':
                    if (!loading) break;
                    beforeLoading = _react2.default.createElement('i', { className: 'fa fa-circle-o-notch fa-spin loading' });
                    break;
                case 'after':
                    if (!loading) break;
                    afterLoading = _react2.default.createElement('i', { className: 'fa fa-circle-o-notch fa-spin loading' });
                    break;
            }

            // 中间页数字
            var middleNum = [];

            if (!loading) {
                middleNum = getMiddleNumbers(this.state.currentPage, allPage);
            } else {
                middleNum = getMiddleNumbers(this.state.prevPage, allPage);
            }

            var middleNumbers = middleNum.map(function (number, index) {
                if (number !== null) {
                    var numberClass = (0, _classnames2.default)({
                        'number-button': true,
                        'disabled': loading,
                        'active': number === _this3.state.currentPage && !loading
                    });

                    var numberAfterLoading = null;
                    if (_this3.state.activeButtonName === number && loading) {
                        numberAfterLoading = _react2.default.createElement('i', { style: { marginLeft: 5 },
                            className: 'fa fa-circle-o-notch fa-spin loading' });
                    }

                    return _react2.default.createElement(
                        'div',
                        { key: index,
                            className: numberClass,
                            onClick: _this3.handleChange.bind(_this3, number, loading || number === _this3.state.currentPage, number) },
                        number,
                        numberAfterLoading ? numberAfterLoading : null
                    );
                } else {
                    return _react2.default.createElement(
                        'div',
                        { key: index,
                            className: 'disabled' },
                        '...'
                    );
                }
            });

            return _react2.default.createElement(
                'nav',
                _extends({}, others, { className: classes }),
                _react2.default.createElement(
                    'div',
                    { className: 'pagination' },
                    _react2.default.createElement(
                        'div',
                        { className: beforeClass,
                            onClick: this.handleChange.bind(this, this.state.currentPage - 1, this.state.currentPage === 1 || loading, 'before') },
                        beforeLoading ? beforeLoading : null,
                        _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
                    ),
                    middleNumbers,
                    _react2.default.createElement(
                        'div',
                        { className: afterClass,
                            onClick: this.handleChange.bind(this, this.state.currentPage + 1, this.state.currentPage === allPage || loading, 'after') },
                        _react2.default.createElement('i', { className: 'fa fa-chevron-right' }),
                        afterLoading ? afterLoading : null
                    )
                )
            );
        }
    }]);

    return PaginationAll;
})(_react2.default.Component);

exports.default = PaginationAll;

PaginationAll.defaultProps = {
    // @desc 初始分页
    defaultPage: 1,

    // @desc 总页数
    allPage: 10,

    // @desc 修改分页的回调
    onChange: function onChange() {}
};