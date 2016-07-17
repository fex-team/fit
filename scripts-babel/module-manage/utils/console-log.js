'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (message, color, title) {
    message = title + ': ' + message;

    switch (color) {
        case 'red':
            console.log(_colors2.default.red.underline(message));
            process.exit(1);
            break;
        case 'green':
            console.log(_colors2.default.green(message));
            break;
        case 'yellow':
            console.log(_colors2.default.yellow(message));
            break;
        case 'grey':
            console.log(_colors2.default.grey(message));
            break;
        default:
            console.log(message);
    }
};