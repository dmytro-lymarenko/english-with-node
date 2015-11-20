var server = require('http').createServer();
var readJSONFromFile = require('./modules/json-file').readJSONFromFile;

var settings = readJSONFromFile('./settings.json');

var exec = require('child_process').exec;
var intervalId = null;

var dictionary = readJSONFromFile(settings.dictionary_path);
var dictionaryIndex = 0;

intervalId = setInterval(function() {
	if(dictionaryIndex >= dictionary.length) {
		dictionaryIndex = 0;
	}
	var text = dictionary[dictionaryIndex].eng + ' - ' + dictionary[dictionaryIndex].ukr;
	var command = 'notify-send "' + text + '"';
	try {
		exec(command, function(err, out, code) {});
	} catch(e) {
	}
	dictionaryIndex++;
}, settings.interval);

console.log('run server');
server.listen(settings.port);
