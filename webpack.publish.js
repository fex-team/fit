var webpack = require('webpack')
var path = require('path')
var resolve = require('./resolve.js')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var _ = require('lodash')
var fs = require('fs')
var args = process.argv.slice(2)

if (args.length === 0) {
    console.error(
        'you did not pass any commands, did you mean to run `updator push` ?'
    )
    process.exit(1)
}

var modulePath = args[0]

var modulePackageJSON = JSON.parse(fs.readFileSync(path.resolve(modulePath, 'package.json')).toString())

var alias = {}
for (var key in resolve.alias) {
    alias[key] = true
}

var outputPath = path.resolve(modulePath, 'dist')

webpack({
    entry: [
        path.resolve(modulePath, 'src', 'index.js')
    ],

    output: {
        path: outputPath,
        filename: 'index.js',
        library: modulePackageJSON.name,
        libraryTarget: 'umd'
    },

    externals: Object.assign({
        'react': true,
        'react-dom': true,
        'jquery': true,
        'classnames': true,
        'lodash': true,
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
                test: /\.(css)$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
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
    },

    plugins: [
        new ExtractTextPlugin('style.css')
    ]
}, function (err, stats) {
})