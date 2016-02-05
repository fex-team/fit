'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _uploadFileList = require('./upload-file-list');

var _uploadFileList2 = _interopRequireDefault(_uploadFileList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function extendStyle(a, b) {
    for (var i in b) {
        a[i] = b[i];
    }
    return a;
}

var Upload = function (_React$Component) {
    _inherits(Upload, _React$Component);

    function Upload() {
        var _Object$getPrototypeO;

        _classCallCheck(this, Upload);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Upload)).call.apply(_Object$getPrototypeO, [this].concat(args)));

        _this.state = {
            dragStatus: 'drag',
            progressInfo: {}
        };
        return _this;
    }

    _createClass(Upload, [{
        key: 'getStyles',
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
        key: 'onFileChange',
        value: function onFileChange(e) {
            e.preventDefault();
            e.stopPropagation();
            this.upload(this._fileInput.files);
        }
    }, {
        key: 'upload',
        value: function upload(files) {
            for (var i = 0; i < files.length; i++) {
                this.post(files[i]);
            }
        }
    }, {
        key: 'post',
        value: function post(file) {
            var _this2 = this;

            var data = new FormData();
            data.append(this.props.field, file);
            for (var key in this.props.extraData) {
                data.append(key, this.props.extraData[key]);
            }
            _superagent2.default.post(this.props.action).send(data).on('progress', function (e) {
                var progressInfo = _this2.state.progressInfo;
                progressInfo[file.name] = e.percent;
                _this2.setState({
                    progressInfo: progressInfo
                });
                // console.log(e.percent);
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
        key: 'onFileDrop',
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
        key: 'fileListRender',
        value: function fileListRender() {
            if (this.props.listType === 'none') {
                return null;
            }
            return _react2.default.createElement(_uploadFileList2.default, { type: this.props.listType, list: this.props.value });
        }
    }, {
        key: 'progressListRender',
        value: function progressListRender() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                null,
                Object.keys(this.state.progressInfo).map(function (key) {
                    return _this3.progressItemRender(key, _this3.state.progressInfo[key]);
                })
            );
        }
    }, {
        key: 'progressItemRender',
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
                width: pos + '%'
            };
            return _react2.default.createElement(
                'div',
                { style: itemStyle, key: key },
                _react2.default.createElement(
                    'div',
                    { style: itemTextStyle },
                    key,
                    ':'
                ),
                _react2.default.createElement(
                    'div',
                    { style: progressStyle },
                    _react2.default.createElement('div', { style: progressInnerStyle })
                )
            );
        }
    }, {
        key: 'fileInputRender',
        value: function fileInputRender(style) {
            var _this4 = this;

            return _react2.default.createElement('input', { ref: function ref(c) {
                    return _this4._fileInput = c;
                }, type: 'file', accept: this.props.accept, multiple: this.props.multiple, style: style, onChange: function onChange(e) {
                    return _this4.onFileChange(e);
                } });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var props = this.props;
            var styles = this.getStyles();
            var fileList = this.fileListRender();
            if (props.type === 'drag') {
                var dragStyle = this.state.dragStatus === 'dragover' ? extendStyle(styles.dragDefault, styles.dragStart) : styles.dragDefault;
                return _react2.default.createElement(
                    'div',
                    { style: props.style },
                    this.fileInputRender({ display: 'none' }),
                    _react2.default.createElement(
                        'div',
                        { style: dragStyle, onDrop: this.onFileDrop.bind(this), onDragOver: this.onFileDrop.bind(this), onClick: function onClick() {
                                return _this5._fileInput.click();
                            } },
                        props.children
                    ),
                    this.progressListRender(),
                    fileList
                );
            } else if (props.type === 'button') {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { style: props.style },
                        this.fileInputRender(styles.transparentInput),
                        props.children
                    ),
                    this.progressListRender(),
                    fileList
                );
            }
            return _react2.default.createElement(
                'div',
                null,
                this.fileInputRender(props.style),
                this.progressListRender(),
                fileList
            );
        }
    }]);

    return Upload;
}(_react2.default.Component);

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
exports.default = Upload;