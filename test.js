var context = require.context('./lib', true, /.spec\.js$/);
//make sure you have your directory and regex test set correctly!
context.keys().forEach(context);