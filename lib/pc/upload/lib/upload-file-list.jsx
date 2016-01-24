"use strict";

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');

var UploadFileList = function (_React$Component) {
    (0, _inherits3.default)(UploadFileList, _React$Component);

    function UploadFileList() {
        var _Object$getPrototypeO;

        (0, _classCallCheck3.default)(this, UploadFileList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(UploadFileList)).call.apply(_Object$getPrototypeO, [this].concat(args)));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(UploadFileList, [{
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
                return React.createElement(
                    'div',
                    { key: info.name, style: picItemStyle },
                    React.createElement(
                        'div',
                        { style: closeBtnStyle },
                        'x'
                    ),
                    React.createElement(
                        'div',
                        { style: { display: 'table' } },
                        React.createElement(
                            'div',
                            { style: {
                                    display: 'table-cell',
                                    border: '1px solid #edf1f2'
                                } },
                            React.createElement('div', { style: picItemImageStyle })
                        ),
                        React.createElement(
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
            return React.createElement(
                'div',
                { style: textItemStyle, key: info.name },
                React.createElement(
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

            return React.createElement(
                'div',
                null,
                this.props.list.map(function (info) {
                    return _this2.textItemRender(info);
                })
            );
        }
    }]);
    return UploadFileList;
}(React.Component);

UploadFileList.defaultProps = {
    type: 'text'
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UploadFileList;