'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fitInput = require('fit-input');

var _fitInput2 = _interopRequireDefault(_fitInput);

var _fitTable = require('fit-table');

var _fitTable2 = _interopRequireDefault(_fitTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var addInfo = {
    fields: [{
        key: 'value',
        value: '元字符',
        add: true
    }, {
        key: 'description',
        value: '描述',
        add: true
    }],
    get: {
        url: '/api/table/regex',
        method: 'get',
        beforeSend: function beforeSend(info, currentPage) {
            info.page = currentPage;
            return info;
        },
        success: function success(res, pagination) {
            pagination.next = res['has_next'];
            return res['data'];
        }
    },
    add: {
        url: '/api/table/regex/add',
        method: 'post',
        beforeSend: function beforeSend(params) {
            return params;
        },
        success: function success(res) {
            return res.ok === true;
        }
    }
};

var customAddInfo = {
    fields: [{
        key: 'value',
        value: '元字符',
        add: true
    }, {
        key: 'description',
        value: '描述',
        add: true
    }],
    get: {
        url: '/api/table/regex',
        method: 'get',
        beforeSend: function beforeSend(info, currentPage) {
            info.page = currentPage;
            return info;
        },
        success: function success(res, pagination) {
            pagination.next = res['has_next'];
            return res['data'];
        }
    },
    add: {
        url: '/api/table/regex/add',
        method: 'post',
        beforeSend: function beforeSend() {
            return {
                a: 1,
                b: 2
            };
        },
        success: function success(res) {
            return {
                ok: res.ok,
                message: res.errmsg
            };
        },
        render: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_fitInput2.default, { label: '姓名' }),
                _react2.default.createElement(_fitInput2.default, { label: '年龄',
                    style: { marginTop: 10 } }),
                _react2.default.createElement(_fitInput2.default, { label: '职业',
                    style: { marginTop: 10 } })
            );
        }
    }
};

var Demo = (function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo() {
        _classCallCheck(this, Demo);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).apply(this, arguments));
    }

    _createClass(Demo, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_fitTable2.default, addInfo),
                _react2.default.createElement(_fitTable2.default, customAddInfo)
            );
        }
    }]);

    return Demo;
})(_react2.default.Component);

exports.default = Demo;