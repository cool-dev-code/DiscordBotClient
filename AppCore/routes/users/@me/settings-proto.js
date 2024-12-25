const { Router } = require('express');
const {
	PreloadedUserSettings,
	FrecencyUserSettings,
} = require('../../../../DiscordProtos');
const database = require('../../../Database');
const Util = require('../../../../AppAssets/Util');

const app = Router();

app.all('/1', async (req, res) => {
	const uid = Util.getIDFromToken(req.headers.authorization);
	if (!uid)
		return res.send({
			settings: '',
		});
	const userData = await database.get(uid);
	if (req.method.toUpperCase() == 'GET') {
		return res.send({
			settings: PreloadedUserSettings.toBase64(
				PreloadedUserSettings.create(userData.settingProto.data1),
			),
		});
	}
	const callback = async (req, res) => {
		/**
		 * @type {PreloadedUserSettings}
		 */
		const decoded = PreloadedUserSettings.fromBase64(
			req.body?.settings || '',
		);
		for (const key in decoded) {
			userData.settingProto.data1[key] = decoded[key];
		}
		await database.set(uid, userData, {
			force: true,
		});
		return res.send({
			settings: PreloadedUserSettings.toBase64(
				PreloadedUserSettings.create(userData.settingProto.data1),
			),
		});
	};
	return Util.getDataFromRequest(req, res, callback);
});

app.all('/2', async (req, res) => {
	const uid = Util.getIDFromToken(req.headers.authorization);
	if (!uid)
		return res.send({
			settings: '',
		});
	const userData = await database.get(uid);
	if (req.method.toUpperCase() == 'GET') {
		return res.send({
			settings: FrecencyUserSettings.toBase64(
				FrecencyUserSettings.create(userData.settingProto.data2),
			),
		});
	}
	const callback = async (req, res) => {
		/**
		 * @type {FrecencyUserSettings}
		 */
		const decoded = FrecencyUserSettings.fromBase64(
			req.body?.settings || '',
		);
		for (const key in decoded) {
			userData.settingProto.data2[key] = decoded[key];
		}
		await database.set(uid, userData, {
			force: true,
		});
		return res.send({
			settings: PreloadedUserSettings.toBase64(
				PreloadedUserSettings.create(userData.settingProto.data2),
			),
		});
	};
	return Util.getDataFromRequest(req, res, callback);
});

module.exports = app;
