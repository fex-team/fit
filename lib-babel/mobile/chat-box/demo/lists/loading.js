'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fitButton = require('fit-button');

var _fitenChat = require('fiten-chat');

var _fitenChat2 = _interopRequireDefault(_fitenChat);

var _fitenChatBox = require('fiten-chat-box');

var _fitenChatBox2 = _interopRequireDefault(_fitenChatBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demo = (function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo(props) {
        _classCallCheck(this, Demo);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).call(this, props));
    }

    _createClass(Demo, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.index = 0;
        }
    }, {
        key: 'createDatas',
        value: function createDatas() {
            var datas = [];
            var count = Math.round(Math.random() * 50) + 50;
            while (count > 0) {
                var random = Math.round(Math.random() * 50) + 1;
                var str = 'asd';
                for (var i = 0; i < random; i++) {
                    str += 'asd';
                }
                datas.push({
                    name: 'test',
                    content: this.index++ + ',' + str
                });
                count--;
            }
            return datas;
        }
    }, {
        key: 'handleAdd',
        value: function handleAdd(toBottom) {
            var datas = this.createDatas();
            this.refs['chatBox'].append(datas, toBottom);
        }
    }, {
        key: 'renderItem',
        value: function renderItem(item, index) {
            return _react2.default.createElement(_fitenChat2.default, { key: index,
                name: item.name,
                content: item.content,
                portrait: 'http://himg.bdimg.com/sys/portrait/item/052ee28496e7bfb1e7be8ae7bebde5a4a7e7a9ba4620.jpg' });
        }
    }, {
        key: 'handleHitTop',
        value: function handleHitTop() {
            var datas = this.createDatas();
            this.refs['chatBox'].prepend(datas);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_fitenChatBox2.default, {
                    height: '300',
                    renderItem: this.renderItem.bind(this),
                    backBottom: true,
                    fullScreen: true,
                    onHitTop: this.handleHitTop.bind(this),
                    ref: 'chatBox' }),
                _react2.default.createElement(
                    _fitButton.ButtonGroup,
                    null,
                    _react2.default.createElement(
                        _fitButton.Button,
                        { onClick: this.handleAdd.bind(this, false),
                            style: { marginTop: 10 } },
                        '新增50~100个'
                    ),
                    _react2.default.createElement(
                        _fitButton.Button,
                        { onClick: this.handleAdd.bind(this, true),
                            style: { marginTop: 10 } },
                        '新增50~100（滚到底部）'
                    )
                )
            );
        }
    }]);

    return Demo;
})(_react2.default.Component);

exports.default = Demo;