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

var SimplePagination = function (_React$Component) {
    (0, _inherits3.default)(SimplePagination, _React$Component);

    function SimplePagination(props) {
        (0, _classCallCheck3.default)(this, SimplePagination);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SimplePagination).call(this, props));

        _this.state = {
            currentPage: _this.props.defaultPage,
            activeButtonName: ''
        };
        return _this;
    }

    // 翻页

    (0, _createClass3.default)(SimplePagination, [{
        key: 'handleChange',
        value: function handleChange(page, disable, activeButtonName) {
            var _this2 = this;

            if (disable) return;
            this.setState({
                currentPage: page,
                activeButtonName: activeButtonName
            }, function () {
                _this2.props.onChange(page);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var beforeClass = (0, _classnames2.default)({
                'before': true,
                'disabled': this.state.currentPage === 1 || this.props.loading
            });

            var afterClass = (0, _classnames2.default)({
                'after': true,
                'disabled': !this.props.next || this.props.loading
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

            return _react2.default.createElement(
                'nav',
                { className: 'lib-pc-pagination-lib-pagination-simple' },
                _react2.default.createElement(
                    'ul',
                    { className: 'pager' },
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'span',
                            { onClick: this.handleChange.bind(this, this.state.currentPage - 1, this.state.currentPage === 1 || this.props.loading, 'before'),
                                className: beforeClass },
                            beforeLoading ? beforeLoading : null,
                            '上一页'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'span',
                            { onClick: this.handleChange.bind(this, this.state.currentPage + 1, !this.props.next || this.props.loading, 'after'),
                                className: afterClass },
                            '下一页',
                            afterLoading ? afterLoading : null
                        )
                    )
                )
            );
        }
    }]);
    return SimplePagination;
}(_react2.default.Component);

exports.default = SimplePagination;

SimplePagination.defaultProps = {
    defaultPage: 1,
    onChange: function onChange() {}
};