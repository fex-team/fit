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

var _actions = require('../actions');

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollListen = (function (_React$Component) {
    _inherits(ScrollListen, _React$Component);

    function ScrollListen(props) {
        _classCallCheck(this, ScrollListen);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ScrollListen).call(this, props));

        _this.state = {
            nails: [],
            activeTitle: ''
        };
        return _this;
    }

    _createClass(ScrollListen, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            this.unsubscribe = this.props.store.subscribe(function () {
                _this2.setState({
                    nails: _this2.props.store.getState().Nail.infos,
                    activeTitle: _this2.props.store.getState().Nail.title
                });
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.unsubscribe();
        }
    }, {
        key: 'getParentStore',
        value: function getParentStore(parent) {
            if (parent.props.type.name !== 'ScrollListenContainer') {
                return this.getParentStore(parent.props.parent);
            } else {
                return parent.store;
            }
        }
    }, {
        key: 'handleClick',
        value: function handleClick(value) {
            this.props.store.dispatch((0, _actions.changeBoxActiveTitle)(value));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props;
            var className = _props.className;

            var others = _objectWithoutProperties(_props, ['className']);

            var classes = (0, _classnames2.default)(_defineProperty({
                '_namespace': true
            }, className, className));

            var Children = this.state.nails.map(function (item, index) {
                var itemClass = (0, _classnames2.default)({
                    item: true,
                    active: _this3.state.activeTitle === item.title
                });
                return _react2.default.createElement(
                    'div',
                    { key: index,
                        onClick: _this3.handleClick.bind(_this3, item.title),
                        className: itemClass },
                    item.title
                );
            });

            return _react2.default.createElement(
                'div',
                _extends({}, others, { className: classes }),
                Children
            );
        }
    }]);

    return ScrollListen;
})(_react2.default.Component);

exports.default = ScrollListen;

ScrollListen.defaultProps = {
    // @desc 当前激活的title
    activeTitle: '',

    // @desc 传入实例化的store
    store: {}
};