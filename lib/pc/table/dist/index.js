(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("classnames"), require("jquery"), require("lodash"), require("fit-pagination"), require("fit-checkbox"), require("fit-radio"), require("fit-input"), require("fit-button"), require("fit-select"), require("fit-modal"), require("fit-style"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "classnames", "jquery", "lodash", "fit-pagination", "fit-checkbox", "fit-radio", "fit-input", "fit-button", "fit-select", "fit-modal", "fit-style"], factory);
	else if(typeof exports === 'object')
		exports["fit-table"] = factory(require("react"), require("react-dom"), require("classnames"), require("jquery"), require("lodash"), require("fit-pagination"), require("fit-checkbox"), require("fit-radio"), require("fit-input"), require("fit-button"), require("fit-select"), require("fit-modal"), require("fit-style"));
	else
		root["fit-table"] = factory(root["react"], root["react-dom"], root["classnames"], root["jquery"], root["lodash"], root["fit-pagination"], root["fit-checkbox"], root["fit-radio"], root["fit-input"], root["fit-button"], root["fit-select"], root["fit-modal"], root["fit-style"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_25__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _table = __webpack_require__(2);

	var _table2 = _interopRequireDefault(_table);

	__webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _table2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(4);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _jquery = __webpack_require__(6);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _lodash = __webpack_require__(7);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _fitPagination = __webpack_require__(8);

	var _fitPagination2 = _interopRequireDefault(_fitPagination);

	var _fitCheckbox = __webpack_require__(9);

	var _fitCheckbox2 = _interopRequireDefault(_fitCheckbox);

	var _fitRadio = __webpack_require__(10);

	var _fitRadio2 = _interopRequireDefault(_fitRadio);

	var _fitInput = __webpack_require__(11);

	var _fitInput2 = _interopRequireDefault(_fitInput);

	var _fitButton = __webpack_require__(12);

	var _fitButton2 = _interopRequireDefault(_fitButton);

	var _finder = __webpack_require__(13);

	var _finder2 = _interopRequireDefault(_finder);

	var _add = __webpack_require__(19);

	var _add2 = _interopRequireDefault(_add);

	__webpack_require__(23);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// 判断当前行是否在选择的行信息里
	var inRowList = function inRowList(info, index, list) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var val = _step.value;

	            if (index === val.index && _lodash2.default.isEqual(info, val.info)) {
	                return true;
	            }
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    return false;
	};

	var Table = (function (_React$Component) {
	    _inherits(Table, _React$Component);

	    function Table(props) {
	        _classCallCheck(this, Table);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Table).call(this, props));

	        _this.state = {
	            datas: [],
	            paginOpts: {},
	            currentPage: 1,
	            loading: false,
	            fields: _lodash2.default.cloneDeep(_this.props.fields),
	            info: {
	                message: '',
	                type: ''
	            },

	            // 当前排序的key
	            sortKey: '',

	            // 当前排序状态 （不排序,正序,倒序）
	            sortStatu: null,

	            // 行选择模式下选择的行信息
	            selectRowList: [],

	            // 当前显示input框的位置
	            showInputPosition: {
	                x: -1,
	                y: -1
	            },

	            // 编辑框内容
	            editValue: null
	        };

	        // dom任意位置点击
	        _this.handleDocumentClick = function (event) {
	            if ((0, _jquery2.default)(_this.dom).find('#edit-input').length === 0) return;
	            if (!_jquery2.default.contains((0, _jquery2.default)(_this.dom).find('#edit-input')[0], event.target)) {
	                _this.setState({
	                    showInputPosition: {
	                        x: -1,
	                        y: -1
	                    },
	                    editValue: null
	                });
	            }
	        };
	        return _this;
	    }

	    _createClass(Table, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props !== nextProps) {
	                this.setState({
	                    fields: _lodash2.default.cloneDeep(nextProps.fields)
	                });
	            }
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var _this2 = this;

	            // 查询请求参数
	            this.searchOpts = {};

	            // 上一个请求返回的内容
	            this.prevResponse = null;

	            // extend获取内容
	            this.extendInfo = {
	                getCurrentSelectRows: function getCurrentSelectRows() {
	                    var selectList = [];
	                    _this2.state.selectRowList.map(function (item) {
	                        selectList.push(item.info);
	                    });
	                    return _lodash2.default.cloneDeep(selectList);
	                },
	                currentPage: function currentPage() {
	                    return _this2.state.currentPage;
	                },
	                jump: function jump(page) {
	                    _this2.updateTable(page);
	                },
	                info: function info(message, type) {
	                    _this2.info(message, type);
	                }
	            };

	            // 是否添加表头
	            if (this.props.selector.type === 'checkbox') {
	                this.state.fields.unshift({
	                    type: 'checkbox'
	                });
	            }
	            if (this.props.selector.type === 'radio') {
	                this.state.fields.unshift({
	                    type: 'radio'
	                });
	            }

	            this.updateTable();
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.dom = _reactDom2.default.findDOMNode(this);
	            (0, _jquery2.default)(document).on('click', this.handleDocumentClick);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            (0, _jquery2.default)(document).off('click', this.handleDocumentClick);
	            if (this.infoSetTimeout) {
	                clearTimeout(this.infoSetTimeout);
	            }
	        }

	        // 提示信息

	    }, {
	        key: 'info',
	        value: function info(message, type) {
	            var _this3 = this;

	            this.setState({
	                info: {
	                    message: message,
	                    type: type
	                }
	            }, function () {
	                if (_this3.infoSetTimeout) {
	                    clearTimeout(_this3.infoSetTimeout);
	                }
	                _this3.infoSetTimeout = setTimeout(function () {
	                    _this3.setState({
	                        info: {
	                            message: '',
	                            type: ''
	                        }
	                    });
	                }, 2000);
	            });
	        }

	        // 刷新数据表

	    }, {
	        key: 'updateTable',
	        value: function updateTable(page) {
	            var _this4 = this;

	            if (this.props.get.url === '') {
	                this.setState({
	                    datas: this.props.datas
	                });
	            } else {
	                _jquery2.default.ajax({
	                    url: this.props.get.url,
	                    method: this.props.get.method,
	                    dataType: this.props.get.dataType || 'json',
	                    beforeSend: function beforeSend() {
	                        _this4.setState({
	                            loading: true
	                        });
	                    },
	                    data: this.props.get.beforeSend(this.searchOpts, page || this.state.currentPage, this.prevResponse)
	                }).done(function (res) {
	                    if (typeof res === 'string') {
	                        res = JSON.parse(res);
	                    }

	                    // 保存当前返回值
	                    _this4.prevResponse = res;

	                    var newPaginOpts = _this4.state.paginOpts;
	                    var newDatas = _this4.props.get.success(res, newPaginOpts);

	                    _this4.setState({
	                        datas: newDatas,
	                        paginOpts: newPaginOpts,
	                        currentPage: page || _this4.state.currentPage,
	                        loading: false,
	                        selectRowList: []
	                    });
	                });
	            }
	        }

	        // 翻页

	    }, {
	        key: 'handleChangePage',
	        value: function handleChangePage(page) {
	            this.updateTable(page);
	        }

	        // radio行选择点击

	    }, {
	        key: 'onTrRadioClick',
	        value: function onTrRadioClick(info, index) {
	            this.setState({
	                selectRowList: [{
	                    info: info,
	                    index: index
	                }]
	            });
	        }

	        // checkbox行选择点击

	    }, {
	        key: 'onTrCheckboxClick',
	        value: function onTrCheckboxClick(info, index, checked) {
	            var newSelectRowList = _lodash2.default.cloneDeep(this.state.selectRowList);

	            if (checked) {
	                newSelectRowList.push({
	                    info: info,
	                    index: index
	                });
	            } else {
	                _lodash2.default.remove(newSelectRowList, function (item) {
	                    if (item.index === index && _lodash2.default.isEqual(item.info, info)) {
	                        return true;
	                    }
	                    return false;
	                });
	            }

	            this.setState({
	                selectRowList: newSelectRowList
	            });
	        }

	        // checkbox行全选

	    }, {
	        key: 'onTrCheckboxSelectAll',
	        value: function onTrCheckboxSelectAll(checked) {
	            var _this5 = this;

	            if (checked) {
	                (function () {
	                    var newSelectRowList = [];
	                    _this5.state.datas.map(function (item, index) {
	                        newSelectRowList.push({
	                            info: item,
	                            index: index
	                        });
	                    });
	                    _this5.setState({
	                        selectRowList: newSelectRowList
	                    });
	                })();
	            } else {
	                this.setState({
	                    selectRowList: []
	                });
	            }
	        }

	        // 查询按钮点击

	    }, {
	        key: 'handleSearch',
	        value: function handleSearch(params) {
	            this.searchOpts = _jquery2.default.extend(this.searchOpts, params);
	            this.updateTable(1);
	        }

	        // 点击删除按钮

	    }, {
	        key: 'handleDelete',
	        value: function handleDelete(colInfo) {
	            var _this6 = this;

	            _jquery2.default.ajax({
	                url: this.props.del.url,
	                method: this.props.del.method,
	                dataType: this.props.get.dataType || 'json',
	                beforeSend: function beforeSend() {
	                    _this6.setState({
	                        loading: true
	                    });
	                },
	                data: this.props.del.beforeSend(colInfo)
	            }).done(function (res) {
	                if (typeof res === 'string') {
	                    res = JSON.parse(res);
	                }

	                var info = _this6.props.del.success(res);

	                _this6.setState({
	                    loading: false
	                });

	                // 如果删除失败,提示错误
	                if (!info.ok) {
	                    _this6.info(info.message, 'danger');
	                    return;
	                }

	                // 删除成功,如果当前页剩余条目只有一个,且不是第一页,刷新到上一页,否则刷新当前页面
	                if (_this6.state.datas.length <= 1 && _this6.state.currentPage > 1) {
	                    _this6.updateTable(_this6.state.currentPage - 1);
	                } else {
	                    _this6.updateTable();
	                }
	            });
	        }

	        // 添加

	    }, {
	        key: 'handleAdd',
	        value: function handleAdd(params, callback) {
	            var _this7 = this;

	            _jquery2.default.ajax({
	                url: this.props.add.url,
	                method: this.props.add.method,
	                data: this.props.add.beforeSend(params),
	                dataType: this.props.get.dataType || 'json'
	            }).done(function (res) {
	                if (typeof res === 'string') {
	                    res = JSON.parse(res);
	                }

	                var info = _this7.props.add.success(res);
	                callback(info);

	                if (info.ok) {
	                    _this7.updateTable();
	                }
	            });
	        }
	    }, {
	        key: 'handleSortChange',
	        value: function handleSortChange(key, isSort) {
	            var _this8 = this;

	            if (!isSort) return;

	            var sortStatu = null;

	            if (key === this.state.sortKey) {
	                switch (this.state.sortStatu) {
	                    case null:
	                        sortStatu = 'asc';
	                        break;
	                    case 'asc':
	                        sortStatu = 'desc';
	                        break;
	                    case 'desc':
	                        sortStatu = null;
	                        break;
	                }
	            } else {
	                sortStatu = 'asc';
	            }

	            this.setState({
	                sortKey: key,
	                sortStatu: sortStatu
	            }, function () {
	                var searchParam = _this8.props.onSort(key, _this8.state.sortStatu);
	                _this8.searchOpts = _jquery2.default.extend(_this8.searchOpts, searchParam);
	                _this8.updateTable(1);
	            });
	        }

	        // 双击某一个条目

	    }, {
	        key: 'handleTdDoubleClick',
	        value: function handleTdDoubleClick(index, elIndex) {
	            var _this9 = this;

	            this.setState({
	                showInputPosition: {
	                    x: index,
	                    y: elIndex
	                }
	            }, function () {
	                (0, _jquery2.default)(_this9.dom).find('#edit-input input').focus();
	            });
	        }

	        // 修改编辑框内容

	    }, {
	        key: 'handleChangeEditValue',
	        value: function handleChangeEditValue(value) {
	            this.setState({
	                editValue: value
	            });
	        }

	        // 编辑点击保存按钮

	    }, {
	        key: 'handleEditSave',
	        value: function handleEditSave(key) {
	            var _this10 = this;

	            _jquery2.default.ajax({
	                url: this.props.edit.url,
	                method: this.props.edit.method,
	                data: this.props.edit.beforeSend(this.state.editValue, key),
	                dataType: this.props.get.dataType || 'json'
	            }).done(function (res) {
	                if (typeof res === 'string') {
	                    res = JSON.parse(res);
	                }

	                var info = _this10.props.edit.success(res);

	                if (info.ok) {
	                    _this10.setState({
	                        showInputPosition: {
	                            x: -1,
	                            y: -1
	                        },
	                        editValue: null
	                    }, function () {
	                        // 刷新当前页
	                        _this10.updateTable();
	                    });
	                } else {
	                    _this10.info(info.message, 'danger');
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this11 = this;

	            var Th = this.state.fields.map(function (item, index) {
	                switch (item.type) {
	                    case 'checkbox':
	                        return _react2.default.createElement(
	                            'th',
	                            { key: index,
	                                style: { width: 100 } },
	                            _react2.default.createElement(
	                                _fitCheckbox2.default,
	                                { onChange: _this11.onTrCheckboxSelectAll.bind(_this11),
	                                    checked: _this11.state.datas.length === _this11.state.selectRowList.length },
	                                '全选'
	                            )
	                        );
	                    case 'radio':
	                        return _react2.default.createElement('th', { key: index,
	                            style: { width: 100 } });
	                    default:
	                        var arrowClass = (0, _classnames2.default)({
	                            'sort-can-use': item.sort && (_this11.state.sortKey !== item.key || _this11.state.sortStatu === null),
	                            'fa': item.sort,
	                            'fa-sort': item.sort && (_this11.state.sortKey !== item.key || _this11.state.sortStatu === null),
	                            'fa-sort-asc': item.sort && _this11.state.sortKey === item.key && _this11.state.sortStatu === 'asc',
	                            'fa-sort-desc': item.sort && _this11.state.sortKey === item.key && _this11.state.sortStatu === 'desc'
	                        });

	                        var Arrow = _react2.default.createElement('i', { className: arrowClass });

	                        var thClass = (0, _classnames2.default)({
	                            'table-th': true,
	                            'sortable': item.sort
	                        });

	                        return _react2.default.createElement(
	                            'th',
	                            { key: index,
	                                className: thClass,
	                                onClick: _this11.handleSortChange.bind(_this11, item.key, item.sort) },
	                            item.value,
	                            item.sort ? Arrow : null
	                        );
	                }
	            });

	            // 如果有删除功能,右侧新增一列
	            if (this.props.del.url !== '') {
	                Th.push(_react2.default.createElement('th', { key: 'delete' }));
	            }

	            var TrTd = this.state.datas.map(function (tr, index) {
	                var Td = _this11.state.fields.map(function (field, fieldIndex) {
	                    if (typeof field.render === 'function') {
	                        return _react2.default.createElement(
	                            'td',
	                            { key: fieldIndex },
	                            field.render(tr, _this11.extendInfo)
	                        );
	                    }

	                    switch (field.type) {
	                        case 'checkbox':
	                            return _react2.default.createElement(
	                                'td',
	                                { key: fieldIndex },
	                                _react2.default.createElement(_fitCheckbox2.default, { onChange: _this11.onTrCheckboxClick.bind(_this11, tr, index),
	                                    checked: inRowList(tr, index, _this11.state.selectRowList) })
	                            );
	                        case 'radio':
	                            return _react2.default.createElement(
	                                'td',
	                                { key: fieldIndex },
	                                _react2.default.createElement(_fitRadio2.default, { onChange: _this11.onTrRadioClick.bind(_this11, tr, index),
	                                    checked: inRowList(tr, index, _this11.state.selectRowList) })
	                            );
	                        default:
	                            if (field.edit) {
	                                if (index === _this11.state.showInputPosition.x && fieldIndex === _this11.state.showInputPosition.y) {
	                                    return _react2.default.createElement(
	                                        'td',
	                                        { key: fieldIndex,
	                                            style: { padding: 0, border: 'none' },
	                                            id: 'edit-input' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { style: { display: 'flex' } },
	                                            _react2.default.createElement(_fitInput2.default, { value: _this11.state.editValue || tr[field.key],
	                                                onChange: _this11.handleChangeEditValue.bind(_this11) }),
	                                            _react2.default.createElement(
	                                                _fitButton2.default,
	                                                { type: 'success',
	                                                    style: { borderRadius: 0, marginLeft: -1 },
	                                                    onClick: _this11.handleEditSave.bind(_this11) },
	                                                _react2.default.createElement('i', { className: 'fa fa-check' })
	                                            )
	                                        )
	                                    );
	                                }

	                                return _react2.default.createElement(
	                                    'td',
	                                    { key: fieldIndex,
	                                        onDoubleClick: _this11.handleTdDoubleClick.bind(_this11, index, fieldIndex) },
	                                    tr[field.key]
	                                );
	                            }
	                            return _react2.default.createElement(
	                                'td',
	                                { key: fieldIndex },
	                                tr[field.key]
	                            );
	                    }
	                });

	                // 如果有删除功能,右侧新增一列
	                if (_this11.props.del.url !== '') {
	                    Td.push(_react2.default.createElement(
	                        'td',
	                        { style: { padding: 0 },
	                            className: 'remove',
	                            key: 'delete',
	                            onClick: _this11.handleDelete.bind(_this11, tr) },
	                        _react2.default.createElement('i', { className: 'fa fa-trash' })
	                    ));
	                }

	                return _react2.default.createElement(
	                    'tr',
	                    { key: index },
	                    Td
	                );
	            });

	            var infoClass = (0, _classnames2.default)(_defineProperty({
	                'pull-right': true
	            }, this.state.info.type, this.state.info.type !== ''));

	            var Table = _react2.default.createElement(
	                'table',
	                { className: 'table table-striped' },
	                _react2.default.createElement(
	                    'thead',
	                    null,
	                    _react2.default.createElement(
	                        'tr',
	                        null,
	                        Th
	                    )
	                ),
	                _react2.default.createElement(
	                    'tbody',
	                    null,
	                    _lodash2.default.isEmpty(this.state.datas) ? _react2.default.createElement(
	                        'tr',
	                        null,
	                        _react2.default.createElement(
	                            'td',
	                            { colSpan: this.state.fields.length },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'empty-content' },
	                                '暂时没有数据~'
	                            )
	                        )
	                    ) : TrTd
	                )
	            );

	            if (this.props.responsive) {
	                Table = _react2.default.createElement(
	                    'div',
	                    { className: 'table-responsive' },
	                    Table
	                );
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: 'lib-pc-table-src-table' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'panel' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'panel-heading' },
	                        this.props.title,
	                        this.props.add.url === '' ? null : _react2.default.createElement(_add2.default, { fields: this.props.fields,
	                            opts: this.props.add,
	                            onAdd: this.handleAdd.bind(this) }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: infoClass,
	                                style: { marginLeft: 10 } },
	                            this.state.info.message
	                        )
	                    ),
	                    _lodash2.default.isEmpty(this.props.finder) ? null : _react2.default.createElement(_finder2.default, { onSearch: this.handleSearch.bind(this),
	                        finder: this.props.finder }),
	                    Table,
	                    _lodash2.default.isEmpty(this.state.paginOpts) && _lodash2.default.isEmpty(this.props.extend()) ? null : _react2.default.createElement(
	                        'div',
	                        { className: 'pagination-container' },
	                        _react2.default.createElement(
	                            'div',
	                            {
	                                style: { flexGrow: 1, paddingLeft: 15 } },
	                            this.props.extend(this.extendInfo)
	                        ),
	                        _lodash2.default.isEmpty(this.state.paginOpts) ? null : _react2.default.createElement(_fitPagination2.default, _extends({ style: { flexGrow: 1 },
	                            onChange: this.handleChangePage.bind(this)
	                        }, this.state.paginOpts, {
	                            loading: this.state.loading }))
	                    )
	                )
	            );
	        }
	    }]);

	    return Table;
	})(_react2.default.Component);

	exports.default = Table;

	Table.defaultProps = {
	    title: '表格',

	    // 表头字段
	    fields: [],

	    // 打底数据
	    datas: [],

	    add: {
	        url: '',
	        method: 'get',
	        dataType: 'json',
	        beforeSend: function beforeSend(info) {
	            return info;
	        },
	        success: function success(res) {
	            return res.errno === 0;
	        }
	    },

	    del: {
	        url: '',
	        method: 'get',
	        dataType: 'json',
	        beforeSend: function beforeSend(info) {
	            return info;
	        },
	        success: function success(res) {
	            return res.errno === 0;
	        }
	    },

	    update: {
	        url: '',
	        method: 'get',
	        dataType: 'json',
	        beforeSend: function beforeSend(info) {
	            return info;
	        },
	        success: function success(res) {
	            return res.errno === 0;
	        }
	    },

	    get: {
	        url: '',
	        method: 'get',
	        dataType: 'json',
	        beforeSend: function beforeSend(info) {
	            return info;
	        },
	        success: function success(res) {
	            return res.data;
	        }
	    },

	    search: [],

	    // 行选择
	    selector: {},

	    // 条件查询
	    finder: {},

	    // 拓展
	    extend: function extend(table) {},

	    // 排序回调
	    onSort: function onSort(key) {},

	    // 编辑回调
	    onEdit: function onEdit() {},

	    responsive: false
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _fitInput = __webpack_require__(11);

	var _fitInput2 = _interopRequireDefault(_fitInput);

	var _fitButton = __webpack_require__(12);

	var _fitButton2 = _interopRequireDefault(_fitButton);

	var _fitSelect = __webpack_require__(14);

	__webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Finder = (function (_React$Component) {
	    _inherits(Finder, _React$Component);

	    function Finder(props) {
	        _classCallCheck(this, Finder);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Finder).call(this, props));

	        _this.state = {
	            opts: _this.props.finder
	        };

	        _this.getChilds = function (lists, notEnum, parentIndex) {
	            return lists.map(function (item, index) {
	                var itemStyle = {
	                    marginLeft: index === 0 ? null : 10,
	                    width: item.width || null,
	                    display: 'flex'
	                };

	                switch (item.type) {
	                    case 'text':
	                        return _react2.default.createElement(_fitInput2.default, { key: index, style: itemStyle, label: notEnum ? null : item.label,
	                            value: item.value || item.defaultValue,
	                            onChange: _this.handleChange.bind(_this, index, parentIndex) });
	                    case 'select':
	                        var Options = item.select.map(function (elItem, elIndex) {
	                            return _react2.default.createElement(
	                                _fitSelect.Option,
	                                { key: elIndex, value: elItem.key },
	                                elItem.value
	                            );
	                        });
	                        return _react2.default.createElement(
	                            _fitSelect.Select,
	                            { width: '100%', style: itemStyle, key: index, label: notEnum ? null : item.label,
	                                value: item.value || item.defaultValue || item.select[0].key,
	                                onChange: _this.handleChange.bind(_this, index, parentIndex) },
	                            Options
	                        );
	                    case 'enum':
	                        if (notEnum) break;
	                        // 循环出option列表
	                        var EnumOptions = item.enum.map(function (elItem, elIndex) {
	                            return _react2.default.createElement(
	                                _fitSelect.Option,
	                                { key: elIndex, value: elItem.key },
	                                elItem.label
	                            );
	                        });

	                        // 显示当前的child
	                        var Children = null;
	                        var Childrens = _this.getChilds(item.enum, true, index);
	                        item.enum.map(function (elItem, elIndex) {
	                            if (elItem.key === (item.value || item.defaultValue)) {
	                                Children = Childrens[elIndex];
	                            }
	                        });

	                        return _react2.default.createElement(
	                            'div',
	                            { key: index, style: itemStyle },
	                            _react2.default.createElement(
	                                _fitSelect.Select,
	                                { onChange: _this.handleEnumChange.bind(_this, index),
	                                    width: '120', simple: true,
	                                    key: index, value: item.value || item.defaultValue },
	                                EnumOptions
	                            ),
	                            Children
	                        );
	                }
	            });
	        };
	        return _this;
	    }

	    // 选项被修改

	    _createClass(Finder, [{
	        key: 'handleChange',
	        value: function handleChange(index, parentIndex, value) {
	            var newOpts = this.state.opts;

	            if (!parentIndex) {
	                newOpts[index].value = value;
	            } else {
	                newOpts[parentIndex].enum[index].value = value;
	            }

	            this.setState({
	                opts: newOpts
	            });
	        }

	        // enum被修改

	    }, {
	        key: 'handleEnumChange',
	        value: function handleEnumChange(index, value) {
	            var newOpts = this.state.opts;
	            newOpts[index].value = value;
	            this.setState({
	                opts: newOpts
	            });
	        }
	    }, {
	        key: 'handleSearch',
	        value: function handleSearch() {
	            // 查出当前提交参数
	            var params = {};
	            this.state.opts.map(function (item) {
	                if (item.type === 'enum') {
	                    item.enum.map(function (elItem) {
	                        if (elItem.key === (item.value || item.defaultValue) && (elItem.value || elItem.defaultValue)) {
	                            params[elItem.key] = elItem.value || elItem.defaultValue;
	                        }
	                    });
	                    return;
	                }

	                if (item.value || item.defaultValue) {
	                    params[item.key] = item.value || item.defaultValue;
	                }
	            });
	            this.props.onSearch(params);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var Finders = this.getChilds(this.state.opts);

	            return _react2.default.createElement(
	                'div',
	                { className: 'lib-pc-table-src-table-finder' },
	                Finders,
	                _react2.default.createElement(
	                    'div',
	                    { style: { flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItem: 'center' } },
	                    _react2.default.createElement(
	                        _fitButton2.default,
	                        { addonLeft: 'search',
	                            onClick: this.handleSearch.bind(this),
	                            type: 'primary' },
	                        '查询'
	                    )
	                )
	            );
	        }
	    }]);

	    return Finder;
	})(_react2.default.Component);

	exports.default = Finder;

	Finder.defaultProps = {
	    finder: []
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/autoprefixer-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./../../../../../../node_modules/css-path-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/autoprefixer-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./../../../../../../node_modules/css-path-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports


	// module
	exports.push([module.id, ".lib-pc-table-src-table-finder {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 15px;\n  border-top: 1px solid #edf1f2; }\n", ""]);

	// exports


/***/ },
/* 17 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _fitButton = __webpack_require__(12);

	var _fitButton2 = _interopRequireDefault(_fitButton);

	var _fitModal = __webpack_require__(20);

	var _fitModal2 = _interopRequireDefault(_fitModal);

	var _fitInput = __webpack_require__(11);

	var _fitInput2 = _interopRequireDefault(_fitInput);

	var _fitSelect = __webpack_require__(14);

	__webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Add = (function (_React$Component) {
	    _inherits(Add, _React$Component);

	    function Add(props) {
	        _classCallCheck(this, Add);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Add).call(this, props));

	        _this.state = {
	            show: false,
	            fields: _this.props.fields
	        };
	        return _this;
	    }

	    _createClass(Add, [{
	        key: 'handleShowModal',
	        value: function handleShowModal() {
	            this.setState({
	                show: true
	            });
	        }
	    }, {
	        key: 'handleOk',
	        value: function handleOk() {
	            var _this2 = this;

	            var params = {};

	            this.state.fields.map(function (item) {
	                if (item.inputValue) {
	                    params[item.key] = item.inputValue;
	                }
	            });

	            this.props.onAdd(params, function (info) {
	                if (info.ok) {
	                    _this2.setState({
	                        show: false
	                    });
	                } else {
	                    // 新增失败
	                    console.log(info.message);
	                }
	            });
	        }

	        // 修改选项

	    }, {
	        key: 'handleChange',
	        value: function handleChange(index, value) {
	            var newFields = this.state.fields;
	            newFields[index].inputValue = value;
	            this.setState({
	                fields: newFields
	            });
	        }
	    }, {
	        key: 'handleCancel',
	        value: function handleCancel() {
	            this.setState({
	                show: false
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var Form = null;

	            if (typeof this.props.opts.render !== 'function') {
	                Form = this.state.fields.map(function (item, index) {
	                    if (!item.add) return null;
	                    return _react2.default.createElement(_fitInput2.default, { label: item.value, onChange: _this3.handleChange.bind(_this3, index), value: item.inputValue,
	                        key: index, labelWidth: 60,
	                        style: { marginTop: 10 } });
	                });
	            } else {
	                Form = this.props.opts.render();
	            }

	            return _react2.default.createElement(
	                'div',
	                { className: 'lib-pc-table-src-table-add' },
	                _react2.default.createElement(
	                    _fitButton2.default,
	                    { onClick: this.handleShowModal.bind(this), style: { marginLeft: 10 }, size: 'xs',
	                        addonLeft: 'plus' },
	                    '新增'
	                ),
	                _react2.default.createElement(
	                    _fitModal2.default,
	                    { title: '新增', show: this.state.show, onOk: this.handleOk.bind(this),
	                        onCancel: this.handleCancel.bind(this) },
	                    Form
	                )
	            );
	        }
	    }]);

	    return Add;
	})(_react2.default.Component);

	exports.default = Add;

	Add.defaultProps = {
	    opts: {},
	    fields: [],
	    onAdd: function onAdd() {}
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/autoprefixer-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./../../../../../../node_modules/css-path-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/autoprefixer-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./../../../../../../node_modules/css-path-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/autoprefixer-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./../../../../../node_modules/css-path-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/autoprefixer-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./../../../../../node_modules/css-path-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports


	// module
	exports.push([module.id, ".lib-pc-table-src-table {\n  margin: 20px; }\n  .lib-pc-table-src-table .panel {\n    border-radius: 2px;\n    margin-bottom: 20px;\n    background-color: #fff;\n    border: 1px solid #dee5e7;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n  .lib-pc-table-src-table .panel-heading {\n    border-color: #edf1f2;\n    background-color: #f6f8f8;\n    color: #333;\n    border-radius: 2px 2px 0 0;\n    padding: 0 15px;\n    height: 40px;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-bottom: 1px solid transparent; }\n\n.lib-pc-table-src-table table {\n  border-collapse: collapse; }\n\n.lib-pc-table-src-table .table > thead > tr > th, .lib-pc-table-src-table .table > tbody > tr > td, .lib-pc-table-src-table .table > tfoot > tr > td {\n  padding: 6px 15px;\n  border-top: 1px solid #eaeff0;\n  vertical-align: middle; }\n\n.lib-pc-table-src-table .table > thead > tr > th {\n  padding: 10px 15px !important;\n  white-space: nowrap; }\n\n.lib-pc-table-src-table .table > thead > tr > th {\n  padding: 6px 15px;\n  border-bottom: 1px solid #eaeff0;\n  line-height: 1.42857143; }\n\n.lib-pc-table-src-table th {\n  text-align: left; }\n\n.lib-pc-table-src-table .table-striped {\n  margin: 0; }\n\n.lib-pc-table-src-table .table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9; }\n\n.lib-pc-table-src-table .panel {\n  margin: 0; }\n\n.lib-pc-table-src-table .search-bar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-top: 1px solid #eaeff0;\n  padding: 15px; }\n  .lib-pc-table-src-table .search-bar .flex {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.lib-pc-table-src-table .empty-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 150px; }\n\n.lib-pc-table-src-table .pagination-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  padding-right: 20px;\n  border-top: 1px solid #eaeff0;\n  height: 50px; }\n\n.lib-pc-table-src-table .remove {\n  height: 100%;\n  width: 50px;\n  color: #f05050;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  text-align: center;\n  cursor: pointer; }\n  .lib-pc-table-src-table .remove:hover {\n    background: #f05050;\n    color: white; }\n\n.lib-pc-table-src-table .pull-right {\n  float: right; }\n  .lib-pc-table-src-table .pull-right.danger {\n    color: #f05050; }\n  .lib-pc-table-src-table .pull-right.success {\n    color: #23ad44; }\n\n.lib-pc-table-src-table .sort-arrow {\n  margin-left: 5px; }\n\n.lib-pc-table-src-table .table-th {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .lib-pc-table-src-table .table-th.sortable {\n    cursor: pointer; }\n    .lib-pc-table-src-table .table-th.sortable:hover {\n      color: #333; }\n    .lib-pc-table-src-table .table-th.sortable .sort-can-use {\n      margin-left: 5px;\n      color: #ddd; }\n  .lib-pc-table-src-table .table-th .fa-sort-asc, .lib-pc-table-src-table .table-th .fa-sort-desc {\n    margin-left: 5px; }\n", ""]);

	// exports


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }
/******/ ])
});
;