'use strict';
var fs = require('fs');
var manifest = JSON.parse(fs.readFileSync('./app/manifest.json'));
module.exports = {
  version: manifest.version
};
