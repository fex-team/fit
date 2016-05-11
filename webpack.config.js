var webpack = require('webpack')
var resolve = require('./resolve')
var externals = require('./externals')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractSCSS = new ExtractTextPlugin('style.css')

module.exports = {
    entry: [
        './src/index.js'
    ],

    output: {
        path      : __dirname + '/output',
        publicPath: '/output/',
        filename  : 'index.js'
    },

    externals: externals,

    module: {
        loaders: [
            {
                test   : /\.(tsx|ts)?$/,
                exclude: [/node_modules/, /demo\/lists/],
                loaders: ['babel', 'ts-loader', 'html-path-loader']
            }, {
                test   : /\.(jsx|js|es6)?$/,
                exclude: [/node_modules/, /demo\/lists/],
                loaders: ['babel', 'html-path-loader']
            }, {
                test   : /\.(jsx|js|es6)?$/,
                include: [/node_modules/, /demo\/lists/],
                loaders: ['html-path-loader']
            }, {
                test   : /\.(scss|css)/,
                exclude: [/node_modules/, /lib\/pc\/style/, /lib\/mobile\/style/],
                loaders: ['style', 'css', 'autoprefixer', 'sass', 'css-path-loader']
            }, {
                test   : /\.(scss|css)/,
                include: [/node_modules/, /lib\/pc\/style/, /lib\/mobile\/style/],
                loaders: ['style', 'css', 'autoprefixer', 'sass']
            }, {
                test   : /\.(png|jpg)$/,
                exclude: /node_modules/,
                loaders: ['url?limit=3000&name=img/[hash:8].[name].[ext]']
            }, {
                test   : /\.(woff|woff2|ttf|eot|svg)/,
                loaders: ['url?limit=3000&name=font/[hash:8].[name].[ext]']
            }, {
                test  : /\.json$/,
                loader: 'json-loader'
            }, {
                test  : /\.md$/,
                loader: 'text-loader'
            }
        ]
    },

    resolve: resolve,

    plugins: [
        extractSCSS,
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        })
    ]
}