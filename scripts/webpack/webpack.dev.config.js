var webpack = require('webpack')
var path = require('path')
var resolve = require('./resolve')
var dllPlugins = require('./dll-plugins')
var globalConfig = require('../../config')
    
var config = {
    debug: true,

    entry: [
        `webpack-dev-server/client?http://localhost:${globalConfig.localWebpackPort}`,
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],

    output: {
        path      : __dirname,
        publicPath: `http://localhost:${globalConfig.localWebpackPort}/`,
        filename  : 'bundle.js'
    },

    module: {
        loaders: [
            {
                test   : /\.(tsx|ts)?$/,
                exclude: [/node_modules/],
                loaders: ['react-hot-loader', 'ts-loader', 'html-path-loader']
            }, {
                test   : /\.(jsx|js)?$/,
                exclude: [/node_modules/],
                loaders: ['react-hot-loader', 'babel', 'html-path-loader']
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

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            columns : false
        })
    ],

    resolve: resolve
}

dllPlugins.forEach(function (item) {
    config.plugins.push(item)
})

module.exports = config