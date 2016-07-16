var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractSCSS = new ExtractTextPlugin('style.css')
var dllPlugins = require('./dll-plugins')
var resolve = require('./resolve')
var path = require('path')

var config = {
    entry: [
        './src/index.js'
    ],

    output: {
        path      : path.join(process.cwd(), 'output/static'),
        publicPath: '/static/',
        filename  : 'bundle.js'
    },

    module: {
        loaders: [
            {
                test   : /\.(tsx|ts)?$/,
                exclude: [/node_modules/],
                loaders: ['babel', 'ts-loader', 'html-path-loader']
            }, {
                test   : /\.(jsx|js)?$/,
                exclude: [/node_modules/],
                loaders: ['babel', 'html-path-loader']
            }, {
                test   : /\.(scss|css)/,
                exclude: [/node_modules/, /lib\/mobile\/style/, /demo\/lists/],
                loader : extractSCSS.extract('style', 'css!autoprefixer!sass!css-path-loader')
            }, {
                test   : /\.(scss|css)/,
                include: [/node_modules/, /lib\/mobile\/style/, /demo\/lists/],
                loader : extractSCSS.extract('style', 'css!autoprefixer!sass')
            }, {
                test   : /\.(png|jpg)$/,
                exclude: /node_modules/,
                loaders: ['url?limit=1024&name=img/[hash:8].[name].[ext]']
            }, {
                test   : /\.(woff|woff2|ttf|eot|svg)/,
                loaders: ['url?limit=1024&name=font/[hash:8].[name].[ext]']
            }, {
                test  : /\.json$/,
                loader: 'json-loader'
            }, {
                test  : /\.md$/,
                loader: 'text-loader'
            }
        ]
    },

    resolve: {
        'react/lib/ExecutionEnvironment': 'execution-environment',
        'react/lib/ReactContext': 'react-context'
    },

    plugins: [
        extractSCSS,
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle   : false
        })
    ],

    resolve: resolve
}

dllPlugins.forEach(function (item) {
    config.plugins.push(item)
})

module.exports = config