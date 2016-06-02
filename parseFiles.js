var fs = require('fs')

function parse(file) {
  fs.readFile(file, 'utf8', function(err, fileContents) {
    var pathTo = file.split('/');
    fileContents = fileContents.split('\n');
    var tracked = fileContents.map(function(lineOfCode) {
      if (lineOfCode.indexOf('console.log(') > -1) {
        if (lineOfCode.indexOf(`console.log(${pathTo[pathTo.length - 1]}, ` ) === -1)
          return lineOfCode.replace('console.log(', `console.log(${pathTo[pathTo.length - 1]}, `);
      }
      return lineOfCode;
    });
    console.log(tracked)
  });
}


module.exports = {
  parse,
}
