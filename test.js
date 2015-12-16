/**
 * Created by andycall on 15/12/15.
 */

var fs = require('fs')

var cssContent = fs.readFileSync('./test.txt').toString()



console.log(parseCss(cssContent))