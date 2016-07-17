'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _getDemoArray = require('./utils/get-demo-array');

var _getDemoArray2 = _interopRequireDefault(_getDemoArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mkRouter = function mkRouter(categorys) {
    var routerPath = '';
    var routerComponent = '';
    var homeImport = '';

    var _loop = function _loop(categoryKey) {
        // pc tb 等等模块名
        routerPath += '\n        // ' + categoryKey + '\n        ';

        // oxp 暂时没有
        if (categoryKey === 'oxp') return 'continue';

        homeImport += '\n        import ' + categoryKey + 'Home from \'../category-home/' + categoryKey + '\'\n        ';

        routerComponent += '\n        <Route path="/components/' + categoryKey + '"\n               component={ComponentsLayout}>\n            <IndexRoute component={' + categoryKey + 'Home}/>\n        ';

        var categoryInfo = categorys[categoryKey];
        var componentsInfo = categorys[categoryKey].components || [];
        Object.keys(componentsInfo).map(function (item) {
            categorys[categoryKey]['components'][item].map(function (component) {
                // 跳过没有demo的组件
                var demoArray = (0, _getDemoArray2.default)('lib/' + categoryKey + '/' + component.path + '/demo/index.js');
                if (demoArray.length === 0) return;

                var wholeComponentName = categoryInfo.prefix + '-' + component.path + '-component';
                wholeComponentName = _lodash2.default.camelCase(wholeComponentName).replace(/\s/g, '');

                routerPath += '\n                import ' + wholeComponentName + ' from \'./components/' + categoryKey + '/' + component.path + '\'\n                ';

                routerComponent += '\n                <Route path="' + component.path + '"\n                       component={' + wholeComponentName + '}/>\n                ';
            });
        });

        routerComponent += '\n        </Route>\n        ';
    };

    for (var categoryKey in categorys) {
        var _ret = _loop(categoryKey);

        if (_ret === 'continue') continue;
    }

    var text = '\n        import React from \'react\'\n        import { Router, Route, IndexRoute, Redirect, browserHistory } from \'react-router\'\n\n        import ComponentsLayout from \'./components/layout\'\n        import Home from \'./home\'\n        import Designer from \'./designer\'\n        import Components from \'./components\'\n        import ComponentsWriteStandard from \'./components/write-standard\'\n        import ComponentsChangeLog from \'./components/change-log\'\n        import ComponentsDoc from \'./components/doc\'\n        ' + homeImport + '\n\n        ' + routerPath + '\n\n        const MainRouter = (\n            <Router history={browserHistory}>\n                <Route path="/" component={Home}/>\n                <Route path="/components" component={Components}/>\n                <Route path="/designer" component={Designer}/>\n                <Route path="/components/write-standard" component={ComponentsWriteStandard}/>\n                <Route path="/components/doc" component={ComponentsDoc}/>\n                <Route path="/components/change-log" component={ComponentsChangeLog}/>\n                ' + routerComponent + '\n            </Router>\n        )\n\n        export default MainRouter\n    ';

    _fs2.default.writeFile('src/router.js', text, function (err) {
        if (!err) return;
        console.log('mk src/router.js fail: ' + err);
    });
};

exports.default = mkRouter;