var logic = require('./logic');

var sleuthy = {};

sleuthy.track = function (dirname) {
  logic.getFileNames(dirname);
}

module.exports = sleuthy;
