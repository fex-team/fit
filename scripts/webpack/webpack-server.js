// webpack中间件
var webpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')
var webpackConf = require('./webpack.dev.config.js')
var config = require('../../config')

var server = new webpackDevServer(webpack(webpackConf), {
    publicPath        : webpackConf.output.publicPath,
    hot               : true,
    historyApiFallback: true,
    promiseMiddleware : true
})

server.listen(config.localWebpackPort, 'localhost', function () {
})