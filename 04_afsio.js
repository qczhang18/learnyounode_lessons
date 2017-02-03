// var fs = require('fs')
// var file = process.argv[2];
// var buffer = fs.readFileSync(file).toString();  
// console.log(buffer.split('\n').length-1);


var fs = require('fs')
var file = process.argv[2];

fs.readFile(file, function finishedReading(error, fileData) {
  console.log(fileData.toString().split('\n').length-1);
  //if (error) return console.error(error)
  // do something with the movieData
})



// Official solution from learnyounode
    // var fs = require('fs')
    // var file = process.argv[2]
    
    // fs.readFile(file, function (err, contents) {
    //   if (err) {
    //     return console.log(err)
    //   }
    //   // fs.readFile(file, 'utf8', callback) can also be used
    //   var lines = contents.toString().split('\n').length - 1
    //   console.log(lines)
    // })
