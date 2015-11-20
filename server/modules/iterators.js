var LinearIterator = function(array, index) {
	var i = index;

	this.next = function() {
		if(i < array.length) {
			i++;
		}
	};

	this.get = function() {
		if(i >= 0 && i < array.length) {
			return array[i];
		}
		return undefined;
	}
};

var CyclicIterator = function(array, index) {
	var i = index;

	this.next = function() {
		i++;
		if(i >= array.length) {
			i = 0;
		}
	};

	this.get = function() {
		if(i >= 0 && i < array.length) {
			return array[i];
		}
		return undefined;
	}
};

module.exports = {
	LinearIterator: LinearIterator,
	CyclicIterator: CyclicIterator
};
