var program = require('commander')

program
    .version('1.0.0')
    .option('-t, --test', '测试')
    .parse(process.argv)

console.log(program.test)