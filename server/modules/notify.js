var exec = require('child_process').exec;

function showNotify(message) {
	var command = 'notify-send "' + message + '"';
	try {
		exec(command);
	} catch(e) {
		console.error(e);
	}
}

module.exports = {
	showNotify: showNotify
};
