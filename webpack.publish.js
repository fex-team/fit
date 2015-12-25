var webpack = require('webpack')
var path = require('path')
var resolve = require('./resolve.js')
var _ = require('lodash')
var fs = require('fs')
var args = process.argv.slice(2)

if (args.length === 0) {
    console.error(
        'you did not pass any commands, did you mean to run `updator push` ?'
    )
    process.exit(1)
}

var moduleName = process.argv.slice(2)[1]
var platform = process.argv.slice(2)[0]
var mobilePrefix
if (platform === '-w') {
    mobilePrefix = 'mobile'
    platform = 'web'
}
else if (platform === '-p') {
    platform = 'pc'
}
else if (platform === '-n') {
    mobilePrefix = 'mobile'
    platform = 'native'
}
else {
    console.error('Uncaught param type', platform)
    process.exit(1)
}

var alias = {}
for (var key in resolve.alias) {
    alias[key] = true
}

var entry = []
var outputPath

if (platform === 'pc') {
    entry.push(path.resolve(__dirname, 'lib', platform, moduleName, 'src', 'index.js'))
    outputPath = path.join(__dirname, 'lib', platform, moduleName, 'dist')
}
else if (platform === 'web') {
    entry.push(path.resolve(__dirname, 'lib', mobilePrefix, moduleName, 'web', 'src', 'index.js'))
    outputPath = path.join(__dirname, 'lib', mobilePrefix, moduleName, 'web', 'dist')
}
else if (platform === 'native') {
    entry.push(path.resolve(__dirname, 'lib', mobilePrefix, moduleName, 'native', 'src', 'index.js'))
    outputPath = path.join(__dirname, 'lib', mobilePrefix, moduleName, 'native', 'dist')
}

webpack({
    entry: entry,

    output: {
        path: outputPath,
        filename: 'index.js',
        library: moduleName + '/src',
        libraryTarget: 'umd'
    },

    externals: Object.assign({
        'react': true,
        'react-dom': true,
        'jquery': true,
        'classnames': true,
        'lodash': true,
        'bootstrap/dist/css/bootstrap.css': true,
        'font-awesome/css/font-awesome.css': true,
        'bootstrap': true,
        'react-router': true,
        'flux': true,
        'antd': true
    }, alias),

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: ['babel?presets[]=react,presets[]=es2015', 'html-path-loader']
            }, {
                test: /\.(scss|css)/,
                exclude: [/node_modules/, /lib\/pc\/style/, /lib\/mobile\/style/],
                loaders: ['style', 'css', 'autoprefixer', 'sass', 'css-path-loader']
            }, {
                test: /\.(scss|css)/,
                include: [/node_modules/, /lib\/pc\/style/, /lib\/mobile\/style/],
                loaders: ['style', 'css', 'autoprefixer', 'sass']
            }, {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url?limit=3000&name=img/[hash:8].[name].[ext]'
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=3000&name=font/[hash:8].[name].[ext]'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}, function (err, stats) {
})