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

var Section = (function (_React$Component) {
    _inherits(Section, _React$Component);

    function Section(props) {
        _classCallCheck(this, Section);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Section).call(this, props));

        _this.state = {
            direction: _this.props.sectionDirection || 'left',
            top: _this.props.headerHeight || 0,
            left: _this.props.siderbarWidth || 0,
            right: 0,
            bottom: _this.props.footerHeight || 0
        };
        return _this;
    }

    _createClass(Section, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            this.unsubscribe = this.props.store.subscribe(function () {
                var layout = _this2.props.store.getState().Layout;

                _this2.setState({
                    top: layout.headerHeight || 0,
                    bottom: layout.footerHeight || 0,
                    left: layout.siderbarDirection === 'left' ? layout.siderbarWidth : 0,
                    right: layout.siderbarDirection === 'left' ? 0 : layout.siderbarWidth,
                    direction: layout.siderbarDirection
                });
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.unsubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var top = _props.top;
            var bottom = _props.bottom;
            var left = _props.left;
            var right = _props.right;
            var children = _props.children;

            var others = _objectWithoutProperties(_props, ['className', 'top', 'bottom', 'left', 'right', 'children']);

            var classes = (0, _classnames2.default)(_defineProperty({
                '_namespace': true
            }, className, className));

            var style = {
                position: 'absolute',
                top: top || this.state.top,
                bottom: bottom || this.state.bottom,
                left: left || this.state.left,
                right: right || this.state.right || 0
            };

            others.style = _extends({}, style, others.style);

            return _react2.default.createElement(
                'div',
                _extends({}, others, { className: classes }),
                children
            );
        }
    }]);

    return Section;
})(_react2.default.Component);

exports.default = Section;