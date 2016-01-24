'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _reactList = require('react-list');

var _reactList2 = _interopRequireDefault(_reactList);

var _reactTappable = require('react-tappable');

var _reactTappable2 = _interopRequireDefault(_reactTappable);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatBox = (function (_React$Component) {
    _inherits(ChatBox, _React$Component);

    function ChatBox(props) {
        _classCallCheck(this, ChatBox);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ChatBox).call(this, props));

        _this.state = {
            newMessage: 0,
            datas: [],
            // 未读消息数量
            message: 0
        };

        _this.handleScroll = function (event) {
            if (!_this._isMounted) return;

            var visibleRange = _this.refs['reactList'].getVisibleRange();

            _this.props.onScroll(_this.$scrollParent.scrollTop(), visibleRange);

            if (!_this._hasMovedAboveFirst && visibleRange[0] > 0) {
                _this._hasMovedAboveFirst = true;
            }

            if (visibleRange[0] === 0) {
                // 到顶部了且曾经有移动到第一个下面
                if (!_this._hitTop && _this._hasMovedAboveFirst) {
                    _this.props.onHitTop();
                    _this._hitTop = true;
                }
            } else if (visibleRange[1] === _this.state.datas.length - 1) {
                // 到底部了
                _this.setState({
                    message: 0
                });
            }

            if (visibleRange[0] > 0) {
                _this._hitTop = false;
            }
        };
        return _this;
    }

    _createClass(ChatBox, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this._isMounted = true;
            this._hitTop = false;
            this._hasMovedAboveFirst = false;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.$scrollParent = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this)).find('#j-scroll-parent');
            (0, _jquery2.default)(this.$scrollParent).on('scroll', this.handleScroll);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._isMounted = false;
            (0, _jquery2.default)(this.$scrollParent).off('scroll', this.handleScroll);
        }
    }, {
        key: 'alertBackBottom',
        value: function alertBackBottom(number) {
            if (!this.props.backBottom) return;
            var allNumber = parseInt(this.state.message) + number;
            if (allNumber > 99) {
                allNumber = '99+';
            }
            this.setState({
                message: allNumber
            });
        }
    }, {
        key: 'appendAfter',
        value: function appendAfter(toBottom, newDatasCount, oldCount) {
            if (this.refs['reactList'].getVisibleRange()[1] === oldCount - 1 || toBottom) {
                // 到达了底部或强制回到底部
                this.backBottom();
            } else {
                // 总数量超过可视区,显示数量
                if (this.refs['reactList'].getVisibleRange()[1] < this.state.datas.length - 1) {
                    this.alertBackBottom(newDatasCount);
                }
            }
        }

        // @external
        // @desc 在底部添加 datas:添加的数据,object/array toBottom:是否滚动到底部 (滚动到底部只有fullScreen时有效)
        // @type function

    }, {
        key: 'append',
        value: function append(datas) {
            var _this2 = this;

            var toBottom = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

            var count = datas.length;
            var oldCount = this.state.datas.length;
            var newDatas = this.state.datas;
            newDatas = newDatas.concat(datas);
            this.setState({
                datas: newDatas
            }, function () {
                _this2.appendAfter(toBottom, count, oldCount);
            });
        }

        // @external
        // @desc 在顶部添加 datas:添加的数据,object/array toBottom:是否滚动到底部
        // @type function

    }, {
        key: 'prepend',
        value: function prepend(datas) {
            var _this3 = this;

            var toBottom = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

            var count = datas.length;
            var oldCount = this.state.datas.length;
            var newDatas = this.state.datas;
            newDatas = datas.concat(newDatas);
            this.setState({
                datas: newDatas
            }, function () {
                // 移动到上次位置
                _this3.refs['reactList'].scrollTo(datas.length);
                _this3._hitTop = false;
            });
        }

        // 滚动到底部

    }, {
        key: 'backBottom',
        value: function backBottom() {
            this.refs['reactList'].scrollTo(this.state.datas.length);
            this.setState({
                message: 0
            });
        }

        // 封装 renderItem

    }, {
        key: 'renderItem',
        value: function renderItem(index, key) {
            return this.props.renderItem(this.state.datas[index], index);
        }
    }, {
        key: 'render',
        value: function render() {
            var containerStyle = {
                height: this.props.height
            };

            return _react2.default.createElement(
                'div',
                { className: 'lib-mobile-chat-box-web-lib-chat-box',
                    style: containerStyle },
                _react2.default.createElement(
                    'div',
                    { className: 'child-container',
                        id: 'j-scroll-parent',
                        style: containerStyle },
                    _react2.default.createElement(_reactList2.default, {
                        id: 'j-scroll-content',
                        itemRenderer: this.renderItem.bind(this),
                        length: this.state.datas.length,
                        useTranslate3d: true,
                        pageSize: this.props.fullScreen ? this.state.datas.length : 10,
                        initialIndex: this.props.fullScreen ? -1 : null,
                        threshold: 300,
                        type: 'variable',
                        ref: 'reactList' })
                ),
                this.state.message === 0 ? null : _react2.default.createElement(
                    _reactTappable2.default,
                    { onTap: this.backBottom.bind(this),
                        className: 'fixed-number' },
                    this.state.message
                )
            );
        }
    }]);

    return ChatBox;
})(_react2.default.Component);

exports.default = ChatBox;

ChatBox.defaultProps = {
    // @desc 高度
    // @type int/string
    height: 200,

    // @desc 渲染每个元素的方法
    // @type function
    renderItem: function renderItem(item, index) {},

    // @desc 是否显示完全（不完全的地方会随着滚动渐渐补全）
    // @type bool
    fullScreen: false,

    // @desc 开启后可以提示回到底部,当最后一个元素可见时,末尾追加内容会强制回到底部
    // @type bool
    backBottom: false,

    // @desc 触碰到顶部的回调函数,只有调用了prepend方法后才会继续触发
    // @type function
    onHitTop: function onHitTop() {},

    // @desc 滚动时回调函数
    // @type function
    onScroll: function onScroll(offsetTop, range) {}
};