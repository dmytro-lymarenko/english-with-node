var jsonFile = require('./json-file');
var Iterators = require('./iterators');

var Dictionary = function() {
	var dictionary = [];

	this.loadFromFile = function(fileName) {
		dictionary = jsonFile.readJsonFromFile(fileName);
		if(dictionary == undefined) {
			dictionary = [];
		}
	};

	this.first = function(iteratorName) {
		if(iteratorName == undefined) {
			iteratorName = 'CyclicIterator';
		}
		return new Iterators[iteratorName](dictionary, 0);
	};

	this.last = function(iteratorName) {
		if(iteratorName == undefined) {
			iteratorName = 'CyclicIterator';
		}
		return new Iterators[iteratorName](dictionary, dictionary.length);
	};

	this.get = function(index, iteratorName) {
		if(index >= 0 && index < dictionary.length) {
			if(iteratorName == undefined) {
				iteratorName = 'CyclicIterator';
			}
			return new Iterators[iteratorName](dictionary, index);
		}
		return undefined;
	};

	this.add = function(wordAndTranslate) {
		dictionary.push(wordAndTranslate);
	};
};

module.exports = Dictionary;
