'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonGroup = function (_React$Component) {
    _inherits(ButtonGroup, _React$Component);

    function ButtonGroup(props) {
        _classCallCheck(this, ButtonGroup);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonGroup).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(ButtonGroup, [{
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