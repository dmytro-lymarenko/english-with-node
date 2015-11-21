var Looper = function() {
	var intervalId = null;

	this.start = function(callback, interval) {
		this.stop();
		intervalId = setInterval(callback, interval);
	};

	this.stop = function() {
		if(intervalId != null) {
			clearInterval(intervalId);
		}
	};
};

module.exports = Looper;
