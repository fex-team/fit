'use strict';

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

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = function (_React$Component) {
    (0, _inherits3.default)(Sidebar, _React$Component);

    function Sidebar(props) {
        (0, _classCallCheck3.default)(this, Sidebar);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Sidebar).call(this, props));

        _this.state = {
            direction: _this.props.direction || _this.props.sectionDirection || 'left',
            top: _this.props.top || _this.props.headerHeight || 0,
            bottom: _this.props.bottom || _this.props.footerHeight || 0
        };
        return _this;
    }

    (0, _createClass3.default)(Sidebar, [{
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
            this.props.store.dispatch((0, _actions.setSiderBarWidth)(this.props.width || this.props.siderbarWidth || 100));
            this.props.store.dispatch((0, _actions.setSiderbarDirection)(this.props.direction || this.props.sectionDirection || 'left'));
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
                width: this.props.width || this.props.siderbarWidth || 100
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