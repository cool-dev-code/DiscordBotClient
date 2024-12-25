const { Router } = require('express');
const { fetch } = require('undici');
const Constants = require('../../../../Constants');

const app = Router();

const mapCache = new Map();

// channel_id, new Set([Date.now()]);

app.all('/', async (req, res) => {
	const channelId = req.params.id;
	let {
		archived,
		sort_by,
		sort_order,
		limit,
		tag_setting,
		offset,
		name,
		tag,
	} = req.query;
	// Force set
	sort_by = 'archive_time';
	sort_order = 'desc';
	limit = parseInt(limit || '25') || 25;
	offset = parseInt(offset || '0') || 0;
	if (tag || name) {
		return res.send({
			threads: [],
			members: [],
			has_more: false,
			total_results: 0,
			first_messages: [],
		}); // Discord API limitation
	}
	let threads = [];
	let members = [];
	let first_messages = [];
	let public_has_more = false;
	/**
	 * @type {Set<number>}
	 */
	let set = mapCache.get(channelId) || new Set();
	let before = Array.from(set)[offset - 1];
	if (archived == 'true') {
		const public = await fetch(
			`https://discord.com/api/v9/channels/${channelId}/threads/archived/public?limit=${limit}${
				before ? `&before=${new Date(before).toISOString()}` : ''
			}`,
			{
				headers: {
					authorization: req.headers.authorization,
					'user-agent': Constants.UserAgentDiscordBot,
				},
			},
		).then((r) => r.json());
		threads = public.threads || [];
		members = public.members || [];
		first_messages = public.first_messages || [];
		public_has_more = public.has_more || false;
	}
	/*
	function sorting(a = 0, b = 0) {
		if (sort_order === 'asc') {
			return a > b ? 1 : a < b ? -1 : 0; // Ascending order
		} else {
			return a < b ? 1 : a > b ? -1 : 0; // Descending order
		}
	}
	switch (sort_by) {
		case 'archive_time': {
			threads = threads.sort((a, b) =>
				sorting(
					new Date(a.thread_metadata.archive_timestamp)?.getTime(),
					new Date(a.thread_metadata.archive_timestamp)?.getTime(),
				),
			);
			break;
		}
		case 'creation_time': {
			threads = threads.sort((a, b) =>
				sorting(
					new Date(a.thread_metadata.create_timestamp)?.getTime(),
					new Date(a.thread_metadata.create_timestamp)?.getTime(),
				),
			);
			break;
		}
		case 'last_message_time':
		default: {
			threads = threads.sort((a, b) =>
				sorting(BigInt(a.last_message_id), BigInt(b.last_message_id)),
			);
			break;
		}
	}
	*/
	for (let i = 0; i < threads.length; i++) {
		set.add(
			new Date(threads[i].thread_metadata.archive_timestamp)?.getTime(),
		);
	}
	const finalData = {
		threads: threads,
		members,
		has_more: public_has_more,
		total_results: set.size,
		first_messages,
	};
	mapCache.set(channelId, set);
	res.send(finalData);
});

module.exports = app;
