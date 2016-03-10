'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fitCollapse = require('fit-collapse');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var text = '百度百科是百度公司推出的一部内容开放、自由的网络百科全书平台，其测试版于2006年4月20日上线，正式版在2008年4月21日发布，截止2015年5月，百度百科已经收录了超过1155万的优质词条，用户数高达540万人以上，几乎涵盖了所有已知的知识领域。';

var Demo = (function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo() {
        _classCallCheck(this, Demo);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).apply(this, arguments));
    }

    _createClass(Demo, [{
        key: 'callback',
        value: function callback(key) {
            console.log(key);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _fitCollapse.Collapse,
                { defaultActiveKey: ['1', '2'],
                    onChange: this.callback.bind(this) },
                _react2.default.createElement(
                    _fitCollapse.CollPanel,
                    { header: 'panel header 1',
                        key: '1' },
                    text
                ),
                _react2.default.createElement(
                    _fitCollapse.CollPanel,
                    { header: 'panel header 2',
                        key: '2' },
                    text
                ),
                _react2.default.createElement(
                    _fitCollapse.CollPanel,
                    { header: 'panel header 3',
                        key: '3' },
                    text
                )
            );
        }
    }]);

    return Demo;
})(_react2.default.Component);

exports.default = Demo;