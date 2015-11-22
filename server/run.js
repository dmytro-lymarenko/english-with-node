var server = require('http').createServer();
var Teacher = require('./modules/teacher');
var Settings = require('./modules/settings');

var settings = new Settings();

var teacher = new Teacher(settings.getSettings());
teacher.start();

console.log('run server');
server.listen(settings.getSettings().port);
