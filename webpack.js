// webpack中间件
var webpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')
var webpackConf = require('./webpack.config.dev.js')

var server = new webpackDevServer(webpack(webpackConf), {
    publicPath: webpackConf.output.publicPath,
    proxy: {
        '*': {
            target: 'http://localhost:8080',
            secure: false
        }
    },
    hot: true,
    quiet: false,
    noInfo: false,
    stats: {
        colors: true,
        hash: false,
        timings: false,
        assets: true,
        chunks: true,
        chunkModules: true,
        modules: false,
        children: true
    }
})

server.listen(8090, 'localhost', function () {
})