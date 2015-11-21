var server = require('http').createServer();
var readJsonFromFile = require('./modules/json-file').readJsonFromFile;
var showNotify = require('./modules/notify').showNotify;
var Dictionary = require('./modules/dictionary');

var settings = readJsonFromFile('./settings.json');

var intervalId = null;
var dictionary = new Dictionary();
dictionary.loadFromFile(settings.dictionary_path);

var iterator = dictionary.first();

intervalId = setInterval(function() {
	var item = iterator.get();
	var text = item.eng + ' - ' + item.ukr;
	showNotify(text);
	iterator.next();
}, settings.interval);

console.log('run server');
server.listen(settings.port);
