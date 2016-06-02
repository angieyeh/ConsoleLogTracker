var logic = require('./logic');


function directory(dirname) {
  logic.getFileNames(dirname);
}

directory(__dirname);

module.exports 
