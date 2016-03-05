var webpack = require('webpack')
var path = require('path')
var resolve = require('./resolve')

var config = {
    entry: [
        path.resolve('stand-alone-package', 'index.js')
    ],

    output: {
        path: 'stand-alone-package',
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },

    resolve: resolve,

    module: {
        loaders: [
            {
                test: /\.(tsx|ts)?$/,
                exclude: [/node_modules/, /demo\/lists/],
                loaders: ['react-hot-loader', 'ts-loader', 'html-path-loader']
            }, {
                test: /\.(jsx|js|es6)?$/,
                exclude: [/node_modules/, /demo\/lists/],
                loaders: ['react-hot-loader', 'babel', 'html-path-loader']
            }, {
                test: /\.(jsx|js|es6)?$/,
                include: [/node_modules/, /demo\/lists/],
                loaders: ['html-path-loader']
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
                loaders: ['url?limit=3000&name=img/[hash:8].[name].[ext]']
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)/,
                loaders: ['url?limit=3000&name=font/[hash:8].[name].[ext]']
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.md$/,
                loader: 'text-loader'
            }
        ]
    }
}


module.exports = config