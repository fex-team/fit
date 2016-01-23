"use strict";

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require("react");
var request = require('superagent');
var upload_file_list_1 = require('./upload-file-list');
function extendStyle(a, b) {
    for (var i in b) {
        a[i] = b[i];
    }
    return a;
}

var Upload = function (_React$Component) {
    (0, _inherits3.default)(Upload, _React$Component);

    function Upload() {
        var _Object$getPrototypeO;

        (0, _classCallCheck3.default)(this, Upload);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Upload)).call.apply(_Object$getPrototypeO, [this].concat(args)));

        _this.state = {
            dragStatus: 'drag',
            progressInfo: {}
        };
        return _this;
    }

    (0, _createClass3.default)(Upload, [{
        key: "getStyles",
        value: function getStyles() {
            return {
                dragDefault: {
                    border: '2px dashed #dee5e7',
                    minHeight: 20,
                    height: '100%',
                    boxSizing: 'border-box',
                    backgroundColor: '#fff'
                },
                transparentInput: {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    opacity: 0
                },
                dragStart: {
                    border: '2px dashed #aaaaaa'
                }
            };
        }
    }, {
        key: "onFileChange",
        value: function onFileChange(e) {
            e.preventDefault();
            e.stopPropagation();
            this.upload(this._fileInput.files);
        }
    }, {
        key: "upload",
        value: function upload(files) {
            for (var i = 0; i < files.length; i++) {
                this.post(files[i]);
            }
        }
    }, {
        key: "post",
        value: function post(file) {
            var _this2 = this;

            var data = new FormData();
            data.append(this.props.field, file);
            for (var key in this.props.extraData) {
                data.append(key, this.props.extraData[key]);
            }
            request.post(this.props.action).send(data).on('progress', function (e) {
                var progressInfo = _this2.state.progressInfo;
                progressInfo[file.name] = e.percent;
                _this2.setState({
                    progressInfo: progressInfo
                });
                console.log(e.percent);
            }).end(function (err, res) {
                if (!err) {
                    var progressInfo = _this2.state.progressInfo;
                    delete progressInfo[file.name];
                    _this2.props.onChange(file.name, {
                        response: res.body || res.text,
                        status: 'done',
                        name: file.name
                    });
                    _this2.setState({
                        progressInfo: progressInfo
                    });
                } else {
                    _this2.props.onChange(file.name, {
                        response: res.body || res.text,
                        status: 'error',
                        name: file.name
                    });
                }
            });
        }
    }, {
        key: "onFileDrop",
        value: function onFileDrop(e) {
            this.setState({
                dragStatus: e.type
            });
            if (e.type === 'dragover') {
                return e.preventDefault();
            }
            var files = e.dataTransfer.files;
            this.upload(files);
            e.preventDefault();
        }
    }, {
        key: "fileListRender",
        value: function fileListRender() {
            if (this.props.listType === 'none') {
                return null;
            }
            return React.createElement(upload_file_list_1.default, { type: this.props.listType, list: this.props.fileList });
        }
    }, {
        key: "progressListRender",
        value: function progressListRender() {
            var _this3 = this;

            return React.createElement(
                "div",
                null,
                (0, _keys2.default)(this.state.progressInfo).map(function (key) {
                    return _this3.progressItemRender(key, _this3.state.progressInfo[key]);
                })
            );
        }
    }, {
        key: "progressItemRender",
        value: function progressItemRender(key, pos) {
            var itemStyle = {
                transition: 'margin .3s ease, opacity .3s ease',
                margin: '10px 0'
            };
            var itemTextStyle = {
                fontSize: 12,
                color: '#98a6ad',
                marginBottom: 5
            };
            var progressStyle = {
                overflow: 'hidden',
                height: 2,
                borderRadius: 4,
                backgroundColor: '#edf1f2'
            };
            var progressInnerStyle = {
                backgroundColor: '#23b7e5',
                height: 2,
                borderRadius: 4,
                transition: 'width .3s linear',
                width: pos + "%"
            };
            return React.createElement(
                "div",
                { style: itemStyle, key: key },
                React.createElement(
                    "div",
                    { style: itemTextStyle },
                    key,
                    ":"
                ),
                React.createElement(
                    "div",
                    { style: progressStyle },
                    React.createElement("div", { style: progressInnerStyle })
                )
            );
        }
    }, {
        key: "fileInputRender",
        value: function fileInputRender(style) {
            var _this4 = this;

            return React.createElement("input", { ref: function ref(c) {
                    return _this4._fileInput = c;
                }, type: "file", accept: this.props.accept, multiple: this.props.multiple, style: style, onChange: function onChange(e) {
                    return _this4.onFileChange(e);
                } });
        }
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            var props = this.props;
            var styles = this.getStyles();
            var fileList = this.fileListRender();
            if (props.type === 'drag') {
                var dragStyle = this.state.dragStatus === 'dragover' ? extendStyle(styles.dragDefault, styles.dragStart) : styles.dragDefault;
                return React.createElement(
                    "div",
                    { style: props.style },
                    this.fileInputRender({ display: 'none' }),
                    React.createElement(
                        "div",
                        { style: dragStyle, onDrop: this.onFileDrop.bind(this), onDragOver: this.onFileDrop.bind(this), onClick: function onClick() {
                                return _this5._fileInput.click();
                            } },
                        props.children
                    ),
                    this.progressListRender(),
                    fileList
                );
            } else if (props.type === 'button') {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { style: props.style },
                        this.fileInputRender(styles.transparentInput),
                        props.children
                    ),
                    this.progressListRender(),
                    fileList
                );
            }
            return React.createElement(
                "div",
                null,
                this.fileInputRender(props.style),
                this.progressListRender(),
                fileList
            );
        }
    }]);
    return Upload;
}(React.Component);

Upload.defaultProps = {
    value: [],
    defaultValue: [],
    name: '',
    action: '',
    onChange: function onChange() {},

    type: 'normal',
    extraData: {},
    listType: 'text',
    multiple: true
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Upload;