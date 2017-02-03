var fs = require('fs')
var file = process.argv[2];
var buffer = fs.readFileSync(file).toString();  
console.log(buffer.split('\n').length-1);


//their solution
//  var fs = require('fs')  
//    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1