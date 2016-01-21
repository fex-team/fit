'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var send = function send(info, successCallback) {
    // ti 标题
    // co 内容
    // fid 吧id
    // word 吧名
    // src 来源 发帖:2 回复,楼中楼:1
    // z 帖子id
    // floor 楼层,楼中楼使用
    // tag 未知,一般是11
    // upload_img_info 图片信息
    // tbs csrf防御

    var data = {
        co: info.content,
        tag: 11,
        fid: info.forumId,
        word: info.forumName,
        tbs: window.tbs
    };

    switch (info.type) {
        case 'post':
            data.ti = info.title;
            data.src = 2;
            break;
        case 'reply':
            data.src = 1;
            data.z = info.threadId;
            break;
        case 'comment':
            data.src = 1;
            data.z = info.threadId;
            data.pid = info.postId;
            break;
    }

    _superagent2.default.post('/mo/q/apubpost').send(data).type('form').end(function (err, res) {
        if (err) {
            return console.log(err);
        }

        if (res.body.no !== 0) {
            return console.log(res.body.error);
        }

        successCallback(res.body);
    });
};

exports.default = send;