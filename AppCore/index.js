const {
	app,
	BrowserWindow,
	systemPreferences,
	shell,
	session,
	Tray,
	Menu,
	screen,
	ipcMain,
	Notification,
} = require('electron');
const log = require('electron-log');
const path = require('path');
const { fetch } = require('undici');
const os = require('os');
const contextMenu = require('electron-context-menu');

const {
	version: VencordVersion,
} = require('../VencordExtension/manifest.json');

const server = require('./APIServer.js');
const ApplicationFlags = require('../AppAssets/ApplicationFlags.js');
const database = require('./Database.js');
const { PreloadedUserSettings } = require('../DiscordProtos');
const Experiments = require('../AppAssets/Experiments.js');
const Constants = require('./Constants.js');
const Intents = require('../AppAssets/Intents.js');
const IPCEvent = require('./IPCEvent.js');

BigInt.prototype.toJSON = function () {
	return this.toString();
};

class DiscordBotClient {
	logger = log;
	#shouldQuitApp = false;
	/**
	 * @type {BrowserWindow}
	 */
	win;
	/**
	 * @type {Tray}
	 */
	tray;
	/**
	 * @type {number}
	 */
	port;
	constructor() {
		this.logger.log('App starting...');
		this.initApp();
	}
	/**
	 * Load the tray
	 * @param {Electron.Menu} menu
	 */
	initTray(menu) {
		if (!this.tray) {
			this.tray = new Tray(Constants.icon16);
		}
		this.tray.setToolTip(`${Constants.APP_NAME} v${app.getVersion()}`);
		this.tray.on('click', () => {
			this.win.show();
		});
		this.tray.setContextMenu(menu);
	}
	setupTray() {
		const menu = Menu.buildFromTemplate([
			{
				label: `${Constants.APP_NAME} v${app.getVersion()}`,
				icon: Constants.icon16,
				enabled: false,
			},
			{
				type: 'separator',
			},
			{
				label: 'Check for Updates...',
				type: 'normal',
				click: () => {
					this.checkingForUpdates();
				},
			},
			{
				label: 'Github Repository',
				type: 'normal',
				click: () =>
					shell.openExternal(
						'https://github.com/aiko-chan-ai/DiscordBotClient',
					),
			},
			{
				type: 'separator',
			},
			{
				label: 'Relaunch',
				click: () => {
					app.relaunch();
					this.#shouldQuitApp = true;
					app.quit();
				},
			},
			{
				label: 'Clear web storage and relaunch',
				click: () => {
					this.win.webContents.session
						.clearCache()
						.then(() =>
							this.win.webContents.session.clearStorageData(),
						)
						.then(() => {
							app.relaunch();
							this.#shouldQuitApp = true;
							app.quit();
						});
				},
			},
			{
				label: 'Clear local database',
				click: () => {
					database.deleteAll().then(() => {
						this.showNotification({
							title: 'Database has been cleared',
							body: 'The deleted data includes: PreloadedUserSettings, FrecencyUserSettings, and opened Private Channels.',
							silent: false,
						});
					});
				},
			},
			{
				label: 'Toggle DevTools',
				click: () => {
					this.win.webContents.toggleDevTools();
				},
			},
			{
				type: 'separator',
			},
			{
				label: 'Quit',
				click: () => {
					this.#shouldQuitApp = true;
					app.quit();
				},
			},
		]);
		this.initTray(menu);
	}
	initApp() {
		app.setAppUserModelId(Constants.APP_NAME);
		// Allow Localhost SSL
		app.commandLine.appendSwitch('allow-insecure-localhost', 'true');
		app.commandLine.appendSwitch('ignore-certificate-errors');
		app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors');
		// App Event
		app.on('window-all-closed', () => {
			if (process.platform !== 'darwin') {
				this.#shouldQuitApp = true;
				app.quit();
			}
		});

		app.on('before-quit', (event) => {
			this.logger.info('App closing...');
		});

		app.on(
			'second-instance',
			(event, commandLine, workingDirectory, additionalData) => {
				const myWindow = BrowserWindow.getAllWindows()?.[0];
				if (myWindow) {
					myWindow.show();
				}
			},
		);
		// Handle second instance
		const gotTheLock = app.requestSingleInstanceLock();
		if (!gotTheLock) {
			this.logger.debug('Second Instance detected. Quit app...');
			this.#shouldQuitApp = true;
			app.quit();
		} else {
			app.whenReady().then(async () => {
				await database.promiseReady;
				await this.checkingForUpdates();
				this.createWindow();
			});
		}

		// Create context menu
		contextMenu({
			showLearnSpelling: false,
			showSearchWithGoogle: false,
			showCopyImageAddress: true,
			showInspectElement: true,
			showSaveImage: true,
			showSaveImageAs: true,
			showSaveVideo: true,
			showSaveVideoAs: true,
		});

		this.setupIpcEvents();
	}
	async sessionPatch() {
		// Patch custom css
		session.defaultSession.webRequest.onHeadersReceived(
			{
				urls: ['https://raw.githubusercontent.com/*'],
			},
			(details, callback) => {
				if (
					details.responseHeaders['content-type'].find((_) =>
						_.includes('text/'),
					)
				) {
					details.responseHeaders['content-type'] = ['text/css'];
				}
				callback({ responseHeaders: details.responseHeaders });
			},
		);
		// Load Vencord-Web Extension
		await session.defaultSession.loadExtension(
			Constants.VencordExtensionPath,
		);
		this.logger.info(
			'Vencord-Web Extension loaded, version: ' + VencordVersion,
		);
	}
	async createWindow() {
		this.port = await server(Constants.PortDefault);
		this.setupTray();
		const primaryDisplay = screen.getPrimaryDisplay();
		const { width, height } = primaryDisplay.workAreaSize;
		// Create the browser window.
		this.win = new BrowserWindow({
			width: Math.floor(width * 0.9),
			height: Math.floor(height * 0.9),
			minWidth: 940,
			minHeight: 500,
			icon: Constants.icon128,
			webPreferences: {
				webSecurity: false,
				nodeIntegration: false,
				enableRemoteModule: false,
				preload: path.join(__dirname, 'ElectronPreload.js'),
				contextIsolation: true,
			},
			backgroundColor: '#36393f',
			titleBarStyle: 'hidden',
			frame: false,
			title: Constants.APP_NAME,
			...(process.platform === 'darwin' && {
				titleBarStyle: 'hidden',
				trafficLightPosition: { x: 10, y: 10 },
			}),
		});
		// Check port
		if (this.port !== Constants.PortDefault) {
			this.showNotification({
				title: 'Port In Use',
				body: 'The default port is already in use by another application, so you will be logged out temporarily.',
				silent: false,
			});
		}
		// BrowserWindow Event
		this.win
			.on('close', (event) => {
				if (!this.#shouldQuitApp) {
					event.preventDefault();
					this.win.hide();
				}
			})
			.on('hide', function (e) {
				e.preventDefault();
			});

		await this.sessionPatch();
		// Patch UserAgent (Switch Plan B SDP > Unified Plan)
		this.win.webContents.setUserAgent(Constants.UserAgentChrome);
		this.logger.info(`Electron UserData: ${app.getPath('userData')}`);
		// Microphone
		if (process.platform === 'darwin') {
			session.defaultSession.setPermissionRequestHandler(
				async (_webContents, permission, callback, details) => {
					let granted = true;
					if ('mediaTypes' in details) {
						if (details.mediaTypes?.includes('audio')) {
							granted &&=
								await systemPreferences.askForMediaAccess(
									'microphone',
								);
						}
						if (details.mediaTypes?.includes('video')) {
							granted = false;
						}
					}
					callback(granted);
				},
			);
		}
		// webContents
		if (!app.isPackaged) this.win.webContents.openDevTools();
		// Discord popout
		this.win.webContents.setWindowOpenHandler(({ url }) => {
			this.logger.log('WindowOpenHandler', url);
			if (
				Constants.AllowPopups.includes(url) ||
				url === `https://localhost:${this.port}/popout`
			) {
				return {
					action: 'allow',
					overrideBrowserWindowOptions: {
						parent: this.win,
						modal: true,
						icon: Constants.icon128,
						autoHideMenuBar: true,
						width: 940,
						height: 500,
						minWidth: 940,
						minHeight: 500,
					},
				};
			}
			shell.openExternal(url);
			return { action: 'deny' };
		});
		// Load the index.html of the app.
		this.win.loadURL(
			Constants.TestVencordMode
				? 'https://canary.discord.com/channels/@me'
				: `https://localhost:${this.port}`,
		);
		// WebContents Event
		this.win.webContents
			.on('did-start-loading', () => {
				this.win.setProgressBar(2, { mode: 'indeterminate' });
			})
			.on('did-stop-loading', () => {
				this.win.setTitle(Constants.APP_NAME);
				this.win.setProgressBar(-1);
			})
			/*
			.on('console-message', (ev, level, message, line, file) => {
				if (
					level == 3 &&
					message.includes(
						"Cannot set properties of undefined (setting 'Vencord_settingsDirty')",
					) &&
					app.isPackaged
				) {
					this.logger.error('Vencord error, reload...');
					setTimeout(() => this.win.reload(), 2000).unref();
				}
			});
			*/
	}
	setupIpcEvents() {
		ipcMain
			.on(IPCEvent.Minimize, (event) => {
				this.win.minimize();
				event.returnValue = true;
			})
			.on(IPCEvent.Maximize, (event) => {
				if (this.win.isMaximized()) {
					this.win.restore();
				} else {
					this.win.maximize();
				}
				event.returnValue = true;
			})
			.on(IPCEvent.Close, (event) => {
				this.win.hide();
				event.returnValue = true;
			})
			.on(IPCEvent.GetBotInfo, async (event, token) => {
				token = token.replace(/Bot/g, '').trim();
				fetch(
					`https://discord.com/api/v9/applications/@me?with_counts=true`,
					{
						headers: {
							Authorization: `Bot ${token}`,
							'User-Agent': Constants.UserAgentDiscordBot,
						},
					},
				)
					.then((res) => {
						if (!res.ok) throw new Error(res.statusText);
						return res.json();
					})
					.then((data) => {
						const flags = new ApplicationFlags(
							data.flags,
						).toArray();
						const skip = new Set([
							'GUILD_PRESENCES',
							'GUILD_MEMBERS',
							'MESSAGE_CONTENT',
						]);
						for (let i = 0; i < flags.length; i++) {
							const f = flags[i];
							if (f.includes('GATEWAY_PRESENCE')) {
								skip.delete('GUILD_PRESENCES');
							}
							if (f.includes('GATEWAY_GUILD_MEMBERS')) {
								skip.delete('GUILD_MEMBERS');
							}
							if (f.includes('GATEWAY_MESSAGE_CONTENT')) {
								skip.delete('MESSAGE_CONTENT');
							}
						}
						if (skip.has('MESSAGE_CONTENT')) {
							throw new Error('MESSAGE_CONTENT is required');
						}
						event.sender.send(IPCEvent.GetBotInfoResponse, {
							success: true,
							data,
							intents: Intents.getIntents(...Array.from(skip)),
							allShards:
								Math.ceil(
									parseInt(data.approximate_guild_count) /
										100,
								) || 1,
						});
					})
					.catch((e) => {
						event.sender.send(IPCEvent.GetBotInfoResponse, {
							success: false,
							message: e.message,
						});
					});
			})
			.on(IPCEvent.GetDBCVersions, (event) => {
				return (event.returnValue = app.getVersion());
			})
			.on(IPCEvent.GetPreloadedUserSettings, async (event, uid) => {
				const userData = await database.get(uid);
				event.returnValue = PreloadedUserSettings.toBase64(
					PreloadedUserSettings.create(userData.settingProto.data1),
				);
			})
			.on(IPCEvent.GetExperiment, (event, type, allData, botId) => {
				if (type == 'user') {
					event.returnValue = Experiments.User(allData, botId);
				} else if (type == 'guild') {
					event.returnValue = Experiments.Guild();
				}
			})
			.on(
				IPCEvent.HandlePrivateChannel,
				async (event, type, botId, channelId, userId) => {
					log.log(
						'handlePrivateChannel',
						type,
						botId,
						channelId,
						userId,
					);
					const userData = await database.get(botId);
					if (type == 'add') {
						userData.privateChannel[channelId] = {
							type: 1,
							recipients: [
								{
									id: userId,
								},
							],
							last_message_id: null,
							is_spam: false,
							id: channelId,
							flags: 0,
						};
						await database.set(botId, userData, {
							force: true,
						});
					} else if (type == 'remove') {
						delete userData.privateChannel[channelId];
						await database.set(botId, userData, {
							force: true,
						});
					} else if (type == 'clear') {
						userData.privateChannel = {};
						await database.set(botId, userData, {
							force: true,
						});
					}
					event.returnValue = true;
				},
			)
			.on(IPCEvent.GetPrivateChannel, async (event, uid) => {
				const userData = await database.get(uid);
				event.returnValue = userData.privateChannel;
			})
			.on(IPCEvent.GetDefaultUserPatch, (event) => {
				event.returnValue = Constants.UserDefaultPatch;
			})
			.on(IPCEvent.GetLocationDiscordAPIHandle, (event) => {
				event.returnValue = 'localhost:' + this.port;
			});
	}
	/**
	 * Show a notification
	 * @param {import('electron').NotificationConstructorOptions} options Options for the notification
	 * @param {Function} callback Callback function
	 * @returns {void}
	 */
	showNotification(options, callback) {
		const notif = new Notification(options);
		notif.once('click', () => {
			notif.close();
			if (callback && typeof callback === 'function') callback();
		});
		notif.show();
	}
	/**
	 * Compares two version strings and determines if `versionB` is newer than `versionA`.
	 * Supports version strings in the format `major.minor.patch` with an optional prefix 'v'.
	 *
	 * @param versionA - The current version (e.g., "v1.2.3" or "1.2.3").
	 * @param versionB - The new version to check (e.g., "v1.3.0" or "1.3.0").
	 * @returns `true` if `versionB` is newer than `versionA`, otherwise `false`.
	 */
	#isNewerVersion(versionA, versionB) {
		// Remove 'v' prefix if present
		const normalizeVersion = (version) => version.replace(/^v/, '');

