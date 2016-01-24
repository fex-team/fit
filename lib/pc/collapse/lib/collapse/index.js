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

var _panel = require('../panel');

var _panel2 = _interopRequireDefault(_panel);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrayOrStrEqual = function arrayOrStrEqual(item, arr) {
    if (_lodash2.default.isArray(arr)) {
        return _lodash2.default.includes(arr, item);
    }
    return item === arr;
};

var Collapse = function (_React$Component) {
    (0, _inherits3.default)(Collapse, _React$Component);

    function Collapse(props) {
        (0, _classCallCheck3.default)(this, Collapse);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Collapse).call(this, props));

        var activeKey = _this.props.activeKey || _this.props.defaultActiveKey;
        if (!_this.props.accordion && !_lodash2.default.isArray(activeKey)) {
            activeKey = [activeKey];
        }

        _this.state = {
            activeKey: activeKey
        };
        return _this;
    }

    (0, _createClass3.default)(Collapse, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('activeKey' in nextProps) {
                this.setState({
                    activeKey: nextProps.activeKey
                });
            }
        }
    }, {
        key: 'handleChange',
        value: function handleChange(key) {
            var _this2 = this;

            var activeKey = this.state.activeKey;
            if (!this.props.accordion) {
                if (_lodash2.default.isArray(activeKey)) {
                    if (_lodash2.default.includes(activeKey, key)) {
                        _lodash2.default.pull(activeKey, key);
                    } else {
                        activeKey.push(key);
                    }
                } else {
                    activeKey = key;
                }
            } else {
                if (activeKey === key) {
                    activeKey = null;
                } else {
                    activeKey = key;
                }
            }

            this.setState({
                activeKey: activeKey
            }, function () {
                _this2.props.onChange(key);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var Children = _react2.default.Children.map(this.props.children, function (item) {
                return _react2.default.cloneElement(item, {
                    active: arrayOrStrEqual(item.key, _this3.state.activeKey),
                    onChange: _this3.handleChange.bind(_this3),
                    key: item.key,
                    _key: item.key
                });
            });

            return _react2.default.createElement(
                'div',
                { style: this.props.style },
                Children
            );
        }
    }]);
    return Collapse;
}(_react2.default.Component);

exports.default = Collapse;

Collapse.defaultProps = {
    accordion: false,
    onChange: function onChange(key) {}
};