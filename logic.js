var fs = require('fs');
var path = require('path');

function getFileNames(directory){
  fs.readdir(directory, function(err, files) {
    var jsFiles = files.filter(function(elem) {
      return elem.slice(-2) === 'js' || elem.slice(-3) === '.jsx';
    });
    var allDirs = files.filter(function(dir) {
      return fs.statSync(path.join(directory, dir)).isDirectory();
    })
    return ignoreDirectories(jsFiles, allDirs, filesToRead);
  });
}

getFileNames(__dirname);

function ignoreDirectories(jsFiles, allDirs, callback) {
  fs.readFile(__dirname + '/.gitignore', 'utf8', function(err, data) {
    if (err) throw err;
    var ignoredDirs = data.split('\n')
    ignoredDirs.pop()
    ignoredDirs = ignoredDirs.concat(['.git']);
    filesToRead(ignoredDirs)

  });
}

function filesToRead(userFiles, userDirs) {

}

module.exports = {
  getFileNames,
}
