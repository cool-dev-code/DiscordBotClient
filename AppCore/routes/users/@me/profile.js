const { Router } = require('express');
const Util = require('../../../../AppAssets/Util');
const { fetch } = require('undici');
const Constants = require('../../../Constants');

const app = Router();

app.get('/', async (req, res) => {
	const id = Util.getIDFromToken(req.headers.authorization);
	const guild_id = req.query.guild_id;
	let guild_member = null;
	if (guild_id) {
		guild_member = await fetch(
			'https://discord.com/api/v9/guilds/' + guild_id + '/members/' + id,
			{
				headers: {
					authorization: req.headers.authorization,
					'user-agent': Constants.UserAgentDiscordBot,
				},
			},
		)
			.then((r) => r.json())
			.catch(() => null);
	}
	fetch('https://discord.com/api/v9/users/@me', {
		headers: {
			authorization: req.headers.authorization,
			'user-agent': Constants.UserAgentDiscordBot,
		},
	})
		.then((r) => r.json())
		.then((d) => res.send(Util.ProfilePatch(d, guild_member, guild_id)));
});

module.exports = app;
