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

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var AllPage = function (_React$Component) {
    (0, _inherits3.default)(AllPage, _React$Component);

    function AllPage(props) {
        (0, _classCallCheck3.default)(this, AllPage);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AllPage).call(this, props));

        _this.state = {
            currentPage: _this.props.defaultPage,
            prevPage: _this.props.defaultPage,
            activeButtonName: ''
        };
        return _this;
    }

    (0, _createClass3.default)(AllPage, [{
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

            var beforeClass = (0, _classnames2.default)({
                'before': true,
                'disabled': this.state.currentPage === 1 || this.props.loading
            });

            var afterClass = (0, _classnames2.default)({
                'after': true,
                'disabled': this.state.currentPage === this.props.allPage || this.props.loading
            });

            var beforeLoading = null;
            var afterLoading = null;

            switch (this.state.activeButtonName) {
                case 'before':
                    if (!this.props.loading) break;
                    beforeLoading = _react2.default.createElement('i', { className: 'fa fa-circle-o-notch fa-spin loading' });
                    break;
                case 'after':
                    if (!this.props.loading) break;
                    afterLoading = _react2.default.createElement('i', { className: 'fa fa-circle-o-notch fa-spin loading' });
                    break;
            }

            // 中间页数字
            var middleNum = [];

            if (!this.props.loading) {
                middleNum = getMiddleNumbers(this.state.currentPage, this.props.allPage);
            } else {
                middleNum = getMiddleNumbers(this.state.prevPage, this.props.allPage);
            }

            var middleNumbers = middleNum.map(function (number, index) {
                if (number !== null) {
                    var numberClass = (0, _classnames2.default)({
                        'disabled': _this3.props.loading,
                        'active': number === _this3.state.currentPage && !_this3.props.loading
                    });

                    var numberAfterLoading = null;
                    if (_this3.state.activeButtonName === number && _this3.props.loading) {
                        numberAfterLoading = _react2.default.createElement('i', { style: { marginLeft: 5 },
                            className: 'fa fa-circle-o-notch fa-spin loading' });
                    }

                    return _react2.default.createElement(
                        'div',
                        { key: index,
                            className: numberClass,
                            onClick: _this3.handleChange.bind(_this3, number, _this3.props.loading || number === _this3.state.currentPage, number) },
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
                { className: 'lib-pc-pagination-lib-pagination-all-page' },
                _react2.default.createElement(
                    'div',
                    { className: 'pagination' },
                    _react2.default.createElement(
                        'div',
                        { className: beforeClass,
                            onClick: this.handleChange.bind(this, this.state.currentPage - 1, this.state.currentPage === 1 || this.props.loading, 'before') },
                        beforeLoading ? beforeLoading : null,
                        _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
                    ),
                    middleNumbers,
                    _react2.default.createElement(
                        'div',
                        { className: afterClass,
                            onClick: this.handleChange.bind(this, this.state.currentPage + 1, this.state.currentPage === this.props.allPage || this.props.loading, 'after') },
                        _react2.default.createElement('i', { className: 'fa fa-chevron-right' }),
                        afterLoading ? afterLoading : null
                    )
                )
            );
        }
    }]);
    return AllPage;
}(_react2.default.Component);

exports.default = AllPage;

AllPage.defaultProps = {
    defaultPage: 1,
    allPage: 10,
    onChange: function onChange() {}
};