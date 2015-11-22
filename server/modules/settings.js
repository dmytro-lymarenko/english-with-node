var _ = require('lodash');
var jsonFile = require('./json-file');

var defaultSettingsPath = './settings.json';
var userSettingsPath = './user-settings.json';

var Settings = function() {
	var defaultSettings = jsonFile.readJsonFromFile(defaultSettingsPath);
	var userSettings = jsonFile.readJsonFromFile(userSettingsPath);

	var settings = _.merge({}, defaultSettings, userSettings);
	
	this.reloadUserSettings = function() {
		userSettings = jsonFile.readJsonFromFile(userSettingsPath);
		settings = _.merge({}, defaultSettings, userSettings);
	};

	this.getSettings = function() {
		return settings;
	};
};

module.exports = Settings;
