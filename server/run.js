var server = require('http').createServer();
var readJsonFromFile = require('./modules/json-file').readJsonFromFile;
var showNotify = require('./modules/notify').showNotify;
var Iterators = require('./modules/iterators');

var settings = readJsonFromFile('./settings.json');

var intervalId = null;

var dictionary = readJsonFromFile(settings.dictionary_path);
var iterator = new Iterators.CyclicIterator(dictionary, 0);

intervalId = setInterval(function() {
	var item = iterator.get();
	var text = item.eng + ' - ' + item.ukr;
	showNotify(text);
	iterator.next();
}, settings.interval);

console.log('run server');
server.listen(settings.port);
