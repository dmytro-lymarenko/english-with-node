var server = require('http').createServer();
var readJsonFromFile = require('./modules/json-file').readJsonFromFile;
var Teacher = require('./modules/teacher');

var settings = readJsonFromFile('./settings.json');

var teacher = new Teacher(settings);
teacher.start();

console.log('run server');
server.listen(settings.port);
