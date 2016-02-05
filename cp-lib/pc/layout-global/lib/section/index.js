'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Section = function (_React$Component) {
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

            this.props.store.subscribe(function () {
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
        key: 'render',
        value: function render() {
            var style = {
                position: 'absolute',
                top: this.props.top || this.state.top,
                bottom: this.props.bottom || this.state.bottom,
                left: this.props.left || this.state.left,
                right: this.props.right || this.state.right || 0
            };

            return _react2.default.createElement(
                'div',
                { className: 'lib-pc-layout-global-lib-section',
                    style: style },
                this.props.children
            );
        }
    }]);

    return Section;
}(_react2.default.Component);

exports.default = Section;