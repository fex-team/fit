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

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeNode = function (_React$Component) {
    (0, _inherits3.default)(TreeNode, _React$Component);

    function TreeNode(props) {
        (0, _classCallCheck3.default)(this, TreeNode);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TreeNode).call(this, props));

        _this.state = {
            showChildren: _this.props.defaultExpendAll || _this.props.showChildren
        };
        return _this;
    }

    (0, _createClass3.default)(TreeNode, [{
        key: 'handleTitleClick',
        value: function handleTitleClick() {
            this.setState({
                showChildren: !this.state.showChildren
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var childrenStyle = {
                'display': this.state.showChildren ? 'block' : null
            };

            var titleCaretClass = classNames({
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
    render: function render() {}
};