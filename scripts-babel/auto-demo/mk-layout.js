'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _getDemoArray = require('./utils/get-demo-array');

var _getDemoArray2 = _interopRequireDefault(_getDemoArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mkLayout = function mkLayout(categorys) {
    var _loop = function _loop(categoryKey) {
        // pc tb 等等模块名
        var menus = '';
        var renderFactory = '';
        var render = '';

        var categoryInfo = categorys[categoryKey];
        var componentsInfo = categorys[categoryKey].components || [];
        Object.keys(componentsInfo).map(function (item) {
            var nameMd5 = (0, _md2.default)(item);

            // 为了语法,定义处必须换行
            menus += '\nconst menu' + nameMd5 + ' = [';

            renderFactory += '\n            let Menu' + nameMd5 + ' = menuFactory(menu' + nameMd5 + ')\n            ';

            render += '\n            <div className="title">' + item + '</div>\n            {Menu' + nameMd5 + '}\n            ';

            categorys[categoryKey]['components'][item].map(function (component) {
                // 跳过没有demo的组件
                var demoArray = (0, _getDemoArray2.default)('lib/' + categoryKey + '/' + component.path + '/demo/index.js');

                if (demoArray.length > 0) {
                    menus += '\n                    {\n                        title: \'' + component.name + ' ' + _lodash2.default.capitalize(_lodash2.default.camelCase(component.path)) + '\',\n                        path: \'/' + categoryKey + '/' + component.path + '\'\n                    },\n                    ';
                }
            });

            menus += ']';
        });

        var text = '\n        import React from \'react\'\n        import menuFactory from \'../menu-factory\'\n\n        ' + menus + '\n\n        export default class Layout extends React.Component {\n            constructor(props) {\n                super(props)\n                this.state = {}\n            }\n\n            render() {\n                ' + renderFactory + '\n\n                return (\n                    <div className="_namespace">\n                        ' + render + '\n                    </div>\n                )\n            }\n        }\n        ';

        (0, _mkdirp2.default)('src/components/layout/left-menu-' + categoryKey, function (err) {
            if (err) {
                return console.log('mkdir src/components/layout/left-menu-' + categoryKey + ' fail', error);
            }

            _fs2.default.writeFile('src/components/layout/left-menu-' + categoryKey + '/index.js', text, function (err) {
                if (!err) return;
                console.log('mk src/components/layout/left-menu-' + categoryKey + '/index.js fail: ' + err);
            });
        });
    };

    for (var categoryKey in categorys) {
        _loop(categoryKey);
    }
};

exports.default = mkLayout;