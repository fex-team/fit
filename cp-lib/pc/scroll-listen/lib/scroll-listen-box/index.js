'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _actions = require('../actions');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollListenBox = function (_React$Component) {
    _inherits(ScrollListenBox, _React$Component);

    function ScrollListenBox(props) {
        _classCallCheck(this, ScrollListenBox);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ScrollListenBox).call(this, props));
    }

    _createClass(ScrollListenBox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.dom = _reactDom2.default.findDOMNode(this);
            this.$dom = (0, _jquery2.default)(this.dom);
            this.scrollSelf = this.getScrollSelf(_reactDom2.default.findDOMNode(this));
            this.scrollParent = this.getScrollParent(_reactDom2.default.findDOMNode(this));

            // parent不能等于self
            if (this.scrollParent === this.scrollSelf) {
                this.scrollParent = this.getScrollParent(this.scrollParent);
            }

            this.$scrollSelf = (0, _jquery2.default)(this.scrollSelf);
            this.$scrollParent = (0, _jquery2.default)(this.scrollParent);
            this.$scrollSelf.on('scroll', this.handleScroll.bind(this));
            this.$scrollSelf.on('DOMSubtreeModified', _lodash2.default.debounce(this.resetNailInfo.bind(this), 200));

            this.nailArray = [];

            this.unsubscribe = this.props.store.subscribe(function () {
                switch (_this2.props.store.getState().LastAction.type) {
                    case _actions.CHANGE_ACTIVE_TITLE:
                        break;
                    case _actions.CHANGE_BOX_ACTIVE_TITLE:
                        _this2.scrollTo(_this2.props.store.getState().Nail.title);
                        break;
                    case _actions.SET_NAIL_INFO:
                        var nowScrollTop = _this2.$scrollSelf.scrollTop();
                        var copyInfos = _lodash2.default.cloneDeep(_this2.props.store.getState().Nail.infos);
                        _this2.nailArray = copyInfos.map(function (item) {
                            item.top += nowScrollTop;
                            return item;
                        });
                        break;
                }
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.$dom.off('scroll', this.handleScroll.bind(this));
            this.$scrollSelf.off('DOMSubtreeModified', _lodash2.default.debounce(this.resetNailInfo.bind(this), 200));
            this.unsubscribe();
        }
    }, {
        key: 'resetNailInfo',
        value: function resetNailInfo() {
            this.props.store.dispatch((0, _actions.resetNailInfo)());
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll() {
            var _this3 = this;

            var domTop = this.$scrollSelf.offset().top;
            var scrollTop = this.$scrollSelf.scrollTop();

            var topIndex = -1;
            var currentTitle = '';
            this.nailArray.map(function (item) {
                if (scrollTop > item.top - domTop - _this3.$scrollParent.scrollTop() - 1) {
                    if (topIndex === 1) return;
                    topIndex = 0;
                    currentTitle = item.title;
                } else {
                    if (topIndex === 0) {
                        topIndex = 1;
                    }
                }
            });

            // 默认取第一个
            if (currentTitle === '' && this.nailArray.length > 0) {
                currentTitle = this.nailArray[0].title;
            }

            this.props.store.dispatch((0, _actions.changeActiveTitle)(currentTitle));
        }
    }, {
        key: 'getScrollSelf',
        value: function getScrollSelf(el) {
            do {
                switch (window.getComputedStyle(el)['overflowY']) {
                    case 'auto':
                    case 'scroll':
                    case 'overlay':
                        return el;
                }
            } while (el = el.parentElement);

            return window;
        }
    }, {
        key: 'getScrollParent',
        value: function getScrollParent(el) {
            while (el = el.parentElement) {
                switch (window.getComputedStyle(el)['overflowY']) {
                    case 'auto':
                    case 'scroll':
                    case 'overlay':
                        return el;
                }
            }

            return window;
        }
    }, {
        key: 'handleNailRender',
        value: function handleNailRender(key, top) {
            var newNailArray = this.state.nailArray;
            newNailArray.push({
                key: key,
                top: top
            });
            this.setState({
                nailArray: newNailArray
            });
        }

        // 手动切换滑动

    }, {
        key: 'scrollTo',
        value: function scrollTo(title) {
            var _this4 = this;

            this.nailArray.map(function (item) {
                if (title === item.title) {
                    _this4.$scrollSelf.animate({
                        scrollTop: item.top - _this4.$scrollSelf.offset().top - _this4.$scrollParent.scrollTop()
                    }, 200);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                this.props,
                this.props.children
            );
        }
    }]);

    return ScrollListenBox;
}(_react2.default.Component);

exports.default = ScrollListenBox;

ScrollListenBox.defaultProps = {
    // @desc 传入实例化的store
    store: {}
};