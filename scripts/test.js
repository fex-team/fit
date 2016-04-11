var ts = require('typescript')
var babel = require('babel-core')
var path = require('path')

var code = `
export default (defaultProps:any = {}, props:any = {})=> {
    let defaultPropsKeys:any = Object.keys(defaultProps)
    let others:any = {}
    Object.keys(props).forEach((key:string)=> {
        if (!defaultPropsKeys.includes(key)) {
            others[key] = props[key]
        }
    })
    return others
}
`

// var result = ts.transpile(code)
// console.log(result)

var result = babel.transform(code, {
    extends: path.resolve(__dirname, '../.babelrc')
})

var resultCode = result.code
console.log(resultCode)