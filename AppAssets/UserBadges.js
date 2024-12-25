class BadgesBasedUserFlags extends null {
	static DISCORD_EMPLOYEE = {
		id: 'staff',
		description: 'Discord Staff',
		icon: '5e74e9b61934fc1f67c65515d1f7e60d',
		link: 'https://discord.com/company',
	};
	static PARTNERED_SERVER_OWNER = {
		id: 'partner',
		description: 'Partnered Server Owner',
		icon: '3f9748e53446a137a052f3454e2de41e',
		link: 'https://discord.com/partners',
	};
	static DISCORD_CERTIFIED_MODERATOR = {
		id: 'certified_moderator',
		description: 'Moderator Programs Alumni',
		icon: 'fee1624003e2fee35cb398e125dc479b',
		link: 'https://discord.com/safety',
	};
	static HYPESQUAD_EVENTS = {
		id: 'hypesquad',
		description: 'HypeSquad Events',
		icon: 'bf01d1073931f921909045f3a39fd264',
		link: 'https://discord.com/hypesquad',
	};
	static HOUSE_BRAVERY = {
		id: 'hypesquad_house_1',
		description: 'HypeSquad Bravery',
		icon: '8a88d63823d8a71cd5e390baa45efa02',
		link: 'https://discord.com/settings/hypesquad-online',
	};
	static HOUSE_BRILLIANCE = {
		id: 'hypesquad_house_2',
		description: 'HypeSquad Brilliance',
		icon: '011940fd013da3f7fb926e4a1cd2e618',
		link: 'https://discord.com/settings/hypesquad-online',
	};
	static HOUSE_BALANCE = {
		id: 'hypesquad_house_3',
		description: 'HypeSquad Balance',
		icon: '3aa41de486fa12454c3761e8e223442e',
		link: 'https://discord.com/settings/hypesquad-online',
	};
	static BUGHUNTER_LEVEL_1 = {
		id: 'bug_hunter_level_1',
		description: 'Discord Bug Hunter',
		icon: '2717692c7dca7289b35297368a940dd0',
		link: 'https://support.discord.com/hc/en-us/articles/360046057772-Discord-Bugs',
	};
	static BUGHUNTER_LEVEL_2 = {
		id: 'bug_hunter_level_2',
		description: 'Discord Bug Hunter',
		icon: '848f79194d4be5ff5f81505cbd0ce1e6',
		link: 'https://support.discord.com/hc/en-us/articles/360046057772-Discord-Bugs',
	};
	static ACTIVE_DEVELOPER = {
		id: 'active_developer',
		description: 'Active Developer',
		icon: '6bdc42827a38498929a4920da12695d9',
		link: 'https://support-dev.discord.com/hc/en-us/articles/10113997751447?ref=badge',
	};
	static EARLY_VERIFIED_BOT_DEVELOPER = {
		id: 'verified_developer',
		description: 'Early Verified Bot Developer',
		icon: '6df5892e0f35b051f8b61eace34f4967',
	};
	static EARLY_SUPPORTER = {
		id: 'early_supporter',
		description: 'Early Supporter',
		icon: '7060786766c9c840eb3019e725d2b358',
		link: 'https://discord.com/settings/premium',
	};
}

