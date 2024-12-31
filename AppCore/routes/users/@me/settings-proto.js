const { Router } = require('express');
const {
	PreloadedUserSettings,
	FrecencyUserSettings,
} = require('../../../../DiscordProtos');
const { PreloadedUserSettingsDB, FrecencyUserSettingsDB } = require('../../../database/index.js');
const Util = require('../../../../AppAssets/Util');

const app = Router();

app.all('/1', async (req, res) => {
	const uid = Util.getIDFromToken(req.headers.authorization);
	if (!uid)
		return res.send({
			settings: '',
		});
	let userSettings = await PreloadedUserSettingsDB.get(uid);
	if (req.method.toUpperCase() == 'GET') {
		return res.send({
			settings: PreloadedUserSettings.toBase64(
				PreloadedUserSettings.create(userSettings),
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
			userSettings[key] = decoded[key];
		}
		await PreloadedUserSettingsDB.set(uid, userSettings);
		return res.send({
			settings: PreloadedUserSettings.toBase64(
				PreloadedUserSettings.create(userSettings),
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
	let userSettings = await FrecencyUserSettingsDB.get(uid);
	if (req.method.toUpperCase() == 'GET') {
		return res.send({
			settings: FrecencyUserSettings.toBase64(
				FrecencyUserSettings.create(userSettings),
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
			userSettings[key] = decoded[key];
		}
		await FrecencyUserSettingsDB.set(uid, userSettings);
		return res.send({
			settings: FrecencyUserSettings.toBase64(
				FrecencyUserSettings.create(userSettings),
			),
		});
	};
	return Util.getDataFromRequest(req, res, callback);
});

module.exports = app;
