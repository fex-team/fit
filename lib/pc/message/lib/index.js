'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _notice = require('./notice');

var _notice2 = _interopRequireDefault(_notice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function notice(content) {
    var duration = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
    var type = arguments.length <= 2 || arguments[2] === undefined ? 'info' : arguments[2];
    var onClose = arguments.length <= 3 || arguments[3] === undefined ? function () {} : arguments[3];

    var instance = _notice2.default.newInstance({
        content: content,
        type: type
    });

    setTimeout(function () {
        instance.destroy();
        onClose();
    }, duration * 1000);
}

exports.default = {
    info: function info(content, duration, onClose) {
        return notice(content, duration, 'info', onClose);
    },
    success: function success(content, duration, onClose) {
        return notice(content, duration, 'success', onClose);
    },
    error: function error(content, duration, onClose) {
        return notice(content, duration, 'error', onClose);
    },
    warning: function warning(content, duration, onClose) {
        return notice(content, duration, 'warning', onClose);
    },
    loading: function loading(content, duration, onClose) {
        return notice(content, duration, 'loading', onClose);
    }
};