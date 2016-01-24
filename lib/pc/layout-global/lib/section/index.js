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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = function (_React$Component) {
    (0, _inherits3.default)(Section, _React$Component);

    function Section(props) {
        (0, _classCallCheck3.default)(this, Section);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Section).call(this, props));

        _this.state = {
            direction: _this.props.sectionDirection || 'left',
            top: _this.props.headerHeight || 0,
            left: _this.props.siderbarWidth || 0,
            right: 0,
            bottom: _this.props.footerHeight || 0
        };
        return _this;
    }

    (0, _createClass3.default)(Section, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            console.log('section');
            this.props.store.subscribe(function () {
                var layout = _this2.props.store.getState().Layout;

                console.log(layout);

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
                overflow: 'auto',
                left: this.props.left || this.state.left,
                right: this.props.right || this.state.right || 0
            };

            return _react2.default.createElement(
                'div',
                { style: style },
                this.props.children
            );
        }
    }]);
    return Section;
}(_react2.default.Component);

exports.default = Section;