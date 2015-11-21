var showNotify = require('./notify').showNotify;
var Dictionary = require('./dictionary');
var Looper = require('./looper');

var Teacher = function(settings) {
	var dictionary = new Dictionary();
	var looper = new Looper();

	dictionary.loadFromFile(settings.dictionary_path);
	var iterator = dictionary.first();

	this.start = function() {
		looper.start(function() {
			var item = iterator.get();
			var text = item.eng + ' - ' + item.ukr;
			showNotify(text);
			iterator.next();
		}, settings.interval);
	};

	this.stop = function() {
		looper.stop();
	};
};

module.exports = Teacher;
