'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _readDirFiles = require('read-dir-files');

var _readDirFiles2 = _interopRequireDefault(_readDirFiles);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _getDemoArray = require('./utils/get-demo-array');

var _getDemoArray2 = _interopRequireDefault(_getDemoArray);

var _getDocArray = require('./utils/get-doc-array');

var _getDocArray2 = _interopRequireDefault(_getDocArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mkComponents = function mkComponents(config) {
    var categorys = config.categorys;

    var _loop = function _loop(categoryKey) {
        // pc tb 等等模块名
        _mkdirp2.default.sync('src/components/' + categoryKey);

        var categoryInfo = categorys[categoryKey];
        var componentsInfo = categorys[categoryKey].components || [];
        var gitlabPrefix = categorys[categoryKey].gitlabPrefix;
        Object.keys(componentsInfo).map(function (item) {
            categorys[categoryKey]['components'][item].map(function (component) {
                // 创建此demo的文件夹 eg: lib/pc/layout
                _mkdirp2.default.sync('src/components/' + categoryKey + '/' + component.path);

                // 引用demo
                var demoImport = '';
                // 引用doc源码
                var sourceImport = '';
                // doc布局块
                var sourceString = '';
                // demo布局块
                var layoutString = '';

                // demo相关
                var demoArray = (0, _getDemoArray2.default)('lib/' + categoryKey + '/' + component.path + '/demo/index.js');
                if (demoArray.length > 0) {
                    demoArray.map(function (demoItem) {
                        // 首字母大写demo名
                        var camelDemoName = _lodash2.default.capitalize(_lodash2.default.camelCase(demoItem.name));

                        // loader 是 babel 还是 ts-loader
                        var loader = 'babel-loader';
                        if (demoItem.ext === 'tsx') {
                            loader = 'ts-loader';
                        }

                        demoImport += '\n                        import ' + camelDemoName + 'Component from \'../../../../lib/' + categoryKey + '/' + component.path + '/demo/lists/' + demoItem.name + '.' + demoItem.ext + '\'\n                        import ' + camelDemoName + 'Code from \'-!text!../../../../lib/' + categoryKey + '/' + component.path + '/demo/lists/' + demoItem.name + '.' + demoItem.ext + '\'\n                        import ' + camelDemoName + 'Markdown from \'../../../../lib/' + categoryKey + '/' + component.path + '/demo/lists/' + demoItem.name + '.md\'\n                        ';

                        layoutString += '\n                        <Col span="24" style={colStyle}>\n                            <CodeView store={store}\n                                      md={' + camelDemoName + 'Markdown}\n                                      code={' + camelDemoName + 'Code}\n                                      npmName="' + categorys[categoryKey].prefix + '-' + component.path + '">\n\n                                    <' + camelDemoName + 'Component/>\n\n                            </CodeView>\n                        </Col>\n                    ';
                    });
                }

                // 源码文档相关
                var sourceArray = [];
                var sourceRootArray = 'lib/' + categoryKey + '/' + component.path + '/src/index';

                if (_fs2.default.existsSync(sourceRootArray + '.tsx')) {
                    sourceArray = (0, _getDocArray2.default)(sourceRootArray + '.tsx');
                } else {
                    sourceArray = (0, _getDocArray2.default)(sourceRootArray + '.js');
                }

                if (sourceArray.length > 0) {
                    sourceArray.map(function (sourceItem) {
                        var sourceItemFileName = _lodash2.default.kebabCase(sourceItem);
                        var isTsx = _fs2.default.existsSync(sourceRootArray + '.tsx');
                        var isModuleExist = _fs2.default.existsSync('lib/' + categoryKey + '/' + component.path + '/src/' + sourceItemFileName + '/module.tsx');

                        if (isTsx) {
                            sourceImport += '\n                            import ' + sourceItem + 'Source from \'../../../../lib/' + categoryKey + '/' + component.path + '/src/' + sourceItemFileName + '/index.tsx\'\n                            import ' + sourceItem + 'SourceCode from \'-!text!../../../../lib/' + categoryKey + '/' + component.path + '/src/' + sourceItemFileName + '/index.tsx\'\n                            ';
                            // 如果存在 module.tsx 则引入
                            if (isModuleExist) {
                                sourceImport += '\n                                import * as ' + sourceItem + 'Module from \'../../../../lib/' + categoryKey + '/' + component.path + '/src/' + sourceItemFileName + '/module.tsx\'\n                                import ' + sourceItem + 'ModuleCode from \'-!text!../../../../lib/' + categoryKey + '/' + component.path + '/src/' + sourceItemFileName + '/module.tsx\'\n                                ';
                            }
                        } else {
                            sourceImport += '\n                            import ' + sourceItem + 'Source from \'../../../../lib/' + categoryKey + '/' + component.path + '/src/' + sourceItemFileName + '\'\n                            import ' + sourceItem + 'SourceCode from \'-!text!../../../../lib/' + categoryKey + '/' + component.path + '/src/' + sourceItemFileName + '\'\n                            ';
                        }

                        if (isTsx && isModuleExist) {
                            sourceString += '\n                            <div style={docStyle}>\n                                <CodeDoc code={' + sourceItem + 'SourceCode} instance={' + sourceItem + 'Source} moduleCode={' + sourceItem + 'ModuleCode} moduleInstance={' + sourceItem + 'Module} />\n                            </div>\n                            ';
                        } else {
                            sourceString += '\n                            <div style={docStyle}>\n                                <CodeDoc code={' + sourceItem + 'SourceCode} instance={' + sourceItem + 'Source} />\n                            </div>\n                            ';
                        }
                    });
                }

                var gitlabPath = gitlabPrefix + '-' + component.path;
                if (gitlabPrefix === '') {
                    gitlabPath = component.path;
                }

                var text = '\n                import React from \'react\'\n                import CodeView from \'../../../../components/code-view\'\n                import Highlight from \'react-highlight\'\n                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from \'fit-scroll-listen\'\n                import { Row, Col } from \'fit-layout\'\n                import CodeDoc from \'../../../../components/code-doc\'\n                import { Layout, Header, Section, Sidebar } from \'fit-layout-global\'\n                import Title from \'../../../../components/title\'\n                import SidebarComponent from \'../../../../components/side-bar\'\n                import readme from \'../../../../lib/' + categoryKey + '/' + component.path + '/readme.md\'\n                import \'../../../../lib/' + categoryKey + '/' + component.path + '/demo\'\n\n                const store = createStore()\n\n                ' + sourceImport + '\n\n                ' + demoImport + '\n\n                const colStyle = {\n                    padding: 10,\n                    boxSizing: \'border-box\'\n                }\n\n                const docStyle = {\n                    margin: 10,\n                    background: \'white\'\n                }\n\n                export default class DemoBox extends React.Component {\n                    constructor(props) {\n                        super(props)\n                        this.state = {\n                            page: \'demo\'\n                        }\n                        document.title = \'' + component.name + '\'\n                    }\n\n                    handlePageChange(value) {\n                        this.setState({\n                            page: value\n                        })\n                    }\n\n                    render() {\n                        let Content = null\n\n                        switch (this.state.page) {\n                        case \'demo\':\n                            Content = (\n                                <Row>\n                                    ' + layoutString + '\n                                </Row>\n                            )\n                            break\n                        case \'document\':\n                            Content = (\n                                <div>\n                                    ' + sourceString + '\n                                </div>\n                            )\n                            break\n                        }\n\n                        return (\n                            <div className="_namespace">\n                                <Layout>\n                                    <Section>\n                                        <Title>{readme}</Title>\n                                        <ScrollListenBox store={store}>\n                                            {Content}\n                                        </ScrollListenBox>\n                                    </Section>\n                                    <Sidebar direction="right"\n                                             width={120}>\n                                        <SidebarComponent gitlabUrl="http://gitlab.baidu.com/tb-component/' + gitlabPath + '/tree/master"\n                                 onChange={this.handlePageChange.bind(this)}/>\n                                        <ScrollListen store={store}/>\n                                    </Sidebar>\n                                </Layout>\n                            </div>\n                        )\n                    }\n                }\n                ';

                _fs2.default.writeFile('src/components/' + categoryKey + '/' + component.path + '/index.js', text, function (err) {
                    if (!err) return;
                    console.log('src/components/' + categoryKey + '/' + component.path + '/index.js fail: ' + err);
                });
            });
        });
    };

    for (var categoryKey in categorys) {
        _loop(categoryKey);
    }
};

exports.default = mkComponents;