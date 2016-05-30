var fs = require('fs');

function getFileNames(directory){
  fs.readdir(directory, function(err, files) {
    console.log(files)
    var filtered = files.filter(function(elem) {
      return elem.slice(-2) === 'js';
    });
    console.log(filtered);
  })
}

module.exports = {
  getFileNames,
}
