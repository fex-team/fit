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

var TreeNode = function (_React$Component) {
    _inherits(TreeNode, _React$Component);

    function TreeNode(props) {
        _classCallCheck(this, TreeNode);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TreeNode).call(this, props));

        _this.state = {
            showChildren: _this.props.defaultExpendAll || _this.props.showChildren
        };
        return _this;
    }

    _createClass(TreeNode, [{
        key: 'handleTitleClick',
        value: function handleTitleClick() {
            this.setState({
                showChildren: !this.state.showChildren
            });
            this.props.onClick(this.props.title);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var childrenStyle = {
                'display': this.state.showChildren ? 'block' : null
            };

            var titleCaretClass = (0, _classnames2.default)({
                'fa': true,
                'caret-left': true,
                'fa-caret-right': !this.state.showChildren,
                'fa-caret-down': this.state.showChildren
            });

            var Children = _react2.default.Children.map(this.props.children, function (item) {
                return _react2.default.cloneElement(item, {
                    defaultExpendAll: _this2.props.defaultExpendAll
                });
            });

            return _react2.default.createElement(
                'div',
                { className: 'lib-pc-tree-lib-tree-node' },
                _react2.default.createElement(
                    'div',
                    { onClick: this.handleTitleClick.bind(this),
                        className: 'title' },
                    _react2.default.Children.count(this.props.children) > 0 ? _react2.default.createElement(
                        'div',
                        { className: 'title-caret' },
                        _react2.default.createElement('i', { className: titleCaretClass })
                    ) : _react2.default.createElement('div', { className: 'empty-caret' }),
                    this.props.title || this.props.render()
                ),
                _react2.default.createElement(
                    'div',
                    { style: childrenStyle,
                        className: 'children' },
                    Children
                )
            );
        }
    }]);

    return TreeNode;
}(_react2.default.Component);

exports.default = TreeNode;

TreeNode.defaultProps = {
    title: '',
    showChildren: false,
    defaultExpendAll: false,
    render: function render() {},
    onClick: function onClick(title) {}
};