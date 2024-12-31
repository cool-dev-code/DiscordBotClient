const BaseDatabase = require('./Base');
const Constants = require('../Constants');
const SettingProto = require('../../AppAssets/SettingProto');

module.exports = class FrecencyUserSettings extends BaseDatabase {
	constructor() {
		const config = Constants.FrecencyUserSettings;
		super(config.name, config.path);
	}
	get(id) {
		return new Promise(async (resolve, reject) => {
			try {
				let data = await this.db.get(id);
				if (!data) {
					data = this.deepConvertToBuffer(
						SettingProto.FrecencyUserSettings,
					);
                    await this.db.put(id, data);
				} else {
                    data = this.deepConvertToBuffer(data);
                }
				resolve(data);
			} catch (error) {
				reject(error);
			}
		});
	}
};
