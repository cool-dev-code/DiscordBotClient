const { v3 } = require('murmurhash');
const { readFileSync } = require('fs');
const Constants = require('../AppCore/Constants');

/*
Disable Bucket
2023-03_pomelo_debounce_delay
2023-04_pomelo_attempt
2023-04_pomelo_suggestions
2023-03_pomelo
*/

const bucketReplacement = {
	'2024-10_retrigger_reaction_frecency_algorithms': {
		revision: 2,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-03_quests_activity_quest': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2023-11_adyen_auth_without_capture': {
		revision: 1,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2023-08_secure_frames_encryption': {
		revision: 4,
		population: 3,
		bucket: 11,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2023-12_nv_relaxed_rate_control': {
		revision: 4,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2023-07_announcement_views': {
		revision: 0,
		population: 3,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-09_app_dms': {
		revision: 1,
		population: 0,
		bucket: 2,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-12_app_dm_report_button': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2023-11_app_launcher_desktop': {
		revision: 2,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2023-11_attachment_link_markup': {
		revision: 0,
		population: 4,
		bucket: 2,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2022-06_auth_sessions_user_settings': {
		revision: 0,
		population: 2,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-10_mobile_video_disable': {
		revision: 2,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2022-03_block_russian_purchases_desktop': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-10_block_user_feedback': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-10_blocking_context': {
		revision: 5,
		population: 0,
		bucket: 0,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-08_blocking_voice_states': {
		revision: 2,
		population: 0,
		bucket: 0,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-11_checkout_optimization_desktop_client_google_pay': {
		revision: 3,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2023-09_clips_nitro_early_access': {
		revision: 0,
		population: 0,
		bucket: 2,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-08_collectibles_expiry_modal': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-12_shop_link_mention': {
		revision: 0,
		population: 1,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2023-12_collectibles_shop_marketing': {
		revision: 0,
		population: 0,
		bucket: 10,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-06_collectibles_shop_use_now': {
		revision: 2,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-04_concurrent_quests': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-08_content_inventory_analytics_sampling': {
		revision: 4,
		population: 0,
		bucket: 2,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-06_content_entry_embed': {
		revision: 0,
		population: 1,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-07_contextual_image_recs_user': {
		revision: 4,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2023-01_creator_monetization_nag_activate_users': {
		revision: 1,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2022-09_creator_monetization_raven_users': {
		revision: 0,
		population: 3,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-06_ctp_app_open_everyone': {
		revision: 2,
		population: 0,
		bucket: 0,
		override: false,
		aaMode: true,
		triggerDebuggingEnabled: true,
	},
	'2024-08_ctp_dmgdm_list_render__everyone': {
		revision: 1,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: true,
		triggerDebuggingEnabled: true,
	},
	'2024-07_ctp_open_nitro_everyone': {
		revision: 1,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: true,
		triggerDebuggingEnabled: true,
	},
	'2024-07_ctp_open_nitro_multiple_buckets': {
		revision: 1,
		population: 0,
		bucket: 4,
		override: false,
		aaMode: true,
		triggerDebuggingEnabled: true,
	},
	'2024-07_ctp_open_user_settings_everyone': {
		revision: 2,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: true,
		triggerDebuggingEnabled: true,
	},
	'2024-07_ctp_payment_flow_started_everyone': {
		revision: 1,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: true,
		triggerDebuggingEnabled: true,
	},
	'2024-06_ctp_voice_call_everyone': {
		revision: 1,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: true,
		triggerDebuggingEnabled: true,
	},
	'2024-02_desktop_animated_icons': {
		revision: 0,
		population: 2,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-06_desktop_app_launcher_in_activities_shelf': {
		revision: 3,
		population: 0,
		bucket: 2,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-05_desktop_user_settings_search': {
		revision: 3,
		population: 2,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-11_disable_quest_decision_fallback': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-03_content_inventory_memberlist_and_ranker': {
		revision: 23,
		population: 2,
		bucket: 5,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2023-08_explicit_media_redaction': {
		revision: 6,
		population: 1,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-06_message_bookmarks': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-10_golive_simulcast': {
		revision: 5,
		population: 3,
		bucket: 0,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-04_gdm_presence': {
		revision: 4,
		population: 0,
		bucket: 7,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2023-06_guild_boosting_legacy_pricing_fix_experiment': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2021-08_guild_role_subscription_users': {
		revision: 0,
		population: 1,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2023-04_guild_media_channel_post_preview_embed_users': {
		revision: 0,
		population: 3,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-08_iar_privacy_and_safety_settings_upsells': {
		revision: 4,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-09_improved_reaction_button': {
		revision: 2,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-08_reaction_push_notifications_user': {
		revision: 5,
		population: 0,
		bucket: 2,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2021-12_inferno_spam_redaction': {
		revision: 3,
		population: 1,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-09_likely_atoed_connections': {
		revision: 2,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2022-12_localized_pricing_poland_notice': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2023-05_localized_pricing_turkey_notice': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2023-12_marketing_automation_experiment': {
		revision: 0,
		population: 2,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-10_message_attachment_send_failure': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-05_message_forwarding': {
		revision: 3,
		population: 0,
		bucket: 0,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-09_message_forwarding_gtm': {
		revision: 3,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-08_message_forwarding_icon': {
		revision: 3,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2023-11_midjourney_onboarding': {
		revision: 3,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2022-11_mobile_account_switcher_notifications': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-08_new_gateway_dispatcher': {
		revision: 3,
		population: 0,
		bucket: 0,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-11_nitro_basic_upsell': {
		revision: 3,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-08_nitro_tenure_rewards_backfill': {
		revision: 2,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-03_nitro_tenure_reward_card': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2023-11_totally_benign_and_non_controversial_notification_tweaks': {
		revision: 0,
		population: 1,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2023-04_null_experiment': {
		revision: 3,
		population: 1,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-02_nvenc_new_presets': {
		revision: 2,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-07_open_platform_app_launcher': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-07_persistent_reaction_button': {
		revision: 3,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2023-03_pomelo': {
		revision: 0,
		population: 7,
		bucket: -1, // Not eligible
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-06_premium_emoji_desktop_upsell': {
		revision: 4,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-06_premium_soundboard_desktop_upsell': {
		revision: 2,
		population: 0,
		bucket: 3,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2023-10_premium_tier_2_trial_offer_expiring_notice': {
		revision: 3,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-10_premium_upsell_revamp_for_trial': {
		revision: 3,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-12_premium_wow_moment': {
		revision: 2,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-12_premium_wow_moment_fetch_analytics': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2022-08_churro_experiment': {
		revision: 0,
		population: 1,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-05_quest_bar': {
		revision: 2,
		population: 0,
		bucket: 2,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-03_quest_bar_progress_cta': {
		revision: 3,
		population: 0,
		bucket: 0,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-07_quest_interactable_expired_crendentials': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2023-12_quests': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-03_quests_client_monitoring': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-10_quests_dismissal_survey': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-07_quests_mobile_ga': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-08_quests_separate_decision_endpoint': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-08_reaction_frecency_algorithms': {
		revision: 5,
		population: 2,
		bucket: 3,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2023-09_redesigned_icons_experiment': {
		revision: 1,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-03_referral_program_recipient': {
		revision: 2,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-03_referral_program_sender': {
		revision: 2,
		population: 0,
		bucket: 2,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2021-08_regional_payment_methods': {
		revision: 0,
		population: 7,
		bucket: 9,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2023-08_remix_ga': {
		revision: 3,
		population: 4,
		bucket: 5,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2023-09_iar_user_reporting': {
		revision: 0,
		population: 2,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2023-11_safety_hub_inapp_appeal_ingestion': {
		revision: 1,
		population: 6,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-08_safety_settings_update': {
		revision: 3,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-11_seasonal_gifting': {
		revision: 1,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-11_seasonal_gifting_reminder': {
		revision: 1,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-05_secure_frames_ui_rollout': {
		revision: 1,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2023-09_server_shop_phantom_preview': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2023-04_server_subscriptions_tier_templates_user': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-10_shop_variants': {
		revision: 4,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2023-09_show_server_sub_in_server_shop': {
		revision: 0,
		population: 1,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-09_sky_load': {
		revision: 4,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-08_soundboard_refresh': {
		revision: 4,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2023-03_store_latest_message_data': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-06_app_storefront_message_embeds': {
		revision: 0,
		population: 4,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-07_sidechain_compression': {
		revision: 0,
		population: 1,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-06_checkout_recovery_nagbar_test': {
		revision: 4,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-05_throughline_care': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-10_tile_resolution_gating': {
		revision: 4,
		population: 0,
		bucket: 0,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-08_toggle_soundshare_menu_experiment': {
		revision: 1,
		population: 1,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2023-09_trigger_debugging_aa': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-09_quests_trophy_case': {
		revision: 0,
		population: 1,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2023-11_uu_one_click': {
		revision: 1,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-10_system_date_formatter': {
		revision: 5,
		population: 3,
		bucket: 2,
		override: true,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-09_user_app_install_education': {
		revision: 2,
		population: 0,
		bucket: 0,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-08_user_app_subscription_redesign': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-12_user_profile_react_reply_awareness': {
		revision: 3,
		population: 0,
		bucket: 0,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-10_quests_video_dismissal_survey': {
		revision: 0,
		population: 1,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-09_voice_channel_blocked_user_warning': {
		revision: 3,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-03_web_audio_api_rollout': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: false,
	},
	'2024-10_web_display_animated_webp_embeds': {
		revision: 2,
		population: 0,
		bucket: 2,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
	'2024-12_winter_holiday': {
		revision: 0,
		population: 0,
		bucket: 1,
		override: false,
		aaMode: false,
		triggerDebuggingEnabled: true,
	},
};

function buildUserExperiment(obj, botId) {
	const dataFromBucket = bucketReplacement[obj.id];
	if (!dataFromBucket) return null;
	const hash = v3(obj.id);
	const revision = dataFromBucket.revision;
	const bucket = dataFromBucket.bucket;
	const override = dataFromBucket.override === false ? -1 : 0;
	const population = dataFromBucket.population;
	const hash_result = v3(`${obj.id}:${botId}`) % 10000;
	const aa_mode = dataFromBucket.aaMode === true ? 1 : 0;
	const trigger_debugging =
		dataFromBucket.triggerDebuggingEnabled === true ? 1 : 0;
	return [
		hash,
		revision,
		bucket,
		override,
		population,
		hash_result,
		aa_mode,
		trigger_debugging,
	];
}

/*
Code get User Experiment
    const experimentModule = Vencord.Webpack.findByProps('getGuildExperimentBucket');
    const experiments = Object.entries(experimentModule.getRegisteredExperiments())
        .map(([id, data]) => ({ id, ...data }))
        .sort((a, b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
        })
        .filter(exp => exp.type === "user");
    const experimentData = {};
    for (const experiment of experiments) {
		try {
        	experimentData[experiment.id] = JSON.parse(JSON.stringify(experimentModule.getUserExperimentDescriptor(experiment.id)));
        	delete experimentData[experiment.id].type
        	delete experimentData[experiment.id].hashResult
        	delete experimentData[experiment.id].assignmentSource
        	delete experimentData[experiment.id].sessionId
        	delete experimentData[experiment.id].loadedFromCache
        	delete experimentData[experiment.id].fingerprint
		}
        catch (e) {
            console.log(experiment)
        }
    }
    experimentData
*/

// https://docs.discord.sex/topics/experiments#user-experiment-structure
/*
Field				Type		Description
hash				integer		32-bit unsigned Murmur3 hash of the experiment's name
revision			integer		Current version of the rollout
bucket				integer		The requesting user or fingerprint's assigned experiment bucket
override			integer		Whether the user or fingerprint has an override for the experiment (-1 for false, 0 for true)
population			integer		The internal population group the requesting user or fingerprint is in
hash_result			integer		The calculated rollout position to use, prioritized over local calculations
aa_mode 1			integer		The experiment's A/A testing mode, represented as an integer-casted boolean (0 for false, 1 for true)
trigger_debugging	integer		Whether the experiment's analytics trigger debugging is enabled, represented as an integer-casted boolean (0 for false, 1 for true)
*/
module.exports.User = function (allData, botId) {
	return allData
		.map((obj) => buildUserExperiment(obj, botId))
		.filter((x) => x);
};

module.exports.Guild = function () {
	return JSON.parse(
		readFileSync(Constants.DiscordGuildExperimentsPath, 'utf8'),
	);
};
