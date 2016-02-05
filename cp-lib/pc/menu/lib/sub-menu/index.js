'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = function (_React$Component) {
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
            var _this2 = this;

            var inverse = this.props.inverse;
            if (this.props.globalInverse) {
                inverse = !inverse;
            }

            var className = (0, _classnames2.default)({
                'lib-pc-menu-lib-sub-menu': true,
                'brand': this.props.brand,
                'inverse': inverse,
                'vertical': this.props.vertical
            });

            var containerStyle = {
                minHeight: this.props.height,
                width: this.props.width
            };

            var Children = _react2.default.Children.map(this.props.children, function (item) {
                return _react2.default.cloneElement(item, {
                    minHeight: _this2.props.height,
                    zIndex: _this2.props.zIndex + 1,
                    vertical: _this2.props.vertical
                });
            });

            var caretClass = (0, _classnames2.default)({
                'fa': true,
                'fa-caret-down': this.props.vertical || this.props.zIndex === 0,
                'fa-caret-right': !this.props.vertical && this.props.zIndex > 0
            });

            var subList = {
                top: this.props.zIndex === 0 ? '100%' : 0,
                left: this.props.zIndex === 0 ? 0 : '100%',
                position: this.props.vertical ? 'relative' : 'absolute',
                paddingLeft: this.props.vertical ? 15 : null
            };

            if (this.props.vertical) {
                subList.top = null;
                subList.left = null;
            }

            return _react2.default.createElement(
                'div',
                { style: containerStyle,
                    className: className,
                    onMouseEnter: this.handleMouseEnter.bind(this),
                    onMouseLeave: this.handleMouseLeave.bind(this) },
                _react2.default.createElement(
                    'div',
                    { onClick: this.handleClick.bind(this),
                        className: 'text-label',
                        style: containerStyle },
                    this.props.title,
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
}(_react2.default.Component);

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