'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptGroup = (function (_React$Component) {
    _inherits(OptGroup, _React$Component);

    function OptGroup() {
        _classCallCheck(this, OptGroup);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(OptGroup).apply(this, arguments));
    }

    _createClass(OptGroup, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            // 循环子元素
            var Children = _react2.default.Children.map(this.props.children, function (item, index) {
                var active = false;
                if (item.props.value === _this2.props.activeValue) {
                    active = true;
                }

                return _react2.default.cloneElement(item, Object.assign({}, item.props, {
                    onClick: _this2.props.onClick,
                    key: index,
                    active: active,
                    searchValue: _this2.props.searchValue
                }));
            });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'li',
                    { className: 'group-result' },
                    this.props.label
                ),
                Children
            );
        }
    }]);

    return OptGroup;
})(_react2.default.Component);

exports.default = OptGroup;

OptGroup.defaultProps = {
    style: {},
    searchValue: ''
};