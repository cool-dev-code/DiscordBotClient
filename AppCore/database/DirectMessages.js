const BaseDatabase = require("./Base");
const Constants = require("../Constants");

module.exports = class DirectMessages extends BaseDatabase {
	constructor() {
		const config = Constants.DirectMessages;
		super(config.name, config.path);
	}
	// Save: bot id - {[key: channel_id]: private_channel_object}
	get(id) {
		return new Promise(async (resolve, reject) => {
			try {
				let data = await this.db.get(id);
				if (!data) {
					data = {}
					await this.db.put(id, data);
				}
				resolve(data);
			} catch (error) {
				reject(error);
			}
		});
	}
};