class BadgesNitro extends BadgesBasedUserFlags {
	static PREMIUM_DEFAULT = {
		id: 'premium_default',
		description: 'Subscriber since Dec 22, 2016',
		icon: '2ba85e8026a8614b640c2837bcdfe21b',
		link: 'https://discord.com/settings/premium',
	};
	/**
	 * @param {1|2|3|4|5|6|7|8|9} level
	 */
	static GUILD_BOOSTER_LEVEL = (level) => {
		const RawLevel = [
			{
				id: 'guild_booster_lvl1',
				description: 'Server boosting since May 4, 2023',
				icon: '51040c70d4f20a921ad6674ff86fc95c',
				link: 'https://discord.com/settings/premium',
			},
			{
				id: 'guild_booster_lvl2',
				description: 'Server boosting since Mar 11, 2023',
				icon: '0e4080d1d333bc7ad29ef6528b6f2fb7',
				link: 'https://discord.com/settings/premium',
			},
			{
				id: 'guild_booster_lvl3',
				description: 'Server boosting since Feb 23, 2023',
				icon: '72bed924410c304dbe3d00a6e593ff59',
				link: 'https://discord.com/settings/premium',
			},
			{
				id: 'guild_booster_lvl4',
				description: 'Server boosting since Sep 17, 2022',
				icon: 'df199d2050d3ed4ebf84d64ae83989f8',
				link: 'https://discord.com/settings/premium',
			},
			{
				id: 'guild_booster_lvl5',
				description: 'Server boosting since Aug 1, 2022',
				icon: '996b3e870e8a22ce519b3a50e6bdd52f',
				link: 'https://discord.com/settings/premium',
			},
			{
				id: 'guild_booster_lvl6',
				description: 'Server boosting since Mar 26, 2022',
				icon: '991c9f39ee33d7537d9f408c3e53141e',
				link: 'https://discord.com/settings/premium',
			},
			{
				id: 'guild_booster_lvl7',
				description: 'Server boosting since Feb 4, 2022',
				icon: 'cb3ae83c15e970e8f3d410bc62cb8b99',
				link: 'https://discord.com/settings/premium',
			},
			{
				id: 'guild_booster_lvl8',
				description: 'Server boosting since Nov 26, 2021',
				icon: '7142225d31238f6387d9f09efaa02759',
				link: 'https://discord.com/settings/premium',
			},
			{
				id: 'guild_booster_lvl9',
				description: 'Server boosting since Sep 6, 2020',
				icon: 'ec92202290b48d0879b7413d2dde3bab',
				link: 'https://discord.com/settings/premium',
			},
		];
		return RawLevel[level - 1];
	};
	/**
	 * @param {1|3|6|12|24|36|60|72} month
	 */
	static PREMIUM_TENURE = (month) => {
		const RawLevel = [
			{
				id: 'premium_tenure_1_month',
				description: 'Earned 12/22/2016. 1 month: Bronze',
				icon: '19a1562a9ce21227116624daaf69e450',
				link: 'https://discord.com/settings/premium',
			},
			{
				id: 'premium_tenure_3_month',
				description: 'Earned 12/22/2016. 3 months: Silver',
				icon: '3d533bea11ec4f7bdbf23a4bdc7a373f',
				link: 'https://discord.com/settings/premium',
			},
			{
				id: 'premium_tenure_6_month',
				description: 'Earned 12/22/2016. 6 months: Gold',
				icon: '850a7f5909f9d54d6ad986c096937911',
				link: 'https://discord.com/settings/premium',
			},
			{
				id: 'premium_tenure_12_month',
				description: 'Earned 12/22/2016. 1 year: Platinum',
				icon: '3393b2ca6e25e40d4bb3bd23d60d0cdd',
				link: 'https://discord.com/settings/premium',
			},
			{
				id: 'premium_tenure_24_month',
				description: 'Earned 12/22/2016. 2 year: Diamond',
				icon: '7c85d3834db671b01e6d0fd1538663a0',
				link: 'https://discord.com/settings/premium',
			},
			{
				id: 'premium_tenure_36_month',
				description: 'Earned 12/22/2016. 3 years: Emerald',
				icon: '2447661dbda1a992a616a583f8492ae3',
				link: 'https://discord.com/settings/premium',
			},
			{
				id: 'premium_tenure_60_month',
				description: 'Earned 12/22/2016. 5 years: Ruby',
				icon: 'ddb868782712aa9f4ef98bef4d6e14f6',
				link: 'https://discord.com/settings/premium',
			},
			{
				id: 'premium_tenure_72_month',
				description: 'Earned 12/22/2016. 6+ years: Fire',
				icon: 'cff7119d4417261c3f52fde8a94ba8e5',
				link: 'https://discord.com/settings/premium',
			},
		];
		return RawLevel.find((_) => _.id === `premium_tenure_${month}_month`);
	};
}

class BadgesBasedUserDataAndExtends extends BadgesNitro {
	static LEGACY_USERNAME = {
		id: 'legacy',
		description: 'Originally known as {user#0000}',
		icon: '6de6d34650760ba5551a79732e98ed60',
	};
	static BOT_COMMANDS = {
		id: 'bot_commands',
		description: 'Supports Commands',
		icon: '6f9e37f9029ff57aef81db857890005e',
		link: 'https://discord.com/blog/welcome-to-the-new-era-of-discord-apps?ref=badge',
	};
	static BOT_AUTOMOD = {
		id: 'automod',
		description: 'Uses AutoMod',
		icon: 'f2459b691ac7453ed6039bbcfaccbfcd',
	};
	static QUEST_COMPLETED = {
		id: 'quest_completed',
		description: 'Completed a Quest',
		icon: '7d9ae358c8c5e118768335dbe68b4fb8',
		link: 'https://discord.com/settings/inventory',
	};
	static APPLICATION_GUILD_SUBSCRIPTION = {
		id: 'application_guild_subscription',
		description: 'This server has {bot} Premium',
		icon: 'd2010c413a8da2208b7e4f35bd8cd4ac',
	};
}

module.exports = BadgesBasedUserDataAndExtends;