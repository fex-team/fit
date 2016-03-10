'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollListenNail = (function (_React$Component) {
    _inherits(ScrollListenNail, _React$Component);

    function ScrollListenNail(props) {
        _classCallCheck(this, ScrollListenNail);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ScrollListenNail).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(ScrollListenNail, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.$dom = (0, _jquery2.default)(ReactDOM.findDOMNode(this));
            setTimeout(function () {
                _this2.props.store.dispatch((0, _actions.setNailInfo)({
                    title: _this2.props.title,
                    top: _this2.$dom.offset().top
                }));
            });

            this.unsubscribe = this.props.store.subscribe(function () {
                switch (_this2.props.store.getState().LastAction.type) {
                    case _actions.RESET_NAIL_INFO:
                        setTimeout(function () {
                            _this2.props.store.dispatch((0, _actions.setNailInfo)({
                                title: _this2.props.title,
                                top: _this2.$dom.offset().top
                            }));
                        });
                        break;
                }
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.unsubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;

            var others = _objectWithoutProperties(_props, ['className']);

            var classes = (0, _classnames2.default)(_defineProperty({
                '_namespace': true
            }, className, className));

            return _react2.default.createElement('div', _extends({}, others, { className: classes }));
        }
    }]);

    return ScrollListenNail;
})(_react2.default.Component);

exports.default = ScrollListenNail;

ScrollListenNail.defaultProps = {
    // @desc 传入实例化的store
    store: {}
};