		const parseVersion = (version) => {
			const parts = version.split('.').map(Number);
			if (parts.length !== 3 || parts.some(isNaN)) {
				throw new Error(`Invalid version format: ${version}`);
			}
			return parts;
		};

		const [vA, vB] = [
			normalizeVersion(versionA),
			normalizeVersion(versionB),
		].map(parseVersion);

		// Compare versions
		for (let i = 0; i < 3; i++) {
			if (vB[i] > vA[i]) return true;
			if (vB[i] < vA[i]) return false;
		}

		return false; // Versions are equal
	}
	checkingForUpdates() {
		this.logger.info('Checking for updates...');
		return new Promise((resolve) => {
			fetch(
				'https://api.github.com/repos/aiko-chan-ai/DiscordBotClient/releases/latest',
			)
				.then((res) => res.json())
				.then((res) => {
					if (!app.isPackaged) {
						this.showNotification(
							{
								title: `Test mode`,
								body: `Electron v${app.getVersion()} - ${os.platform()}`,
								silent: true,
							},
							() => {
								shell.openExternal(
									'https://github.com/aiko-chan-ai/DiscordBotClient/releases',
								);
							},
						);
					} else if (this.#isNewerVersion(app.getVersion(), res.tag_name)) {
						this.showNotification(
							{
								title: `New version available: ${res.name}`,
								body: `Click here to open the update page`,
								silent: false,
							},
							() => {
								shell.openExternal(
									'https://github.com/aiko-chan-ai/DiscordBotClient/releases',
								);
							},
						);
					} else {
						this.showNotification(
							{
								title: 'Update Manager',
								body: `You are using the latest version (v${app.getVersion()})`,
								silent: true,
							},
							() => {
								shell.openExternal(
									'https://github.com/aiko-chan-ai/DiscordBotClient/releases',
								);
							},
						);
					}
				})
				.catch((e) => {
					this.logger.error(e);
					this.showNotification(
						{
							title: 'Update Manager',
							body: `Unable to check for updates (v${app.getVersion()})`,
							silent: false,
						},
						() => {
							shell.openExternal(
								'https://github.com/aiko-chan-ai/DiscordBotClient/releases',
							);
						},
					);
				})
				.finally(() => resolve(true));
		});
	}
}

new DiscordBotClient();
