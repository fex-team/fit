'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fitTree = require('fit-tree');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    return Object.keys(obj).map(function (key, index) {
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

var JsonTree = (function (_React$Component) {
    _inherits(JsonTree, _React$Component);

    function JsonTree(props) {
        _classCallCheck(this, JsonTree);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JsonTree).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(JsonTree, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var root = _props.root;
            var json = _props.json;

            var others = _objectWithoutProperties(_props, ['className', 'root', 'json']);

            var classes = (0, _classnames2.default)(_defineProperty({
                '_namespace': true
            }, className, className));

            var TreeContent = undefined;

            if (root) {
                TreeContent = parseJson({
                    root: json
                });
            } else {
                TreeContent = parseJson(json);
            }

            return _react2.default.createElement(
                'div',
                _extends({}, others, { className: classes }),
                _react2.default.createElement(
                    _fitTree.Tree,
                    null,
                    TreeContent
                )
            );
        }
    }]);

    return JsonTree;
})(_react2.default.Component);

exports.default = JsonTree;

JsonTree.defaultProps = {
    // @desc json对象
    json: {},

    // @desc 是否有默认root级
    root: false
};