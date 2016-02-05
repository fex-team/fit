'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _collPanel = require('../coll-panel');

var _collPanel2 = _interopRequireDefault(_collPanel);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrayOrStrEqual = function arrayOrStrEqual(item, arr) {
    if (_lodash2.default.isArray(arr)) {
        return _lodash2.default.includes(arr, item);
    }
    return item === arr;
};

var Collapse = function (_React$Component) {
    _inherits(Collapse, _React$Component);

    function Collapse(props) {
        _classCallCheck(this, Collapse);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Collapse).call(this, props));

        var activeKey = _this.props.activeKey || _this.props.defaultActiveKey;
        if (!_this.props.accordion && !_lodash2.default.isArray(activeKey)) {
            activeKey = [activeKey];
        }

        _this.state = {
            activeKey: activeKey
        };
        return _this;
    }

    _createClass(Collapse, [{
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