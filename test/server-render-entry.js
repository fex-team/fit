require.extensions['.css'] = function (module, filename){}
require('require-sass')()
require('babel-core/register')
require('babel-polyfill')
require('./server-render')