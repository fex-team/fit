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

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = (function (_React$Component) {
    _inherits(SubMenu, _React$Component);

    function SubMenu(props) {
        _classCallCheck(this, SubMenu);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SubMenu).call(this, props));

        _this.state = {
            onHover: false
        };
        return _this;
    }

    _createClass(SubMenu, [{
        key: 'handleMouseEnter',
        value: function handleMouseEnter() {
            if (this.props.showType !== 'hover') return;
            this.setState({
                onHover: true
            });
        }
    }, {
        key: 'handleMouseLeave',
        value: function handleMouseLeave() {
            if (this.props.showType !== 'hover') return;
            this.setState({
                onHover: false
            });
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            if (this.props.showType !== 'click') return;
            this.setState({
                onHover: !this.state.onHover
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var inverse = _props.inverse;
            var brand = _props.brand;
            var vertical = _props.vertical;
            var height = _props.height;
            var width = _props.width;
            var children = _props.children;
            var zIndex = _props.zIndex;
            var title = _props.title;

            var others = _objectWithoutProperties(_props, ['className', 'inverse', 'brand', 'vertical', 'height', 'width', 'children', 'zIndex', 'title']);

            var isInverse = inverse;
            if (this.props.globalInverse) {
                isInverse = !inverse;
            }

            var classes = (0, _classnames2.default)(_defineProperty({
                '_namespace': true,
                'brand': brand,
                'inverse': isInverse,
                'vertical': vertical
            }, className, className));

            var containerStyle = {
                minHeight: height,
                width: width
            };

            others.style = _extends({}, containerStyle, others.style);

            var Children = _react2.default.Children.map(children, function (item) {
                return _react2.default.cloneElement(item, {
                    minHeight: height,
                    zIndex: zIndex + 1,
                    vertical: vertical
                });
            });

            var caretClass = (0, _classnames2.default)({
                'fa': true,
                'fa-caret-down': vertical || zIndex === 0,
                'fa-caret-right': !vertical && zIndex > 0
            });

            var subList = {
                top: zIndex === 0 ? '100%' : 0,
                left: zIndex === 0 ? 0 : '100%',
                position: vertical ? 'relative' : 'absolute',
                paddingLeft: vertical ? 15 : null
            };

            if (vertical) {
                subList.top = null;
                subList.left = null;
            }

            return _react2.default.createElement(
                'div',
                _extends({}, others, { className: classes,
                    onMouseEnter: this.handleMouseEnter.bind(this),
                    onMouseLeave: this.handleMouseLeave.bind(this) }),
                _react2.default.createElement(
                    'div',
                    { onClick: this.handleClick.bind(this),
                        className: 'text-label',
                        style: containerStyle },
                    title,
                    _react2.default.createElement('i', { className: caretClass,
                        style: { marginLeft: 10 } })
                ),
                this.state.onHover ? _react2.default.createElement(
                    'div',
                    { className: 'sub-list',
                        style: subList },
                    Children
                ) : null
            );
        }
    }]);

    return SubMenu;
})(_react2.default.Component);

exports.default = SubMenu;

SubMenu.defaultProps = {
    // @desc 标题
    // @type string
    title: '默认标题',

    // @desc 高度
    // @type int
    height: 45,

    // @desc 子菜单显示方式, hover:鼠标移上去显示 click:点击后显示
    // @type enum
    showType: 'hover'
};