'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_React$Component) {
    _inherits(Sidebar, _React$Component);

    function Sidebar(props) {
        _classCallCheck(this, Sidebar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sidebar).call(this, props));

        _this.state = {
            direction: _this.props.direction || _this.props.sectionDirection || 'left',
            top: _this.props.top || _this.props.headerHeight || 0,
            bottom: _this.props.bottom || _this.props.footerHeight || 0
        };
        return _this;
    }

    _createClass(Sidebar, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            this.props.store.subscribe(function () {
                var layout = _this2.props.store.getState().Layout;

                _this2.setState({
                    top: layout.headerHeight || 0,
                    bottom: layout.footerHeight || 0
                });
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.store.dispatch((0, _actions.setSiderBarWidth)(this.props.width || this.props.siderbarWidth));
            this.props.store.dispatch((0, _actions.setSiderbarDirection)(this.props.direction || this.props.sectionDirection));
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                position: 'absolute',
                left: this.state.direction === 'left' ? this.props.left || 0 : this.props.left || 'auto',
                right: this.state.direction === 'right' ? this.props.right || 0 : this.props.right || 'auto',
                top: this.props.top || this.state.top,
                bottom: this.props.bottom || this.state.bottom,
                overflow: 'auto',
                width: this.props.width || this.props.siderbarWidth
            };

            return _react2.default.createElement(
                'div',
                { style: style },
                this.props.children
            );
        }
    }]);

    return Sidebar;
}(_react2.default.Component);

exports.default = Sidebar;

Sidebar.defaultProps = {
    // @desc 宽度
    width: 100,

    // @desc 方向,左边或者右边
    // @enum left right
    direction: 'left'
};