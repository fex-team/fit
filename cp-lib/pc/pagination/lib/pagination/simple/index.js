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

var SimplePagination = function (_React$Component) {
    _inherits(SimplePagination, _React$Component);

    function SimplePagination(props) {
        _classCallCheck(this, SimplePagination);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SimplePagination).call(this, props));

        _this.state = {
            currentPage: _this.props.defaultPage,
            activeButtonName: ''
        };
        return _this;
    }

    // 翻页

    _createClass(SimplePagination, [{
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