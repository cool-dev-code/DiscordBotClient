const { Router } = require('express');
const { fetch } = require('undici');
const Constants = require('../../../Constants');

const app = Router();

app.get('/', (req, res) => {
	fetch('https://discord.com/api/v9/users/@me', {
		headers: {
			authorization: req.headers.authorization,
			'user-agent': Constants.UserAgentDiscordBot,
		},
	})
		.then((r) => {
			if (r.ok)
				return r.json().then((data) => {
					data.premium = true;
					data.premium_type = 1; // Nitro Classic
					data.mfa_enabled = 1; // Enable 2FA
					data.flags = '476111'; // All flags
					data.public_flags = '476111'; // All flags
					data.phone = '+1234567890'; // Fake phone
					data.verified = true; // verify
					data.nsfw_allowed = true; // Allow nsfw (ios)
					data.email = 'DiscordBotClient@aiko.com'; // fake email, not a real one
					data.purchased_flags = 3;
					res.status(200).send(data);
				});
			else return r.json().then((d) => res.status(r.status).send(d));
		})
		.catch((_) => res.status(404).send());
});

module.exports = app;
