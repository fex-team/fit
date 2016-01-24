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

var _simple = require('./simple');

var _simple2 = _interopRequireDefault(_simple);

var _allPage = require('./all-page');

var _allPage2 = _interopRequireDefault(_allPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroup = function (_React$Component) {
    (0, _inherits3.default)(ButtonGroup, _React$Component);

    function ButtonGroup(props) {
        (0, _classCallCheck3.default)(this, ButtonGroup);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ButtonGroup).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(ButtonGroup, [{
        key: 'render',
        value: function render() {
            var child = null;

            if (this.props.allPage) {
                child = _react2.default.createElement(_allPage2.default, this.props);
            } else {
                child = _react2.default.createElement(_simple2.default, this.props);
            }

            return _react2.default.createElement(
                'div',
                null,
                child
            );
        }
    }]);
    return ButtonGroup;
}(_react2.default.Component);

exports.default = ButtonGroup;