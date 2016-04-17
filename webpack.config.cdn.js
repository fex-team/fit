var webpack = require('webpack')
var path = require('path')

var config = {
    entry: {
        React: "./node_modules/react",
        ReactRouter: './node_modules/react-router/umd/ReactRouter.min.js',
        classNames: './node_modules/classnames',
        _: './node_modules/lodash',
        $: './node_modules/jquery'
    },
    output: {
        path: path.join(__dirname, "output/cdn"),
        filename: "[name].js",
        library: "[name]",
        libraryTarget: "umd"
    },
    externals: {
        'react': 'React'
    },
    module: {
        loaders: [
            {
                test: /\.(scss|css)/,
                include: /node_modules/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    }
}

module.exports = config