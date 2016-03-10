'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fitTable = require('fit-table');

var _fitTable2 = _interopRequireDefault(_fitTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var info = {
    fields: [{
        key: 'id',
        value: '产品编号'
    }, {
        key: 'yesterday',
        value: '昨日数据'
    }, {
        key: 'today',
        value: '今日数据'
    }, {
        key: 'diff',
        value: '增幅'
    }],
    get: {
        url: '/api/table/form',
        method: 'get',
        beforeSend: function beforeSend(info, currentPage, response) {
            info.page = currentPage;
            return info;
        },
        success: function success(res, pagination) {
            pagination.allPage = res['all_page'];
            res['data'].map(function (item) {
                var diff = (item.today - item.yesterday) / item.yesterday * 100;
                item.diff = diff.toFixed(2) + '%';
            });
            return res['data'];
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
        key: 'handleClick',
        value: function handleClick() {
            this.refs.table.extendInfo.jump(3);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_fitTable2.default, _extends({ ref: 'table' }, info)),
                _react2.default.createElement(
                    'div',
                    { onClick: this.handleClick.bind(this) },
                    'aa'
                )
            );
        }
    }]);

    return Demo;
})(_react2.default.Component);

exports.default = Demo;