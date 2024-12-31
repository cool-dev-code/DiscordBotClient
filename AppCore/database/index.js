const DirectMessages = require('./DirectMessages');
const PreloadedUserSettings = require('./PreloadedUserSettings');
const FrecencyUserSettings = require('./FrecencyUserSettings');

module.exports.DirectMessagesDB = new DirectMessages();
module.exports.PreloadedUserSettingsDB = new PreloadedUserSettings();
module.exports.FrecencyUserSettingsDB = new FrecencyUserSettings();