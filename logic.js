var fs = require('fs');
var path = require('path');
var parseFiles = require('./parseFiles');

var filesArray = [];

function getFileNames(appPath) {
  if (fs.statSync(appPath).isDirectory()) {
    fs.readdir(appPath, function(err, files) {
      var jsFiles = files.filter(function(elem) {
        return elem.slice(-2) === 'js' || elem.slice(-3) === '.jsx';
      });
      filesArray = filesArray.concat(jsFiles.map(function(files) {
        return `${appPath}/${files}`;
      }));

      var allDirs = files.filter(function(dir) {
        return fs.statSync(path.join(appPath, dir)).isDirectory();
      });
      if (allDirs.length > 0)
        return ignoreDirectories(appPath, allDirs);

      console.log('logic.js', 'linenumber:23', filesArray)
      filesArray.forEach(function(file) {
        return parseFiles.parse(file);
      });
    });
  }
}

function ignoreDirectories(appPath, allDirs) {
  fs.readFile(__dirname + '/.gitignore', 'utf8', function(err, data) {
    if (err) throw err;
    var ignoredDirs = data.split('\n');
    ignoredDirs.pop();
    ignoredDirs = ignoredDirs.concat(['.git']);
    filterDirectories(appPath, allDirs, ignoredDirs);
  });
}

function filterDirectories(appPath, allDirs, ignoredDirs) {
  var filteredDirs = allDirs.filter(function(dir) {
    return ignoredDirs.indexOf(dir) === -1;
  });
  var directories = filteredDirs.map(function(filePath) {
    return `${appPath}/${filePath}`;
  });
  directories.forEach(function(dir) {
    return getFileNames(dir);
  });
}



module.exports = {
  getFileNames,
}


