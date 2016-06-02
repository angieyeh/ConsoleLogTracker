var logic = require('./logic');

var sleuthy = {};

sleuthy.track = function (dirname) {
  logic.getFileNames(dirname);
}

sleuthy.track(__dirname);
module.exports = sleuthy;

