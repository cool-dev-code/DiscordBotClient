const Constants = require('../AppCore/Constants');
const probe = require('probe-image-size');

module.exports = async function GetSystemMessage() {
	let result;
	let urlSponsors =
		'https://raw.githubusercontent.com/aiko-chan-ai/aiko-chan-ai/refs/heads/main/sponsors.png';
	try {
		result = await probe(urlSponsors);
	} catch {
		result = {
			width: 1,
			height: 1,
		};
	}
	return [
		// MessageData
		{
			id: '1000000000000000000',
			type: 0,
			channel_id: Constants.ChannelIdDefault,
			author: Constants.UserDefaultPatch,
			attachments: [],
			content: `## Make sure to download this application from the official GitHub!  
### Downloading it from untrusted sources could pose a risk to your computer and expose your private data.`,
			embeds: [
				{
					type: 'rich',
					description: `Thank you for choosing my application!
What started as a small pet project has grown into something much bigger, and I’ve kept it going because of how much people enjoy it. <:TeriSmile:1048682023839088640> 
Honestly, I’m not kidding — I’ve never had this many users before! <:scream:1262449431232647300>

If you like it, feel free to leave a star on my [repo](https://github.com/aiko-chan-ai/DiscordBotClient).
Or, if you’d like, you can support me with a coffee on GitHub <:ElysiaHeart:1190332148868186253> — it really motivates me to keep working on this project! <:nyan:1262449421132759152>                 

<:MarchYey:1065630282394378390> A special thanks to everyone who has sponsored me on GitHub—your support means the world!

Warm regards, 
<:Discord:984744331200053269> elysia.dev - <:github:889092230063734795> aiko-chan-ai`,
					color: 16750296,
					timestamp: '2022-11-29T16:56:00.000Z',
					author: {
						name: 'Thank you!',
						icon_url:
							'https://cdn.discordapp.com/emojis/882480441075040257.png',
					},
					thumbnail: {
						url: 'https://avatars.githubusercontent.com/u/71698422',
						width: 128,
						height: 128,
					},
					footer: {
						text: 'Elysia',
						icon_url:
							'https://cdn.discordapp.com/avatars/1056491867375673424/93fb88f6b8c0a2a33c437d0fff4c6625.png',
					},
					image: {
						url: urlSponsors,
						srcIsAnimated: false,
						flags: 0,
						width: result.width,
						height: result.height,
					},
				},
			],
			mentions: [],
			mention_roles: [],
			pinned: false,
			mention_everyone: false,
			tts: false,
			timestamp: new Date().toISOString(),
			edited_timestamp: null,
			flags: 16,
			components: [
				{
					type: 1,
					components: [
						{
							type: 2,
							style: 5,
							label: 'Repository',
							emoji: {
								name: 'github',
								id: '889092230063734795',
							},
							url: 'https://github.com/aiko-chan-ai/DiscordBotClient',
						},
						{
							type: 2,
							style: 5,
							label: 'Sponsor',
							emoji: {
								name: 'Kanna_Heart',
								id: '882480441075040257',
							},
							url: 'https://github.com/sponsors/aiko-chan-ai',
						},
						{
							type: 2,
							style: 5,
							label: 'Bugs Report',
							emoji: {
								name: 'BugHunter_lvl1',
								id: '873790531887579187',
							},
							url: 'https://github.com/aiko-chan-ai/DiscordBotClient/issues',
						},
					],
				},
			],
		},
	];
};
