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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tree = function (_React$Component) {
    (0, _inherits3.default)(Tree, _React$Component);

    function Tree(props) {
        (0, _classCallCheck3.default)(this, Tree);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Tree).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(Tree, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var Children = _react2.default.Children.map(this.props.children, function (item) {
                return _react2.default.cloneElement(item, {
                    defaultExpendAll: _this2.props.defaultExpendAll
                });
            });

            return _react2.default.createElement(
                'div',
                null,
                Children
            );
        }
    }]);
    return Tree;
}(_react2.default.Component);

exports.default = Tree;

Tree.defaultProps = {
    defaultExpendAll: false
};