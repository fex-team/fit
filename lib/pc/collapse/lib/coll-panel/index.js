'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollPanel = function (_React$Component) {
    _inherits(CollPanel, _React$Component);

    function CollPanel(props) {
        _classCallCheck(this, CollPanel);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CollPanel).call(this, props));

        _this.state = {
            contentHeight: 0,
            finish: true
        };

        _this.toggleTimeout = null;
        return _this;
    }

    _createClass(CollPanel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.$dom = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this));
            this.setState({
                contentHeight: this.$dom.find('#content').outerHeight()
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            this.setState({
                contentHeight: this.$dom.find('#content').outerHeight()
            });
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            var _this2 = this;

            this.setState({
                finish: false
            }, function () {
                _this2.props.onChange(_this2.props._key);
            });

            if (this.toggleTimeout) {
                clearTimeout(this.toggleTimeout);
            }

            this.toggleTimeout = setTimeout(function () {
                _this2.setState({
                    finish: true
                });
            }, 300);
        }
    }, {
        key: 'render',
        value: function render() {
            var panelCollapseClass = (0, _classnames2.default)({
                'panel-collapse': true,
                'collapse': true,
                'in': true,
                'show': this.props.active
            });

            var rightChevronClass = (0, _classnames2.default)({
                'fa': true,
                'fa-chevron-right': true,
                'rotate-pre': true,
                'rotate': this.props.active
            });

            // 设置height属性
            var height = null;
            height = this.props.active ? this.state.contentHeight : null;
            if (this.state.finish) {
                if (this.props.active) {
                    height = 'auto';
                } else {
                    height = 0;
                }
            }
            var contentContainerStyle = {
                height: height
            };

            this.height = height;

            return _react2.default.createElement(
                'div',
                { className: 'lib-pc-collapse-lib-coll-panel panel panel-default' },
                _react2.default.createElement(
                    'div',
                    { className: 'panel-heading',
                        onClick: this.handleClick.bind(this) },
                    _react2.default.createElement('i', { className: rightChevronClass,
                        style: { marginRight: 5 } }),
                    this.props.header
                ),
                _react2.default.createElement(
                    'div',
                    { className: panelCollapseClass,
                        style: contentContainerStyle },
                    _react2.default.createElement(
                        'div',
                        { style: this.props.style,
                            id: 'content' },
                        this.props.children
                    )
                )
            );
        }
    }]);

    return CollPanel;
}(_react2.default.Component);

exports.default = CollPanel;

CollPanel.defaultProps = {
    active: false,
    key: null
};