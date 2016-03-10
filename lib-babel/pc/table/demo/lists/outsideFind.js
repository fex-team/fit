'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fitTable = require('fit-table');

var _fitTable2 = _interopRequireDefault(_fitTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var info = {
	fields: [{
		key: 'id',
		value: 'ID'
	}, {
		key: 'name',
		value: '姓名'
	}, {
		key: 'age',
		value: '年龄'
	}, {
		key: 'free',
		value: '休假日期'
	}],
	get: {
		url: '/api/table/all',
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
	},
	finder: [{
		label: 'ID',
		key: 'id',
		type: 'text',
		defaultValue: '3',
		beforeSend: function beforeSend(key, value) {
			return _defineProperty({}, key, '_' + value);
		}
	}, {
		label: '休假日期',
		key: 'free',
		type: 'select',
		select: [{
			key: 0,
			value: '星期一'
		}, {
			key: 2,
			value: '星期二'
		}, {
			key: 3,
			value: '星期三'
		}, {
			key: 4,
			value: '星期四'
		}, {
			key: 5,
			value: '星期五'
		}, {
			key: 6,
			value: '星期六'
		}, {
			key: 7,
			value: '星期日'
		}],
		defaultValue: 0
	}, {
		label: '时间',
		key: 'free',
		type: 'time',
		format: 'YYYY-MM-DD'
	}, {
		label: '时间',
		key: 'free',
		type: 'date',
		format: 'YYYY-MM-DD'
	}, {
		type: 'enum',
		enum: [{
			label: '时间',
			key: 'time',
			type: 'date',
			format: 'YYYY/MM/DD HH:mm:ss',
			props: {
				showTime: true,
				type: 'dateRange'
			},
			beforeSend: function beforeSend(key, value) {
				var _ref2;

				return _ref2 = {}, _defineProperty(_ref2, key + '_start', value.start), _defineProperty(_ref2, key + '_end', value.end), _ref2;
			}
		}, {
			label: '描述',
			key: 'aaa',
			type: 'text',
			beforeSend: function beforeSend(key, value) {
				return _defineProperty({}, key, value);
			}
		}, {
			label: '可选日期',
			key: 'date',
			type: 'select',
			select: [{
				key: 1,
				value: '星期一'
			}, {
				key: 2,
				value: '星期二'
			}, {
				key: 3,
				value: '星期三'
			}, {
				key: 4,
				value: '星期四'
			}, {
				key: 5,
				value: '星期五'
			}, {
				key: 6,
				value: '星期六'
			}, {
				key: 7,
				value: '星期日'
			}],
			defaultValue: 3
		}],
		defaultValue: 'date'
	}],
	finderSelector: '#out-dom'
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
				_react2.default.createElement('div', { id: 'out-dom', style: {
						border: '2px solid #000',
						paddingBottom: 10
					} }),
				_react2.default.createElement(_fitTable2.default, info)
			);
		}
	}]);

	return Demo;
})(_react2.default.Component);

exports.default = Demo;