'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var AllPage = function (_React$Component) {
    _inherits(AllPage, _React$Component);

    function AllPage(props) {
        _classCallCheck(this, AllPage);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AllPage).call(this, props));

        _this.state = {
            currentPage: _this.props.defaultPage,
            prevPage: _this.props.defaultPage,
            activeButtonName: ''
        };
        return _this;
    }

    _createClass(AllPage, [{
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