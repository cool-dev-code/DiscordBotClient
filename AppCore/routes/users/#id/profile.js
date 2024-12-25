const { Router } = require('express');
const Util = require('../../../../AppAssets/Util');
const { fetch } = require('undici');
const request = require('request');
const Constants = require('../../../Constants');

const app = Router();

app.get('/', async (req, res) => {
	const guild_id = req.query.guild_id;
	let guild_member = null;
	if (guild_id) {
		guild_member = await fetch(
			'https://discord.com/api/v9/guilds/' +
				guild_id +
				'/members/' +
				req.params.id,
			{
				headers: {
					authorization: req.headers.authorization,
					'user-agent': Constants.UserAgentDiscordBot,
				},
			},
		).then((r) => r.json()).catch(() => null);
	}
	fetch('https://discord.com/api/v9/users/' + req.params.id, {
		headers: {
			authorization: req.headers.authorization,
			'user-agent': Constants.UserAgentDiscordBot,
		},
	})
		.then((r) => r.json())
		.then((d) => res.send(Util.ProfilePatch(d, guild_member, guild_id)));
});

app.patch('/', (req, res) => {
	return req.pipe(request('https://discord.com/api/v9/users/@me')).pipe(res);
});

module.exports = app;
