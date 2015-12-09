module.exports = {
    entry: [
        './src/index.js'
    ],

    output: {
        filename: 'output/index.js'
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: [/node_modules/, /demo/],
                loaders: ['react-hot-loader', 'babel?presets[]=react,presets[]=es2015', 'html-path-loader']
            },{
                test: /\.js?$/,
                include: [/demo/],
                loaders: ['html-path-loader']
            }, {
                test: /\.(scss|css)/,
                exclude: /node_modules/,
                loaders: ['style', 'css', 'autoprefixer', 'sass', 'css-path-loader']
            },
            {
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
            }, {
                test: /\.md$/,
                loader: 'text-loader'
            }
        ]
    }
};