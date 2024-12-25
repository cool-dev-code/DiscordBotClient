const { contextBridge, ipcRenderer } = require('electron');
// const IPCEvent = require('./IPCEvent');

class IPCEvent extends null {
	static Close = 'DBC_CLOSE';
	static Minimize = 'DBC_MINIMIZE';
	static Maximize = 'DBC_MAXIMIZE';
	static GetBotInfo = 'DBC_GET_BOT_INFO';
	static GetBotInfoResponse = 'DBC_GET_BOT_INFO_RESPONSE';
	static GetDBCVersions = 'DBC_GET_DBC_VERSIONS';
	static GetPreloadedUserSettings = 'DBC_GET_PRELOADED_USER_SETTINGS';
	static GetExperiment = 'DBC_GET_EXPERIMENT';
	static GetPrivateChannel = 'DBC_GET_PRIVATE_CHANNEL';
	static HandlePrivateChannel = 'DBC_HANDLE_PRIVATE_CHANNEL';
	static GetDefaultUserPatch = 'DBC_GET_DEFAULT_USER_PATCH';
}

function getUserDefaultPatch() {
	return ipcRenderer.sendSync(IPCEvent.GetDefaultUserPatch);
}

contextBridge.exposeInMainWorld('BotClientNative', {
	getBotInfo: (token) => {
		return new Promise((resolve, reject) => {
			ipcRenderer.once(IPCEvent.GetBotInfoResponse, (event, response) => {
				resolve(response);
			});
			ipcRenderer.send(IPCEvent.GetBotInfo, token);
		});
	},
	getBotClientVersion() {
		return ipcRenderer.sendSync(IPCEvent.GetDBCVersions);
	},
	getSettingProto1(id) {
		return ipcRenderer.sendSync(IPCEvent.GetPreloadedUserSettings, id);
	},
	getPrivateChannelLogin(botId, pluginSaveDMsEnable) {
		if (!pluginSaveDMsEnable)
			return [
				{
					type: 1,
					recipients: [getUserDefaultPatch()],
					last_message_id: '1000000000000000000',
					is_spam: false,
					id: '1000000000000000000',
					flags: 0,
				},
			];
		const privateChannel = ipcRenderer.sendSync(IPCEvent.GetPrivateChannel, botId);
		const allChannel = Object.values(privateChannel);
		allChannel.unshift({
			type: 1,
			recipients: [getUserDefaultPatch()],
			last_message_id: '1000000000000000000',
			is_spam: false,
			id: '1000000000000000000',
			flags: 0,
		});
		return allChannel;
	},
	getUserExperiments(allData, botId) {
		return ipcRenderer.sendSync(IPCEvent.GetExperiment, 'user', allData, botId);
	},
	getGuildExperiments() {
		return ipcRenderer.sendSync(IPCEvent.GetExperiment, 'guild');
	},
	handleOpenPrivateChannel(botId, userId, channelId) {
		return ipcRenderer.sendSync(
			IPCEvent.HandlePrivateChannel,
			'add',
			botId,
			channelId,
			userId,
		);
	},
	handleClosePrivateChannel(botId, channelId) {
		return ipcRenderer.sendSync(
			IPCEvent.HandlePrivateChannel,
			'remove',
			botId,
			channelId,
		);
	},
	clearDMsCache(botId) {
		return ipcRenderer.sendSync(IPCEvent.HandlePrivateChannel, 'clear', botId);
	},
	// Vesktop
	close() {
		ipcRenderer.sendSync(IPCEvent.Close);
	},
	minimize() {
		ipcRenderer.sendSync(IPCEvent.Minimize);
	},
	maximize() {
		ipcRenderer.sendSync(IPCEvent.Maximize);
	},
});
