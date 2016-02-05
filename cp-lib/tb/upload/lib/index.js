'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fitUpload = require('fit-upload');

var _fitUpload2 = _interopRequireDefault(_fitUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var test = 'tp://ti' + 'eba' + '.bai';

var TBUpload = function (_React$Component) {
    _inherits(TBUpload, _React$Component);

    function TBUpload() {
        var _Object$getPrototypeO;

        _classCallCheck(this, TBUpload);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TBUpload)).call.apply(_Object$getPrototypeO, [this].concat(args)));

        _this.displayName = 'TBUpload';

        var defaultFileList = [];
        // console.log @props.value
        if (_this.props.value !== '') {
            defaultFileList.push({
                name: _this.props.value.split('/').slice(-1)[0],
                status: 'done',
                url: _this.props.value,
                thumbUrl: _this.props.value
            });
        }
        _this.state = {
            fileList: defaultFileList
        };
        return _this;
    }

    _createClass(TBUpload, [{
        key: 'onChange',
        value: function onChange(info) {
            // console.log(info.file);
            if (info.file.status === 'done' && info.file.response.success) {
                // console.log(info.file);
                var filename = 'http://tieba.baidu.com/tb/cms/ngmis/' + info.file.response.result.file_name;
                this.props.onChange(filename);
                return this.setState({
                    fileList: [info.file]
                });
            } else if (info.file.response && info.file.response.success === false) {
                this.props.onMessage('上传出错：' + info.file.response.message.field.fail_reason, 'error');
                this.setState({
                    fileList: this.state.fileList
                });
            }
        }
    }, {
        key: 'hindleBeforeUpload',
        value: function hindleBeforeUpload(file) {
            var _this2 = this;

            // console.log(file);
            if (!this.props.checkSize) {
                return true;
            }
            var sizes = this.props.checkSize.toLowerCase().split('x');
            var width = parseInt(sizes[0], 10);
            var height = parseInt(sizes[1], 10);
            return new Promise(function (resolve) {
                var fileReader = new FileReader();
                fileReader.onload = function (e) {
                    var imageObj = new Image();
                    imageObj.onload = function () {
                        // console.log(imageObj.width);
                        if (imageObj.width === width && imageObj.height === height) {
                            resolve();
                        } else {
                            _this2.props.onMessage('图片尺寸不对，请上传“' + _this2.props.checkSize + '”大小的图片', 'error');
                            _this2.setState(_this2.state);
                        }
                    };
                    imageObj.src = e.target.result;
                };
                fileReader.readAsDataURL(file);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var data = {
                app_id: 'cms_r',
                user_name: 'tbuploader404',
                password: 'Rd650Pw@tieba',
                top_ch_spell: 'tieba',
                type: 0,
                url: 'ht' + test + 'du.com/tb/cms/ngmis/',
                group_id: 6,
                noUnZip: 1
            };
            return _react2.default.createElement(
                _fitUpload2.default,
                {
                    name: this.props.name,
                    value: this.state.fileList || this.props.defaultFileList,
                    listType: this.props.listType,
                    data: data,
                    action: '/autorout/upload',
                    beforeUpload: function beforeUpload() {
                        return _this3.hindleBeforeUpload.apply(_this3, arguments);
                    },
                    onChange: function onChange(info) {
                        return _this3.onChange(info);
                    } },
                this.props.children
            );
        }
    }]);

    return TBUpload;
}(_react2.default.Component);

TBUpload.defaultProps = {
    value: '',
    defaultFileList: [],
    onMessage: function onMessage() {}
};

exports.default = TBUpload;