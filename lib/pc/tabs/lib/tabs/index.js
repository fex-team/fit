'use strict';

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = function (_React$Component) {
    (0, _inherits3.default)(Tabs, _React$Component);

    function Tabs(props) {
        (0, _classCallCheck3.default)(this, Tabs);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Tabs).call(this, props));

        _this.state = {
            activeKey: _this.props.activeKey || _this.props.defaultActiveKey,
            moveBarStyle: {},
            isForward: false
        };
        return _this;
    }

    (0, _createClass3.default)(Tabs, [{
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
                var titleClassNames = (0, _classnames2.default)((0, _defineProperty3.default)({
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
    // @type string
    defaultActiveKey: '',

    // @desc 同defaultActiveKey,但是可以让其受外部控制
    // @type string
    activeKey: '',

    // @desc 切换tab时的回调
    // @type function
    // @param key:切换tab的key
    onChange: function onChange() {}
};