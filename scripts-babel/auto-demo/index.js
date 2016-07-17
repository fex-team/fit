'use strict';

var _allComponent = require('../../all-component.json');

var _allComponent2 = _interopRequireDefault(_allComponent);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _mkRouter = require('./mk-router');

var _mkRouter2 = _interopRequireDefault(_mkRouter);

var _mkLayout = require('./mk-layout');

var _mkLayout2 = _interopRequireDefault(_mkLayout);

var _mkComponents = require('./mk-components');

var _mkComponents2 = _interopRequireDefault(_mkComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mkRouter2.default)(_allComponent2.default.categorys); // 自动生成demo
// 包括
// src/components
// src/layout
// src/router
// resolve.js

(0, _mkLayout2.default)(_allComponent2.default.categorys);
(0, _mkComponents2.default)(_allComponent2.default);