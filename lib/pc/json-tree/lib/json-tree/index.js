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

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fitTree = require('fit-tree');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stringRender = function stringRender(obj, key) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'span',
            { className: 'key' },
            key
        ),
        ':',
        _react2.default.createElement(
            'span',
            { className: 'string' },
            ' "',
            obj[key],
            '"'
        )
    );
};

var numberRender = function numberRender(obj, key) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'span',
            { className: 'key' },
            key
        ),
        ':',
        _react2.default.createElement(
            'span',
            { className: 'number' },
            ' ',
            obj[key]
        )
    );
};

var boolRender = function boolRender(obj, key) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'span',
            { className: 'key' },
            key
        ),
        ':',
        _react2.default.createElement(
            'span',
            { className: 'bool' },
            ' ',
            obj[key] ? 'true' : 'false'
        )
    );
};

var arrayRender = function arrayRender(obj, key) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'span',
            { className: 'key' },
            key
        ),
        ':',
        _react2.default.createElement(
            'span',
            { className: 'array' },
            ' Array[',
            obj[key].length,
            ']'
        )
    );
};

var objectRender = function objectRender(obj, key) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'span',
            { className: 'key' },
            key
        ),
        ':',
        _react2.default.createElement(
            'span',
            { className: 'object' },
            ' Object'
        )
    );
};

var parseJson = function parseJson(obj) {
    return (0, _keys2.default)(obj).map(function (key, index) {
        switch (obj[key].constructor.name) {
            case 'String':
                return _react2.default.createElement(_fitTree.TreeNode, { render: stringRender.bind(undefined, obj, key),
                    key: index });
                break;
            case 'Number':
                return _react2.default.createElement(_fitTree.TreeNode, { render: numberRender.bind(undefined, obj, key),
                    key: index });
                break;
            case 'Boolean':
                return _react2.default.createElement(_fitTree.TreeNode, { render: boolRender.bind(undefined, obj, key),
                    key: index });
                break;
            case 'Array':
                var arrayChilds = parseJson(obj[key]);
                return _react2.default.createElement(
                    _fitTree.TreeNode,
                    { render: arrayRender.bind(undefined, obj, key),
                        key: index },
                    arrayChilds
                );
                break;
            case 'Object':
                var objChilds = parseJson(obj[key]);
                return _react2.default.createElement(
                    _fitTree.TreeNode,
                    { render: objectRender.bind(undefined, obj, key),
                        key: index },
                    objChilds
                );
                break;
        }
    });
};

var JsonTree = function (_React$Component) {
    (0, _inherits3.default)(JsonTree, _React$Component);

    function JsonTree(props) {
        (0, _classCallCheck3.default)(this, JsonTree);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(JsonTree).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(JsonTree, [{
        key: 'render',
        value: function render() {
            var TreeContent = parseJson(this.props.json);
            console.log(TreeContent);

            return _react2.default.createElement(
                'div',
                { className: 'lib-pc-json-tree-lib-json-tree' },
                _react2.default.createElement(
                    _fitTree.Tree,
                    null,
                    TreeContent
                )
            );
        }
    }]);
    return JsonTree;
}(_react2.default.Component);

exports.default = JsonTree;

JsonTree.defaultProps = {
    json: {}
};