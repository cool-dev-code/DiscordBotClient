import { MessageType, PartialMessage, IBinaryReader, BinaryReadOptions, IBinaryWriter, BinaryWriteOptions, JsonWriteOptions, JsonValue, JsonReadOptions } from '@protobuf-ts/runtime';

/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PremiumMarketingComponentProperties.ButtonAction
 */
declare enum PremiumMarketingComponentProperties_ButtonAction {
    /**
     * @generated from protobuf enum value: BUTTON_ACTION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: BUTTON_ACTION_OPEN_MARKETING_PAGE = 1;
     */
    OPEN_MARKETING_PAGE = 1,
    /**
     * @generated from protobuf enum value: BUTTON_ACTION_OPEN_TIER_2_PAYMENT_MODAL = 2;
     */
    OPEN_TIER_2_PAYMENT_MODAL = 2
}
declare class PremiumMarketingComponentProperties$Type extends MessageType<PremiumMarketingComponentProperties> {
    constructor();
    create(value?: PartialMessage<PremiumMarketingComponentProperties>): PremiumMarketingComponentProperties;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PremiumMarketingComponentProperties): PremiumMarketingComponentProperties;
    internalBinaryWrite(message: PremiumMarketingComponentProperties, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PremiumMarketingComponentProperties
 */
interface PremiumMarketingComponentProperties {
    /**
     * @generated from protobuf field: string placeholder = 1;
     */
    placeholder: string;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PremiumMarketingComponentProperties.AnnouncementModalVariant1Properties announcement_modal_variant_1 = 2;
     */
    announcementModalVariant1?: PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties;
    /**
     * @generated from protobuf field: string content_identifier = 3;
     */
    contentIdentifier: string;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PremiumMarketingComponentProperties
 */
declare const PremiumMarketingComponentProperties: PremiumMarketingComponentProperties$Type;
declare class PremiumMarketingComponentProperties_FeatureCard$Type extends MessageType<PremiumMarketingComponentProperties_FeatureCard> {
    constructor();
    create(value?: PartialMessage<PremiumMarketingComponentProperties_FeatureCard>): PremiumMarketingComponentProperties_FeatureCard;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PremiumMarketingComponentProperties_FeatureCard): PremiumMarketingComponentProperties_FeatureCard;
    internalBinaryWrite(message: PremiumMarketingComponentProperties_FeatureCard, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PremiumMarketingComponentProperties.FeatureCard
 */
interface PremiumMarketingComponentProperties_FeatureCard {
    /**
     * @generated from protobuf field: string header = 1;
     */
    header: string;
    /**
     * @generated from protobuf field: string pill = 2;
     */
    pill: string;
    /**
     * @generated from protobuf field: string body = 3;
     */
    body: string;
    /**
     * @generated from protobuf field: string image_link = 4;
     */
    imageLink: string;
    /**
     * @generated from protobuf field: string image_link_light_theme = 5;
     */
    imageLinkLightTheme: string;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PremiumMarketingComponentProperties.FeatureCard
 */
declare const PremiumMarketingComponentProperties_FeatureCard: PremiumMarketingComponentProperties_FeatureCard$Type;
declare class PremiumMarketingComponentProperties_SubscriptionButton$Type extends MessageType<PremiumMarketingComponentProperties_SubscriptionButton> {
    constructor();
    create(value?: PartialMessage<PremiumMarketingComponentProperties_SubscriptionButton>): PremiumMarketingComponentProperties_SubscriptionButton;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PremiumMarketingComponentProperties_SubscriptionButton): PremiumMarketingComponentProperties_SubscriptionButton;
    internalBinaryWrite(message: PremiumMarketingComponentProperties_SubscriptionButton, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PremiumMarketingComponentProperties.SubscriptionButton
 */
interface PremiumMarketingComponentProperties_SubscriptionButton {
    /**
     * @generated from protobuf field: string copy = 1;
     */
    copy: string;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PremiumMarketingComponentProperties.ButtonAction button_action = 2;
     */
    buttonAction: PremiumMarketingComponentProperties_ButtonAction;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PremiumMarketingComponentProperties.SubscriptionButton
 */
declare const PremiumMarketingComponentProperties_SubscriptionButton: PremiumMarketingComponentProperties_SubscriptionButton$Type;
declare class PremiumMarketingComponentProperties_Subtitle$Type extends MessageType<PremiumMarketingComponentProperties_Subtitle> {
    constructor();
    create(value?: PartialMessage<PremiumMarketingComponentProperties_Subtitle>): PremiumMarketingComponentProperties_Subtitle;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PremiumMarketingComponentProperties_Subtitle): PremiumMarketingComponentProperties_Subtitle;
    internalBinaryWrite(message: PremiumMarketingComponentProperties_Subtitle, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PremiumMarketingComponentProperties.Subtitle
 */
interface PremiumMarketingComponentProperties_Subtitle {
    /**
     * @generated from protobuf field: string link = 1;
     */
    link: string;
    /**
     * @generated from protobuf field: string locale = 2;
     */
    locale: string;
    /**
     * @generated from protobuf field: bool is_default = 3;
     */
    isDefault: boolean;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PremiumMarketingComponentProperties.Subtitle
 */
declare const PremiumMarketingComponentProperties_Subtitle: PremiumMarketingComponentProperties_Subtitle$Type;
declare class PremiumMarketingComponentProperties_Variant1Storage$Type extends MessageType<PremiumMarketingComponentProperties_Variant1Storage> {
    constructor();
    create(value?: PartialMessage<PremiumMarketingComponentProperties_Variant1Storage>): PremiumMarketingComponentProperties_Variant1Storage;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PremiumMarketingComponentProperties_Variant1Storage): PremiumMarketingComponentProperties_Variant1Storage;
    private binaryReadMap1;
    private binaryReadMap2;
    private binaryReadMap3;
    internalBinaryWrite(message: PremiumMarketingComponentProperties_Variant1Storage, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PremiumMarketingComponentProperties.Variant1Storage
 */
interface PremiumMarketingComponentProperties_Variant1Storage {
    /**
     * @generated from protobuf field: map<string, string> hero_art_localized_video_links_dark_theme = 1;
     */
    heroArtLocalizedVideoLinksDarkTheme: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: map<string, string> hero_art_localized_video_links_light_theme = 2;
     */
    heroArtLocalizedVideoLinksLightTheme: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: map<string, string> hero_art_video_subtitle_links = 3;
     */
    heroArtVideoSubtitleLinks: {
        [key: string]: string;
    };
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PremiumMarketingComponentProperties.Variant1Storage
 */
declare const PremiumMarketingComponentProperties_Variant1Storage: PremiumMarketingComponentProperties_Variant1Storage$Type;
declare class PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties$Type extends MessageType<PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties> {
    constructor();
    create(value?: PartialMessage<PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties>): PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties): PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties;
    internalBinaryWrite(message: PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PremiumMarketingComponentProperties.AnnouncementModalVariant1Properties
 */
interface PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties {
    /**
     * @generated from protobuf field: string header = 1;
     */
    header: string;
    /**
     * @generated from protobuf field: string subheader = 2;
     */
    subheader: string;
    /**
     * @generated from protobuf field: string video_link = 3;
     */
    videoLink: string;
    /**
     * @generated from protobuf field: string help_article_id = 4;
     */
    helpArticleId: string;
    /**
     * @generated from protobuf field: repeated discord_protos.discord_users.v1.PremiumMarketingComponentProperties.FeatureCard feature_cards = 5;
     */
    featureCards: PremiumMarketingComponentProperties_FeatureCard[];
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PremiumMarketingComponentProperties.SubscriptionButton button = 6;
     */
    button?: PremiumMarketingComponentProperties_SubscriptionButton;
    /**
     * @generated from protobuf field: string dismiss_key = 7;
     */
    dismissKey: string;
    /**
     * @generated from protobuf field: string hero_art_video_link_light_theme = 8;
     */
    heroArtVideoLinkLightTheme: string;
    /**
     * @generated from protobuf field: string hero_art_image_link_dark_theme = 9;
     */
    heroArtImageLinkDarkTheme: string;
    /**
     * @generated from protobuf field: string hero_art_image_link_light_theme = 10;
     */
    heroArtImageLinkLightTheme: string;
    /**
     * @generated from protobuf field: string modal_top_pill = 11;
     */
    modalTopPill: string;
    /**
     * @generated from protobuf field: string body = 12;
     */
    body: string;
    /**
     * @generated from protobuf field: repeated discord_protos.discord_users.v1.PremiumMarketingComponentProperties.Subtitle hero_art_video_subtitles = 13;
     */
    heroArtVideoSubtitles: PremiumMarketingComponentProperties_Subtitle[];
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PremiumMarketingComponentProperties.Variant1Storage storage = 14;
     */
    storage?: PremiumMarketingComponentProperties_Variant1Storage;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PremiumMarketingComponentProperties.AnnouncementModalVariant1Properties
 */
declare const PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties: PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties$Type;

/**
 * @generated from protobuf enum discord_protos.discord_users.v1.FrecencyUserSettings.GIFType
 */
declare enum FrecencyUserSettings_GIFType {
    /**
     * @generated from protobuf enum value: GIFTYPE_NONE = 0;
     */
    GIFTYPE_NONE = 0,
    /**
     * @generated from protobuf enum value: GIFTYPE_IMAGE = 1;
     */
    GIFTYPE_IMAGE = 1,
    /**
     * @generated from protobuf enum value: GIFTYPE_VIDEO = 2;
     */
    GIFTYPE_VIDEO = 2
}
declare class FrecencyUserSettings$Type extends MessageType<FrecencyUserSettings> {
    constructor();
    create(value?: PartialMessage<FrecencyUserSettings>): FrecencyUserSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FrecencyUserSettings): FrecencyUserSettings;
    internalBinaryWrite(message: FrecencyUserSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.FrecencyUserSettings
 */
interface FrecencyUserSettings {
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.FrecencyUserSettings.Versions versions = 1;
     */
    versions?: FrecencyUserSettings_Versions;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteGIFs favorite_gifs = 2;
     */
    favoriteGifs?: FrecencyUserSettings_FavoriteGIFs;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteStickers favorite_stickers = 3;
     */
    favoriteStickers?: FrecencyUserSettings_FavoriteStickers;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.FrecencyUserSettings.StickerFrecency sticker_frecency = 4;
     */
    stickerFrecency?: FrecencyUserSettings_StickerFrecency;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteEmojis favorite_emojis = 5;
     */
    favoriteEmojis?: FrecencyUserSettings_FavoriteEmojis;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.FrecencyUserSettings.EmojiFrecency emoji_frecency = 6;
     */
    emojiFrecency?: FrecencyUserSettings_EmojiFrecency;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.FrecencyUserSettings.ApplicationCommandFrecency application_command_frecency = 7;
     */
    applicationCommandFrecency?: FrecencyUserSettings_ApplicationCommandFrecency;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteSoundboardSounds favorite_soundboard_sounds = 8;
     */
    favoriteSoundboardSounds?: FrecencyUserSettings_FavoriteSoundboardSounds;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.FrecencyUserSettings.ApplicationFrecency application_frecency = 9;
     */
    applicationFrecency?: FrecencyUserSettings_ApplicationFrecency;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.FrecencyUserSettings.HeardSoundFrecency heard_sound_frecency = 10;
     */
    heardSoundFrecency?: FrecencyUserSettings_HeardSoundFrecency;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.FrecencyUserSettings.PlayedSoundFrecency played_sound_frecency = 11;
     */
    playedSoundFrecency?: FrecencyUserSettings_PlayedSoundFrecency;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.FrecencyUserSettings.GuildAndChannelFrecency guild_and_channel_frecency = 12;
     */
    guildAndChannelFrecency?: FrecencyUserSettings_GuildAndChannelFrecency;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.FrecencyUserSettings.EmojiFrecency emoji_reaction_frecency = 13;
     */
    emojiReactionFrecency?: FrecencyUserSettings_EmojiFrecency;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.FrecencyUserSettings
 */
declare const FrecencyUserSettings: FrecencyUserSettings$Type;
declare class FrecencyUserSettings_Versions$Type extends MessageType<FrecencyUserSettings_Versions> {
    constructor();
    create(value?: PartialMessage<FrecencyUserSettings_Versions>): FrecencyUserSettings_Versions;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FrecencyUserSettings_Versions): FrecencyUserSettings_Versions;
    internalBinaryWrite(message: FrecencyUserSettings_Versions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.Versions
 */
interface FrecencyUserSettings_Versions {
    /**
     * @generated from protobuf field: uint32 client_version = 1;
     */
    clientVersion: number;
    /**
     * @generated from protobuf field: uint32 server_version = 2;
     */
    serverVersion: number;
    /**
     * @generated from protobuf field: uint32 data_version = 3;
     */
    dataVersion: number;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.Versions
 */
declare const FrecencyUserSettings_Versions: FrecencyUserSettings_Versions$Type;
declare class FrecencyUserSettings_FavoriteGIF$Type extends MessageType<FrecencyUserSettings_FavoriteGIF> {
    constructor();
    create(value?: PartialMessage<FrecencyUserSettings_FavoriteGIF>): FrecencyUserSettings_FavoriteGIF;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FrecencyUserSettings_FavoriteGIF): FrecencyUserSettings_FavoriteGIF;
    internalBinaryWrite(message: FrecencyUserSettings_FavoriteGIF, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteGIF
 */
interface FrecencyUserSettings_FavoriteGIF {
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.FrecencyUserSettings.GIFType format = 1;
     */
    format: FrecencyUserSettings_GIFType;
    /**
     * @generated from protobuf field: string src = 2;
     */
    src: string;
    /**
     * @generated from protobuf field: uint32 width = 3;
     */
    width: number;
    /**
     * @generated from protobuf field: uint32 height = 4;
     */
    height: number;
    /**
     * @generated from protobuf field: uint32 order = 5;
     */
    order: number;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteGIF
 */
declare const FrecencyUserSettings_FavoriteGIF: FrecencyUserSettings_FavoriteGIF$Type;
declare class FrecencyUserSettings_FavoriteGIFs$Type extends MessageType<FrecencyUserSettings_FavoriteGIFs> {
    constructor();
    create(value?: PartialMessage<FrecencyUserSettings_FavoriteGIFs>): FrecencyUserSettings_FavoriteGIFs;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FrecencyUserSettings_FavoriteGIFs): FrecencyUserSettings_FavoriteGIFs;
    private binaryReadMap1;
    internalBinaryWrite(message: FrecencyUserSettings_FavoriteGIFs, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteGIFs
 */
interface FrecencyUserSettings_FavoriteGIFs {
    /**
     * @generated from protobuf field: map<string, discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteGIF> gifs = 1;
     */
    gifs: {
        [key: string]: FrecencyUserSettings_FavoriteGIF;
    };
    /**
     * @generated from protobuf field: bool hide_tooltip = 2;
     */
    hideTooltip: boolean;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteGIFs
 */
declare const FrecencyUserSettings_FavoriteGIFs: FrecencyUserSettings_FavoriteGIFs$Type;
declare class FrecencyUserSettings_FavoriteStickers$Type extends MessageType<FrecencyUserSettings_FavoriteStickers> {
    constructor();
    create(value?: PartialMessage<FrecencyUserSettings_FavoriteStickers>): FrecencyUserSettings_FavoriteStickers;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FrecencyUserSettings_FavoriteStickers): FrecencyUserSettings_FavoriteStickers;
    internalBinaryWrite(message: FrecencyUserSettings_FavoriteStickers, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteStickers
 */
interface FrecencyUserSettings_FavoriteStickers {
    /**
     * @generated from protobuf field: repeated fixed64 sticker_ids = 1;
     */
    stickerIds: bigint[];
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteStickers
 */
declare const FrecencyUserSettings_FavoriteStickers: FrecencyUserSettings_FavoriteStickers$Type;
declare class FrecencyUserSettings_FrecencyItem$Type extends MessageType<FrecencyUserSettings_FrecencyItem> {
    constructor();
    create(value?: PartialMessage<FrecencyUserSettings_FrecencyItem>): FrecencyUserSettings_FrecencyItem;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FrecencyUserSettings_FrecencyItem): FrecencyUserSettings_FrecencyItem;
    internalBinaryWrite(message: FrecencyUserSettings_FrecencyItem, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyItem
 */
interface FrecencyUserSettings_FrecencyItem {
    /**
     * @generated from protobuf field: uint32 total_uses = 1;
     */
    totalUses: number;
    /**
     * @generated from protobuf field: repeated uint64 recent_uses = 2;
     */
    recentUses: bigint[];
    /**
     * @generated from protobuf field: int32 frecency = 3;
     */
    frecency: number;
    /**
     * @generated from protobuf field: int32 score = 4;
     */
    score: number;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyItem
 */
declare const FrecencyUserSettings_FrecencyItem: FrecencyUserSettings_FrecencyItem$Type;
declare class FrecencyUserSettings_StickerFrecency$Type extends MessageType<FrecencyUserSettings_StickerFrecency> {
    constructor();
    create(value?: PartialMessage<FrecencyUserSettings_StickerFrecency>): FrecencyUserSettings_StickerFrecency;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FrecencyUserSettings_StickerFrecency): FrecencyUserSettings_StickerFrecency;
    private binaryReadMap1;
    internalBinaryWrite(message: FrecencyUserSettings_StickerFrecency, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.StickerFrecency
 */
interface FrecencyUserSettings_StickerFrecency {
    /**
     * @generated from protobuf field: map<fixed64, discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyItem> stickers = 1;
     */
    stickers: {
        [key: string]: FrecencyUserSettings_FrecencyItem;
    };
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.StickerFrecency
 */
declare const FrecencyUserSettings_StickerFrecency: FrecencyUserSettings_StickerFrecency$Type;
declare class FrecencyUserSettings_FavoriteEmojis$Type extends MessageType<FrecencyUserSettings_FavoriteEmojis> {
    constructor();
    create(value?: PartialMessage<FrecencyUserSettings_FavoriteEmojis>): FrecencyUserSettings_FavoriteEmojis;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FrecencyUserSettings_FavoriteEmojis): FrecencyUserSettings_FavoriteEmojis;
    internalBinaryWrite(message: FrecencyUserSettings_FavoriteEmojis, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteEmojis
 */
interface FrecencyUserSettings_FavoriteEmojis {
    /**
     * @generated from protobuf field: repeated string emojis = 1;
     */
    emojis: string[];
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteEmojis
 */
declare const FrecencyUserSettings_FavoriteEmojis: FrecencyUserSettings_FavoriteEmojis$Type;
declare class FrecencyUserSettings_EmojiFrecency$Type extends MessageType<FrecencyUserSettings_EmojiFrecency> {
    constructor();
    create(value?: PartialMessage<FrecencyUserSettings_EmojiFrecency>): FrecencyUserSettings_EmojiFrecency;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FrecencyUserSettings_EmojiFrecency): FrecencyUserSettings_EmojiFrecency;
    private binaryReadMap1;
    internalBinaryWrite(message: FrecencyUserSettings_EmojiFrecency, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.EmojiFrecency
 */
interface FrecencyUserSettings_EmojiFrecency {
    /**
     * @generated from protobuf field: map<string, discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyItem> emojis = 1;
     */
    emojis: {
        [key: string]: FrecencyUserSettings_FrecencyItem;
    };
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.EmojiFrecency
 */
declare const FrecencyUserSettings_EmojiFrecency: FrecencyUserSettings_EmojiFrecency$Type;
declare class FrecencyUserSettings_ApplicationCommandFrecency$Type extends MessageType<FrecencyUserSettings_ApplicationCommandFrecency> {
    constructor();
    create(value?: PartialMessage<FrecencyUserSettings_ApplicationCommandFrecency>): FrecencyUserSettings_ApplicationCommandFrecency;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FrecencyUserSettings_ApplicationCommandFrecency): FrecencyUserSettings_ApplicationCommandFrecency;
    private binaryReadMap1;
    internalBinaryWrite(message: FrecencyUserSettings_ApplicationCommandFrecency, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.ApplicationCommandFrecency
 */
interface FrecencyUserSettings_ApplicationCommandFrecency {
    /**
     * @generated from protobuf field: map<string, discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyItem> application_commands = 1;
     */
    applicationCommands: {
        [key: string]: FrecencyUserSettings_FrecencyItem;
    };
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.ApplicationCommandFrecency
 */
declare const FrecencyUserSettings_ApplicationCommandFrecency: FrecencyUserSettings_ApplicationCommandFrecency$Type;
declare class FrecencyUserSettings_FavoriteSoundboardSounds$Type extends MessageType<FrecencyUserSettings_FavoriteSoundboardSounds> {
    constructor();
    create(value?: PartialMessage<FrecencyUserSettings_FavoriteSoundboardSounds>): FrecencyUserSettings_FavoriteSoundboardSounds;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FrecencyUserSettings_FavoriteSoundboardSounds): FrecencyUserSettings_FavoriteSoundboardSounds;
    internalBinaryWrite(message: FrecencyUserSettings_FavoriteSoundboardSounds, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteSoundboardSounds
 */
interface FrecencyUserSettings_FavoriteSoundboardSounds {
    /**
     * @generated from protobuf field: repeated fixed64 sound_ids = 1;
     */
    soundIds: bigint[];
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteSoundboardSounds
 */
declare const FrecencyUserSettings_FavoriteSoundboardSounds: FrecencyUserSettings_FavoriteSoundboardSounds$Type;
declare class FrecencyUserSettings_ApplicationFrecency$Type extends MessageType<FrecencyUserSettings_ApplicationFrecency> {
    constructor();
    create(value?: PartialMessage<FrecencyUserSettings_ApplicationFrecency>): FrecencyUserSettings_ApplicationFrecency;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FrecencyUserSettings_ApplicationFrecency): FrecencyUserSettings_ApplicationFrecency;
    private binaryReadMap1;
    internalBinaryWrite(message: FrecencyUserSettings_ApplicationFrecency, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.ApplicationFrecency
 */
interface FrecencyUserSettings_ApplicationFrecency {
    /**
     * @generated from protobuf field: map<string, discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyItem> applications = 1;
     */
    applications: {
        [key: string]: FrecencyUserSettings_FrecencyItem;
    };
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.ApplicationFrecency
 */
declare const FrecencyUserSettings_ApplicationFrecency: FrecencyUserSettings_ApplicationFrecency$Type;
declare class FrecencyUserSettings_HeardSoundFrecency$Type extends MessageType<FrecencyUserSettings_HeardSoundFrecency> {
    constructor();
    create(value?: PartialMessage<FrecencyUserSettings_HeardSoundFrecency>): FrecencyUserSettings_HeardSoundFrecency;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FrecencyUserSettings_HeardSoundFrecency): FrecencyUserSettings_HeardSoundFrecency;
    private binaryReadMap1;
    internalBinaryWrite(message: FrecencyUserSettings_HeardSoundFrecency, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.HeardSoundFrecency
 */
interface FrecencyUserSettings_HeardSoundFrecency {
    /**
     * @generated from protobuf field: map<string, discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyItem> heard_sounds = 1;
     */
    heardSounds: {
        [key: string]: FrecencyUserSettings_FrecencyItem;
    };
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.HeardSoundFrecency
 */
declare const FrecencyUserSettings_HeardSoundFrecency: FrecencyUserSettings_HeardSoundFrecency$Type;
declare class FrecencyUserSettings_PlayedSoundFrecency$Type extends MessageType<FrecencyUserSettings_PlayedSoundFrecency> {
    constructor();
    create(value?: PartialMessage<FrecencyUserSettings_PlayedSoundFrecency>): FrecencyUserSettings_PlayedSoundFrecency;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FrecencyUserSettings_PlayedSoundFrecency): FrecencyUserSettings_PlayedSoundFrecency;
    private binaryReadMap1;
    internalBinaryWrite(message: FrecencyUserSettings_PlayedSoundFrecency, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.PlayedSoundFrecency
 */
interface FrecencyUserSettings_PlayedSoundFrecency {
    /**
     * @generated from protobuf field: map<string, discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyItem> played_sounds = 1;
     */
    playedSounds: {
        [key: string]: FrecencyUserSettings_FrecencyItem;
    };
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.PlayedSoundFrecency
 */
declare const FrecencyUserSettings_PlayedSoundFrecency: FrecencyUserSettings_PlayedSoundFrecency$Type;
declare class FrecencyUserSettings_GuildAndChannelFrecency$Type extends MessageType<FrecencyUserSettings_GuildAndChannelFrecency> {
    constructor();
    create(value?: PartialMessage<FrecencyUserSettings_GuildAndChannelFrecency>): FrecencyUserSettings_GuildAndChannelFrecency;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FrecencyUserSettings_GuildAndChannelFrecency): FrecencyUserSettings_GuildAndChannelFrecency;
    private binaryReadMap1;
    internalBinaryWrite(message: FrecencyUserSettings_GuildAndChannelFrecency, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.GuildAndChannelFrecency
 */
interface FrecencyUserSettings_GuildAndChannelFrecency {
    /**
     * @generated from protobuf field: map<fixed64, discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyItem> guild_and_channels = 1;
     */
    guildAndChannels: {
        [key: string]: FrecencyUserSettings_FrecencyItem;
    };
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.FrecencyUserSettings.GuildAndChannelFrecency
 */
declare const FrecencyUserSettings_GuildAndChannelFrecency: FrecencyUserSettings_GuildAndChannelFrecency$Type;

declare class FloatValue$Type extends MessageType<FloatValue> {
    constructor();
    /**
     * Encode `FloatValue` to JSON number.
     */
    internalJsonWrite(message: FloatValue, options: JsonWriteOptions): JsonValue;
    /**
     * Decode `FloatValue` from JSON number.
     */
    internalJsonRead(json: JsonValue, options: JsonReadOptions, target?: FloatValue): FloatValue;
    create(value?: PartialMessage<FloatValue>): FloatValue;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FloatValue): FloatValue;
    internalBinaryWrite(message: FloatValue, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * Wrapper message for `float`.
 *
 * The JSON representation for `FloatValue` is JSON number.
 *
 * @generated from protobuf message google.protobuf.FloatValue
 */
interface FloatValue {
    /**
     * The float value.
     *
     * @generated from protobuf field: float value = 1;
     */
    value: number;
}
/**
 * @generated MessageType for protobuf message google.protobuf.FloatValue
 */
declare const FloatValue: FloatValue$Type;
declare class Int64Value$Type extends MessageType<Int64Value> {
    constructor();
    /**
     * Encode `Int64Value` to JSON string.
     */
    internalJsonWrite(message: Int64Value, options: JsonWriteOptions): JsonValue;
    /**
     * Decode `Int64Value` from JSON string.
     */
    internalJsonRead(json: JsonValue, options: JsonReadOptions, target?: Int64Value): Int64Value;
    create(value?: PartialMessage<Int64Value>): Int64Value;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Int64Value): Int64Value;
    internalBinaryWrite(message: Int64Value, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * Wrapper message for `int64`.
 *
 * The JSON representation for `Int64Value` is JSON string.
 *
 * @generated from protobuf message google.protobuf.Int64Value
 */
interface Int64Value {
    /**
     * The int64 value.
     *
     * @generated from protobuf field: int64 value = 1;
     */
    value: bigint;
}
/**
 * @generated MessageType for protobuf message google.protobuf.Int64Value
 */
declare const Int64Value: Int64Value$Type;
declare class UInt64Value$Type extends MessageType<UInt64Value> {
    constructor();
    /**
     * Encode `UInt64Value` to JSON string.
     */
    internalJsonWrite(message: UInt64Value, options: JsonWriteOptions): JsonValue;
    /**
     * Decode `UInt64Value` from JSON string.
     */
    internalJsonRead(json: JsonValue, options: JsonReadOptions, target?: UInt64Value): UInt64Value;
    create(value?: PartialMessage<UInt64Value>): UInt64Value;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UInt64Value): UInt64Value;
    internalBinaryWrite(message: UInt64Value, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * Wrapper message for `uint64`.
 *
 * The JSON representation for `UInt64Value` is JSON string.
 *
 * @generated from protobuf message google.protobuf.UInt64Value
 */
interface UInt64Value {
    /**
     * The uint64 value.
     *
     * @generated from protobuf field: uint64 value = 1;
     */
    value: bigint;
}
/**
 * @generated MessageType for protobuf message google.protobuf.UInt64Value
 */
declare const UInt64Value: UInt64Value$Type;
declare class Int32Value$Type extends MessageType<Int32Value> {
    constructor();
    /**
     * Encode `Int32Value` to JSON string.
     */
    internalJsonWrite(message: Int32Value, options: JsonWriteOptions): JsonValue;
    /**
     * Decode `Int32Value` from JSON string.
     */
    internalJsonRead(json: JsonValue, options: JsonReadOptions, target?: Int32Value): Int32Value;
    create(value?: PartialMessage<Int32Value>): Int32Value;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Int32Value): Int32Value;
    internalBinaryWrite(message: Int32Value, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * Wrapper message for `int32`.
 *
 * The JSON representation for `Int32Value` is JSON number.
 *
 * @generated from protobuf message google.protobuf.Int32Value
 */
interface Int32Value {
    /**
     * The int32 value.
     *
     * @generated from protobuf field: int32 value = 1;
     */
    value: number;
}
/**
 * @generated MessageType for protobuf message google.protobuf.Int32Value
 */
declare const Int32Value: Int32Value$Type;
declare class UInt32Value$Type extends MessageType<UInt32Value> {
    constructor();
    /**
     * Encode `UInt32Value` to JSON string.
     */
    internalJsonWrite(message: UInt32Value, options: JsonWriteOptions): JsonValue;
    /**
     * Decode `UInt32Value` from JSON string.
     */
    internalJsonRead(json: JsonValue, options: JsonReadOptions, target?: UInt32Value): UInt32Value;
    create(value?: PartialMessage<UInt32Value>): UInt32Value;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UInt32Value): UInt32Value;
    internalBinaryWrite(message: UInt32Value, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * Wrapper message for `uint32`.
 *
 * The JSON representation for `UInt32Value` is JSON number.
 *
 * @generated from protobuf message google.protobuf.UInt32Value
 */
interface UInt32Value {
    /**
     * The uint32 value.
     *
     * @generated from protobuf field: uint32 value = 1;
     */
    value: number;
}
/**
 * @generated MessageType for protobuf message google.protobuf.UInt32Value
 */
declare const UInt32Value: UInt32Value$Type;
declare class BoolValue$Type extends MessageType<BoolValue> {
    constructor();
    /**
     * Encode `BoolValue` to JSON bool.
     */
    internalJsonWrite(message: BoolValue, options: JsonWriteOptions): JsonValue;
    /**
     * Decode `BoolValue` from JSON bool.
     */
    internalJsonRead(json: JsonValue, options: JsonReadOptions, target?: BoolValue): BoolValue;
    create(value?: PartialMessage<BoolValue>): BoolValue;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BoolValue): BoolValue;
    internalBinaryWrite(message: BoolValue, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * Wrapper message for `bool`.
 *
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 *
 * @generated from protobuf message google.protobuf.BoolValue
 */
interface BoolValue {
    /**
     * The bool value.
     *
     * @generated from protobuf field: bool value = 1;
     */
    value: boolean;
}
/**
 * @generated MessageType for protobuf message google.protobuf.BoolValue
 */
declare const BoolValue: BoolValue$Type;
declare class StringValue$Type extends MessageType<StringValue> {
    constructor();
    /**
     * Encode `StringValue` to JSON string.
     */
    internalJsonWrite(message: StringValue, options: JsonWriteOptions): JsonValue;
    /**
     * Decode `StringValue` from JSON string.
     */
    internalJsonRead(json: JsonValue, options: JsonReadOptions, target?: StringValue): StringValue;
    create(value?: PartialMessage<StringValue>): StringValue;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StringValue): StringValue;
    internalBinaryWrite(message: StringValue, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * Wrapper message for `string`.
 *
 * The JSON representation for `StringValue` is JSON string.
 *
 * @generated from protobuf message google.protobuf.StringValue
 */
interface StringValue {
    /**
     * The string value.
     *
     * @generated from protobuf field: string value = 1;
     */
    value: string;
}
/**
 * @generated MessageType for protobuf message google.protobuf.StringValue
 */
declare const StringValue: StringValue$Type;

declare class Timestamp$Type extends MessageType<Timestamp> {
    constructor();
    /**
     * Creates a new `Timestamp` for the current time.
     */
    now(): Timestamp;
    /**
     * Converts a `Timestamp` to a JavaScript Date.
     */
    toDate(message: Timestamp): Date;
    /**
     * Converts a JavaScript Date to a `Timestamp`.
     */
    fromDate(date: Date): Timestamp;
    /**
     * In JSON format, the `Timestamp` type is encoded as a string
     * in the RFC 3339 format.
     */
    internalJsonWrite(message: Timestamp, options: JsonWriteOptions): JsonValue;
    /**
     * In JSON format, the `Timestamp` type is encoded as a string
     * in the RFC 3339 format.
     */
    internalJsonRead(json: JsonValue, options: JsonReadOptions, target?: Timestamp): Timestamp;
    create(value?: PartialMessage<Timestamp>): Timestamp;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Timestamp): Timestamp;
    internalBinaryWrite(message: Timestamp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * A Timestamp represents a point in time independent of any time zone or local
 * calendar, encoded as a count of seconds and fractions of seconds at
 * nanosecond resolution. The count is relative to an epoch at UTC midnight on
 * January 1, 1970, in the proleptic Gregorian calendar which extends the
 * Gregorian calendar backwards to year one.
 *
 * All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap
 * second table is needed for interpretation, using a [24-hour linear
 * smear](https://developers.google.com/time/smear).
 *
 * The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By
 * restricting to that range, we ensure that we can convert to and from [RFC
 * 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
 *
 * # Examples
 *
 * Example 1: Compute Timestamp from POSIX `time()`.
 *
 *     Timestamp timestamp;
 *     timestamp.set_seconds(time(NULL));
 *     timestamp.set_nanos(0);
 *
 * Example 2: Compute Timestamp from POSIX `gettimeofday()`.
 *
 *     struct timeval tv;
 *     gettimeofday(&tv, NULL);
 *
 *     Timestamp timestamp;
 *     timestamp.set_seconds(tv.tv_sec);
 *     timestamp.set_nanos(tv.tv_usec * 1000);
 *
 * Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.
 *
 *     FILETIME ft;
 *     GetSystemTimeAsFileTime(&ft);
 *     UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) | ft.dwLowDateTime;
 *
 *     // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z
 *     // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.
 *     Timestamp timestamp;
 *     timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
 *     timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));
 *
 * Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.
 *
 *     long millis = System.currentTimeMillis();
 *
 *     Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)
 *         .setNanos((int) ((millis % 1000) * 1000000)).build();
 *
 * Example 5: Compute Timestamp from Java `Instant.now()`.
 *
 *     Instant now = Instant.now();
 *
 *     Timestamp timestamp =
 *         Timestamp.newBuilder().setSeconds(now.getEpochSecond())
 *             .setNanos(now.getNano()).build();
 *
 * Example 6: Compute Timestamp from current time in Python.
 *
 *     timestamp = Timestamp()
 *     timestamp.GetCurrentTime()
 *
 * # JSON Mapping
 *
 * In JSON format, the Timestamp type is encoded as a string in the
 * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the
 * format is "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z"
 * where {year} is always expressed using four digits while {month}, {day},
 * {hour}, {min}, and {sec} are zero-padded to two digits each. The fractional
 * seconds, which can go up to 9 digits (i.e. up to 1 nanosecond resolution),
 * are optional. The "Z" suffix indicates the timezone ("UTC"); the timezone
 * is required. A proto3 JSON serializer should always use UTC (as indicated by
 * "Z") when printing the Timestamp type and a proto3 JSON parser should be
 * able to accept both UTC and other timezones (as indicated by an offset).
 *
 * For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past
 * 01:30 UTC on January 15, 2017.
 *
 * In JavaScript, one can convert a Date object to this format using the
 * standard
 * [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
 * method. In Python, a standard `datetime.datetime` object can be converted
 * to this format using
 * [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with
 * the time format spec '%Y-%m-%dT%H:%M:%S.%fZ'. Likewise, in Java, one can use
 * the Joda Time's [`ISODateTimeFormat.dateTime()`](
 * http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime()
 * ) to obtain a formatter capable of generating timestamps in this format.
 *
 *
 * @generated from protobuf message google.protobuf.Timestamp
 */
interface Timestamp {
    /**
     * Represents seconds of UTC time since Unix epoch
     * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     * 9999-12-31T23:59:59Z inclusive.
     *
     * @generated from protobuf field: int64 seconds = 1;
     */
    seconds: bigint;
    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative
     * second values with fractions must still have non-negative nanos values
     * that count forward in time. Must be from 0 to 999,999,999
     * inclusive.
     *
     * @generated from protobuf field: int32 nanos = 2;
     */
    nanos: number;
}
/**
 * @generated MessageType for protobuf message google.protobuf.Timestamp
 */
declare const Timestamp: Timestamp$Type;

/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.InboxTab
 */
declare enum PreloadedUserSettings_InboxTab {
    /**
     * @generated from protobuf enum value: INBOX_TAB_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: INBOX_TAB_MENTIONS = 1;
     */
    MENTIONS = 1,
    /**
     * @generated from protobuf enum value: INBOX_TAB_UNREADS = 2;
     */
    UNREADS = 2,
    /**
     * @generated from protobuf enum value: INBOX_TAB_TODOS = 3;
     */
    TODOS = 3,
    /**
     * @generated from protobuf enum value: INBOX_TAB_FOR_YOU = 4;
     */
    FOR_YOU = 4,
    /**
     * @generated from protobuf enum value: INBOX_TAB_GAME_INVITES = 5;
     */
    GAME_INVITES = 5,
    /**
     * @generated from protobuf enum value: INBOX_TAB_BOOKMARKS = 6;
     */
    BOOKMARKS = 6
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.DmSpamFilterV2
 */
declare enum PreloadedUserSettings_DmSpamFilterV2 {
    /**
     * @generated from protobuf enum value: DM_SPAM_FILTER_V2_DEFAULT_UNSET = 0;
     */
    DEFAULT_UNSET = 0,
    /**
     * @generated from protobuf enum value: DM_SPAM_FILTER_V2_DISABLED = 1;
     */
    DISABLED = 1,
    /**
     * @generated from protobuf enum value: DM_SPAM_FILTER_V2_NON_FRIENDS = 2;
     */
    NON_FRIENDS = 2,
    /**
     * @generated from protobuf enum value: DM_SPAM_FILTER_V2_FRIENDS_AND_NON_FRIENDS = 3;
     */
    FRIENDS_AND_NON_FRIENDS = 3
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction
 */
declare enum PreloadedUserSettings_ExplicitContentRedaction {
    /**
     * @generated from protobuf enum value: EXPLICIT_CONTENT_REDACTION_UNSET_EXPLICIT_CONTENT_REDACTION = 0;
     */
    UNSET_EXPLICIT_CONTENT_REDACTION = 0,
    /**
     * @generated from protobuf enum value: EXPLICIT_CONTENT_REDACTION_SHOW = 1;
     */
    SHOW = 1,
    /**
     * @generated from protobuf enum value: EXPLICIT_CONTENT_REDACTION_BLUR = 2;
     */
    BLUR = 2,
    /**
     * @generated from protobuf enum value: EXPLICIT_CONTENT_REDACTION_BLOCK = 3;
     */
    BLOCK = 3
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.ReactionNotificationType
 */
declare enum PreloadedUserSettings_ReactionNotificationType {
    /**
     * @generated from protobuf enum value: REACTION_NOTIFICATION_TYPE_NOTIFICATIONS_ENABLED = 0;
     */
    NOTIFICATIONS_ENABLED = 0,
    /**
     * @generated from protobuf enum value: REACTION_NOTIFICATION_TYPE_ONLY_DMS = 1;
     */
    ONLY_DMS = 1,
    /**
     * @generated from protobuf enum value: REACTION_NOTIFICATION_TYPE_NOTIFICATIONS_DISABLED = 2;
     */
    NOTIFICATIONS_DISABLED = 2
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.GuildActivityStatusRestrictionDefault
 */
declare enum PreloadedUserSettings_GuildActivityStatusRestrictionDefault {
    /**
     * @generated from protobuf enum value: GUILD_ACTIVITY_STATUS_RESTRICTION_DEFAULT_OFF = 0;
     */
    OFF = 0,
    /**
     * @generated from protobuf enum value: GUILD_ACTIVITY_STATUS_RESTRICTION_DEFAULT_ON_FOR_LARGE_GUILDS = 1;
     */
    ON_FOR_LARGE_GUILDS = 1
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.GuildsLeaderboardOptOutDefault
 */
declare enum PreloadedUserSettings_GuildsLeaderboardOptOutDefault {
    /**
     * @generated from protobuf enum value: GUILDS_LEADERBOARD_OPT_OUT_DEFAULT_OFF_FOR_NEW_GUILDS = 0;
     */
    OFF_FOR_NEW_GUILDS = 0,
    /**
     * @generated from protobuf enum value: GUILDS_LEADERBOARD_OPT_OUT_DEFAULT_ON_FOR_NEW_GUILDS = 1;
     */
    ON_FOR_NEW_GUILDS = 1
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.Theme
 */
declare enum PreloadedUserSettings_Theme {
    /**
     * @generated from protobuf enum value: THEME_UNSET = 0;
     */
    UNSET = 0,
    /**
     * @generated from protobuf enum value: THEME_DARK = 1;
     */
    DARK = 1,
    /**
     * @generated from protobuf enum value: THEME_LIGHT = 2;
     */
    LIGHT = 2,
    /**
     * @generated from protobuf enum value: THEME_DARKER = 3;
     */
    DARKER = 3,
    /**
     * @generated from protobuf enum value: THEME_MIDNIGHT = 4;
     */
    MIDNIGHT = 4
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.TimestampHourCycle
 */
declare enum PreloadedUserSettings_TimestampHourCycle {
    /**
     * @generated from protobuf enum value: TIMESTAMP_HOUR_CYCLE_AUTO = 0;
     */
    AUTO = 0,
    /**
     * @generated from protobuf enum value: TIMESTAMP_HOUR_CYCLE_H12 = 1;
     */
    H12 = 1,
    /**
     * @generated from protobuf enum value: TIMESTAMP_HOUR_CYCLE_H23 = 2;
     */
    H23 = 2
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.LaunchPadMode
 */
declare enum PreloadedUserSettings_LaunchPadMode {
    /**
     * @generated from protobuf enum value: LAUNCH_PAD_MODE_LAUNCH_PAD_DISABLED = 0;
     */
    LAUNCH_PAD_DISABLED = 0,
    /**
     * @generated from protobuf enum value: LAUNCH_PAD_MODE_LAUNCH_PAD_GESTURE_FULL_SCREEN = 1;
     */
    LAUNCH_PAD_GESTURE_FULL_SCREEN = 1,
    /**
     * @generated from protobuf enum value: LAUNCH_PAD_MODE_LAUNCH_PAD_GESTURE_RIGHT_EDGE = 2;
     */
    LAUNCH_PAD_GESTURE_RIGHT_EDGE = 2,
    /**
     * @generated from protobuf enum value: LAUNCH_PAD_MODE_LAUNCH_PAD_PULL_TAB = 3;
     */
    LAUNCH_PAD_PULL_TAB = 3
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.FavoriteChannelType
 */
declare enum PreloadedUserSettings_FavoriteChannelType {
    /**
     * @generated from protobuf enum value: FAVORITE_CHANNEL_TYPE_UNSET_FAVORITE_CHANNEL_TYPE = 0;
     */
    UNSET_FAVORITE_CHANNEL_TYPE = 0,
    /**
     * @generated from protobuf enum value: FAVORITE_CHANNEL_TYPE_REFERENCE_ORIGINAL = 1;
     */
    REFERENCE_ORIGINAL = 1,
    /**
     * @generated from protobuf enum value: FAVORITE_CHANNEL_TYPE_CATEGORY = 2;
     */
    CATEGORY = 2
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.ForLaterTab
 */
declare enum PreloadedUserSettings_ForLaterTab {
    /**
     * @generated from protobuf enum value: FOR_LATER_TAB_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: FOR_LATER_TAB_ALL = 1;
     */
    ALL = 1,
    /**
     * @generated from protobuf enum value: FOR_LATER_TAB_BOOKMARKS = 2;
     */
    BOOKMARKS = 2,
    /**
     * @generated from protobuf enum value: FOR_LATER_TAB_REMINDERS = 3;
     */
    REMINDERS = 3
}
/**
 * @generated from protobuf enum discord_protos.discord_users.v1.PreloadedUserSettings.SafetySettingsPresetType
 */
declare enum PreloadedUserSettings_SafetySettingsPresetType {
    /**
     * @generated from protobuf enum value: SAFETY_SETTINGS_PRESET_TYPE_UNSET_SAFETY_SETTINGS_PRESET = 0;
     */
    UNSET_SAFETY_SETTINGS_PRESET = 0,
    /**
     * @generated from protobuf enum value: SAFETY_SETTINGS_PRESET_TYPE_BALANCED = 1;
     */
    BALANCED = 1,
    /**
     * @generated from protobuf enum value: SAFETY_SETTINGS_PRESET_TYPE_STRICT = 2;
     */
    STRICT = 2,
    /**
     * @generated from protobuf enum value: SAFETY_SETTINGS_PRESET_TYPE_RELAXED = 3;
     */
    RELAXED = 3,
    /**
     * @generated from protobuf enum value: SAFETY_SETTINGS_PRESET_TYPE_CUSTOM = 4;
     */
    CUSTOM = 4
}
declare class PreloadedUserSettings$Type extends MessageType<PreloadedUserSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings>): PreloadedUserSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings): PreloadedUserSettings;
    internalBinaryWrite(message: PreloadedUserSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings
 */
interface PreloadedUserSettings {
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.Versions versions = 1;
     */
    versions?: PreloadedUserSettings_Versions;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.InboxSettings inbox = 2;
     */
    inbox?: PreloadedUserSettings_InboxSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.AllGuildSettings guilds = 3;
     */
    guilds?: PreloadedUserSettings_AllGuildSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.UserContentSettings user_content = 4;
     */
    userContent?: PreloadedUserSettings_UserContentSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.VoiceAndVideoSettings voice_and_video = 5;
     */
    voiceAndVideo?: PreloadedUserSettings_VoiceAndVideoSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.TextAndImagesSettings text_and_images = 6;
     */
    textAndImages?: PreloadedUserSettings_TextAndImagesSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.NotificationSettings notifications = 7;
     */
    notifications?: PreloadedUserSettings_NotificationSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.PrivacySettings privacy = 8;
     */
    privacy?: PreloadedUserSettings_PrivacySettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.DebugSettings debug = 9;
     */
    debug?: PreloadedUserSettings_DebugSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.GameLibrarySettings game_library = 10;
     */
    gameLibrary?: PreloadedUserSettings_GameLibrarySettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.StatusSettings status = 11;
     */
    status?: PreloadedUserSettings_StatusSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.LocalizationSettings localization = 12;
     */
    localization?: PreloadedUserSettings_LocalizationSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.AppearanceSettings appearance = 13;
     */
    appearance?: PreloadedUserSettings_AppearanceSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.GuildFolders guild_folders = 14;
     */
    guildFolders?: PreloadedUserSettings_GuildFolders;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.Favorites favorites = 15;
     */
    favorites?: PreloadedUserSettings_Favorites;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.AudioSettings audio_context_settings = 16;
     */
    audioContextSettings?: PreloadedUserSettings_AudioSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.CommunitiesSettings communities = 17;
     */
    communities?: PreloadedUserSettings_CommunitiesSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.BroadcastSettings broadcast = 18;
     */
    broadcast?: PreloadedUserSettings_BroadcastSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.ClipsSettings clips = 19;
     */
    clips?: PreloadedUserSettings_ClipsSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.ForLaterSettings for_later = 20;
     */
    forLater?: PreloadedUserSettings_ForLaterSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.SafetySettings safety_settings = 21;
     */
    safetySettings?: PreloadedUserSettings_SafetySettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.ICYMISettings icymi_settings = 22;
     */
    icymiSettings?: PreloadedUserSettings_ICYMISettings;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings
 */
declare const PreloadedUserSettings: PreloadedUserSettings$Type;
declare class PreloadedUserSettings_Versions$Type extends MessageType<PreloadedUserSettings_Versions> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_Versions>): PreloadedUserSettings_Versions;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_Versions): PreloadedUserSettings_Versions;
    internalBinaryWrite(message: PreloadedUserSettings_Versions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.Versions
 */
interface PreloadedUserSettings_Versions {
    /**
     * @generated from protobuf field: uint32 client_version = 1;
     */
    clientVersion: number;
    /**
     * @generated from protobuf field: uint32 server_version = 2;
     */
    serverVersion: number;
    /**
     * @generated from protobuf field: uint32 data_version = 3;
     */
    dataVersion: number;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.Versions
 */
declare const PreloadedUserSettings_Versions: PreloadedUserSettings_Versions$Type;
declare class PreloadedUserSettings_InboxSettings$Type extends MessageType<PreloadedUserSettings_InboxSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_InboxSettings>): PreloadedUserSettings_InboxSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_InboxSettings): PreloadedUserSettings_InboxSettings;
    internalBinaryWrite(message: PreloadedUserSettings_InboxSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.InboxSettings
 */
interface PreloadedUserSettings_InboxSettings {
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.InboxTab current_tab = 1;
     */
    currentTab: PreloadedUserSettings_InboxTab;
    /**
     * @generated from protobuf field: bool viewed_tutorial = 2;
     */
    viewedTutorial: boolean;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.InboxSettings
 */
declare const PreloadedUserSettings_InboxSettings: PreloadedUserSettings_InboxSettings$Type;
declare class PreloadedUserSettings_ChannelIconEmoji$Type extends MessageType<PreloadedUserSettings_ChannelIconEmoji> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_ChannelIconEmoji>): PreloadedUserSettings_ChannelIconEmoji;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_ChannelIconEmoji): PreloadedUserSettings_ChannelIconEmoji;
    internalBinaryWrite(message: PreloadedUserSettings_ChannelIconEmoji, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ChannelIconEmoji
 */
interface PreloadedUserSettings_ChannelIconEmoji {
    /**
     * @generated from protobuf field: optional google.protobuf.UInt64Value id = 1;
     */
    id?: UInt64Value;
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue name = 2;
     */
    name?: StringValue;
    /**
     * @generated from protobuf field: optional google.protobuf.UInt64Value color = 3;
     */
    color?: UInt64Value;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ChannelIconEmoji
 */
declare const PreloadedUserSettings_ChannelIconEmoji: PreloadedUserSettings_ChannelIconEmoji$Type;
declare class PreloadedUserSettings_CustomNotificationSoundConfig$Type extends MessageType<PreloadedUserSettings_CustomNotificationSoundConfig> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_CustomNotificationSoundConfig>): PreloadedUserSettings_CustomNotificationSoundConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_CustomNotificationSoundConfig): PreloadedUserSettings_CustomNotificationSoundConfig;
    internalBinaryWrite(message: PreloadedUserSettings_CustomNotificationSoundConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.CustomNotificationSoundConfig
 */
interface PreloadedUserSettings_CustomNotificationSoundConfig {
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue notification_sound_pack_id = 1;
     */
    notificationSoundPackId?: StringValue;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.CustomNotificationSoundConfig
 */
declare const PreloadedUserSettings_CustomNotificationSoundConfig: PreloadedUserSettings_CustomNotificationSoundConfig$Type;
declare class PreloadedUserSettings_ChannelSettings$Type extends MessageType<PreloadedUserSettings_ChannelSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_ChannelSettings>): PreloadedUserSettings_ChannelSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_ChannelSettings): PreloadedUserSettings_ChannelSettings;
    internalBinaryWrite(message: PreloadedUserSettings_ChannelSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ChannelSettings
 */
interface PreloadedUserSettings_ChannelSettings {
    /**
     * @generated from protobuf field: bool collapsed_in_inbox = 1;
     */
    collapsedInInbox: boolean;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.ChannelIconEmoji icon_emoji = 2;
     */
    iconEmoji?: PreloadedUserSettings_ChannelIconEmoji;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.CustomNotificationSoundConfig custom_notification_sound_config = 3;
     */
    customNotificationSoundConfig?: PreloadedUserSettings_CustomNotificationSoundConfig;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ChannelSettings
 */
declare const PreloadedUserSettings_ChannelSettings: PreloadedUserSettings_ChannelSettings$Type;
declare class PreloadedUserSettings_CustomCallSound$Type extends MessageType<PreloadedUserSettings_CustomCallSound> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_CustomCallSound>): PreloadedUserSettings_CustomCallSound;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_CustomCallSound): PreloadedUserSettings_CustomCallSound;
    internalBinaryWrite(message: PreloadedUserSettings_CustomCallSound, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.CustomCallSound
 */
interface PreloadedUserSettings_CustomCallSound {
    /**
     * @generated from protobuf field: fixed64 sound_id = 1;
     */
    soundId: bigint;
    /**
     * @generated from protobuf field: fixed64 guild_id = 2;
     */
    guildId: bigint;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.CustomCallSound
 */
declare const PreloadedUserSettings_CustomCallSound: PreloadedUserSettings_CustomCallSound$Type;
declare class PreloadedUserSettings_ChannelListSettings$Type extends MessageType<PreloadedUserSettings_ChannelListSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_ChannelListSettings>): PreloadedUserSettings_ChannelListSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_ChannelListSettings): PreloadedUserSettings_ChannelListSettings;
    internalBinaryWrite(message: PreloadedUserSettings_ChannelListSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ChannelListSettings
 */
interface PreloadedUserSettings_ChannelListSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue layout = 1;
     */
    layout?: StringValue;
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue message_previews = 2;
     */
    messagePreviews?: StringValue;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ChannelListSettings
 */
declare const PreloadedUserSettings_ChannelListSettings: PreloadedUserSettings_ChannelListSettings$Type;
declare class PreloadedUserSettings_GuildSettings$Type extends MessageType<PreloadedUserSettings_GuildSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_GuildSettings>): PreloadedUserSettings_GuildSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_GuildSettings): PreloadedUserSettings_GuildSettings;
    private binaryReadMap1;
    internalBinaryWrite(message: PreloadedUserSettings_GuildSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.GuildSettings
 */
interface PreloadedUserSettings_GuildSettings {
    /**
     * @generated from protobuf field: map<fixed64, discord_protos.discord_users.v1.PreloadedUserSettings.ChannelSettings> channels = 1;
     */
    channels: {
        [key: string]: PreloadedUserSettings_ChannelSettings;
    };
    /**
     * @generated from protobuf field: uint32 hub_progress = 2;
     */
    hubProgress: number;
    /**
     * @generated from protobuf field: uint32 guild_onboarding_progress = 3;
     */
    guildOnboardingProgress: number;
    /**
     * @generated from protobuf field: optional google.protobuf.Timestamp guild_recents_dismissed_at = 4;
     */
    guildRecentsDismissedAt?: Timestamp;
    /**
     * @generated from protobuf field: bytes dismissed_guild_content = 5;
     */
    dismissedGuildContent: Uint8Array;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.CustomCallSound join_sound = 6;
     */
    joinSound?: PreloadedUserSettings_CustomCallSound;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.ChannelListSettings mobile_redesign_channel_list_settings = 7;
     */
    mobileRedesignChannelListSettings?: PreloadedUserSettings_ChannelListSettings;
    /**
     * @generated from protobuf field: bool disable_raid_alert_push = 8;
     */
    disableRaidAlertPush: boolean;
    /**
     * @generated from protobuf field: bool disable_raid_alert_nag = 9;
     */
    disableRaidAlertNag: boolean;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.CustomNotificationSoundConfig custom_notification_sound_config = 10;
     */
    customNotificationSoundConfig?: PreloadedUserSettings_CustomNotificationSoundConfig;
    /**
     * @generated from protobuf field: bool leaderboards_disabled = 11;
     */
    leaderboardsDisabled: boolean;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.GuildSettings
 */
declare const PreloadedUserSettings_GuildSettings: PreloadedUserSettings_GuildSettings$Type;
declare class PreloadedUserSettings_AllGuildSettings$Type extends MessageType<PreloadedUserSettings_AllGuildSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_AllGuildSettings>): PreloadedUserSettings_AllGuildSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_AllGuildSettings): PreloadedUserSettings_AllGuildSettings;
    private binaryReadMap1;
    internalBinaryWrite(message: PreloadedUserSettings_AllGuildSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AllGuildSettings
 */
interface PreloadedUserSettings_AllGuildSettings {
    /**
     * @generated from protobuf field: map<fixed64, discord_protos.discord_users.v1.PreloadedUserSettings.GuildSettings> guilds = 1;
     */
    guilds: {
        [key: string]: PreloadedUserSettings_GuildSettings;
    };
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AllGuildSettings
 */
declare const PreloadedUserSettings_AllGuildSettings: PreloadedUserSettings_AllGuildSettings$Type;
declare class PreloadedUserSettings_RecurringDismissibleContentState$Type extends MessageType<PreloadedUserSettings_RecurringDismissibleContentState> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_RecurringDismissibleContentState>): PreloadedUserSettings_RecurringDismissibleContentState;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_RecurringDismissibleContentState): PreloadedUserSettings_RecurringDismissibleContentState;
    internalBinaryWrite(message: PreloadedUserSettings_RecurringDismissibleContentState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.RecurringDismissibleContentState
 */
interface PreloadedUserSettings_RecurringDismissibleContentState {
    /**
     * @generated from protobuf field: uint32 last_dismissed_version = 1;
     */
    lastDismissedVersion: number;
    /**
     * @generated from protobuf field: uint64 last_dismissed_at_ms = 2;
     */
    lastDismissedAtMs: bigint;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.RecurringDismissibleContentState
 */
declare const PreloadedUserSettings_RecurringDismissibleContentState: PreloadedUserSettings_RecurringDismissibleContentState$Type;
declare class PreloadedUserSettings_UserContentSettings$Type extends MessageType<PreloadedUserSettings_UserContentSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_UserContentSettings>): PreloadedUserSettings_UserContentSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_UserContentSettings): PreloadedUserSettings_UserContentSettings;
    private binaryReadMap7;
    internalBinaryWrite(message: PreloadedUserSettings_UserContentSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.UserContentSettings
 */
interface PreloadedUserSettings_UserContentSettings {
    /**
     * @generated from protobuf field: bytes dismissed_contents = 1;
     */
    dismissedContents: Uint8Array;
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue last_dismissed_outbound_promotion_start_date = 2;
     */
    lastDismissedOutboundPromotionStartDate?: StringValue;
    /**
     * @generated from protobuf field: optional google.protobuf.Timestamp premium_tier_0_modal_dismissed_at = 3;
     */
    premiumTier0ModalDismissedAt?: Timestamp;
    /**
     * @generated from protobuf field: optional google.protobuf.Timestamp guild_onboarding_upsell_dismissed_at = 4;
     */
    guildOnboardingUpsellDismissedAt?: Timestamp;
    /**
     * @generated from protobuf field: optional google.protobuf.Timestamp safety_user_sentiment_notice_dismissed_at = 5;
     */
    safetyUserSentimentNoticeDismissedAt?: Timestamp;
    /**
     * @generated from protobuf field: fixed64 last_received_changelog_id = 6;
     */
    lastReceivedChangelogId: bigint;
    /**
     * @generated from protobuf field: map<int32, discord_protos.discord_users.v1.PreloadedUserSettings.RecurringDismissibleContentState> recurring_dismissible_content_states = 7;
     */
    recurringDismissibleContentStates: {
        [key: number]: PreloadedUserSettings_RecurringDismissibleContentState;
    };
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.UserContentSettings
 */
declare const PreloadedUserSettings_UserContentSettings: PreloadedUserSettings_UserContentSettings$Type;
declare class PreloadedUserSettings_VideoFilterBackgroundBlur$Type extends MessageType<PreloadedUserSettings_VideoFilterBackgroundBlur> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_VideoFilterBackgroundBlur>): PreloadedUserSettings_VideoFilterBackgroundBlur;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_VideoFilterBackgroundBlur): PreloadedUserSettings_VideoFilterBackgroundBlur;
    internalBinaryWrite(message: PreloadedUserSettings_VideoFilterBackgroundBlur, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.VideoFilterBackgroundBlur
 */
interface PreloadedUserSettings_VideoFilterBackgroundBlur {
    /**
     * @generated from protobuf field: bool use_blur = 1;
     */
    useBlur: boolean;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.VideoFilterBackgroundBlur
 */
declare const PreloadedUserSettings_VideoFilterBackgroundBlur: PreloadedUserSettings_VideoFilterBackgroundBlur$Type;
declare class PreloadedUserSettings_VideoFilterAsset$Type extends MessageType<PreloadedUserSettings_VideoFilterAsset> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_VideoFilterAsset>): PreloadedUserSettings_VideoFilterAsset;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_VideoFilterAsset): PreloadedUserSettings_VideoFilterAsset;
    internalBinaryWrite(message: PreloadedUserSettings_VideoFilterAsset, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.VideoFilterAsset
 */
interface PreloadedUserSettings_VideoFilterAsset {
    /**
     * @generated from protobuf field: fixed64 id = 1;
     */
    id: bigint;
    /**
     * @generated from protobuf field: string asset_hash = 2;
     */
    assetHash: string;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.VideoFilterAsset
 */
declare const PreloadedUserSettings_VideoFilterAsset: PreloadedUserSettings_VideoFilterAsset$Type;
declare class PreloadedUserSettings_SoundboardSettings$Type extends MessageType<PreloadedUserSettings_SoundboardSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_SoundboardSettings>): PreloadedUserSettings_SoundboardSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_SoundboardSettings): PreloadedUserSettings_SoundboardSettings;
    internalBinaryWrite(message: PreloadedUserSettings_SoundboardSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.SoundboardSettings
 */
interface PreloadedUserSettings_SoundboardSettings {
    /**
     * @generated from protobuf field: float volume = 1;
     */
    volume: number;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.SoundboardSettings
 */
declare const PreloadedUserSettings_SoundboardSettings: PreloadedUserSettings_SoundboardSettings$Type;
declare class PreloadedUserSettings_VoiceAndVideoSettings$Type extends MessageType<PreloadedUserSettings_VoiceAndVideoSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_VoiceAndVideoSettings>): PreloadedUserSettings_VoiceAndVideoSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_VoiceAndVideoSettings): PreloadedUserSettings_VoiceAndVideoSettings;
    internalBinaryWrite(message: PreloadedUserSettings_VoiceAndVideoSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.VoiceAndVideoSettings
 */
interface PreloadedUserSettings_VoiceAndVideoSettings {
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.VideoFilterBackgroundBlur blur = 1;
     */
    blur?: PreloadedUserSettings_VideoFilterBackgroundBlur;
    /**
     * @generated from protobuf field: uint32 preset_option = 2;
     */
    presetOption: number;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.VideoFilterAsset custom_asset = 3;
     */
    customAsset?: PreloadedUserSettings_VideoFilterAsset;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue always_preview_video = 5;
     */
    alwaysPreviewVideo?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.UInt32Value afk_timeout = 6;
     */
    afkTimeout?: UInt32Value;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue stream_notifications_enabled = 7;
     */
    streamNotificationsEnabled?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue native_phone_integration_enabled = 8;
     */
    nativePhoneIntegrationEnabled?: BoolValue;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.SoundboardSettings soundboard_settings = 9;
     */
    soundboardSettings?: PreloadedUserSettings_SoundboardSettings;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue disable_stream_previews = 10;
     */
    disableStreamPreviews?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.FloatValue soundmoji_volume = 11;
     */
    soundmojiVolume?: FloatValue;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.VoiceAndVideoSettings
 */
declare const PreloadedUserSettings_VoiceAndVideoSettings: PreloadedUserSettings_VoiceAndVideoSettings$Type;
declare class PreloadedUserSettings_ExplicitContentSettings$Type extends MessageType<PreloadedUserSettings_ExplicitContentSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_ExplicitContentSettings>): PreloadedUserSettings_ExplicitContentSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_ExplicitContentSettings): PreloadedUserSettings_ExplicitContentSettings;
    internalBinaryWrite(message: PreloadedUserSettings_ExplicitContentSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentSettings
 */
interface PreloadedUserSettings_ExplicitContentSettings {
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction explicit_content_guilds = 1;
     */
    explicitContentGuilds: PreloadedUserSettings_ExplicitContentRedaction;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction explicit_content_friend_dm = 2;
     */
    explicitContentFriendDm: PreloadedUserSettings_ExplicitContentRedaction;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction explicit_content_non_friend_dm = 3;
     */
    explicitContentNonFriendDm: PreloadedUserSettings_ExplicitContentRedaction;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentSettings
 */
declare const PreloadedUserSettings_ExplicitContentSettings: PreloadedUserSettings_ExplicitContentSettings$Type;
declare class PreloadedUserSettings_KeywordFilterSettings$Type extends MessageType<PreloadedUserSettings_KeywordFilterSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_KeywordFilterSettings>): PreloadedUserSettings_KeywordFilterSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_KeywordFilterSettings): PreloadedUserSettings_KeywordFilterSettings;
    internalBinaryWrite(message: PreloadedUserSettings_KeywordFilterSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.KeywordFilterSettings
 */
interface PreloadedUserSettings_KeywordFilterSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue profanity = 1;
     */
    profanity?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue sexual_content = 2;
     */
    sexualContent?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue slurs = 3;
     */
    slurs?: BoolValue;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.KeywordFilterSettings
 */
declare const PreloadedUserSettings_KeywordFilterSettings: PreloadedUserSettings_KeywordFilterSettings$Type;
declare class PreloadedUserSettings_TextAndImagesSettings$Type extends MessageType<PreloadedUserSettings_TextAndImagesSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_TextAndImagesSettings>): PreloadedUserSettings_TextAndImagesSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_TextAndImagesSettings): PreloadedUserSettings_TextAndImagesSettings;
    internalBinaryWrite(message: PreloadedUserSettings_TextAndImagesSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.TextAndImagesSettings
 */
interface PreloadedUserSettings_TextAndImagesSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue diversity_surrogate = 1;
     */
    diversitySurrogate?: StringValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue use_rich_chat_input = 2;
     */
    useRichChatInput?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue use_thread_sidebar = 3;
     */
    useThreadSidebar?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue render_spoilers = 4;
     */
    renderSpoilers?: StringValue;
    /**
     * @generated from protobuf field: repeated string emoji_picker_collapsed_sections = 5;
     */
    emojiPickerCollapsedSections: string[];
    /**
     * @generated from protobuf field: repeated string sticker_picker_collapsed_sections = 6;
     */
    stickerPickerCollapsedSections: string[];
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue view_image_descriptions = 7;
     */
    viewImageDescriptions?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue show_command_suggestions = 8;
     */
    showCommandSuggestions?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue inline_attachment_media = 9;
     */
    inlineAttachmentMedia?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue inline_embed_media = 10;
     */
    inlineEmbedMedia?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue gif_auto_play = 11;
     */
    gifAutoPlay?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue render_embeds = 12;
     */
    renderEmbeds?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue render_reactions = 13;
     */
    renderReactions?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue animate_emoji = 14;
     */
    animateEmoji?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.UInt32Value animate_stickers = 15;
     */
    animateStickers?: UInt32Value;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue enable_tts_command = 16;
     */
    enableTtsCommand?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue message_display_compact = 17;
     */
    messageDisplayCompact?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.UInt32Value explicit_content_filter = 19;
     */
    explicitContentFilter?: UInt32Value;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue view_nsfw_guilds = 20;
     */
    viewNsfwGuilds?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue convert_emoticons = 21;
     */
    convertEmoticons?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue expression_suggestions_enabled = 22;
     */
    expressionSuggestionsEnabled?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue view_nsfw_commands = 23;
     */
    viewNsfwCommands?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue use_legacy_chat_input = 24;
     */
    useLegacyChatInput?: BoolValue;
    /**
     * @generated from protobuf field: repeated string soundboard_picker_collapsed_sections = 25;
     */
    soundboardPickerCollapsedSections: string[];
    /**
     * @generated from protobuf field: optional google.protobuf.UInt32Value dm_spam_filter = 26;
     */
    dmSpamFilter?: UInt32Value;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.DmSpamFilterV2 dm_spam_filter_v2 = 27;
     */
    dmSpamFilterV2: PreloadedUserSettings_DmSpamFilterV2;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue include_stickers_in_autocomplete = 28;
     */
    includeStickersInAutocomplete?: BoolValue;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentSettings explicit_content_settings = 29;
     */
    explicitContentSettings?: PreloadedUserSettings_ExplicitContentSettings;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.KeywordFilterSettings keyword_filter_settings = 30;
     */
    keywordFilterSettings?: PreloadedUserSettings_KeywordFilterSettings;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue include_soundmoji_in_autocomplete = 31;
     */
    includeSoundmojiInAutocomplete?: BoolValue;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.TextAndImagesSettings
 */
declare const PreloadedUserSettings_TextAndImagesSettings: PreloadedUserSettings_TextAndImagesSettings$Type;
declare class PreloadedUserSettings_NotificationSettings$Type extends MessageType<PreloadedUserSettings_NotificationSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_NotificationSettings>): PreloadedUserSettings_NotificationSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_NotificationSettings): PreloadedUserSettings_NotificationSettings;
    internalBinaryWrite(message: PreloadedUserSettings_NotificationSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.NotificationSettings
 */
interface PreloadedUserSettings_NotificationSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue show_in_app_notifications = 1;
     */
    showInAppNotifications?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue notify_friends_on_go_live = 2;
     */
    notifyFriendsOnGoLive?: BoolValue;
    /**
     * @generated from protobuf field: fixed64 notification_center_acked_before_id = 3;
     */
    notificationCenterAckedBeforeId: bigint;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue enable_burst_reaction_notifications = 4;
     */
    enableBurstReactionNotifications?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue quiet_mode = 5;
     */
    quietMode?: BoolValue;
    /**
     * @generated from protobuf field: fixed64 focus_mode_expires_at_ms = 6;
     */
    focusModeExpiresAtMs: bigint;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.ReactionNotificationType reaction_notifications = 7;
     */
    reactionNotifications: PreloadedUserSettings_ReactionNotificationType;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.NotificationSettings
 */
declare const PreloadedUserSettings_NotificationSettings: PreloadedUserSettings_NotificationSettings$Type;
declare class PreloadedUserSettings_PrivacySettings$Type extends MessageType<PreloadedUserSettings_PrivacySettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_PrivacySettings>): PreloadedUserSettings_PrivacySettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_PrivacySettings): PreloadedUserSettings_PrivacySettings;
    internalBinaryWrite(message: PreloadedUserSettings_PrivacySettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.PrivacySettings
 */
interface PreloadedUserSettings_PrivacySettings {
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue allow_activity_party_privacy_friends = 1;
     */
    allowActivityPartyPrivacyFriends?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue allow_activity_party_privacy_voice_channel = 2;
     */
    allowActivityPartyPrivacyVoiceChannel?: BoolValue;
    /**
     * @generated from protobuf field: repeated fixed64 restricted_guild_ids = 3;
     */
    restrictedGuildIds: bigint[];
    /**
     * @generated from protobuf field: bool default_guilds_restricted = 4;
     */
    defaultGuildsRestricted: boolean;
    /**
     * @generated from protobuf field: bool allow_accessibility_detection = 7;
     */
    allowAccessibilityDetection: boolean;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue detect_platform_accounts = 8;
     */
    detectPlatformAccounts?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue passwordless = 9;
     */
    passwordless?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue contact_sync_enabled = 10;
     */
    contactSyncEnabled?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.UInt32Value friend_source_flags = 11;
     */
    friendSourceFlags?: UInt32Value;
    /**
     * @generated from protobuf field: optional google.protobuf.UInt32Value friend_discovery_flags = 12;
     */
    friendDiscoveryFlags?: UInt32Value;
    /**
     * @generated from protobuf field: repeated fixed64 activity_restricted_guild_ids = 13;
     */
    activityRestrictedGuildIds: bigint[];
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.GuildActivityStatusRestrictionDefault default_guilds_activity_restricted = 14;
     */
    defaultGuildsActivityRestricted: PreloadedUserSettings_GuildActivityStatusRestrictionDefault;
    /**
     * @generated from protobuf field: repeated fixed64 activity_joining_restricted_guild_ids = 15;
     */
    activityJoiningRestrictedGuildIds: bigint[];
    /**
     * @generated from protobuf field: repeated fixed64 message_request_restricted_guild_ids = 16;
     */
    messageRequestRestrictedGuildIds: bigint[];
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue default_message_request_restricted = 17;
     */
    defaultMessageRequestRestricted?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue drops_opted_out = 18;
     */
    dropsOptedOut?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue non_spam_retraining_opt_in = 19;
     */
    nonSpamRetrainingOptIn?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue family_center_enabled = 20;
     */
    familyCenterEnabled?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue family_center_enabled_v2 = 21;
     */
    familyCenterEnabledV2?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue hide_legacy_username = 22;
     */
    hideLegacyUsername?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue inappropriate_conversation_warnings = 23;
     */
    inappropriateConversationWarnings?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue recent_games_enabled = 24;
     */
    recentGamesEnabled?: BoolValue;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.GuildsLeaderboardOptOutDefault guilds_leaderboard_opt_out_default = 25;
     */
    guildsLeaderboardOptOutDefault: PreloadedUserSettings_GuildsLeaderboardOptOutDefault;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.PrivacySettings
 */
declare const PreloadedUserSettings_PrivacySettings: PreloadedUserSettings_PrivacySettings$Type;
declare class PreloadedUserSettings_DebugSettings$Type extends MessageType<PreloadedUserSettings_DebugSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_DebugSettings>): PreloadedUserSettings_DebugSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_DebugSettings): PreloadedUserSettings_DebugSettings;
    internalBinaryWrite(message: PreloadedUserSettings_DebugSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.DebugSettings
 */
interface PreloadedUserSettings_DebugSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue rtc_panel_show_voice_states = 1;
     */
    rtcPanelShowVoiceStates?: BoolValue;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.DebugSettings
 */
declare const PreloadedUserSettings_DebugSettings: PreloadedUserSettings_DebugSettings$Type;
declare class PreloadedUserSettings_GameLibrarySettings$Type extends MessageType<PreloadedUserSettings_GameLibrarySettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_GameLibrarySettings>): PreloadedUserSettings_GameLibrarySettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_GameLibrarySettings): PreloadedUserSettings_GameLibrarySettings;
    internalBinaryWrite(message: PreloadedUserSettings_GameLibrarySettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.GameLibrarySettings
 */
interface PreloadedUserSettings_GameLibrarySettings {
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue install_shortcut_desktop = 1;
     */
    installShortcutDesktop?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue install_shortcut_start_menu = 2;
     */
    installShortcutStartMenu?: BoolValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue disable_games_tab = 3;
     */
    disableGamesTab?: BoolValue;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.GameLibrarySettings
 */
declare const PreloadedUserSettings_GameLibrarySettings: PreloadedUserSettings_GameLibrarySettings$Type;
declare class PreloadedUserSettings_CustomStatus$Type extends MessageType<PreloadedUserSettings_CustomStatus> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_CustomStatus>): PreloadedUserSettings_CustomStatus;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_CustomStatus): PreloadedUserSettings_CustomStatus;
    internalBinaryWrite(message: PreloadedUserSettings_CustomStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.CustomStatus
 */
interface PreloadedUserSettings_CustomStatus {
    /**
     * @generated from protobuf field: string text = 1;
     */
    text: string;
    /**
     * @generated from protobuf field: fixed64 emoji_id = 2;
     */
    emojiId: bigint;
    /**
     * @generated from protobuf field: string emoji_name = 3;
     */
    emojiName: string;
    /**
     * @generated from protobuf field: fixed64 expires_at_ms = 4;
     */
    expiresAtMs: bigint;
    /**
     * @generated from protobuf field: fixed64 created_at_ms = 5;
     */
    createdAtMs: bigint;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.CustomStatus
 */
declare const PreloadedUserSettings_CustomStatus: PreloadedUserSettings_CustomStatus$Type;
declare class PreloadedUserSettings_StatusSettings$Type extends MessageType<PreloadedUserSettings_StatusSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_StatusSettings>): PreloadedUserSettings_StatusSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_StatusSettings): PreloadedUserSettings_StatusSettings;
    internalBinaryWrite(message: PreloadedUserSettings_StatusSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.StatusSettings
 */
interface PreloadedUserSettings_StatusSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue status = 1;
     */
    status?: StringValue;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.CustomStatus custom_status = 2;
     */
    customStatus?: PreloadedUserSettings_CustomStatus;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue show_current_game = 3;
     */
    showCurrentGame?: BoolValue;
    /**
     * @generated from protobuf field: fixed64 status_expires_at_ms = 4;
     */
    statusExpiresAtMs: bigint;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.StatusSettings
 */
declare const PreloadedUserSettings_StatusSettings: PreloadedUserSettings_StatusSettings$Type;
declare class PreloadedUserSettings_LocalizationSettings$Type extends MessageType<PreloadedUserSettings_LocalizationSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_LocalizationSettings>): PreloadedUserSettings_LocalizationSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_LocalizationSettings): PreloadedUserSettings_LocalizationSettings;
    internalBinaryWrite(message: PreloadedUserSettings_LocalizationSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.LocalizationSettings
 */
interface PreloadedUserSettings_LocalizationSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue locale = 1;
     */
    locale?: StringValue;
    /**
     * @generated from protobuf field: optional google.protobuf.Int32Value timezone_offset = 2;
     */
    timezoneOffset?: Int32Value;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.LocalizationSettings
 */
declare const PreloadedUserSettings_LocalizationSettings: PreloadedUserSettings_LocalizationSettings$Type;
declare class PreloadedUserSettings_ClientThemeSettings$Type extends MessageType<PreloadedUserSettings_ClientThemeSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_ClientThemeSettings>): PreloadedUserSettings_ClientThemeSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_ClientThemeSettings): PreloadedUserSettings_ClientThemeSettings;
    internalBinaryWrite(message: PreloadedUserSettings_ClientThemeSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ClientThemeSettings
 */
interface PreloadedUserSettings_ClientThemeSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.UInt32Value background_gradient_preset_id = 2;
     */
    backgroundGradientPresetId?: UInt32Value;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ClientThemeSettings
 */
declare const PreloadedUserSettings_ClientThemeSettings: PreloadedUserSettings_ClientThemeSettings$Type;
declare class PreloadedUserSettings_AppearanceSettings$Type extends MessageType<PreloadedUserSettings_AppearanceSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_AppearanceSettings>): PreloadedUserSettings_AppearanceSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_AppearanceSettings): PreloadedUserSettings_AppearanceSettings;
    internalBinaryWrite(message: PreloadedUserSettings_AppearanceSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AppearanceSettings
 */
interface PreloadedUserSettings_AppearanceSettings {
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.Theme theme = 1;
     */
    theme: PreloadedUserSettings_Theme;
    /**
     * @generated from protobuf field: bool developer_mode = 2;
     */
    developerMode: boolean;
    /**
     * @generated from protobuf field: optional discord_protos.discord_users.v1.PreloadedUserSettings.ClientThemeSettings client_theme_settings = 3;
     */
    clientThemeSettings?: PreloadedUserSettings_ClientThemeSettings;
    /**
     * @generated from protobuf field: bool mobile_redesign_disabled = 4;
     */
    mobileRedesignDisabled: boolean;
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue channel_list_layout = 6;
     */
    channelListLayout?: StringValue;
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue message_previews = 7;
     */
    messagePreviews?: StringValue;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue search_result_exact_count_enabled = 8;
     */
    searchResultExactCountEnabled?: BoolValue;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.TimestampHourCycle timestamp_hour_cycle = 9;
     */
    timestampHourCycle: PreloadedUserSettings_TimestampHourCycle;
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue happening_now_cards_disabled = 10;
     */
    happeningNowCardsDisabled?: BoolValue;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.LaunchPadMode launch_pad_mode = 11;
     */
    launchPadMode: PreloadedUserSettings_LaunchPadMode;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AppearanceSettings
 */
declare const PreloadedUserSettings_AppearanceSettings: PreloadedUserSettings_AppearanceSettings$Type;
declare class PreloadedUserSettings_GuildFolder$Type extends MessageType<PreloadedUserSettings_GuildFolder> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_GuildFolder>): PreloadedUserSettings_GuildFolder;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_GuildFolder): PreloadedUserSettings_GuildFolder;
    internalBinaryWrite(message: PreloadedUserSettings_GuildFolder, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.GuildFolder
 */
interface PreloadedUserSettings_GuildFolder {
    /**
     * @generated from protobuf field: repeated fixed64 guild_ids = 1;
     */
    guildIds: bigint[];
    /**
     * @generated from protobuf field: optional google.protobuf.Int64Value id = 2;
     */
    id?: Int64Value;
    /**
     * @generated from protobuf field: optional google.protobuf.StringValue name = 3;
     */
    name?: StringValue;
    /**
     * @generated from protobuf field: optional google.protobuf.UInt64Value color = 4;
     */
    color?: UInt64Value;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.GuildFolder
 */
declare const PreloadedUserSettings_GuildFolder: PreloadedUserSettings_GuildFolder$Type;
declare class PreloadedUserSettings_GuildFolders$Type extends MessageType<PreloadedUserSettings_GuildFolders> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_GuildFolders>): PreloadedUserSettings_GuildFolders;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_GuildFolders): PreloadedUserSettings_GuildFolders;
    internalBinaryWrite(message: PreloadedUserSettings_GuildFolders, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.GuildFolders
 */
interface PreloadedUserSettings_GuildFolders {
    /**
     * @generated from protobuf field: repeated discord_protos.discord_users.v1.PreloadedUserSettings.GuildFolder folders = 1;
     */
    folders: PreloadedUserSettings_GuildFolder[];
    /**
     * @generated from protobuf field: repeated fixed64 guild_positions = 2;
     */
    guildPositions: bigint[];
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.GuildFolders
 */
declare const PreloadedUserSettings_GuildFolders: PreloadedUserSettings_GuildFolders$Type;
declare class PreloadedUserSettings_FavoriteChannel$Type extends MessageType<PreloadedUserSettings_FavoriteChannel> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_FavoriteChannel>): PreloadedUserSettings_FavoriteChannel;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_FavoriteChannel): PreloadedUserSettings_FavoriteChannel;
    internalBinaryWrite(message: PreloadedUserSettings_FavoriteChannel, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.FavoriteChannel
 */
interface PreloadedUserSettings_FavoriteChannel {
    /**
     * @generated from protobuf field: string nickname = 1;
     */
    nickname: string;
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.FavoriteChannelType type = 2;
     */
    type: PreloadedUserSettings_FavoriteChannelType;
    /**
     * @generated from protobuf field: uint32 position = 3;
     */
    position: number;
    /**
     * @generated from protobuf field: fixed64 parent_id = 4;
     */
    parentId: bigint;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.FavoriteChannel
 */
declare const PreloadedUserSettings_FavoriteChannel: PreloadedUserSettings_FavoriteChannel$Type;
declare class PreloadedUserSettings_Favorites$Type extends MessageType<PreloadedUserSettings_Favorites> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_Favorites>): PreloadedUserSettings_Favorites;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_Favorites): PreloadedUserSettings_Favorites;
    private binaryReadMap1;
    internalBinaryWrite(message: PreloadedUserSettings_Favorites, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.Favorites
 */
interface PreloadedUserSettings_Favorites {
    /**
     * @generated from protobuf field: map<fixed64, discord_protos.discord_users.v1.PreloadedUserSettings.FavoriteChannel> favorite_channels = 1;
     */
    favoriteChannels: {
        [key: string]: PreloadedUserSettings_FavoriteChannel;
    };
    /**
     * @generated from protobuf field: bool muted = 2;
     */
    muted: boolean;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.Favorites
 */
declare const PreloadedUserSettings_Favorites: PreloadedUserSettings_Favorites$Type;
declare class PreloadedUserSettings_AudioContextSetting$Type extends MessageType<PreloadedUserSettings_AudioContextSetting> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_AudioContextSetting>): PreloadedUserSettings_AudioContextSetting;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_AudioContextSetting): PreloadedUserSettings_AudioContextSetting;
    internalBinaryWrite(message: PreloadedUserSettings_AudioContextSetting, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AudioContextSetting
 */
interface PreloadedUserSettings_AudioContextSetting {
    /**
     * @generated from protobuf field: bool muted = 1;
     */
    muted: boolean;
    /**
     * @generated from protobuf field: float volume = 2;
     */
    volume: number;
    /**
     * @generated from protobuf field: fixed64 modified_at = 3;
     */
    modifiedAt: bigint;
    /**
     * @generated from protobuf field: bool soundboard_muted = 4;
     */
    soundboardMuted: boolean;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AudioContextSetting
 */
declare const PreloadedUserSettings_AudioContextSetting: PreloadedUserSettings_AudioContextSetting$Type;
declare class PreloadedUserSettings_AudioSettings$Type extends MessageType<PreloadedUserSettings_AudioSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_AudioSettings>): PreloadedUserSettings_AudioSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_AudioSettings): PreloadedUserSettings_AudioSettings;
    private binaryReadMap1;
    private binaryReadMap2;
    internalBinaryWrite(message: PreloadedUserSettings_AudioSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AudioSettings
 */
interface PreloadedUserSettings_AudioSettings {
    /**
     * @generated from protobuf field: map<fixed64, discord_protos.discord_users.v1.PreloadedUserSettings.AudioContextSetting> user = 1;
     */
    user: {
        [key: string]: PreloadedUserSettings_AudioContextSetting;
    };
    /**
     * @generated from protobuf field: map<fixed64, discord_protos.discord_users.v1.PreloadedUserSettings.AudioContextSetting> stream = 2;
     */
    stream: {
        [key: string]: PreloadedUserSettings_AudioContextSetting;
    };
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.AudioSettings
 */
declare const PreloadedUserSettings_AudioSettings: PreloadedUserSettings_AudioSettings$Type;
declare class PreloadedUserSettings_CommunitiesSettings$Type extends MessageType<PreloadedUserSettings_CommunitiesSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_CommunitiesSettings>): PreloadedUserSettings_CommunitiesSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_CommunitiesSettings): PreloadedUserSettings_CommunitiesSettings;
    internalBinaryWrite(message: PreloadedUserSettings_CommunitiesSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.CommunitiesSettings
 */
interface PreloadedUserSettings_CommunitiesSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue disable_home_auto_nav = 1;
     */
    disableHomeAutoNav?: BoolValue;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.CommunitiesSettings
 */
declare const PreloadedUserSettings_CommunitiesSettings: PreloadedUserSettings_CommunitiesSettings$Type;
declare class PreloadedUserSettings_BroadcastSettings$Type extends MessageType<PreloadedUserSettings_BroadcastSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_BroadcastSettings>): PreloadedUserSettings_BroadcastSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_BroadcastSettings): PreloadedUserSettings_BroadcastSettings;
    internalBinaryWrite(message: PreloadedUserSettings_BroadcastSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.BroadcastSettings
 */
interface PreloadedUserSettings_BroadcastSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue allow_friends = 1;
     */
    allowFriends?: BoolValue;
    /**
     * @generated from protobuf field: repeated fixed64 allowed_guild_ids = 2;
     */
    allowedGuildIds: bigint[];
    /**
     * @generated from protobuf field: repeated fixed64 allowed_user_ids = 3;
     */
    allowedUserIds: bigint[];
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue auto_broadcast = 4;
     */
    autoBroadcast?: BoolValue;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.BroadcastSettings
 */
declare const PreloadedUserSettings_BroadcastSettings: PreloadedUserSettings_BroadcastSettings$Type;
declare class PreloadedUserSettings_ClipsSettings$Type extends MessageType<PreloadedUserSettings_ClipsSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_ClipsSettings>): PreloadedUserSettings_ClipsSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_ClipsSettings): PreloadedUserSettings_ClipsSettings;
    internalBinaryWrite(message: PreloadedUserSettings_ClipsSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ClipsSettings
 */
interface PreloadedUserSettings_ClipsSettings {
    /**
     * @generated from protobuf field: optional google.protobuf.BoolValue allow_voice_recording = 1;
     */
    allowVoiceRecording?: BoolValue;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ClipsSettings
 */
declare const PreloadedUserSettings_ClipsSettings: PreloadedUserSettings_ClipsSettings$Type;
declare class PreloadedUserSettings_ForLaterSettings$Type extends MessageType<PreloadedUserSettings_ForLaterSettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_ForLaterSettings>): PreloadedUserSettings_ForLaterSettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_ForLaterSettings): PreloadedUserSettings_ForLaterSettings;
    internalBinaryWrite(message: PreloadedUserSettings_ForLaterSettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ForLaterSettings
 */
interface PreloadedUserSettings_ForLaterSettings {
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.ForLaterTab current_tab = 1;
     */
    currentTab: PreloadedUserSettings_ForLaterTab;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ForLaterSettings
 */
declare const PreloadedUserSettings_ForLaterSettings: PreloadedUserSettings_ForLaterSettings$Type;
declare class PreloadedUserSettings_SafetySettings$Type extends MessageType<PreloadedUserSettings_SafetySettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_SafetySettings>): PreloadedUserSettings_SafetySettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_SafetySettings): PreloadedUserSettings_SafetySettings;
    internalBinaryWrite(message: PreloadedUserSettings_SafetySettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.SafetySettings
 */
interface PreloadedUserSettings_SafetySettings {
    /**
     * @generated from protobuf field: discord_protos.discord_users.v1.PreloadedUserSettings.SafetySettingsPresetType safety_settings_preset = 1;
     */
    safetySettingsPreset: PreloadedUserSettings_SafetySettingsPresetType;
    /**
     * @generated from protobuf field: bool ignore_profile_speedbump_disabled = 2;
     */
    ignoreProfileSpeedbumpDisabled: boolean;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.SafetySettings
 */
declare const PreloadedUserSettings_SafetySettings: PreloadedUserSettings_SafetySettings$Type;
declare class PreloadedUserSettings_ICYMISettings$Type extends MessageType<PreloadedUserSettings_ICYMISettings> {
    constructor();
    create(value?: PartialMessage<PreloadedUserSettings_ICYMISettings>): PreloadedUserSettings_ICYMISettings;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PreloadedUserSettings_ICYMISettings): PreloadedUserSettings_ICYMISettings;
    internalBinaryWrite(message: PreloadedUserSettings_ICYMISettings, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated from protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ICYMISettings
 */
interface PreloadedUserSettings_ICYMISettings {
    /**
     * @generated from protobuf field: fixed64 feed_generated_at = 1;
     */
    feedGeneratedAt: bigint;
}
/**
 * @generated MessageType for protobuf message discord_protos.discord_users.v1.PreloadedUserSettings.ICYMISettings
 */
declare const PreloadedUserSettings_ICYMISettings: PreloadedUserSettings_ICYMISettings$Type;

declare module "@protobuf-ts/runtime" {
    interface MessageType<T> {
        toBase64(data: T): string;
        fromBase64(base64: string): T;
    }
}

export { FrecencyUserSettings, FrecencyUserSettings_ApplicationCommandFrecency, FrecencyUserSettings_ApplicationFrecency, FrecencyUserSettings_EmojiFrecency, FrecencyUserSettings_FavoriteEmojis, FrecencyUserSettings_FavoriteGIF, FrecencyUserSettings_FavoriteGIFs, FrecencyUserSettings_FavoriteSoundboardSounds, FrecencyUserSettings_FavoriteStickers, FrecencyUserSettings_FrecencyItem, FrecencyUserSettings_GIFType, FrecencyUserSettings_GuildAndChannelFrecency, FrecencyUserSettings_HeardSoundFrecency, FrecencyUserSettings_PlayedSoundFrecency, FrecencyUserSettings_StickerFrecency, FrecencyUserSettings_Versions, PreloadedUserSettings, PreloadedUserSettings_AllGuildSettings, PreloadedUserSettings_AppearanceSettings, PreloadedUserSettings_AudioContextSetting, PreloadedUserSettings_AudioSettings, PreloadedUserSettings_BroadcastSettings, PreloadedUserSettings_ChannelIconEmoji, PreloadedUserSettings_ChannelListSettings, PreloadedUserSettings_ChannelSettings, PreloadedUserSettings_ClientThemeSettings, PreloadedUserSettings_ClipsSettings, PreloadedUserSettings_CommunitiesSettings, PreloadedUserSettings_CustomCallSound, PreloadedUserSettings_CustomNotificationSoundConfig, PreloadedUserSettings_CustomStatus, PreloadedUserSettings_DebugSettings, PreloadedUserSettings_DmSpamFilterV2, PreloadedUserSettings_ExplicitContentRedaction, PreloadedUserSettings_ExplicitContentSettings, PreloadedUserSettings_FavoriteChannel, PreloadedUserSettings_FavoriteChannelType, PreloadedUserSettings_Favorites, PreloadedUserSettings_ForLaterSettings, PreloadedUserSettings_ForLaterTab, PreloadedUserSettings_GameLibrarySettings, PreloadedUserSettings_GuildActivityStatusRestrictionDefault, PreloadedUserSettings_GuildFolder, PreloadedUserSettings_GuildFolders, PreloadedUserSettings_GuildSettings, PreloadedUserSettings_GuildsLeaderboardOptOutDefault, PreloadedUserSettings_ICYMISettings, PreloadedUserSettings_InboxSettings, PreloadedUserSettings_InboxTab, PreloadedUserSettings_KeywordFilterSettings, PreloadedUserSettings_LaunchPadMode, PreloadedUserSettings_LocalizationSettings, PreloadedUserSettings_NotificationSettings, PreloadedUserSettings_PrivacySettings, PreloadedUserSettings_ReactionNotificationType, PreloadedUserSettings_RecurringDismissibleContentState, PreloadedUserSettings_SafetySettings, PreloadedUserSettings_SafetySettingsPresetType, PreloadedUserSettings_SoundboardSettings, PreloadedUserSettings_StatusSettings, PreloadedUserSettings_TextAndImagesSettings, PreloadedUserSettings_Theme, PreloadedUserSettings_TimestampHourCycle, PreloadedUserSettings_UserContentSettings, PreloadedUserSettings_Versions, PreloadedUserSettings_VideoFilterAsset, PreloadedUserSettings_VideoFilterBackgroundBlur, PreloadedUserSettings_VoiceAndVideoSettings, PremiumMarketingComponentProperties, PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties, PremiumMarketingComponentProperties_ButtonAction, PremiumMarketingComponentProperties_FeatureCard, PremiumMarketingComponentProperties_SubscriptionButton, PremiumMarketingComponentProperties_Subtitle, PremiumMarketingComponentProperties_Variant1Storage };
