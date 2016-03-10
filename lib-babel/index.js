var ReactDOMServer = require('react-dom/server')
var React = require('react')

var Chat = require('../lib/mobile/chat/lib')

console.log(ReactDOMServer.renderToString(React.createElement(Chat.Chat)))