var stripJsonComments = require('strip-json-comments');
var fs = require('fs');

function readJsonFromFile(fileName) {
	try {
		var json = fs.readFileSync(fileName, 'utf8');
		var obj = JSON.parse(stripJsonComments(json));
		return obj;
	} catch(e) {
		console.error(e);
	}
	return undefined;
}

module.exports = {
	readJsonFromFile: readJsonFromFile
};
