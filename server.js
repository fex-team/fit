"use strict"

var koa = require('koa')
var app = koa()

// 设置静态资源缓存
var staticCache = require('koa-static-cache')
app.use(staticCache('output', {
    prefix: '/output',
    maxAge: 365 * 24 * 60 * 60,
    buffer: true,
    gzip: true,
    usePrecompiledGzip: true
}))

// 监听错误
app.on("error", function (err) {

})

// 抓住未捕获的错误
process.on('uncaughtException', function (err) {

})

// 入口文件
var args = process.argv.slice(2)

var templateHtml = require('./html.js')(args)
app.use(function *() {
    this.type = 'text/html; charset=utf-8'
    this.body = templateHtml
})

module.exports = app.listen(8080)