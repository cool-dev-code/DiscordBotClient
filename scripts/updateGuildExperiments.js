const { fetch } = require('undici');
const path = require('path');
const fs = require('fs');

const folder = path.resolve('.', 'DiscordCore');
const guildExperiments = path.resolve(folder, 'guild_experiments.json');

module.exports = async () => {
	console.log("[Discord] Fetching Guild Experiments from Advaith's API");
	await fetch('https://api.rollouts.advaith.io/')
		.then((r) => {
			if (r.ok) return r.json();
			else {
                console.log(
					"[Discord] Failed to fetch Guild Experiments",
				);
                throw new Error('Failed to fetch data');
            }
		})
		.then((r) => {
			fs.writeFileSync(
				guildExperiments,
				JSON.stringify(r.map((o) => o.rollout)),
			);
            console.log("[Discord] Updated Guild Experiments");
		})
		.catch((e) => {
			fs.writeFileSync(
				guildExperiments,
				JSON.stringify([]),
			);
		});
};
