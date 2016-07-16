var path = require('path')
var webpack = require('webpack')
var librarys = require('./library')

module.exports = {
    entry: {
        library: librarys
    },

    output: {
        filename: '[name].dll.js',
        path    : path.join(process.cwd(), 'output/static/dll'),
        library : '[name]'
    },

    plugins: [
        new webpack.DllPlugin({
            path: path.join(process.cwd(), 'output/static/dll', '[name]-mainfest.json'),
            name: '[name]'
        })
    ],

    module: {
        loaders: [
            {
                test   : /\.css/,
                loaders: ['style', 'css']
            }, {
                test  : /\.(png|jpg)$/,
                loader: 'url?limit=1024&name=img/[hash:8].[name].[ext]'
            }, {
                test  : /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'url?limit=1024&name=font/[hash:8].[name].[ext]'
            }, {
                test  : /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}
