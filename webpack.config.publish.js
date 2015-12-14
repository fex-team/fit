var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: [
        './lib/' + process.argv[5] + '/index.js'
    ],

    output: {
        path: path.join(__dirname, 'lib/' + process.argv[5] + '/dist'),
        filename: 'index.js',
        library: process.argv[5],
        libraryTarget: 'umd'
    },

    externals: {
        'react': 'React'
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: ['babel?presets[]=react,presets[]=es2015', 'html-path-loader']
            }, {
                test: /\.(scss|css)/,
                exclude: /node_modules/,
                loaders: ['style', 'css', 'autoprefixer', 'sass', 'css-path-loader']
            }, {
                test: /\.(scss|css)/,
                include: /node_modules/,
                loaders: ['style', 'css', 'autoprefixer', 'sass']
            }, {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url'
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}