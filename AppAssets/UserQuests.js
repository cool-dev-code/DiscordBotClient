module.exports = [
	{
		id: '1301937819069190215',
		config: {
			id: '1301937819069190215',
			config_version: 2,
			starts_at: '2024-11-14T18:00:00+00:00',
			expires_at: '2024-11-26T00:59:59+00:00',
			features: [3, 13],
			experiments: {
				rollout: '2024-11_quests_dune_prophecy_quest',
				targeting: '2024-11_quests_dune_prophecy_quest_targeting',
				preview: '2024-11_quests_dune_prophecy_quest_preview',
			},
			application: {
				link: 'https://www.max.com/shows/dune-prophecy-2024/57660b16-a32a-476f-89da-3302ac379e91?utm_source=discord&utm_medium=quest_link',
				id: '545364944258990091',
				name: 'Dune: Prophecy',
			},
			assets: {
				hero: 'hero.jpg',
				hero_video: null,
				quest_bar_hero: 'questbar_hero.jpg',
				quest_bar_hero_video: 'questbar_hero.webm',
				game_tile: 'game_tile.jpg',
				logotype: 'logotype.png',
			},
			colors: {
				primary: '#50615D',
				secondary: '#848B7D',
			},
			messages: {
				quest_name: 'Dune: Prophecy',
				game_title: 'Dune: Prophecy',
				game_publisher: 'Max',
			},
			task_config: {
				type: 1,
				join_operator: 'or',
				tasks: {
					WATCH_VIDEO: {
						event_name: 'WATCH_VIDEO',
						target: 158,
						external_ids: [],
					},
				},
			},
			rewards_config: {
				assignment_method: 1,
				rewards: [
					{
						type: 3,
						sku_id: '1305905202578325535',
						asset: 'reward3.mp4',
						asset_video: null,
						messages: {
							name: 'Wallach IX Spaceport Avatar Decoration',
							name_with_article:
								'a Wallach IX Spaceport Avatar Decoration',
							redemption_instructions_by_platform: {
								0: 'This collectible can be redeemed on Discord! Go to your Gift Inventory to redeem and equip.',
							},
						},
						expires_at: '2025-01-25T08:00:00+00:00',
						expires_at_premium: null,
						expiration_mode: 1,
					},
				],
				rewards_expire_at: '2024-12-26T00:59:59+00:00',
				platforms: [0],
			},
			video_metadata: {
				messages: {
					video_title: 'Dune: Prophecy Trailer',
					video_end_cta_title: 'NEW EPISODES | SUNDAYS 9PM',
					video_end_cta_subtitle:
						'Streaming on Max. Click to find out more!',
				},
				assets: {
					video_player_video: 'video_high_res2.mp4',
					video_player_thumbnail: 'video_thumbnail.jpg',
					video_player_video_low_res: 'video_low_res2.mp4',
					video_player_caption: 'caption3.vtt',
					video_player_transcript: 'transcript.txt',
					quest_bar_preview_video: 'questbar_preview.webm',
					quest_bar_preview_thumbnail: 'questbar_preview.jpg',
					quest_home_video: 'questhome.webm',
				},
			},
		},
		user_status: null,
		targeted_content: [],
		preview: false,
	},
	{
		id: '1308069810789285959',
		config: {
			id: '1308069810789285959',
			config_version: 2,
			starts_at: '2024-11-25T18:00:00+00:00',
			expires_at: '2024-12-09T00:59:59+00:00',
			features: [16, 9, 3, 13],
			experiments: {
				rollout: '2024-11_quests_batman_arkham_quest',
				targeting: '2024-11_quests_batman_arkham_quest_targeting',
				preview: '2024-11_quests_batman_arkham_quest_preview',
			},
			application: {
				link: 'https://www.meta.com/quest/batman-arkham-shadow/#hardware?utm_source=%esid!&utm_medium=rv&utm_campaign=%ebuy!&utm_term=%epid!&utm_content=%ecid!&utm_funnel=dgen',
				id: '545364944258990091',
				name: 'Batman: Arkham Shadow',
			},
			assets: {
				hero: 'hero.jpg',
				hero_video: null,
				quest_bar_hero: 'questbar_hero.jpg',
				quest_bar_hero_video: 'questbar_hero.webm',
				game_tile: 'game_tile.jpg',
				logotype: 'logotype.png',
			},
			colors: {
				primary: '#643431',
				secondary: '#FF0000',
			},
			messages: {
				quest_name: 'Batman: Arkham Shadow',
				game_title: 'Only on Meta Quest 3/3S',
				game_publisher: 'Meta Quest',
			},
			task_config: {
				type: 1,
				join_operator: 'or',
				tasks: {
					WATCH_VIDEO: {
						event_name: 'WATCH_VIDEO',
						target: 29,
						external_ids: [],
					},
				},
			},
			rewards_config: {
				assignment_method: 1,
				rewards: [
					{
						type: 3,
						sku_id: '1309270800099971122',
						asset: 'reward3.mp4',
						asset_video: null,
						messages: {
							name: 'Batarang Avatar Decoration',
							name_with_article: 'a Batarang Avatar Decoration',
							redemption_instructions_by_platform: {
								0: 'This collectible can be redeemed on Discord! Go to your Gift Inventory to redeem and equip.',
							},
						},
						expires_at: '2025-02-08T08:00:00+00:00',
						expires_at_premium: null,
						expiration_mode: 1,
					},
				],
				rewards_expire_at: '2025-01-08T00:59:59+00:00',
				platforms: [0],
			},
			video_metadata: {
				messages: {
					video_title: 'Batman: Arkham Shadow Accolades Trailer',
					video_end_cta_title: 'BECOME THE KNIGHT',
					video_end_cta_subtitle: 'Only on Meta Quest 3/3S',
				},
				assets: {
					video_player_video: 'video_high_res_f3fd484233.mp4',
					video_player_thumbnail: 'video_thumbnail.jpg',
					video_player_video_low_res: 'video_low_res_4f9e8369b7.mp4',
					video_player_caption: 'caption.vtt',
					video_player_transcript: 'transcript.txt',
					quest_bar_preview_video: 'questbar_preview.webm',
					quest_bar_preview_thumbnail: 'questbar_preview.jpg',
					quest_home_video: 'questhome.webm',
				},
			},
		},
		user_status: null,
		targeted_content: [],
		preview: false,
	},
	{
		id: '1308841639711866930',
		config: {
			id: '1308841639711866930',
			config_version: 2,
			starts_at: '2024-12-06T18:00:00+00:00',
			expires_at: '2024-12-13T18:00:00+00:00',
			features: [9, 3, 13],
			experiments: {
				rollout: '2024-11_quests_descendant_12_6_quest',
				targeting: '2024-11_quests_descendant_12_6_quest_targeting',
				preview: '2024-11_quests_descendant_12_6_quest_preview',
			},
			application: {
				link: 'https://tfd-abr.na.nexon.com/n1phxp',
				id: '545364944258990091',
				name: 'The First Descendant',
			},
			assets: {
				hero: 'hero.png',
				hero_video: null,
				quest_bar_hero: 'questbar_hero.jpg',
				quest_bar_hero_video: 'questbar_hero.webm',
				game_tile: 'game_tile.png',
				logotype: 'logotype.png',
			},
			colors: {
				primary: '#4755c5',
				secondary: '#5865F2',
			},
			messages: {
				quest_name: 'THE FIRST DESCENDANT',
				game_title: 'Season 2: Void Chaser Official Trailer',
				game_publisher: 'Nexon Korea',
			},
			task_config: {
				type: 1,
				join_operator: 'or',
				tasks: {
					WATCH_VIDEO: {
						event_name: 'WATCH_VIDEO',
						target: 117,
						external_ids: [],
					},
				},
			},
			rewards_config: {
				assignment_method: 1,
				rewards: [
					{
						type: 1,
						sku_id: '1308841639711866931',
						asset: 'reward.png',
						asset_video: null,
						messages: {
							name: 'Discord Collection Bundle',
							name_with_article: 'a Discord Collection Bundle',
							redemption_instructions_by_platform: {
								4: '**1. How to redeem in-game:**\n\n**[PC]**\n Start The First Descendant > Press [Esc] > [Options] > [Account] > [Enter] in the Enter Coupon option.\n Enter the coupon code and press [Confirm].\n Press [G] > [Albion] and access the mailbox to receive the item.\n\n**[Consoles]**\n Start The First Descendant > Press [Options] > [Account] > [Enter] in the Enter Coupon option. Enter the coupon code and press [Confirm]. Access the mailbox in Albion to receive the item.\n\n**2. How to redeem on the Coupons page:**\n\n**[PC & Consoles]**\n Enter The First Descendant’s Coupon page https://mcoupon.nexon.com/tfd.\n Enter your member code and coupon number to redeem the item.\n The member code can be copied from the Game Menu > Options > Account > Member Code.\n\n Rewards will be available until *December 31st at 23:59 (PT)*.',
							},
						},
						approximate_count: null,
					},
				],
				rewards_expire_at: '2024-12-31T23:59:00+00:00',
				platforms: [4],
			},
			video_metadata: {
				messages: {
					video_title: 'First Descendant Trailer',
					video_end_cta_title: 'PLAY FREE NOW',
					video_end_cta_subtitle: 'Available on PC and consoles',
				},
				assets: {
					video_player_video: 'video_high_res3.mp4',
					video_player_thumbnail: 'video_thumbnail.jpg',
					video_player_video_low_res: 'video_low_res3.mp4',
					video_player_caption: 'caption3.vtt',
					video_player_transcript: 'transcript3.txt',
					quest_bar_preview_video: 'questbar_preview.webm',
					quest_bar_preview_thumbnail: 'questbar_preview.jpg',
					quest_home_video: 'questhome.webm',
				},
			},
		},
		user_status: null,
		targeted_content: [],
		preview: false,
	},
	{
		id: '1309334608533258240',
		config: {
			id: '1309334608533258240',
			config_version: 2,
			starts_at: '2024-12-03T18:00:00+00:00',
			expires_at: '2024-12-09T23:59:59+00:00',
			features: [9, 3],
			experiments: {
				rollout: '2024-11_discord_activities_quest',
				targeting: '2024-11_discord_activities_quest_targeting',
				preview: '2024-11_discord_activities_quest_preview',
			},
			application: {
				link: 'https://discord.com/blog/discover-more-ways-to-play-with-apps-now-anywhere-on-discord',
				id: '545364944258990091',
				name: 'Discord',
			},
			assets: {
				hero: 'hero.jpg',
				hero_video: null,
				quest_bar_hero: 'quest_bar_hero.jpg',
				quest_bar_hero_video: null,
				game_tile: 'game_tile.png',
				logotype: 'game_logotype.png',
			},
			colors: {
				primary: '#B377F3',
				secondary: '#5865F2',
			},
			messages: {
				quest_name: 'Discord Activities',
				game_title: 'any Activity',
				game_publisher: 'Discord',
			},
			task_config: {
				type: 1,
				join_operator: 'and',
				tasks: {
					PLAY_ACTIVITY: {
						event_name: 'PLAY_ACTIVITY',
						target: 900,
						external_ids: [],
					},
				},
			},
			rewards_config: {
				assignment_method: 1,
				rewards: [
					{
						type: 5,
						sku_id: '1298745361602449479',
						asset: 'reward.png',
						messages: {
							name: '1 day of Nitro',
							name_with_article: '1 day of Nitro',
							redemption_instructions_by_platform: {
								0: 'Congrats! You earned 1 hour of Nitro.',
							},
						},
					},
				],
				rewards_expire_at: '2025-01-08T23:59:59+00:00',
				platforms: [0],
			},
		},
		user_status: null,
		targeted_content: [],
		preview: false,
	},
	{
		id: '1308101969486811188',
		config: {
			id: '1308101969486811188',
			config_version: 2,
			starts_at: '2024-11-29T18:00:00+00:00',
			expires_at: '2024-12-11T16:00:00+00:00',
			features: [16, 9, 3, 13],
			experiments: {
				rollout: '2024-11_quests_xbox_pcgamepass_quest',
				targeting: '2024-11_quests_xbox_pcgamepass_quest_targeting',
				preview: '2024-11_quests_xbox_pcgamepass_quest_preview',
			},
			application: {
				link: 'https://xbox.com/pcgamepass?utm_source=discord&utm_medium=quest_link',
				id: '545364944258990091',
				name: 'PC Game Pass',
			},
			assets: {
				hero: 'hero.jpg',
				hero_video: null,
				quest_bar_hero: 'questbar_hero.jpg',
				quest_bar_hero_video: 'questbar_hero.webm',
				game_tile: 'game_tile.png',
				logotype: 'logotype.png',
			},
			colors: {
				primary: '#65a153',
				secondary: '#141414',
			},
			messages: {
				quest_name: 'PC Player',
				game_title: 'PC Game Pass',
				game_publisher: 'Microsoft',
			},
			task_config: {
				type: 1,
				join_operator: 'or',
				tasks: {
					WATCH_VIDEO: {
						event_name: 'WATCH_VIDEO',
						target: 61,
						external_ids: [],
					},
				},
			},
			rewards_config: {
				assignment_method: 1,
				rewards: [
					{
						type: 1,
						sku_id: '1308109728072863865',
						asset: 'reward3.jpg',
						asset_video: null,
						messages: {
							name: '14 day trial',
							name_with_article: 'a 14 Day Trial',
							redemption_instructions_by_platform: {
								0: '1. To redeem your 14-day PC Game Pass trial code visit [microsoft.com/redeem](https://microsoft.com/redeem) by December 30, 2024 11:59 PM\n\n2. Valid payment method required. Subscription continues automatically at then-current regular membership rate unless cancelled through your Microsoft Account. Limit: 1 per person/account. Subject to the Microsoft Services Agreement, Game Pass terms and system requirements at: [xbox.com/subscriptionterms](https://xbox.com/subscriptionterms).\n\nAvailable in US, CA, MX, BR, UK, FR, DE, AU, JP, KR.',
							},
						},
						approximate_count: null,
					},
				],
				rewards_expire_at: '2025-01-01T07:59:00+00:00',
				platforms: [0],
			},
			video_metadata: {
				messages: {
					video_title: 'We Got You Video',
				},
				assets: {
					video_player_video: 'video_high_res.mp4',
					video_player_thumbnail: 'video_thumbnail.jpg',
					video_player_video_low_res: 'video_low_res.mp4',
					video_player_caption: 'caption.vtt',
					video_player_transcript: 'transcript.txt',
					quest_bar_preview_video: 'questbar_preview.webm',
					quest_bar_preview_thumbnail: 'questbar_preview.jpg',
					quest_home_video: 'questhome.webm',
				},
			},
		},
		user_status: null,
		targeted_content: [],
		preview: false,
	},
	{
		id: '1308169595055771748',
		config: {
			id: '1308169595055771748',
			config_version: 2,
			starts_at: '2024-11-29T18:00:00+00:00',
			expires_at: '2024-12-06T00:59:59+00:00',
			features: [9, 3, 12, 14],
			experiments: {
				rollout: '2024-11_quests_fortnite_quest',
				targeting: '2024-11_quests_fortnite_quest_targeting',
				preview: '2024-11_quests_fortnite_quest_preview',
			},
			application: {
				link: 'https://www.fortnite.com',
				id: '432980957394370572',
				name: 'Fortnite',
			},
			assets: {
				hero: 'hero.jpg',
				hero_video: null,
				quest_bar_hero: 'quest_bar_hero_square.jpg',
				quest_bar_hero_video: null,
				game_tile: 'fortnite_tile_with_background.jpg',
				logotype: 'fortnite_logotype.png',
			},
			colors: {
				primary: '#753BBD',
				secondary: '#C98BDB',
			},
			messages: {
				quest_name: 'Fortnite',
				game_title: 'Fortnite',
				game_publisher: 'Epic Games',
			},
			task_config: {
				type: 1,
				join_operator: 'or',
				tasks: {
					PLAY_ON_DESKTOP: {
						event_name: 'PLAY_ON_DESKTOP',
						target: 900,
						external_ids: [],
					},
					PLAY_ON_XBOX: {
						event_name: 'PLAY_ON_XBOX',
						target: 900,
						external_ids: ['267695549'],
					},
					PLAY_ON_PLAYSTATION: {
						event_name: 'PLAY_ON_PLAYSTATION',
						target: 900,
						external_ids: [
							'PPSA01923_00',
							'PPSA01922_00',
							'CUSA07669_00',
							'CUSA07022_00',
						],
					},
				},
			},
			rewards_config: {
				assignment_method: 1,
				rewards: [
					{
						type: 3,
						sku_id: '1308169595055771749',
						asset: 'reward_tile.mp4',
						asset_video: null,
						messages: {
							name: 'Rift Butterfly Avatar Decoration',
							name_with_article:
								'a Rift Butterfly Avatar Decoration',
							redemption_instructions_by_platform: {
								0: 'This collectible can be redeemed on Discord! Go to your Gift Inventory to redeem and equip.',
							},
						},
						expires_at: '2025-02-05T08:00:00+00:00',
						expires_at_premium: null,
						expiration_mode: 1,
					},
				],
				rewards_expire_at: '2025-01-05T00:59:59+00:00',
				platforms: [0],
			},
		},
		user_status: null,
		targeted_content: [],
		preview: false,
	},
	{
		id: '1313309630851448832',
		config: {
			id: '1313309630851448832',
			config_version: 2,
			starts_at: '2024-12-06T18:00:00+00:00',
			expires_at: '2024-12-11T00:59:59+00:00',
			features: [9, 3, 12, 14],
			experiments: {
				rollout: '2024-12_quests_fortnite_og_quest',
				targeting: '2024-12_quests_fortnite_og_quest_targeting',
				preview: '2024-12_quests_fortnite_og_quest_preview',
			},
			application: {
				link: 'https://www.fortnite.com',
				id: '432980957394370572',
				name: 'Fortnite',
			},
			assets: {
				hero: 'hero.jpg',
				hero_video: null,
				quest_bar_hero: 'quest_bar_hero.jpg',
				quest_bar_hero_video: null,
				game_tile: 'game_tile.jpg',
				logotype: 'logotype.png',
			},
			colors: {
				primary: '#009639',
				secondary: '#292B2F',
			},
			messages: {
				quest_name: 'Fortnite OG',
				game_title: 'Fortnite OG',
				game_publisher: 'Epic Games',
			},
			task_config: {
				type: 1,
				join_operator: 'or',
				tasks: {
					PLAY_ON_DESKTOP: {
						event_name: 'PLAY_ON_DESKTOP',
						target: 900,
						external_ids: [],
					},
					PLAY_ON_XBOX: {
						event_name: 'PLAY_ON_XBOX',
						target: 900,
						external_ids: ['267695549'],
					},
					PLAY_ON_PLAYSTATION: {
						event_name: 'PLAY_ON_PLAYSTATION',
						target: 900,
						external_ids: [
							'PPSA01923_00',
							'PPSA01922_00',
							'CUSA07669_00',
							'CUSA07022_00',
						],
					},
				},
			},
			rewards_config: {
				assignment_method: 1,
				rewards: [
					{
						type: 3,
						sku_id: '1313309630851448833',
						asset: 'reward_tile_2.mp4',
						asset_video: null,
						messages: {
							name: 'Bush Camper Avatar Decoration',
							name_with_article:
								'a Bush Camper Avatar Decoration',
							redemption_instructions_by_platform: {
								0: 'This collectible can be redeemed on Discord! Go to your Gift Inventory to redeem and equip.',
							},
						},
						expires_at: '2025-02-11T08:00:00+00:00',
						expires_at_premium: null,
						expiration_mode: 1,
					},
				],
				rewards_expire_at: '2025-01-10T00:59:59+00:00',
				platforms: [0],
			},
		},
		user_status: null,
		targeted_content: [],
		preview: false,
	},
	{
		id: '1315761389343867031',
		config: {
			id: '1315761389343867031',
			config_version: 2,
			starts_at: '2024-12-13T18:00:00+00:00',
			expires_at: '2024-12-23T23:59:59+00:00',
			features: [16, 9, 3, 13],
			experiments: {
				rollout: '2024-12_quests_cod_12_13_2024_quest',
				targeting: '2024-12_quests_cod_12_13_2024_quest_targeting',
				preview: '2024-12_quests_cod_12_13_2024_quest_preview',
			},
			application: {
				link: 'https://callofduty.com/redeem?utm_source=discord&utm_medium=quest&utm_campaign=brand',
				id: '545364944258990091',
				name: 'Call of Duty: Black Ops 6',
			},
			assets: {
				hero: 'hero.jpg',
				hero_video: null,
				quest_bar_hero: 'questbar_hero.jpg',
				quest_bar_hero_video: 'questbar_hero.webm',
				game_tile: 'game_tile.png',
				logotype: 'logotype.png',
			},
			colors: {
				primary: '#F96800',
				secondary: '#1A1A1A',
			},
			messages: {
				quest_name: 'COD: Black Ops 6',
				game_title: 'Call of Duty: Black Ops 6',
				game_publisher: 'Activision',
			},
			task_config: {
				type: 1,
				join_operator: 'or',
				tasks: {
					WATCH_VIDEO: {
						event_name: 'WATCH_VIDEO',
						target: 29,
						external_ids: [],
					},
				},
			},
			rewards_config: {
				assignment_method: 1,
				rewards: [
					{
						type: 1,
						sku_id: '1315762342742458368',
						asset: 'reward.jpg',
						asset_video: null,
						messages: {
							name: '15m 2XP Token',
							name_with_article: 'a 15m 2XP Token',
							redemption_instructions_by_platform: {
								0: 'To redeem your COD: Black Ops 6 Quest reward, visit [Call of Duty’s code redemption website](https://profile.callofduty.com/cod/login?redirectUrl=https%3A%2F%2Fprofile.callofduty.com%2Fpromotions%2FredeemCode) and log in to your account. Enter your code to obtain your Double XP Token.',
							},
						},
						approximate_count: 2500000,
					},
				],
				rewards_expire_at: '2025-01-01T07:59:00+00:00',
				platforms: [0],
			},
			video_metadata: {
				messages: {
					video_title: 'COD: Black Ops 6 trailer',
				},
				assets: {
					video_player_video: 'video_high_res.mp4',
					video_player_thumbnail: 'video_thumbnail.jpg',
					video_player_video_low_res: 'video_low_res.mp4',
					video_player_caption: 'caption.vtt',
					video_player_transcript: 'transcript.txt',
					quest_bar_preview_video: 'questbar_preview.webm',
					quest_bar_preview_thumbnail: 'questbar_preview.jpg',
					quest_home_video: 'questhome.webm',
				},
			},
		},
		user_status: null,
		targeted_content: [],
		preview: false,
	},
	{
		id: '1313513117296099378',
		config: {
			id: '1313513117296099378',
			config_version: 2,
			starts_at: '2024-12-11T18:00:00+00:00',
			expires_at: '2024-12-14T23:59:59+00:00',
			features: [16, 9, 3, 13],
			experiments: {
				rollout: '2024-12_quests_game_awards_quest',
				targeting: '2024-12_quests_game_awards_quest_targeting',
				preview: '2024-12_quests_game_awards_quest_preview',
			},
			application: {
				link: 'https://bit.ly/tga2024discord',
				id: '545364944258990091',
				name: 'The Game Awards',
			},
			assets: {
				hero: 'hero.jpg',
				hero_video: null,
				quest_bar_hero: 'questbar_hero.jpg',
				quest_bar_hero_video: 'questbar_hero.webm',
				game_tile: 'game_tile.png',
				logotype: 'logotype.png',
			},
			colors: {
				primary: '#bb4634',
				secondary: '#455A89',
			},
			messages: {
				quest_name: 'The Game Awards',
				game_title: 'The Game Awards',
				game_publisher: 'The Game Awards',
			},
			task_config: {
				type: 1,
				join_operator: 'or',
				tasks: {
					WATCH_VIDEO: {
						event_name: 'WATCH_VIDEO',
						target: 29,
						external_ids: [],
					},
				},
			},
			rewards_config: {
				assignment_method: 1,
				rewards: [
					{
						type: 3,
						sku_id: '1315853682235019326',
						asset: 'reward2.mp4',
						asset_video: null,
						messages: {
							name: 'TGA Controller Avatar Decoration',
							name_with_article:
								'a TGA Controller Avatar Decoration',
							redemption_instructions_by_platform: {
								0: 'This collectible can be redeemed on Discord! Go to your Gift Inventory to redeem and equip.',
							},
						},
						expires_at: '2025-02-14T08:00:00+00:00',
						expires_at_premium: null,
						expiration_mode: 1,
					},
				],
				rewards_expire_at: '2025-01-13T23:59:59+00:00',
				platforms: [0],
			},
			video_metadata: {
				messages: {
					video_title: 'Game Awards 2024 Trailer',
					video_end_cta_title: 'Watch Now',
					video_end_cta_subtitle: 'Streaming Live 12/12',
				},
				assets: {
					video_player_video: 'video_high_res.mp4',
					video_player_thumbnail: 'video_thumbnail.jpg',
					video_player_video_low_res: 'video_low_res.mp4',
					video_player_caption: 'caption2.vtt',
					video_player_transcript: 'transcript.txt',
					quest_bar_preview_video: 'questbar_preview.webm',
					quest_bar_preview_thumbnail: 'questbar_preview.jpg',
					quest_home_video: 'questhome.webm',
				},
			},
		},
		user_status: null,
		targeted_content: [],
		preview: false,
	},
	{
		id: '1316440465037463593',
		config: {
			id: '1316440465037463593',
			config_version: 2,
			starts_at: '2024-12-18T18:00:00+00:00',
			expires_at: '2024-12-25T01:00:00+00:00',
			features: [9, 3, 12, 15],
			experiments: {
				rollout: '2024-12_roblox_quest_1224',
				targeting: '2024-12_roblox_quest_targeting',
				preview: '2024-12_roblox_quest_preview',
			},
			application: {
				link: 'https://www.roblox.com/',
				id: '363445589247131668',
				name: 'Roblox',
			},
			assets: {
				hero: '1317240442202620044.png',
				hero_video: null,
				quest_bar_hero: '1317240442688897055.png',
				quest_bar_hero_video: null,
				game_tile: '1317242698314551296.png',
				logotype: '1317242697404256408.png',
			},
			colors: {
				primary: '#6A6F81',
				secondary: '#F7F7F8',
			},
			messages: {
				quest_name: 'Roblox Play',
				game_title: 'Roblox',
				game_publisher: 'Roblox',
			},
			task_config: {
				type: 1,
				join_operator: 'or',
				tasks: {
					PLAY_ON_DESKTOP: {
						event_name: 'PLAY_ON_DESKTOP',
						target: 900,
						external_ids: [],
					},
				},
			},
			rewards_config: {
				assignment_method: 1,
				rewards: [
					{
						type: 1,
						sku_id: '1316440465037463594',
						asset: '1317241740045975562.png',
						asset_video: null,
						messages: {
							name: 'Bobo the Picnic Bear',
							name_with_article: 'a Bobo the Picnic Bear',
							redemption_instructions_by_platform: {
								0: 'For app users, redeem the code below by going to the navigation bar on the left, click More - Gift Cards - Redeem Card, then enter the codes.\n\nFor web users, click on the navigation menu from the upper left side, click Gift Cards - Redeem Card, then enter the codes.',
							},
						},
						approximate_count: 750000,
					},
				],
				rewards_expire_at: '2025-01-24T01:00:00+00:00',
				platforms: [0],
			},
		},
		user_status: null,
		targeted_content: [],
		preview: false,
	},
	{
		id: '1315748881199267850',
		config: {
			id: '1315748881199267850',
			config_version: 2,
			starts_at: '2024-12-11T18:00:00+00:00',
			expires_at: '2024-12-18T00:59:59+00:00',
			features: [16, 9, 3, 14],
			experiments: {
				rollout: '2024-12_quests_delta_force_quest',
				targeting: '2024-12_quests_delta_force_quest_targeting',
				preview: '2024-12_quests_delta_force_quest_preview',
			},
			application: {
				link: 'https://store.steampowered.com/app/2507950?utm_source=discordquest',
				id: '1314682894106497096',
				name: 'Delta Force',
			},
			assets: {
				hero: 'hero.png',
				hero_video: null,
				quest_bar_hero: 'quest_bar_hero.jpg',
				quest_bar_hero_video: null,
				game_tile: 'game_tile.png',
				logotype: 'logotype.png',
			},
			colors: {
				primary: '#0CA766',
				secondary: '#1A1A1A',
			},
			messages: {
				quest_name: 'Delta Force',
				game_title: 'Delta Force',
				game_publisher: 'TiMi Studio Group',
			},
			task_config: {
				type: 1,
				join_operator: 'or',
				tasks: {
					PLAY_ON_DESKTOP: {
						event_name: 'PLAY_ON_DESKTOP',
						target: 900,
						external_ids: [],
					},
				},
			},
			rewards_config: {
				assignment_method: 1,
				rewards: [
					{
						type: 1,
						sku_id: '1315762399294394428',
						asset: 'reward.png',
						asset_video: null,
						messages: {
							name: 'P90 - Pioneer Blue',
							name_with_article: 'a P90 - Pioneer Blue',
							redemption_instructions_by_platform: {
								0: 'Redeem the code below on [Delta Force Official Website](https://www.playdeltaforce.com/en/cdkredeem.html) redemption page to get access to your reward.',
							},
						},
						approximate_count: null,
					},
				],
				rewards_expire_at: '2025-01-17T00:59:59+00:00',
				platforms: [0],
			},
		},
		user_status: null,
		targeted_content: [],
		preview: false,
	},
	{
		id: '1315750531330736210',
		config: {
			id: '1315750531330736210',
			config_version: 2,
			starts_at: '2024-12-11T18:00:00+00:00',
			expires_at: '2024-12-16T00:59:59+00:00',
			features: [3, 9, 12, 14, 16],
			experiments: {
				rollout: '2024-12_quests_fortnite_ballistic_quest_12_11_2024',
				targeting:
					'2024-12_quests_fortnite_ballistic_quest_12_11_2024_targeting',
				preview:
					'2024-12_quests_fortnite_ballistic_quest_12_11_2024_preview',
			},
			application: {
				link: 'https://www.fortnite.com',
				id: '432980957394370572',
				name: 'Fortnite',
			},
			assets: {
				hero: 'hero.jpg',
				hero_video: null,
				quest_bar_hero: 'quest_bar_hero.jpg',
				quest_bar_hero_video: null,
				game_tile: 'game_tile.png',
				logotype: 'game_logotype.png',
			},
			colors: {
				primary: '#0e0e0f',
				secondary: '#fb0000',
			},
			messages: {
				quest_name: 'Fortnite Ballistic',
				game_title: 'Fortnite Ballistic',
				game_publisher: 'Epic Games',
			},
			task_config: {
				type: 1,
				join_operator: 'or',
				tasks: {
					PLAY_ON_DESKTOP: {
						event_name: 'PLAY_ON_DESKTOP',
						target: 900,
						external_ids: [],
					},
					PLAY_ON_XBOX: {
						event_name: 'PLAY_ON_XBOX',
						target: 900,
						external_ids: ['267695549'],
					},
					PLAY_ON_PLAYSTATION: {
						event_name: 'PLAY_ON_PLAYSTATION',
						target: 900,
						external_ids: [
							'PPSA01923_00',
							'CUSA07022_00',
							'CUSA07669_00',
							'PPSA01922_00',
						],
					},
				},
			},
			rewards_config: {
				assignment_method: 1,
				rewards: [
					{
						type: 3,
						sku_id: '1315750531330736211',
						asset: 'reward_tile.mp4',
						asset_video: null,
						messages: {
							name: 'Shield Potion Avatar Decoration',
							name_with_article:
								'a Shield Potion Avatar Decoration',
							redemption_instructions_by_platform: {
								0: 'This collectible can be redeemed on Discord! Go to your Gift Inventory to redeem and equip.',
							},
						},
						expires_at: '2025-02-16T08:00:00+00:00',
						expires_at_premium: null,
						expiration_mode: 1,
					},
				],
				rewards_expire_at: '2025-01-15T00:59:59+00:00',
				platforms: [0],
			},
		},
		user_status: null,
		targeted_content: [],
		preview: false,
	},
	{
		id: '1316549584566358086',
		config: {
			id: '1316549584566358086',
			config_version: 2,
			starts_at: '2024-12-13T18:00:00+00:00',
			expires_at: '2024-12-21T23:59:59+00:00',
			features: [16, 9, 3, 13],
			experiments: {
				rollout: '2024-12_sonic_3_quest',
				targeting: '2024-12_sonic_3_quest_targeting',
				preview: '2024-12_sonic_3_quest_preview',
			},
			application: {
				link: 'https://sonicthehedgehogmovie.com?utm_source=discord&utm_medium=quest_link',
				id: '545364944258990091',
				name: 'Sonic 3',
			},
			assets: {
				hero: 'hero2.jpg',
				hero_video: null,
				quest_bar_hero: 'questbar_hero.jpg',
				quest_bar_hero_video: 'preview.webm',
				game_tile: 'game_tile.png',
				logotype: 'logotype.png',
			},
			colors: {
				primary: '#005EB8',
				secondary: '#0033A0',
			},
			messages: {
				quest_name: 'Sonic 3',
				game_title: 'Sonic 3',
				game_publisher: 'Paramount',
			},
			task_config: {
				type: 1,
				join_operator: 'or',
				tasks: {
					WATCH_VIDEO: {
						event_name: 'WATCH_VIDEO',
						target: 93,
						external_ids: [],
					},
				},
			},
			rewards_config: {
				assignment_method: 1,
				rewards: [
					{
						type: 3,
						sku_id: '1316597786862419988',
						asset: 'reward.mp4',
						asset_video: null,
						messages: {
							name: 'Shadow Avatar Decoration',
							name_with_article: 'a Shadow Avatar Decoration',
							redemption_instructions_by_platform: {
								0: 'This collectible can be redeemed on Discord! Go to your Gift Inventory to redeem and equip.',
							},
						},
						expires_at: '2025-02-21T08:00:00+00:00',
						expires_at_premium: null,
						expiration_mode: 1,
					},
				],
				rewards_expire_at: '2025-01-20T23:59:59+00:00',
				platforms: [0],
			},
			video_metadata: {
				messages: {
					video_title: 'Sonic 3 Trailer',
				},
				assets: {
					video_player_video: 'video_high_res.mp4',
					video_player_thumbnail: 'video_thumbnail.jpg',
					video_player_video_low_res: 'video_low_res.mp4',
					video_player_caption: 'caption.vtt',
					video_player_transcript: 'transcript.txt',
					quest_bar_preview_video: 'preview.webm',
					quest_bar_preview_thumbnail: 'questbar_preview.jpg',
					quest_home_video: 'preview.webm',
				},
			},
		},
		user_status: null,
		targeted_content: [],
		preview: false,
	},
	{
		id: '1316460321329774692',
		config: {
			id: '1316460321329774692',
			config_version: 2,
			starts_at: '2024-12-17T18:00:00+00:00',
			expires_at: '2024-12-24T00:59:59+00:00',
			features: [16, 9, 3, 14],
			experiments: {
				rollout: '2024-12_garena_quests_delta_force_quest',
				targeting: '2024-12_garena_quests_delta_force_quest_targeting',
				preview: '2024-12_garena_quests_delta_force_quest_preview',
			},
			application: {
				link: 'https://deltaforce.garena.com/',
				id: '1314682894106497096',
				name: 'Delta Force',
			},
			assets: {
				hero: 'hero_v2.jpg',
				hero_video: null,
				quest_bar_hero: 'quest_bar_hero_v2.jpg',
				quest_bar_hero_video: null,
				game_tile: 'game_tile.jpg',
				logotype: 'logotype.png',
			},
			colors: {
				primary: '#0CA766',
				secondary: '#1A1A1A',
			},
			messages: {
				quest_name: 'Garena Pioneer',
				game_title: 'Garena® Delta Force',
				game_publisher: 'Garena',
			},
			task_config: {
				type: 1,
				join_operator: 'or',
				tasks: {
					PLAY_ON_DESKTOP: {
						event_name: 'PLAY_ON_DESKTOP',
						target: 900,
						external_ids: [],
					},
				},
			},
			rewards_config: {
				assignment_method: 1,
				rewards: [
					{
						type: 1,
						sku_id: '1316460321329774693',
						asset: 'reward2.jpg',
						asset_video: null,
						messages: {
							name: 'P90 - Pioneer Blue',
							name_with_article: 'a P90 - Pioneer Blue',
							redemption_instructions_by_platform: {
								0: 'Redeem the code below on [Garena Delta Force Redemption Center](https://redeem.df.garena.sg/cdkgarena.html) to access your reward.',
							},
						},
						approximate_count: null,
					},
				],
				rewards_expire_at: '2025-01-23T00:59:59+00:00',
				platforms: [0],
			},
		},
		user_status: null,
		targeted_content: [],
		preview: false,
	},
	{
		id: '1318676891938328597',
		config: {
			id: '1318676891938328597',
			config_version: 2,
			starts_at: '2024-12-23T18:00:00+00:00',
			expires_at: '2024-12-30T01:00:00+00:00',
			features: [9, 3, 14, 15],
			experiments: {
				rollout: '2024-12_rec_room_winter',
				targeting: '2024-12_rec_room_winter_targeting',
				preview: '2024-12_rec_room_winter_preview',
			},
			application: {
				link: 'https://recroom.sng.link/Da56h/imwqy',
				id: '451545342987468800',
				name: 'rec room',
			},
			assets: {
				hero: 'hero.jpg',
				hero_video: null,
				quest_bar_hero: 'quest_bar_hero.jpg',
				quest_bar_hero_video: null,
				game_tile: 'brand_icon.png',
				logotype: 'logotype.png',
			},
			colors: {
				primary: '#FF6738',
				secondary: '#D23636',
			},
			messages: {
				quest_name: 'Rec Room Winter',
				game_title: 'Rec Room',
				game_publisher: 'Rec Room',
			},
			task_config: {
				type: 1,
				join_operator: 'or',
				tasks: {
					PLAY_ON_DESKTOP: {
						event_name: 'PLAY_ON_DESKTOP',
						target: 900,
						external_ids: [],
					},
					PLAY_ON_XBOX: {
						event_name: 'PLAY_ON_XBOX',
						target: 900,
						external_ids: ['2138304024'],
					},
					PLAY_ON_PLAYSTATION: {
						event_name: 'PLAY_ON_PLAYSTATION',
						target: 900,
						external_ids: [
							'PPSA05533_00',
							'CUSA09539_00',
							'PPSA05532_00',
							'CUSA08481_00',
						],
					},
				},
			},
			rewards_config: {
				assignment_method: 1,
				rewards: [
					{
						type: 3,
						sku_id: '1319423712474435655',
						asset: 'reward_tile.mp4',
						asset_video: null,
						messages: {
							name: 'Rec Room Lightning Avatar Decoration',
							name_with_article:
								'a Rec Room Lightning Avatar Decoration',
							redemption_instructions_by_platform: {
								0: '',
							},
						},
						expires_at: '2025-03-01T01:00:00+00:00',
						expires_at_premium: null,
						expiration_mode: 1,
					},
				],
				rewards_expire_at: '2025-01-29T01:00:00+00:00',
				platforms: [0],
			},
		},
		user_status: null,
		targeted_content: [],
		preview: false,
	},
];