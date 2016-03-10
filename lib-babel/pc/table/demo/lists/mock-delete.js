'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fitTable = require('fit-table');

var _fitTable2 = _interopRequireDefault(_fitTable);

var _fitButton = require('fit-button');

var _fitButton2 = _interopRequireDefault(_fitButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tableInstance = undefined;

var tableConfig = {
    fields: [{
        key: 'id',
        value: 'ID'
    }, {
        key: 'name',
        value: '用户名'
    }, {
        key: 'department',
        value: '部门'
    }, {
        key: 'age',
        value: '年龄'
    }],
    title: '表格',
    selector: {
        type: 'checkbox'
    },
    datas: [{
        id: 0,
        name: '郭富城',
        department: '无人车事业部',
        age: 32
    }, {
        id: 1,
        name: '陈冠希',
        department: '云计算部',
        age: 26
    }, {
        id: 2,
        name: '张学友',
        department: '大数据部',
        age: 36
    }],
    ref: function ref(_ref) {
        tableInstance = _ref;
    },
    extend: function extend(table) {
        function Delete() {
            var currentSelectRows = table.getCurrentSelectRows();
            table.mockDeleteData(currentSelectRows);

            setTimeout(function () {
                console.log(table.getData());
                console.log(tableInstance.extendInfo.getData());
            });
        }

        return _react2.default.createElement(
            _fitButton2.default,
            { onClick: Delete },
            '删除'
        );
    }
};

var Demo = (function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo(props) {
        _classCallCheck(this, Demo);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).call(this, props));
    }

    _createClass(Demo, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_fitTable2.default, tableConfig);
        }
    }]);

    return Demo;
})(_react2.default.Component);

exports.default = Demo;