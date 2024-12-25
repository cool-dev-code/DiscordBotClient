const defaultSetting = require('../AppAssets/SettingProto');
const _ = require('lodash');
const { app } = require('electron');
const { Level } = require('level');
const path = require('path');
const Constants = require('./Constants');
const EventEmitter = require('events');
const SettingProto = require('../AppAssets/SettingProto');

/*
key: id
value: {
    settingProto: {
        data1,
        data2,
        data3,
    },
	privateChannel: {
		id: {
			// data
		}
	}
    ... some value
}
*/

class ElectronDatabase extends EventEmitter {
	#db = new Level(path.resolve(app.getPath('userData'), 'elysia_dbc'), {
		valueEncoding: 'json',
	});
	get db() {
		return this.#db;
	}
	#isReady = false;
	get isReady() {
		return this.#isReady;
	}
	promiseReady = new Promise((resolve) => {
		this.once('ready', resolve);
	});
	constructor() {
		super();
		this.init();
	}
	deepConvertToBuffer(obj) {
		if (obj && typeof obj === 'object') {
			if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
				return Buffer.from(obj.data);
			}
			if (Array.isArray(obj)) {
				return obj.map((o) => this.deepConvertToBuffer(o));
			}
			const newObj = {};
			for (const key in obj) {
				if (obj.hasOwnProperty(key)) {
					newObj[key] = this.deepConvertToBuffer(obj[key]);
				}
			}
			return newObj;
		}
		return obj;
	}
	async init() {
		await this.db.open();
		// Check Database + App Version
		let latestUpdate = await this.db.get('latestUpdate');
		if (parseInt(latestUpdate || '0') < Constants.LatestStorageUpdate) {
			await this.db.clear();
			await this.db.put('latestUpdate', Constants.LatestStorageUpdate);
		}
		let version = await this.db.get('version');
		if (version !== app.getVersion()) {
			await this.db.put('version', app.getVersion());
		}
		this.#isReady = true;
		this.emit('ready');
	}
	get(id) {
		return new Promise(async (resolve, reject) => {
			if (!this.isReady) {
				reject(new Error('Database not ready'));
			} else {
				// Check key
				let data = await this.db.get(id);
				if (!data) {
					data = {
						settingProto: defaultSetting,
						privateChannel: {},
					};
					await this.db.put(id, data);
				} else {
					data = this.deepConvertToBuffer(data);
				}
				// Before return
				// Must overwrite +2
				data['settingProto']['data1']['userContent'][
					'dismissedContents'
				] = SettingProto.data1.userContent.dismissedContents;
				resolve(data);
			}
		});
	}
	/**
	 * @param {string} id
	 * @param {any} data
	 * @param {{ force: boolean, overwriteArrayOrConcat: 'concat' | 'overwrite' }} param2
	 * @returns {Promise<object>}
	 */
	set(id, data, { force = false, overwriteArrayOrConcat = 'concat' } = {}) {
		return new Promise(async (resolve, reject) => {
			if (!this.isReady) {
				reject(new Error('Database not ready'));
			} else {
				if (force) {
					await this.db.put(id, data);
				} else {
					let oldData = await this.get(id);
					let customizer = (objValue, srcValue) => {
						if (
							(Buffer.isBuffer(objValue) &&
								Buffer.isBuffer(srcValue)) ||
							(ArrayBuffer.isView(objValue) &&
								ArrayBuffer.isView(srcValue))
						) {
							// Must overwrite, bc idk how to merge buffer (discord dismissed_content)
							return srcValue;
						}
						if (
							Array.isArray(objValue) &&
							Array.isArray(srcValue)
						) {
							if (overwriteArrayOrConcat === 'concat') {
								return Array.from(
									new Set(objValue.concat(srcValue)),
								);
							} else if (overwriteArrayOrConcat === 'overwrite') {
								return srcValue;
							} else {
								throw new Error(
									'Invalid param overwriteArrayOrConcat: Must be concat or overwrite',
								);
							}
						}
					};
					let merge = _.mergeWith(oldData, data, customizer);
					// Must overwrite +1
					merge['settingProto']['data1']['userContent'][
						'dismissedContents'
					] = SettingProto.data1.userContent.dismissedContents;
					await this.db.put(id, merge);
				}
				this.get(id).then(resolve).catch(reject);
			}
		});
	}
	delete(uid) {
		return this.db.del(uid);
	}
	async deleteAll() {
		await this.db.clear();
		await this.init();
	}
}

module.exports = new ElectronDatabase();
