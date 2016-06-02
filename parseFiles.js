var fs = require('fs')

function parse(filePath) {
  fs.readFile(filePath, 'utf8', function(err, fileContents) {
    var pathTo = filePath.split('/');
    fileContents = fileContents.split('\n');
    var tracked = fileContents.map(function(lineOfCode, lineNum) {
      if (lineOfCode.indexOf('console.log(') > -1) {
        if (lineOfCode.indexOf(`console.log('${pathTo[pathTo.length - 1]}', ` ) === -1)
          return lineOfCode.replace('console.log(', `console.log('${pathTo[pathTo.length - 1]}', 'line number: '${lineNum + 1}, `);
      }
      return lineOfCode;
    });
    recreateUserFile(tracked, filePath);
  });
}

function recreateUserFile(fileContents, filePath) {
  var insertNewLineCarriage = fileContents.map(function(lineOfCode) {
    return `${lineOfCode}\n`;
  });
  return writeToFile(insertNewLineCarriage.join(''), filePath);
}

function writeToFile(fileContents, filePath) {
  console.log('parseFiles.js', 'line number: 26', filePath);
  fs.writeFile(filePath, fileContents, function(err){
    if (err) throw err;
  });
}
module.exports = {
  parse,
}
