'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UploadFileList = function (_React$Component) {
    _inherits(UploadFileList, _React$Component);

    function UploadFileList() {
        var _Object$getPrototypeO;

        _classCallCheck(this, UploadFileList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(UploadFileList)).call.apply(_Object$getPrototypeO, [this].concat(args)));

        _this.state = {};
        return _this;
    }

    _createClass(UploadFileList, [{
        key: 'textItemRender',
        value: function textItemRender(info) {
            var closeBtnStyle = {
                fontSize: 12,
                float: 'right',
                marginLeft: 5,
                color: '#98a6ad',
                cursor: 'pointer'
            };
            if (this.props.type === 'picture') {
                var picItemStyle = {
                    padding: 8,
                    border: '1px solid #edf1f2',
                    margin: '5px 0'
                };
                var picItemImageStyle = {
                    backgroundImage: 'url(' + info.url + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: 40,
                    height: 40
                };
                return _react2.default.createElement(
                    'div',
                    { key: info.name,
                        style: picItemStyle },
                    _react2.default.createElement(
                        'div',
                        { style: closeBtnStyle },
                        'x'
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: { display: 'table' } },
                        _react2.default.createElement(
                            'div',
                            { style: {
                                    display: 'table-cell',
                                    border: '1px solid #edf1f2'
                                } },
                            _react2.default.createElement('div', { style: picItemImageStyle })
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: {
                                    display: 'table-cell',
                                    verticalAlign: 'middle',
                                    fontSize: 12,
                                    padding: '0 5px'
                                } },
                            info.name
                        )
                    )
                );
            }
            var textItemStyle = {
                color: '#333',
                fontSize: 12,
                display: 'inline-block',
                padding: '5px 8px 5px 8px',
                backgroundColor: '#edf1f2',
                borderRadius: 50,
                margin: '10px 5px'
            };
            return _react2.default.createElement(
                'div',
                { style: textItemStyle,
                    key: info.name },
                _react2.default.createElement(
                    'div',
                    { style: closeBtnStyle },
                    'x'
                ),
                info.name
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                this.props.list.map(function (info) {
                    return _this2.textItemRender(info);
                })
            );
        }
    }]);

    return UploadFileList;
}(_react2.default.Component);

UploadFileList.defaultProps = {
    type: 'text'
};

exports.default = UploadFileList;