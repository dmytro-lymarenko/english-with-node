var server = require('http').createServer();
var readJsonFromFile = require('./modules/json-file').readJsonFromFile;
var showNotify = require('./modules/notify').showNotify;

var settings = readJsonFromFile('./settings.json');

var intervalId = null;

var dictionary = readJsonFromFile(settings.dictionary_path);
var dictionaryIndex = 0;

intervalId = setInterval(function() {
	if(dictionaryIndex >= dictionary.length) {
		dictionaryIndex = 0;
	}
	var text = dictionary[dictionaryIndex].eng + ' - ' + dictionary[dictionaryIndex].ukr;
	showNotify(text);
	dictionaryIndex++;
}, settings.interval);

console.log('run server');
server.listen(settings.port);
