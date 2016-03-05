/**
 * Created by wangrui on 16/3/1.
 */
// Karma configuration
// Generated on Fri Dec 18 2015 12:30:32 GMT+0800 (CST)
var webpack = require('webpack')
var resolve = require('./resolve')
var externals = require('./externals')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var webpackConfig = require('./webpack.config');

module.exports = function (config) {

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'test.js'
            //'lib/**/*.spec.js'
        ],

        // list of files to exclude
        exclude: [],

        proxies: {},

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'test.js': ["webpack", 'sourcemap']
        },

        webpack: {
            devtool: "inline-source-map",
            module: {
                postLoaders: [
                    {
                        test: /\.js$/,
                        exclude: /(test|node_modules)\//,
                        loader: 'istanbul-instrumenter'
                    }
                ],
                loaders: [
                    {
                        test: /\.(jsx|js|es6)?$/,
                        exclude: [/node_modules/, /demo\/lists/],
                        loaders: ['babel?presets[]=react,presets[]=es2015', 'html-path-loader']
                    }, {
                        test: /\.(jsx|js|es6)?$/,
                        include: [/demo/],
                        loaders: ['html-path-loader']
                    }, {
                        test: /\.(scss|css)/,
                        exclude: [/node_modules/, /lib\/pc\/style/, /lib\/mobile\/style/, /demo\/lists/],
                        loaders: ['style', 'css', 'autoprefixer', 'sass', 'css-path-loader']
                    },
                    {
                        test: /\.(scss|css)/,
                        include: [/node_modules/, /lib\/pc\/style/, /lib\/mobile\/style/, /demo\/lists/],
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
                    }, {
                        test: /\.md$/,
                        loader: 'text-loader'
                    }
                ]
            },

            plugins: [
                new webpack.DefinePlugin({
                    "process.env": {
                        NODE_ENV: JSON.stringify("production")
                    }
                })
            ],

            resolve: resolve
        },

        //webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots', 'coverage', 'html'],

        htmlReporter: {
            outputDir: 'test_jasmine_html', // where to put the reports
            templatePath: null, // set if you moved jasmine_template.html
            focusOnFailures: true, // reports show failures on start
            namedFiles: false, // name files instead of creating sub-directories
            pageTitle: null, // page title for reports; browser info by default
            urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
            reportName: 'report_html', // report summary filename; browser info by default


            // experimental
            preserveDescribeNesting: false, // folded suites stay folded
            foldAll: false, // reports start folded (only with preserveDescribeNesting)
        },

        coverageReporter: {
            type: 'html',
            dir: './test_coverage_html/'
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],   //Chrome  PhantomJS

        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
            exitOnResourceError: true
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity,
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-html-reporter',
            'karma-phantomjs-launcher',
            'karma-webpack',
            'karma-sourcemap-loader'
        ]
    })
}
