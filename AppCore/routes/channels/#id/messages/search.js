const { Router } = require('express');
const crypto = require('node:crypto');
const Constants = require('../../../../Constants');
const { fetch } = require('undici');

const app = Router();

app.get('/', async (req, res) => {
	const salt = Math.random().toString();
	const hash = crypto
		.createHash('md5')
		.update(salt + 'elysia')
		.digest('hex');
	let { max_id, min_id, channel_id } = req.query;
	let messages = [];
	channel_id ??= req.params.id;
	if (channel_id) {
		messages = await fetch(
			'https://discord.com/api/v9/channels/' +
				channel_id +
				`/messages?limit=25${max_id ? '&before=' + max_id : ''}${
					min_id ? '&after=' + min_id : ''
				}`,
			{
				headers: {
					authorization: req.headers.authorization,
					'user-agent': Constants.UserAgentDiscordBot,
				},
			},
		)
			.then((r) => r.json())
			.catch(() => []);
	}
	return res.status(200).send({
		analytics_id: hash,
		doing_deep_historical_index: false,
		total_results: messages.length,
		messages: messages.map((m) => {
			m.hit = true;
			return [m];
		}),
	});
});

module.exports = app;
