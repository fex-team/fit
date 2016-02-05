'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
    _inherits(Tabs, _React$Component);

    function Tabs(props) {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this, props));

        _this.state = {
            activeKey: _this.props.activeKey || _this.props.defaultActiveKey,
            moveBarStyle: {},
            isForward: false
        };
        return _this;
    }

    _createClass(Tabs, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.previousTitleIndex = -1;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.dom = ReactDOM.findDOMNode(this);

            var activeIndex = -1;
            _react2.default.Children.map(this.props.children, function (item, index) {
                if (_this2.state.activeKey === item.key) {
                    activeIndex = index;
                }
            });
            this.setActive(this.state.activeKey, activeIndex);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('activeKey' in nextProps) {
                this.setState({
                    activeKey: nextProps.activeKey
                });
            }
        }
    }, {
        key: 'setActive',
        value: function setActive(value, index) {
            if (index === this.previousTitleIndex) return;

            var $dom = (0, _jquery2.default)(this.dom);

            // tab标题容器
            var titleContainer = $dom.find('.title-container');

            // 当前选择标题元素
            var titleItem = $dom.find('.title-item-' + index);

            // 当前标题元素距离容器的做边距
            var currentLeft = titleItem.offset().left - titleContainer.offset().left;

            this.setState({
                activeKey: value,
                isForward: index > this.previousTitleIndex,
                moveBarStyle: {
                    left: currentLeft,
                    right: titleContainer.width() - currentLeft - titleItem.width() - 20
                }
            });

            this.previousTitleIndex = index;
        }
    }, {
        key: 'handleTitleClick',
        value: function handleTitleClick(value, index) {
            this.setActive(value, index);
            this.props.onChange(value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var Title = _react2.default.Children.map(this.props.children, function (item, index) {
                var titleClassNames = (0, _classnames2.default)(_defineProperty({
                    'active': _this3.state.activeKey === item.key,
                    'title-item': true
                }, 'title-item-' + index, true));
                return _react2.default.createElement(
                    'div',
                    { onClick: _this3.handleTitleClick.bind(_this3, item.key, index),
                        className: titleClassNames },
                    item.props.tab
                );
            });

            var Children = _react2.default.Children.map(this.props.children, function (item) {
                return _react2.default.cloneElement(item, {
                    active: _this3.state.activeKey === item.key
                });
            });

            var moveBarClassnames = (0, _classnames2.default)({
                'move-bar': true,
                'forward': this.state.isForward,
                'backward': !this.state.isForward
            });

            return _react2.default.createElement(
                'div',
                { className: 'lib-pc-tabs-lib-tabs' },
                _react2.default.createElement(
                    'div',
                    { className: 'title-container' },
                    _react2.default.createElement('div', { className: moveBarClassnames,
                        style: this.state.moveBarStyle }),
                    Title
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'content-container' },
                    Children
                )
            );
        }
    }]);

    return Tabs;
}(_react2.default.Component);

exports.default = Tabs;

Tabs.defaultProps = {
    // @desc 设置默认打开哪个tab,与tabPanel的key对应,只有初始化有效
    defaultActiveKey: '',

    // @desc 同defaultActiveKey,但是可以让其受外部控制
    activeKey: '',

    // @desc 切换tab时的回调 第一个参数:切换tab的key
    onChange: function onChange() {}
};