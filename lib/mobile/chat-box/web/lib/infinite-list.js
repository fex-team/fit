'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var findDOMNode = _reactDom2.default.findDOMNode;

var isEqualSubset = function isEqualSubset(a, b) {
    for (var key in a) {
        if (a[key] !== b[key]) return false;
    }return true;
};

var isEqual = function isEqual(a, b) {
    return isEqualSubset(a, b) && isEqualSubset(b, a);
};

var CLIENT_SIZE_KEYS = { x: 'clientWidth', y: 'clientHeight' };
var CLIENT_START_KEYS = { x: 'clientTop', y: 'clientLeft' };
var INNER_SIZE_KEYS = { x: 'innerWidth', y: 'innerHeight' };
var OFFSET_SIZE_KEYS = { x: 'offsetWidth', y: 'offsetHeight' };
var OFFSET_START_KEYS = { x: 'offsetLeft', y: 'offsetTop' };
var OVERFLOW_KEYS = { x: 'overflowX', y: 'overflowY' };
var SCROLL_KEYS = { x: 'scrollLeft', y: 'scrollTop' };
var SIZE_KEYS = { x: 'width', y: 'height' };

var NOOP = function NOOP() {};

var ReactList = (function (_React$Component) {
    _inherits(ReactList, _React$Component);

    function ReactList(props) {
        _classCallCheck(this, ReactList);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactList).call(this, props));

        var from = _this.constrainFrom(_this.props.initialIndex, _this.props.length);
        var size = _this.constrainSize(_this.props.pageSize, _this.props.length, _this.props.pageSize, from);
        _this.state = { from: from, size: size };
        _this.cache = {};
        return _this;
    }

    _createClass(ReactList, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.state.from = this.constrainFrom(this.state.from, nextProps.length);
            this.state.size = this.constrainSize(this.state.size, nextProps.length, nextProps.pageSize, this.state.from);
            this.setState({
                state: this.state.from,
                size: this.state.size
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateFrame = this.updateFrame.bind(this);
            window.addEventListener('resize', this.updateFrame);
            this.updateFrame(this.scrollTo.bind(this, this.props.initialIndex));
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(props, state) {
            return !isEqual(props, this.props) || !isEqual(state, this.state);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.updateFrame();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.updateFrame);
            this.scrollParent.removeEventListener('scroll', this.updateFrame);
        }
    }, {
        key: 'getOffset',
        value: function getOffset(el) {
            var offset = el[CLIENT_START_KEYS[this.props.axis]] || 0;
            var offsetKey = OFFSET_START_KEYS[this.props.axis];
            do {
                offset += el[offsetKey] || 0;
            } while (el = el.offsetParent);
            return offset;
        }
    }, {
        key: 'updateScrollParent',
        value: function updateScrollParent() {
            var prev = this.scrollParent;
            this.scrollParent = this.getScrollParent();
            if (prev === this.scrollParent) return;
            if (prev) prev.removeEventListener('scroll', this.updateFrame);
            this.scrollParent.addEventListener('scroll', this.updateFrame);
        }
    }, {
        key: 'getScrollParent',
        value: function getScrollParent() {
            var dom = findDOMNode(this);
            var overflowKey = OVERFLOW_KEYS[this.props.axis];
            while (dom = dom.parentElement) {
                switch (window.getComputedStyle(dom)[overflowKey]) {
                    case 'auto':
                    case 'scroll':
                    case 'overlay':
                        return dom;
                }
            }
            return window;
        }
    }, {
        key: 'getScroll',
        value: function getScroll() {
            var scrollKey = SCROLL_KEYS[this.props.axis];
            // Firefox always returns document.body[scrollKey] as 0 and Chrome/Safari
            // always return document.documentElement[scrollKey] as 0, so take
            // whichever has a value.
            var scroll = this.scrollParent === window ? document.body[scrollKey] || document.documentElement[scrollKey] : this.scrollParent[scrollKey];
            var dom = findDOMNode(this);
            return scroll - (this.getOffset(dom) - this.getOffset(this.scrollParent));
        }
    }, {
        key: 'setScroll',
        value: function setScroll(offset) {
            var scrollParent = this.scrollParent;

            if (scrollParent === window) {
                return window.scrollTo(0, this.getOffset(findDOMNode(this)) + offset);
            }
            scrollParent[SCROLL_KEYS[this.props.axis]] += offset - this.getScroll();
        }
    }, {
        key: 'getViewportSize',
        value: function getViewportSize() {
            var scrollParent = this.scrollParent;
            var axis = this.props.axis;

            return scrollParent === window ? window[INNER_SIZE_KEYS[axis]] : scrollParent[CLIENT_SIZE_KEYS[axis]];
        }
    }, {
        key: 'getStartAndEnd',
        value: function getStartAndEnd() {
            var threshold = arguments.length <= 0 || arguments[0] === undefined ? this.props.threshold : arguments[0];

            var start = this.getScroll() - threshold;
            var end = start + this.getViewportSize() + threshold * 2;
            return { start: start, end: end };
        }
    }, {
        key: 'updateFrame',
        value: function updateFrame(callback) {
            this.updateScrollParent();
            if (typeof callback != 'function') {
                callback = NOOP;
            }
            return this.updateVariableFrame(callback);
        }
    }, {
        key: 'updateVariableFrame',
        value: function updateVariableFrame(callback) {
            if (!this.props.itemSizeGetter) this.cacheSizes();

            var _getStartAndEnd = this.getStartAndEnd();

            var start = _getStartAndEnd.start;
            var end = _getStartAndEnd.end;

            var space = 0;
            var from = 0;
            var size = 0;
            var maxFrom = this.props.length - 1;

            while (from < maxFrom) {
                var itemSize = this.getSizeOf(from);
                if (itemSize == null || space + itemSize > start) break;
                space += itemSize;
                ++from;
            }

            var maxSize = this.props.length - from;

            while (size < maxSize && space < end) {
                var itemSize = this.getSizeOf(from + size);
                if (itemSize == null) {
                    size = Math.min(size + this.props.pageSize, maxSize);
                    break;
                }
                space += itemSize;
                ++size;
            }
            this.setState({ from: from, size: size }, callback);
        }

        // 获取第index个之前的总像素长度

    }, {
        key: 'getSpaceBefore',
        value: function getSpaceBefore(index) {
            var cache = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            if (cache[index] != null) return cache[index];

            // Try the static itemSize.
            var itemSize = this.state.itemSize;

            if (itemSize) {
                return cache[index] = index * itemSize;
            }

            // Find the closest space to index there is a cached value for.
            var from = index;
            while (from > 0 && cache[--from] == null) {}

            // Finally, accumulate sizes of items from - index.
            var space = cache[from] || 0;
            for (var i = from; i < index; ++i) {
                cache[i] = space;
                var _itemSize = this.getSizeOf(i);
                if (_itemSize == null) break;
                space += _itemSize;
            }

            return cache[index] = space;
        }
    }, {
        key: 'cacheSizes',
        value: function cacheSizes() {
            var itemEls = findDOMNode(this.items).children;
            var sizeKey = OFFSET_SIZE_KEYS[this.props.axis];
            for (var i = 0, l = itemEls.length; i < l; ++i) {
                this.cache[this.state.from + i] = itemEls[i][sizeKey];
            }
        }
    }, {
        key: 'getSizeOf',
        value: function getSizeOf(index) {
            var cache = this.cache;
            var itemSizeGetter = this.props.itemSizeGetter;
            var itemSize = this.state.itemSize;

            // Try the static itemSize.

            if (itemSize) return itemSize;

            // Try the itemSizeGetter.
            if (itemSizeGetter) return itemSizeGetter(index);

            // Try the cache.
            if (index in cache) return cache[index];
        }
    }, {
        key: 'constrainFrom',
        value: function constrainFrom(from, length) {
            if (!from) return 0;
            return Math.max(Math.min(from, length - 1), 0);
        }
    }, {
        key: 'constrainSize',
        value: function constrainSize(size, length, pageSize, from) {
            return Math.min(Math.max(size, pageSize), length - from);
        }
    }, {
        key: 'scrollTo',
        value: function scrollTo(index) {
            if (index != null) this.setScroll(this.getSpaceBefore(index));
        }
    }, {
        key: 'itemsRenderer',
        value: function itemsRenderer(items, ref) {
            var style = {};
            if (this.props.direction === 'column-reverse') {
                style.display = 'flex';
                style.flexDirection = 'column-reverse';
            }
            return _react2.default.createElement(
                'div',
                { style: style,
                    ref: ref },
                items
            );
        }
    }, {
        key: 'renderItems',
        value: function renderItems() {
            var _this2 = this;

            var items = [];
            for (var i = 0; i < this.state.size; ++i) {
                items.push(this.props.itemRenderer(this.state.from + i, i));
            }
            return this.itemsRenderer(items, function (c) {
                return _this2.items = c;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var axis = _props.axis;
            var length = _props.length;
            var useTranslate3d = _props.useTranslate3d;

            var ItemComponents = this.renderItems();
            console.log(this.state.from);

            var style = { position: 'relative' };
            var cache = {};
            var size = this.getSpaceBefore(length, cache);
            if (size) {
                style[SIZE_KEYS[axis]] = size;
                if (axis === 'x') style.overflowX = 'hidden';
            }
            var offset = this.getSpaceBefore(this.state.from, cache);
            var x = axis === 'x' ? offset : 0;
            var y = axis === 'y' ? offset : 0;
            var transform = useTranslate3d ? 'translate3d(' + x + 'px, ' + y + 'px, 0)' : 'translate(' + x + 'px, ' + y + 'px)';
            var listStyle = {
                msTransform: transform,
                WebkitTransform: transform,
                transform: transform
            };

            return _react2.default.createElement(
                'div',
                { style: style },
                _react2.default.createElement(
                    'div',
                    { style: listStyle },
                    ItemComponents
                )
            );
        }
    }]);

    return ReactList;
})(_react2.default.Component);

exports.default = ReactList;

ReactList.defaultProps = {
    axis: 'y',
    initialIndex: null,
    itemSizeGetter: null,
    itemRenderer: function itemRenderer(index, key) {
        return _react2.default.createElement(
            'div',
            { key: key },
            index
        );
    },
    length: 0,
    pageSize: 10,
    threshold: 100,
    useTranslate3d: false,
    direction: 'column'
};