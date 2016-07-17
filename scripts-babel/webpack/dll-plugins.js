'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = [new webpack.DllReferencePlugin({
    context: '.',
    manifest: require(path.join(process.cwd(), 'output/static/dll/library-mainfest.json'))
})];