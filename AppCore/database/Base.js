const { app } = require('electron');
const { scope } = require('electron-log');
const { Level } = require('level');
const fs = require('fs');
const path = require('path');
const Constants = require('../Constants');
const EventEmitter = require('events');

module.exports = class BaseDatabase extends EventEmitter {
	#db;
	constructor(databaseName, databasePath) {
		super();
		this.log = scope(databaseName);
		this.#verify();
		this.#db = new Level(
			path.resolve(app.getPath('userData'), 'DatabaseCore', databasePath),
			{
				valueEncoding: 'json',
			},
		);
        this.init();
	}
	#verify() {
		const pathParent = path.resolve(
			app.getPath('userData'),
			'DatabaseCore',
		);
		if (!fs.existsSync(pathParent)) {
			fs.mkdirSync(pathParent);
		}
	}
	get db() {
		return this.#db;
	}
	#isReady = false;
	get isReady() {
		return this.#isReady;
	}
	promiseReady = new Promise((resolve) => {
		this.once('ready', () => {
            this.log.info('Database is ready');
            resolve();
        });
	});
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
            this.log.info('Database needs to be updated');
			await this.db.clear();
			await this.db.put('latestUpdate', Constants.LatestStorageUpdate);
		}
		this.#isReady = true;
		this.emit('ready');
	}
	async deleteAll() {
        this.log.info('Database is being cleared');
		await this.db.clear();
		await this.init();
	}
    get(id) {
        return this.db.get(id);
    }
    set(id, data) {
        return this.db.put(id, data);
    }
    delete(id) {
        return this.db.del(id);
    }
}
