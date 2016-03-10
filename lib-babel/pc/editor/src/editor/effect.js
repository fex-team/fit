'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('../lib/jquery-selection');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getLineContent = function getLineContent(textarea, line) {
    var selectStart = textarea.selection('getPos').start;
    var beforeWords = textarea.val().substr(0, selectStart);
    var wordArray = beforeWords.split('\n');
    return wordArray[wordArray.length - line - 1];
};

exports.default = function (type, textarea, freshState) {
    textarea = (0, _jquery2.default)(textarea);
    switch (type) {
        case 'bold':
            textarea.selection('insert', {
                text: '**',
                mode: 'before'
            });
            textarea.selection('insert', {
                text: '**',
                mode: 'after'
            });
            break;
        case 'italic':
            textarea.selection('insert', {
                text: '*',
                mode: 'before'
            });
            textarea.selection('insert', {
                text: '*',
                mode: 'after'
            });
            break;
        case 'link':
            textarea.selection('insert', {
                text: '[',
                mode: 'before'
            });
            textarea.selection('insert', {
                text: '](http://)',
                mode: 'after'
            });
            break;
        case 'quote-left':
            textarea.selection('insert', {
                text: '> ',
                mode: 'before'
            });
            break;
        case 'code':
            textarea.selection('insert', {
                text: '````\n',
                mode: 'before'
            });
            textarea.selection('insert', {
                text: '\n````',
                mode: 'after'
            });
            break;
        case 'tag':
            textarea.selection('insert', {
                text: '`',
                mode: 'before'
            });
            textarea.selection('insert', {
                text: '`',
                mode: 'after'
            });
            break;
        case 'list-ol':
            textarea.selection('insert', {
                text: '1. ',
                mode: 'before'
            });
            break;
        case 'list-ul':
            textarea.selection('insert', {
                text: '- ',
                mode: 'before'
            });
            break;
        case 'minus':
            var content = "\n\n---";
            var lastLine = getLineContent(textarea, 0);
            if (lastLine == "") {
                content = "\n---";
            }
            textarea.selection('insert', {
                text: content,
                mode: 'before'
            });
            break;
        case 'h1':
            textarea.selection('insert', {
                text: '# ',
                mode: 'before'
            });
            textarea.selection('insert', {
                text: ' #',
                mode: 'after'
            });
            break;
        case 'h2':
            textarea.selection('insert', {
                text: '## ',
                mode: 'before'
            });
            textarea.selection('insert', {
                text: ' ##',
                mode: 'after'
            });
            break;
        case 'h3':
            textarea.selection('insert', {
                text: '### ',
                mode: 'before'
            });
            textarea.selection('insert', {
                text: ' ###',
                mode: 'after'
            });
            break;
        case 'h4':
            textarea.selection('insert', {
                text: '#### ',
                mode: 'before'
            });
            textarea.selection('insert', {
                text: ' ####',
                mode: 'after'
            });
            break;
        case 'h5':
            textarea.selection('insert', {
                text: '##### ',
                mode: 'before'
            });
            textarea.selection('insert', {
                text: ' #####',
                mode: 'after'
            });
            break;
        case 'h6':
            textarea.selection('insert', {
                text: '###### ',
                mode: 'before'
            });
            textarea.selection('insert', {
                text: ' ######',
                mode: 'after'
            });
            break;
        case 'table':
            var col = (0, _jquery2.default)(undefined).index();
            var row = (0, _jquery2.default)(undefined).parent().index();
            if (col == 0 || row == 0) {
                break;
            }
            var text = "\n";
            for (var i = 0; i < row + 1; i++) {
                var cols = new Array();
                for (var j = 0; j < col + 1; j++) {
                    if (i == 0) {
                        cols.push(' `           ');
                    } else {
                        cols.push('             ');
                    }
                }
                text += cols.join('|') + "\n";
                if (i == 0) {
                    //表格分割线
                    for (var j = 0; j < col + 1; j++) {
                        text += "-----------";
                        if (j != col) {
                            text += "|";
                        }
                    }
                    text += "\n";
                }
            }
            textarea.selection('insert', {
                text: text,
                mode: 'after'
            });
            break;
        case 'save':
            save();
            break;
        case 'paste':
            load();
            break;
    }
    freshState();
};