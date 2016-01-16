'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var scale = function scale() {
    var width = arguments.length <= 0 || arguments[0] === undefined ? 400 : arguments[0];

    // 设置页面缩放~
    var WIDTH = width;
    var ratio = screen.width / WIDTH;
    var meta = document.createElement('meta');
    meta.setAttribute('name', 'viewport');
    meta.setAttribute('content', 'width=' + WIDTH + ',initial-scale=' + ratio + ',maximum-scale=' + ratio + ',minimum-scale=' + ratio + ',user-scalable=no,target-densitydpi=device-dpi,minimal-ui');
    document.getElementsByTagName('head')[0].appendChild(meta);
};

exports.default = scale;