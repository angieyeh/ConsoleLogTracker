var fs = require('fs')

function parse(file) {
  fs.readFile(file, 'utf8', function(err, fileContents) {

  });
}

module.exports = {
  parse,
}
