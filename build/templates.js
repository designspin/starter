var fs = require('fs');
var path = require('path');
var template = require('../src/markup/compiled/index.js');
var Handlebars = require('handlebars');
var myArgs = process.argv.slice(2);

var wstream = fs.createWriteStream('public/' + myArgs[0]);
wstream.write(Handlebars.templates.index());
wstream.end();