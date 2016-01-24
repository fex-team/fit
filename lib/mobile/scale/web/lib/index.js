'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var scale = function scale() {
    var width = arguments.length <= 0 || arguments[0] === undefined ? 400 : arguments[0];
    var reactDomName = arguments.length <= 1 || arguments[1] === undefined ? 'react-dom' : arguments[1];

    // 设置页面缩放~
    var WIDTH = width;
    var ratio = screen.width / WIDTH;
    var meta = document.createElement('meta');
    meta.setAttribute('name', 'viewport');
    meta.setAttribute('content', 'width=' + WIDTH + ',initial-scale=' + ratio + ',maximum-scale=' + ratio + ',minimum-scale=' + ratio + ',user-scalable=no,target-densitydpi=device-dpi,minimal-ui');
    document.getElementsByTagName('head')[0].appendChild(meta);
    document.getElementById(reactDomName).style.margin = '0 auto';
    document.getElementById(reactDomName).style.width = width + 'px';
};

exports.default = scale;