var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// DiscordProtos/src/index.ts
var src_exports = {};
__export(src_exports, {
  FrecencyUserSettings: () => FrecencyUserSettings,
  FrecencyUserSettings_ApplicationCommandFrecency: () => FrecencyUserSettings_ApplicationCommandFrecency,
  FrecencyUserSettings_ApplicationFrecency: () => FrecencyUserSettings_ApplicationFrecency,
  FrecencyUserSettings_EmojiFrecency: () => FrecencyUserSettings_EmojiFrecency,
  FrecencyUserSettings_FavoriteEmojis: () => FrecencyUserSettings_FavoriteEmojis,
  FrecencyUserSettings_FavoriteGIF: () => FrecencyUserSettings_FavoriteGIF,
  FrecencyUserSettings_FavoriteGIFs: () => FrecencyUserSettings_FavoriteGIFs,
  FrecencyUserSettings_FavoriteSoundboardSounds: () => FrecencyUserSettings_FavoriteSoundboardSounds,
  FrecencyUserSettings_FavoriteStickers: () => FrecencyUserSettings_FavoriteStickers,
  FrecencyUserSettings_FrecencyItem: () => FrecencyUserSettings_FrecencyItem,
  FrecencyUserSettings_GIFType: () => FrecencyUserSettings_GIFType,
  FrecencyUserSettings_GuildAndChannelFrecency: () => FrecencyUserSettings_GuildAndChannelFrecency,
  FrecencyUserSettings_HeardSoundFrecency: () => FrecencyUserSettings_HeardSoundFrecency,
  FrecencyUserSettings_PlayedSoundFrecency: () => FrecencyUserSettings_PlayedSoundFrecency,
  FrecencyUserSettings_StickerFrecency: () => FrecencyUserSettings_StickerFrecency,
  FrecencyUserSettings_Versions: () => FrecencyUserSettings_Versions,
  PreloadedUserSettings: () => PreloadedUserSettings,
  PreloadedUserSettings_AllGuildSettings: () => PreloadedUserSettings_AllGuildSettings,
  PreloadedUserSettings_AppearanceSettings: () => PreloadedUserSettings_AppearanceSettings,
  PreloadedUserSettings_AudioContextSetting: () => PreloadedUserSettings_AudioContextSetting,
  PreloadedUserSettings_AudioSettings: () => PreloadedUserSettings_AudioSettings,
  PreloadedUserSettings_BroadcastSettings: () => PreloadedUserSettings_BroadcastSettings,
  PreloadedUserSettings_ChannelIconEmoji: () => PreloadedUserSettings_ChannelIconEmoji,
  PreloadedUserSettings_ChannelListSettings: () => PreloadedUserSettings_ChannelListSettings,
  PreloadedUserSettings_ChannelSettings: () => PreloadedUserSettings_ChannelSettings,
  PreloadedUserSettings_ClientThemeSettings: () => PreloadedUserSettings_ClientThemeSettings,
  PreloadedUserSettings_ClipsSettings: () => PreloadedUserSettings_ClipsSettings,
  PreloadedUserSettings_CommunitiesSettings: () => PreloadedUserSettings_CommunitiesSettings,
  PreloadedUserSettings_CustomCallSound: () => PreloadedUserSettings_CustomCallSound,
  PreloadedUserSettings_CustomNotificationSoundConfig: () => PreloadedUserSettings_CustomNotificationSoundConfig,
  PreloadedUserSettings_CustomStatus: () => PreloadedUserSettings_CustomStatus,
  PreloadedUserSettings_DebugSettings: () => PreloadedUserSettings_DebugSettings,
  PreloadedUserSettings_DmSpamFilterV2: () => PreloadedUserSettings_DmSpamFilterV2,
  PreloadedUserSettings_ExplicitContentRedaction: () => PreloadedUserSettings_ExplicitContentRedaction,
  PreloadedUserSettings_ExplicitContentSettings: () => PreloadedUserSettings_ExplicitContentSettings,
  PreloadedUserSettings_FavoriteChannel: () => PreloadedUserSettings_FavoriteChannel,
  PreloadedUserSettings_FavoriteChannelType: () => PreloadedUserSettings_FavoriteChannelType,
  PreloadedUserSettings_Favorites: () => PreloadedUserSettings_Favorites,
  PreloadedUserSettings_ForLaterSettings: () => PreloadedUserSettings_ForLaterSettings,
  PreloadedUserSettings_ForLaterTab: () => PreloadedUserSettings_ForLaterTab,
  PreloadedUserSettings_GameLibrarySettings: () => PreloadedUserSettings_GameLibrarySettings,
  PreloadedUserSettings_GuildActivityStatusRestrictionDefault: () => PreloadedUserSettings_GuildActivityStatusRestrictionDefault,
  PreloadedUserSettings_GuildFolder: () => PreloadedUserSettings_GuildFolder,
  PreloadedUserSettings_GuildFolders: () => PreloadedUserSettings_GuildFolders,
  PreloadedUserSettings_GuildSettings: () => PreloadedUserSettings_GuildSettings,
  PreloadedUserSettings_GuildsLeaderboardOptOutDefault: () => PreloadedUserSettings_GuildsLeaderboardOptOutDefault,
  PreloadedUserSettings_ICYMISettings: () => PreloadedUserSettings_ICYMISettings,
  PreloadedUserSettings_InboxSettings: () => PreloadedUserSettings_InboxSettings,
  PreloadedUserSettings_InboxTab: () => PreloadedUserSettings_InboxTab,
  PreloadedUserSettings_KeywordFilterSettings: () => PreloadedUserSettings_KeywordFilterSettings,
  PreloadedUserSettings_LaunchPadMode: () => PreloadedUserSettings_LaunchPadMode,
  PreloadedUserSettings_LocalizationSettings: () => PreloadedUserSettings_LocalizationSettings,
  PreloadedUserSettings_NotificationSettings: () => PreloadedUserSettings_NotificationSettings,
  PreloadedUserSettings_PrivacySettings: () => PreloadedUserSettings_PrivacySettings,
  PreloadedUserSettings_ReactionNotificationType: () => PreloadedUserSettings_ReactionNotificationType,
  PreloadedUserSettings_RecurringDismissibleContentState: () => PreloadedUserSettings_RecurringDismissibleContentState,
  PreloadedUserSettings_SafetySettings: () => PreloadedUserSettings_SafetySettings,
  PreloadedUserSettings_SafetySettingsPresetType: () => PreloadedUserSettings_SafetySettingsPresetType,
  PreloadedUserSettings_SoundboardSettings: () => PreloadedUserSettings_SoundboardSettings,
  PreloadedUserSettings_StatusSettings: () => PreloadedUserSettings_StatusSettings,
  PreloadedUserSettings_TextAndImagesSettings: () => PreloadedUserSettings_TextAndImagesSettings,
  PreloadedUserSettings_Theme: () => PreloadedUserSettings_Theme,
  PreloadedUserSettings_TimestampHourCycle: () => PreloadedUserSettings_TimestampHourCycle,
  PreloadedUserSettings_UserContentSettings: () => PreloadedUserSettings_UserContentSettings,
  PreloadedUserSettings_Versions: () => PreloadedUserSettings_Versions,
  PreloadedUserSettings_VideoFilterAsset: () => PreloadedUserSettings_VideoFilterAsset,
  PreloadedUserSettings_VideoFilterBackgroundBlur: () => PreloadedUserSettings_VideoFilterBackgroundBlur,
  PreloadedUserSettings_VoiceAndVideoSettings: () => PreloadedUserSettings_VoiceAndVideoSettings,
  PremiumMarketingComponentProperties: () => PremiumMarketingComponentProperties,
  PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties: () => PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties,
  PremiumMarketingComponentProperties_ButtonAction: () => PremiumMarketingComponentProperties_ButtonAction,
  PremiumMarketingComponentProperties_FeatureCard: () => PremiumMarketingComponentProperties_FeatureCard,
  PremiumMarketingComponentProperties_SubscriptionButton: () => PremiumMarketingComponentProperties_SubscriptionButton,
  PremiumMarketingComponentProperties_Subtitle: () => PremiumMarketingComponentProperties_Subtitle,
  PremiumMarketingComponentProperties_Variant1Storage: () => PremiumMarketingComponentProperties_Variant1Storage
});
module.exports = __toCommonJS(src_exports);
var import_runtime30 = require("@protobuf-ts/runtime");

// DiscordProtos/src/proto/PremiumMarketingComponentProperties.ts
var import_runtime = require("@protobuf-ts/runtime");
var import_runtime2 = require("@protobuf-ts/runtime");
var import_runtime3 = require("@protobuf-ts/runtime");
var import_runtime4 = require("@protobuf-ts/runtime");
var PremiumMarketingComponentProperties_ButtonAction = /* @__PURE__ */ ((PremiumMarketingComponentProperties_ButtonAction2) => {
  PremiumMarketingComponentProperties_ButtonAction2[PremiumMarketingComponentProperties_ButtonAction2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PremiumMarketingComponentProperties_ButtonAction2[PremiumMarketingComponentProperties_ButtonAction2["OPEN_MARKETING_PAGE"] = 1] = "OPEN_MARKETING_PAGE";
  PremiumMarketingComponentProperties_ButtonAction2[PremiumMarketingComponentProperties_ButtonAction2["OPEN_TIER_2_PAYMENT_MODAL"] = 2] = "OPEN_TIER_2_PAYMENT_MODAL";
  return PremiumMarketingComponentProperties_ButtonAction2;
})(PremiumMarketingComponentProperties_ButtonAction || {});
var PremiumMarketingComponentProperties$Type = class extends import_runtime4.MessageType {
  static {
    __name(this, "PremiumMarketingComponentProperties$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PremiumMarketingComponentProperties", [
      {
        no: 1,
        name: "placeholder",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 2, name: "announcement_modal_variant_1", kind: "message", T: /* @__PURE__ */ __name(() => PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties, "T") },
      {
        no: 3,
        name: "content_identifier",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.placeholder = "";
    message.contentIdentifier = "";
    if (value !== void 0)
      (0, import_runtime3.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string placeholder */
        1:
          message.placeholder = reader.string();
          break;
        case /* discord_protos.discord_users.v1.PremiumMarketingComponentProperties.AnnouncementModalVariant1Properties announcement_modal_variant_1 */
        2:
          message.announcementModalVariant1 = PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties.internalBinaryRead(reader, reader.uint32(), options, message.announcementModalVariant1);
          break;
        case /* string content_identifier */
        3:
          message.contentIdentifier = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.placeholder !== "")
      writer.tag(1, import_runtime.WireType.LengthDelimited).string(message.placeholder);
    if (message.announcementModalVariant1)
      PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties.internalBinaryWrite(message.announcementModalVariant1, writer.tag(2, import_runtime.WireType.LengthDelimited).fork(), options).join();
    if (message.contentIdentifier !== "")
      writer.tag(3, import_runtime.WireType.LengthDelimited).string(message.contentIdentifier);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PremiumMarketingComponentProperties = new PremiumMarketingComponentProperties$Type();
var PremiumMarketingComponentProperties_FeatureCard$Type = class extends import_runtime4.MessageType {
  static {
    __name(this, "PremiumMarketingComponentProperties_FeatureCard$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PremiumMarketingComponentProperties.FeatureCard", [
      {
        no: 1,
        name: "header",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "pill",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "body",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "image_link",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 5,
        name: "image_link_light_theme",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.header = "";
    message.pill = "";
    message.body = "";
    message.imageLink = "";
    message.imageLinkLightTheme = "";
    if (value !== void 0)
      (0, import_runtime3.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string header */
        1:
          message.header = reader.string();
          break;
        case /* string pill */
        2:
          message.pill = reader.string();
          break;
        case /* string body */
        3:
          message.body = reader.string();
          break;
        case /* string image_link */
        4:
          message.imageLink = reader.string();
          break;
        case /* string image_link_light_theme */
        5:
          message.imageLinkLightTheme = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.header !== "")
      writer.tag(1, import_runtime.WireType.LengthDelimited).string(message.header);
    if (message.pill !== "")
      writer.tag(2, import_runtime.WireType.LengthDelimited).string(message.pill);
    if (message.body !== "")
      writer.tag(3, import_runtime.WireType.LengthDelimited).string(message.body);
    if (message.imageLink !== "")
      writer.tag(4, import_runtime.WireType.LengthDelimited).string(message.imageLink);
    if (message.imageLinkLightTheme !== "")
      writer.tag(5, import_runtime.WireType.LengthDelimited).string(message.imageLinkLightTheme);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PremiumMarketingComponentProperties_FeatureCard = new PremiumMarketingComponentProperties_FeatureCard$Type();
var PremiumMarketingComponentProperties_SubscriptionButton$Type = class extends import_runtime4.MessageType {
  static {
    __name(this, "PremiumMarketingComponentProperties_SubscriptionButton$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PremiumMarketingComponentProperties.SubscriptionButton", [
      {
        no: 1,
        name: "copy",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 2, name: "button_action", kind: "enum", T: /* @__PURE__ */ __name(() => ["discord_protos.discord_users.v1.PremiumMarketingComponentProperties.ButtonAction", PremiumMarketingComponentProperties_ButtonAction, "BUTTON_ACTION_"], "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.copy = "";
    message.buttonAction = 0;
    if (value !== void 0)
      (0, import_runtime3.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string copy */
        1:
          message.copy = reader.string();
          break;
        case /* discord_protos.discord_users.v1.PremiumMarketingComponentProperties.ButtonAction button_action */
        2:
          message.buttonAction = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.copy !== "")
      writer.tag(1, import_runtime.WireType.LengthDelimited).string(message.copy);
    if (message.buttonAction !== 0)
      writer.tag(2, import_runtime.WireType.Varint).int32(message.buttonAction);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PremiumMarketingComponentProperties_SubscriptionButton = new PremiumMarketingComponentProperties_SubscriptionButton$Type();
var PremiumMarketingComponentProperties_Subtitle$Type = class extends import_runtime4.MessageType {
  static {
    __name(this, "PremiumMarketingComponentProperties_Subtitle$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PremiumMarketingComponentProperties.Subtitle", [
      {
        no: 1,
        name: "link",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "locale",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "is_default",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.link = "";
    message.locale = "";
    message.isDefault = false;
    if (value !== void 0)
      (0, import_runtime3.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string link */
        1:
          message.link = reader.string();
          break;
        case /* string locale */
        2:
          message.locale = reader.string();
          break;
        case /* bool is_default */
        3:
          message.isDefault = reader.bool();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.link !== "")
      writer.tag(1, import_runtime.WireType.LengthDelimited).string(message.link);
    if (message.locale !== "")
      writer.tag(2, import_runtime.WireType.LengthDelimited).string(message.locale);
    if (message.isDefault !== false)
      writer.tag(3, import_runtime.WireType.Varint).bool(message.isDefault);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PremiumMarketingComponentProperties_Subtitle = new PremiumMarketingComponentProperties_Subtitle$Type();
var PremiumMarketingComponentProperties_Variant1Storage$Type = class extends import_runtime4.MessageType {
  static {
    __name(this, "PremiumMarketingComponentProperties_Variant1Storage$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PremiumMarketingComponentProperties.Variant1Storage", [
      { no: 1, name: "hero_art_localized_video_links_dark_theme", kind: "map", K: 9, V: {
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      } },
      { no: 2, name: "hero_art_localized_video_links_light_theme", kind: "map", K: 9, V: {
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      } },
      { no: 3, name: "hero_art_video_subtitle_links", kind: "map", K: 9, V: {
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      } }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.heroArtLocalizedVideoLinksDarkTheme = {};
    message.heroArtLocalizedVideoLinksLightTheme = {};
    message.heroArtVideoSubtitleLinks = {};
    if (value !== void 0)
      (0, import_runtime3.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* map<string, string> hero_art_localized_video_links_dark_theme */
        1:
          this.binaryReadMap1(message.heroArtLocalizedVideoLinksDarkTheme, reader, options);
          break;
        case /* map<string, string> hero_art_localized_video_links_light_theme */
        2:
          this.binaryReadMap2(message.heroArtLocalizedVideoLinksLightTheme, reader, options);
          break;
        case /* map<string, string> hero_art_video_subtitle_links */
        3:
          this.binaryReadMap3(message.heroArtVideoSubtitleLinks, reader, options);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  binaryReadMap1(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.string();
          break;
        case 2:
          val = reader.string();
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.PremiumMarketingComponentProperties.Variant1Storage.hero_art_localized_video_links_dark_theme");
      }
    }
    map[key ?? ""] = val ?? "";
  }
  binaryReadMap2(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.string();
          break;
        case 2:
          val = reader.string();
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.PremiumMarketingComponentProperties.Variant1Storage.hero_art_localized_video_links_light_theme");
      }
    }
    map[key ?? ""] = val ?? "";
  }
  binaryReadMap3(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.string();
          break;
        case 2:
          val = reader.string();
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.PremiumMarketingComponentProperties.Variant1Storage.hero_art_video_subtitle_links");
      }
    }
    map[key ?? ""] = val ?? "";
  }
  internalBinaryWrite(message, writer, options) {
    for (let k of globalThis.Object.keys(message.heroArtLocalizedVideoLinksDarkTheme))
      writer.tag(1, import_runtime.WireType.LengthDelimited).fork().tag(1, import_runtime.WireType.LengthDelimited).string(k).tag(2, import_runtime.WireType.LengthDelimited).string(message.heroArtLocalizedVideoLinksDarkTheme[k]).join();
    for (let k of globalThis.Object.keys(message.heroArtLocalizedVideoLinksLightTheme))
      writer.tag(2, import_runtime.WireType.LengthDelimited).fork().tag(1, import_runtime.WireType.LengthDelimited).string(k).tag(2, import_runtime.WireType.LengthDelimited).string(message.heroArtLocalizedVideoLinksLightTheme[k]).join();
    for (let k of globalThis.Object.keys(message.heroArtVideoSubtitleLinks))
      writer.tag(3, import_runtime.WireType.LengthDelimited).fork().tag(1, import_runtime.WireType.LengthDelimited).string(k).tag(2, import_runtime.WireType.LengthDelimited).string(message.heroArtVideoSubtitleLinks[k]).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PremiumMarketingComponentProperties_Variant1Storage = new PremiumMarketingComponentProperties_Variant1Storage$Type();
var PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties$Type = class extends import_runtime4.MessageType {
  static {
    __name(this, "PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PremiumMarketingComponentProperties.AnnouncementModalVariant1Properties", [
      {
        no: 1,
        name: "header",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "subheader",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "video_link",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "help_article_id",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 5, name: "feature_cards", kind: "message", repeat: 1, T: /* @__PURE__ */ __name(() => PremiumMarketingComponentProperties_FeatureCard, "T") },
      { no: 6, name: "button", kind: "message", T: /* @__PURE__ */ __name(() => PremiumMarketingComponentProperties_SubscriptionButton, "T") },
      {
        no: 7,
        name: "dismiss_key",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 8,
        name: "hero_art_video_link_light_theme",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 9,
        name: "hero_art_image_link_dark_theme",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 10,
        name: "hero_art_image_link_light_theme",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 11,
        name: "modal_top_pill",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 12,
        name: "body",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 13, name: "hero_art_video_subtitles", kind: "message", repeat: 1, T: /* @__PURE__ */ __name(() => PremiumMarketingComponentProperties_Subtitle, "T") },
      { no: 14, name: "storage", kind: "message", T: /* @__PURE__ */ __name(() => PremiumMarketingComponentProperties_Variant1Storage, "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.header = "";
    message.subheader = "";
    message.videoLink = "";
    message.helpArticleId = "";
    message.featureCards = [];
    message.dismissKey = "";
    message.heroArtVideoLinkLightTheme = "";
    message.heroArtImageLinkDarkTheme = "";
    message.heroArtImageLinkLightTheme = "";
    message.modalTopPill = "";
    message.body = "";
    message.heroArtVideoSubtitles = [];
    if (value !== void 0)
      (0, import_runtime3.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string header */
        1:
          message.header = reader.string();
          break;
        case /* string subheader */
        2:
          message.subheader = reader.string();
          break;
        case /* string video_link */
        3:
          message.videoLink = reader.string();
          break;
        case /* string help_article_id */
        4:
          message.helpArticleId = reader.string();
          break;
        case /* repeated discord_protos.discord_users.v1.PremiumMarketingComponentProperties.FeatureCard feature_cards */
        5:
          message.featureCards.push(PremiumMarketingComponentProperties_FeatureCard.internalBinaryRead(reader, reader.uint32(), options));
          break;
        case /* optional discord_protos.discord_users.v1.PremiumMarketingComponentProperties.SubscriptionButton button */
        6:
          message.button = PremiumMarketingComponentProperties_SubscriptionButton.internalBinaryRead(reader, reader.uint32(), options, message.button);
          break;
        case /* string dismiss_key */
        7:
          message.dismissKey = reader.string();
          break;
        case /* string hero_art_video_link_light_theme */
        8:
          message.heroArtVideoLinkLightTheme = reader.string();
          break;
        case /* string hero_art_image_link_dark_theme */
        9:
          message.heroArtImageLinkDarkTheme = reader.string();
          break;
        case /* string hero_art_image_link_light_theme */
        10:
          message.heroArtImageLinkLightTheme = reader.string();
          break;
        case /* string modal_top_pill */
        11:
          message.modalTopPill = reader.string();
          break;
        case /* string body */
        12:
          message.body = reader.string();
          break;
        case /* repeated discord_protos.discord_users.v1.PremiumMarketingComponentProperties.Subtitle hero_art_video_subtitles */
        13:
          message.heroArtVideoSubtitles.push(PremiumMarketingComponentProperties_Subtitle.internalBinaryRead(reader, reader.uint32(), options));
          break;
        case /* optional discord_protos.discord_users.v1.PremiumMarketingComponentProperties.Variant1Storage storage */
        14:
          message.storage = PremiumMarketingComponentProperties_Variant1Storage.internalBinaryRead(reader, reader.uint32(), options, message.storage);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.header !== "")
      writer.tag(1, import_runtime.WireType.LengthDelimited).string(message.header);
    if (message.subheader !== "")
      writer.tag(2, import_runtime.WireType.LengthDelimited).string(message.subheader);
    if (message.videoLink !== "")
      writer.tag(3, import_runtime.WireType.LengthDelimited).string(message.videoLink);
    if (message.helpArticleId !== "")
      writer.tag(4, import_runtime.WireType.LengthDelimited).string(message.helpArticleId);
    for (let i = 0; i < message.featureCards.length; i++)
      PremiumMarketingComponentProperties_FeatureCard.internalBinaryWrite(message.featureCards[i], writer.tag(5, import_runtime.WireType.LengthDelimited).fork(), options).join();
    if (message.button)
      PremiumMarketingComponentProperties_SubscriptionButton.internalBinaryWrite(message.button, writer.tag(6, import_runtime.WireType.LengthDelimited).fork(), options).join();
    if (message.dismissKey !== "")
      writer.tag(7, import_runtime.WireType.LengthDelimited).string(message.dismissKey);
    if (message.heroArtVideoLinkLightTheme !== "")
      writer.tag(8, import_runtime.WireType.LengthDelimited).string(message.heroArtVideoLinkLightTheme);
    if (message.heroArtImageLinkDarkTheme !== "")
      writer.tag(9, import_runtime.WireType.LengthDelimited).string(message.heroArtImageLinkDarkTheme);
    if (message.heroArtImageLinkLightTheme !== "")
      writer.tag(10, import_runtime.WireType.LengthDelimited).string(message.heroArtImageLinkLightTheme);
    if (message.modalTopPill !== "")
      writer.tag(11, import_runtime.WireType.LengthDelimited).string(message.modalTopPill);
    if (message.body !== "")
      writer.tag(12, import_runtime.WireType.LengthDelimited).string(message.body);
    for (let i = 0; i < message.heroArtVideoSubtitles.length; i++)
      PremiumMarketingComponentProperties_Subtitle.internalBinaryWrite(message.heroArtVideoSubtitles[i], writer.tag(13, import_runtime.WireType.LengthDelimited).fork(), options).join();
    if (message.storage)
      PremiumMarketingComponentProperties_Variant1Storage.internalBinaryWrite(message.storage, writer.tag(14, import_runtime.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties = new PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties$Type();

// DiscordProtos/src/proto/FrecencyUserSettings.ts
var import_runtime6 = require("@protobuf-ts/runtime");
var import_runtime7 = require("@protobuf-ts/runtime");
var import_runtime8 = require("@protobuf-ts/runtime");
var import_runtime9 = require("@protobuf-ts/runtime");
var FrecencyUserSettings_GIFType = /* @__PURE__ */ ((FrecencyUserSettings_GIFType2) => {
  FrecencyUserSettings_GIFType2[FrecencyUserSettings_GIFType2["GIFTYPE_NONE"] = 0] = "GIFTYPE_NONE";
  FrecencyUserSettings_GIFType2[FrecencyUserSettings_GIFType2["GIFTYPE_IMAGE"] = 1] = "GIFTYPE_IMAGE";
  FrecencyUserSettings_GIFType2[FrecencyUserSettings_GIFType2["GIFTYPE_VIDEO"] = 2] = "GIFTYPE_VIDEO";
  return FrecencyUserSettings_GIFType2;
})(FrecencyUserSettings_GIFType || {});
var FrecencyUserSettings$Type = class extends import_runtime9.MessageType {
  static {
    __name(this, "FrecencyUserSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.FrecencyUserSettings", [
      { no: 1, name: "versions", kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_Versions, "T") },
      { no: 2, name: "favorite_gifs", kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_FavoriteGIFs, "T") },
      { no: 3, name: "favorite_stickers", kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_FavoriteStickers, "T") },
      { no: 4, name: "sticker_frecency", kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_StickerFrecency, "T") },
      { no: 5, name: "favorite_emojis", kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_FavoriteEmojis, "T") },
      { no: 6, name: "emoji_frecency", kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_EmojiFrecency, "T") },
      { no: 7, name: "application_command_frecency", kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_ApplicationCommandFrecency, "T") },
      { no: 8, name: "favorite_soundboard_sounds", kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_FavoriteSoundboardSounds, "T") },
      { no: 9, name: "application_frecency", kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_ApplicationFrecency, "T") },
      { no: 10, name: "heard_sound_frecency", kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_HeardSoundFrecency, "T") },
      { no: 11, name: "played_sound_frecency", kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_PlayedSoundFrecency, "T") },
      { no: 12, name: "guild_and_channel_frecency", kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_GuildAndChannelFrecency, "T") },
      { no: 13, name: "emoji_reaction_frecency", kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_EmojiFrecency, "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    if (value !== void 0)
      (0, import_runtime8.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional discord_protos.discord_users.v1.FrecencyUserSettings.Versions versions */
        1:
          message.versions = FrecencyUserSettings_Versions.internalBinaryRead(reader, reader.uint32(), options, message.versions);
          break;
        case /* optional discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteGIFs favorite_gifs */
        2:
          message.favoriteGifs = FrecencyUserSettings_FavoriteGIFs.internalBinaryRead(reader, reader.uint32(), options, message.favoriteGifs);
          break;
        case /* optional discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteStickers favorite_stickers */
        3:
          message.favoriteStickers = FrecencyUserSettings_FavoriteStickers.internalBinaryRead(reader, reader.uint32(), options, message.favoriteStickers);
          break;
        case /* optional discord_protos.discord_users.v1.FrecencyUserSettings.StickerFrecency sticker_frecency */
        4:
          message.stickerFrecency = FrecencyUserSettings_StickerFrecency.internalBinaryRead(reader, reader.uint32(), options, message.stickerFrecency);
          break;
        case /* optional discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteEmojis favorite_emojis */
        5:
          message.favoriteEmojis = FrecencyUserSettings_FavoriteEmojis.internalBinaryRead(reader, reader.uint32(), options, message.favoriteEmojis);
          break;
        case /* optional discord_protos.discord_users.v1.FrecencyUserSettings.EmojiFrecency emoji_frecency */
        6:
          message.emojiFrecency = FrecencyUserSettings_EmojiFrecency.internalBinaryRead(reader, reader.uint32(), options, message.emojiFrecency);
          break;
        case /* optional discord_protos.discord_users.v1.FrecencyUserSettings.ApplicationCommandFrecency application_command_frecency */
        7:
          message.applicationCommandFrecency = FrecencyUserSettings_ApplicationCommandFrecency.internalBinaryRead(reader, reader.uint32(), options, message.applicationCommandFrecency);
          break;
        case /* optional discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteSoundboardSounds favorite_soundboard_sounds */
        8:
          message.favoriteSoundboardSounds = FrecencyUserSettings_FavoriteSoundboardSounds.internalBinaryRead(reader, reader.uint32(), options, message.favoriteSoundboardSounds);
          break;
        case /* optional discord_protos.discord_users.v1.FrecencyUserSettings.ApplicationFrecency application_frecency */
        9:
          message.applicationFrecency = FrecencyUserSettings_ApplicationFrecency.internalBinaryRead(reader, reader.uint32(), options, message.applicationFrecency);
          break;
        case /* optional discord_protos.discord_users.v1.FrecencyUserSettings.HeardSoundFrecency heard_sound_frecency */
        10:
          message.heardSoundFrecency = FrecencyUserSettings_HeardSoundFrecency.internalBinaryRead(reader, reader.uint32(), options, message.heardSoundFrecency);
          break;
        case /* optional discord_protos.discord_users.v1.FrecencyUserSettings.PlayedSoundFrecency played_sound_frecency */
        11:
          message.playedSoundFrecency = FrecencyUserSettings_PlayedSoundFrecency.internalBinaryRead(reader, reader.uint32(), options, message.playedSoundFrecency);
          break;
        case /* optional discord_protos.discord_users.v1.FrecencyUserSettings.GuildAndChannelFrecency guild_and_channel_frecency */
        12:
          message.guildAndChannelFrecency = FrecencyUserSettings_GuildAndChannelFrecency.internalBinaryRead(reader, reader.uint32(), options, message.guildAndChannelFrecency);
          break;
        case /* optional discord_protos.discord_users.v1.FrecencyUserSettings.EmojiFrecency emoji_reaction_frecency */
        13:
          message.emojiReactionFrecency = FrecencyUserSettings_EmojiFrecency.internalBinaryRead(reader, reader.uint32(), options, message.emojiReactionFrecency);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime7.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.versions)
      FrecencyUserSettings_Versions.internalBinaryWrite(message.versions, writer.tag(1, import_runtime6.WireType.LengthDelimited).fork(), options).join();
    if (message.favoriteGifs)
      FrecencyUserSettings_FavoriteGIFs.internalBinaryWrite(message.favoriteGifs, writer.tag(2, import_runtime6.WireType.LengthDelimited).fork(), options).join();
    if (message.favoriteStickers)
      FrecencyUserSettings_FavoriteStickers.internalBinaryWrite(message.favoriteStickers, writer.tag(3, import_runtime6.WireType.LengthDelimited).fork(), options).join();
    if (message.stickerFrecency)
      FrecencyUserSettings_StickerFrecency.internalBinaryWrite(message.stickerFrecency, writer.tag(4, import_runtime6.WireType.LengthDelimited).fork(), options).join();
    if (message.favoriteEmojis)
      FrecencyUserSettings_FavoriteEmojis.internalBinaryWrite(message.favoriteEmojis, writer.tag(5, import_runtime6.WireType.LengthDelimited).fork(), options).join();
    if (message.emojiFrecency)
      FrecencyUserSettings_EmojiFrecency.internalBinaryWrite(message.emojiFrecency, writer.tag(6, import_runtime6.WireType.LengthDelimited).fork(), options).join();
    if (message.applicationCommandFrecency)
      FrecencyUserSettings_ApplicationCommandFrecency.internalBinaryWrite(message.applicationCommandFrecency, writer.tag(7, import_runtime6.WireType.LengthDelimited).fork(), options).join();
    if (message.favoriteSoundboardSounds)
      FrecencyUserSettings_FavoriteSoundboardSounds.internalBinaryWrite(message.favoriteSoundboardSounds, writer.tag(8, import_runtime6.WireType.LengthDelimited).fork(), options).join();
    if (message.applicationFrecency)
      FrecencyUserSettings_ApplicationFrecency.internalBinaryWrite(message.applicationFrecency, writer.tag(9, import_runtime6.WireType.LengthDelimited).fork(), options).join();
    if (message.heardSoundFrecency)
      FrecencyUserSettings_HeardSoundFrecency.internalBinaryWrite(message.heardSoundFrecency, writer.tag(10, import_runtime6.WireType.LengthDelimited).fork(), options).join();
    if (message.playedSoundFrecency)
      FrecencyUserSettings_PlayedSoundFrecency.internalBinaryWrite(message.playedSoundFrecency, writer.tag(11, import_runtime6.WireType.LengthDelimited).fork(), options).join();
    if (message.guildAndChannelFrecency)
      FrecencyUserSettings_GuildAndChannelFrecency.internalBinaryWrite(message.guildAndChannelFrecency, writer.tag(12, import_runtime6.WireType.LengthDelimited).fork(), options).join();
    if (message.emojiReactionFrecency)
      FrecencyUserSettings_EmojiFrecency.internalBinaryWrite(message.emojiReactionFrecency, writer.tag(13, import_runtime6.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime7.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var FrecencyUserSettings = new FrecencyUserSettings$Type();
var FrecencyUserSettings_Versions$Type = class extends import_runtime9.MessageType {
  static {
    __name(this, "FrecencyUserSettings_Versions$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.FrecencyUserSettings.Versions", [
      {
        no: 1,
        name: "client_version",
        kind: "scalar",
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 2,
        name: "server_version",
        kind: "scalar",
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 3,
        name: "data_version",
        kind: "scalar",
        T: 13
        /*ScalarType.UINT32*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.clientVersion = 0;
    message.serverVersion = 0;
    message.dataVersion = 0;
    if (value !== void 0)
      (0, import_runtime8.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* uint32 client_version */
        1:
          message.clientVersion = reader.uint32();
          break;
        case /* uint32 server_version */
        2:
          message.serverVersion = reader.uint32();
          break;
        case /* uint32 data_version */
        3:
          message.dataVersion = reader.uint32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime7.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.clientVersion !== 0)
      writer.tag(1, import_runtime6.WireType.Varint).uint32(message.clientVersion);
    if (message.serverVersion !== 0)
      writer.tag(2, import_runtime6.WireType.Varint).uint32(message.serverVersion);
    if (message.dataVersion !== 0)
      writer.tag(3, import_runtime6.WireType.Varint).uint32(message.dataVersion);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime7.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var FrecencyUserSettings_Versions = new FrecencyUserSettings_Versions$Type();
var FrecencyUserSettings_FavoriteGIF$Type = class extends import_runtime9.MessageType {
  static {
    __name(this, "FrecencyUserSettings_FavoriteGIF$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteGIF", [
      { no: 1, name: "format", kind: "enum", T: /* @__PURE__ */ __name(() => ["discord_protos.discord_users.v1.FrecencyUserSettings.GIFType", FrecencyUserSettings_GIFType], "T") },
      {
        no: 2,
        name: "src",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 3,
        name: "width",
        kind: "scalar",
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 4,
        name: "height",
        kind: "scalar",
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 5,
        name: "order",
        kind: "scalar",
        T: 13
        /*ScalarType.UINT32*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.format = 0;
    message.src = "";
    message.width = 0;
    message.height = 0;
    message.order = 0;
    if (value !== void 0)
      (0, import_runtime8.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* discord_protos.discord_users.v1.FrecencyUserSettings.GIFType format */
        1:
          message.format = reader.int32();
          break;
        case /* string src */
        2:
          message.src = reader.string();
          break;
        case /* uint32 width */
        3:
          message.width = reader.uint32();
          break;
        case /* uint32 height */
        4:
          message.height = reader.uint32();
          break;
        case /* uint32 order */
        5:
          message.order = reader.uint32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime7.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.format !== 0)
      writer.tag(1, import_runtime6.WireType.Varint).int32(message.format);
    if (message.src !== "")
      writer.tag(2, import_runtime6.WireType.LengthDelimited).string(message.src);
    if (message.width !== 0)
      writer.tag(3, import_runtime6.WireType.Varint).uint32(message.width);
    if (message.height !== 0)
      writer.tag(4, import_runtime6.WireType.Varint).uint32(message.height);
    if (message.order !== 0)
      writer.tag(5, import_runtime6.WireType.Varint).uint32(message.order);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime7.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var FrecencyUserSettings_FavoriteGIF = new FrecencyUserSettings_FavoriteGIF$Type();
var FrecencyUserSettings_FavoriteGIFs$Type = class extends import_runtime9.MessageType {
  static {
    __name(this, "FrecencyUserSettings_FavoriteGIFs$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteGIFs", [
      { no: 1, name: "gifs", kind: "map", K: 9, V: { kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_FavoriteGIF, "T") } },
      {
        no: 2,
        name: "hide_tooltip",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.gifs = {};
    message.hideTooltip = false;
    if (value !== void 0)
      (0, import_runtime8.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* map<string, discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteGIF> gifs */
        1:
          this.binaryReadMap1(message.gifs, reader, options);
          break;
        case /* bool hide_tooltip */
        2:
          message.hideTooltip = reader.bool();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime7.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  binaryReadMap1(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.string();
          break;
        case 2:
          val = FrecencyUserSettings_FavoriteGIF.internalBinaryRead(reader, reader.uint32(), options);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteGIFs.gifs");
      }
    }
    map[key ?? ""] = val ?? FrecencyUserSettings_FavoriteGIF.create();
  }
  internalBinaryWrite(message, writer, options) {
    for (let k of globalThis.Object.keys(message.gifs)) {
      writer.tag(1, import_runtime6.WireType.LengthDelimited).fork().tag(1, import_runtime6.WireType.LengthDelimited).string(k);
      writer.tag(2, import_runtime6.WireType.LengthDelimited).fork();
      FrecencyUserSettings_FavoriteGIF.internalBinaryWrite(message.gifs[k], writer, options);
      writer.join().join();
    }
    if (message.hideTooltip !== false)
      writer.tag(2, import_runtime6.WireType.Varint).bool(message.hideTooltip);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime7.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var FrecencyUserSettings_FavoriteGIFs = new FrecencyUserSettings_FavoriteGIFs$Type();
var FrecencyUserSettings_FavoriteStickers$Type = class extends import_runtime9.MessageType {
  static {
    __name(this, "FrecencyUserSettings_FavoriteStickers$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteStickers", [
      {
        no: 1,
        name: "sticker_ids",
        kind: "scalar",
        repeat: 1,
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.stickerIds = [];
    if (value !== void 0)
      (0, import_runtime8.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* repeated fixed64 sticker_ids */
        1:
          if (wireType === import_runtime6.WireType.LengthDelimited)
            for (let e = reader.int32() + reader.pos; reader.pos < e; )
              message.stickerIds.push(reader.fixed64().toBigInt());
          else
            message.stickerIds.push(reader.fixed64().toBigInt());
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime7.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.stickerIds.length) {
      writer.tag(1, import_runtime6.WireType.LengthDelimited).fork();
      for (let i = 0; i < message.stickerIds.length; i++)
        writer.fixed64(message.stickerIds[i]);
      writer.join();
    }
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime7.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var FrecencyUserSettings_FavoriteStickers = new FrecencyUserSettings_FavoriteStickers$Type();
var FrecencyUserSettings_FrecencyItem$Type = class extends import_runtime9.MessageType {
  static {
    __name(this, "FrecencyUserSettings_FrecencyItem$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyItem", [
      {
        no: 1,
        name: "total_uses",
        kind: "scalar",
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 2,
        name: "recent_uses",
        kind: "scalar",
        repeat: 1,
        T: 4,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 3,
        name: "frecency",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      },
      {
        no: 4,
        name: "score",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.totalUses = 0;
    message.recentUses = [];
    message.frecency = 0;
    message.score = 0;
    if (value !== void 0)
      (0, import_runtime8.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* uint32 total_uses */
        1:
          message.totalUses = reader.uint32();
          break;
        case /* repeated uint64 recent_uses */
        2:
          if (wireType === import_runtime6.WireType.LengthDelimited)
            for (let e = reader.int32() + reader.pos; reader.pos < e; )
              message.recentUses.push(reader.uint64().toBigInt());
          else
            message.recentUses.push(reader.uint64().toBigInt());
          break;
        case /* int32 frecency */
        3:
          message.frecency = reader.int32();
          break;
        case /* int32 score */
        4:
          message.score = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime7.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.totalUses !== 0)
      writer.tag(1, import_runtime6.WireType.Varint).uint32(message.totalUses);
    if (message.recentUses.length) {
      writer.tag(2, import_runtime6.WireType.LengthDelimited).fork();
      for (let i = 0; i < message.recentUses.length; i++)
        writer.uint64(message.recentUses[i]);
      writer.join();
    }
    if (message.frecency !== 0)
      writer.tag(3, import_runtime6.WireType.Varint).int32(message.frecency);
    if (message.score !== 0)
      writer.tag(4, import_runtime6.WireType.Varint).int32(message.score);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime7.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var FrecencyUserSettings_FrecencyItem = new FrecencyUserSettings_FrecencyItem$Type();
var FrecencyUserSettings_StickerFrecency$Type = class extends import_runtime9.MessageType {
  static {
    __name(this, "FrecencyUserSettings_StickerFrecency$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.FrecencyUserSettings.StickerFrecency", [
      { no: 1, name: "stickers", kind: "map", K: 6, V: { kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_FrecencyItem, "T") } }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.stickers = {};
    if (value !== void 0)
      (0, import_runtime8.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* map<fixed64, discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyItem> stickers */
        1:
          this.binaryReadMap1(message.stickers, reader, options);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime7.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  binaryReadMap1(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.fixed64().toString();
          break;
        case 2:
          val = FrecencyUserSettings_FrecencyItem.internalBinaryRead(reader, reader.uint32(), options);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.FrecencyUserSettings.StickerFrecency.stickers");
      }
    }
    map[key ?? "0"] = val ?? FrecencyUserSettings_FrecencyItem.create();
  }
  internalBinaryWrite(message, writer, options) {
    for (let k of globalThis.Object.keys(message.stickers)) {
      writer.tag(1, import_runtime6.WireType.LengthDelimited).fork().tag(1, import_runtime6.WireType.Bit64).fixed64(k);
      writer.tag(2, import_runtime6.WireType.LengthDelimited).fork();
      FrecencyUserSettings_FrecencyItem.internalBinaryWrite(message.stickers[k], writer, options);
      writer.join().join();
    }
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime7.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var FrecencyUserSettings_StickerFrecency = new FrecencyUserSettings_StickerFrecency$Type();
var FrecencyUserSettings_FavoriteEmojis$Type = class extends import_runtime9.MessageType {
  static {
    __name(this, "FrecencyUserSettings_FavoriteEmojis$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteEmojis", [
      {
        no: 1,
        name: "emojis",
        kind: "scalar",
        repeat: 2,
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.emojis = [];
    if (value !== void 0)
      (0, import_runtime8.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* repeated string emojis */
        1:
          message.emojis.push(reader.string());
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime7.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    for (let i = 0; i < message.emojis.length; i++)
      writer.tag(1, import_runtime6.WireType.LengthDelimited).string(message.emojis[i]);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime7.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var FrecencyUserSettings_FavoriteEmojis = new FrecencyUserSettings_FavoriteEmojis$Type();
var FrecencyUserSettings_EmojiFrecency$Type = class extends import_runtime9.MessageType {
  static {
    __name(this, "FrecencyUserSettings_EmojiFrecency$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.FrecencyUserSettings.EmojiFrecency", [
      { no: 1, name: "emojis", kind: "map", K: 9, V: { kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_FrecencyItem, "T") } }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.emojis = {};
    if (value !== void 0)
      (0, import_runtime8.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* map<string, discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyItem> emojis */
        1:
          this.binaryReadMap1(message.emojis, reader, options);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime7.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  binaryReadMap1(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.string();
          break;
        case 2:
          val = FrecencyUserSettings_FrecencyItem.internalBinaryRead(reader, reader.uint32(), options);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.FrecencyUserSettings.EmojiFrecency.emojis");
      }
    }
    map[key ?? ""] = val ?? FrecencyUserSettings_FrecencyItem.create();
  }
  internalBinaryWrite(message, writer, options) {
    for (let k of globalThis.Object.keys(message.emojis)) {
      writer.tag(1, import_runtime6.WireType.LengthDelimited).fork().tag(1, import_runtime6.WireType.LengthDelimited).string(k);
      writer.tag(2, import_runtime6.WireType.LengthDelimited).fork();
      FrecencyUserSettings_FrecencyItem.internalBinaryWrite(message.emojis[k], writer, options);
      writer.join().join();
    }
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime7.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var FrecencyUserSettings_EmojiFrecency = new FrecencyUserSettings_EmojiFrecency$Type();
var FrecencyUserSettings_ApplicationCommandFrecency$Type = class extends import_runtime9.MessageType {
  static {
    __name(this, "FrecencyUserSettings_ApplicationCommandFrecency$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.FrecencyUserSettings.ApplicationCommandFrecency", [
      { no: 1, name: "application_commands", kind: "map", K: 9, V: { kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_FrecencyItem, "T") } }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.applicationCommands = {};
    if (value !== void 0)
      (0, import_runtime8.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* map<string, discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyItem> application_commands */
        1:
          this.binaryReadMap1(message.applicationCommands, reader, options);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime7.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  binaryReadMap1(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.string();
          break;
        case 2:
          val = FrecencyUserSettings_FrecencyItem.internalBinaryRead(reader, reader.uint32(), options);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.FrecencyUserSettings.ApplicationCommandFrecency.application_commands");
      }
    }
    map[key ?? ""] = val ?? FrecencyUserSettings_FrecencyItem.create();
  }
  internalBinaryWrite(message, writer, options) {
    for (let k of globalThis.Object.keys(message.applicationCommands)) {
      writer.tag(1, import_runtime6.WireType.LengthDelimited).fork().tag(1, import_runtime6.WireType.LengthDelimited).string(k);
      writer.tag(2, import_runtime6.WireType.LengthDelimited).fork();
      FrecencyUserSettings_FrecencyItem.internalBinaryWrite(message.applicationCommands[k], writer, options);
      writer.join().join();
    }
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime7.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var FrecencyUserSettings_ApplicationCommandFrecency = new FrecencyUserSettings_ApplicationCommandFrecency$Type();
var FrecencyUserSettings_FavoriteSoundboardSounds$Type = class extends import_runtime9.MessageType {
  static {
    __name(this, "FrecencyUserSettings_FavoriteSoundboardSounds$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.FrecencyUserSettings.FavoriteSoundboardSounds", [
      {
        no: 1,
        name: "sound_ids",
        kind: "scalar",
        repeat: 1,
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.soundIds = [];
    if (value !== void 0)
      (0, import_runtime8.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* repeated fixed64 sound_ids */
        1:
          if (wireType === import_runtime6.WireType.LengthDelimited)
            for (let e = reader.int32() + reader.pos; reader.pos < e; )
              message.soundIds.push(reader.fixed64().toBigInt());
          else
            message.soundIds.push(reader.fixed64().toBigInt());
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime7.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.soundIds.length) {
      writer.tag(1, import_runtime6.WireType.LengthDelimited).fork();
      for (let i = 0; i < message.soundIds.length; i++)
        writer.fixed64(message.soundIds[i]);
      writer.join();
    }
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime7.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var FrecencyUserSettings_FavoriteSoundboardSounds = new FrecencyUserSettings_FavoriteSoundboardSounds$Type();
var FrecencyUserSettings_ApplicationFrecency$Type = class extends import_runtime9.MessageType {
  static {
    __name(this, "FrecencyUserSettings_ApplicationFrecency$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.FrecencyUserSettings.ApplicationFrecency", [
      { no: 1, name: "applications", kind: "map", K: 9, V: { kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_FrecencyItem, "T") } }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.applications = {};
    if (value !== void 0)
      (0, import_runtime8.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* map<string, discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyItem> applications */
        1:
          this.binaryReadMap1(message.applications, reader, options);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime7.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  binaryReadMap1(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.string();
          break;
        case 2:
          val = FrecencyUserSettings_FrecencyItem.internalBinaryRead(reader, reader.uint32(), options);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.FrecencyUserSettings.ApplicationFrecency.applications");
      }
    }
    map[key ?? ""] = val ?? FrecencyUserSettings_FrecencyItem.create();
  }
  internalBinaryWrite(message, writer, options) {
    for (let k of globalThis.Object.keys(message.applications)) {
      writer.tag(1, import_runtime6.WireType.LengthDelimited).fork().tag(1, import_runtime6.WireType.LengthDelimited).string(k);
      writer.tag(2, import_runtime6.WireType.LengthDelimited).fork();
      FrecencyUserSettings_FrecencyItem.internalBinaryWrite(message.applications[k], writer, options);
      writer.join().join();
    }
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime7.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var FrecencyUserSettings_ApplicationFrecency = new FrecencyUserSettings_ApplicationFrecency$Type();
var FrecencyUserSettings_HeardSoundFrecency$Type = class extends import_runtime9.MessageType {
  static {
    __name(this, "FrecencyUserSettings_HeardSoundFrecency$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.FrecencyUserSettings.HeardSoundFrecency", [
      { no: 1, name: "heard_sounds", kind: "map", K: 9, V: { kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_FrecencyItem, "T") } }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.heardSounds = {};
    if (value !== void 0)
      (0, import_runtime8.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* map<string, discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyItem> heard_sounds */
        1:
          this.binaryReadMap1(message.heardSounds, reader, options);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime7.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  binaryReadMap1(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.string();
          break;
        case 2:
          val = FrecencyUserSettings_FrecencyItem.internalBinaryRead(reader, reader.uint32(), options);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.FrecencyUserSettings.HeardSoundFrecency.heard_sounds");
      }
    }
    map[key ?? ""] = val ?? FrecencyUserSettings_FrecencyItem.create();
  }
  internalBinaryWrite(message, writer, options) {
    for (let k of globalThis.Object.keys(message.heardSounds)) {
      writer.tag(1, import_runtime6.WireType.LengthDelimited).fork().tag(1, import_runtime6.WireType.LengthDelimited).string(k);
      writer.tag(2, import_runtime6.WireType.LengthDelimited).fork();
      FrecencyUserSettings_FrecencyItem.internalBinaryWrite(message.heardSounds[k], writer, options);
      writer.join().join();
    }
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime7.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var FrecencyUserSettings_HeardSoundFrecency = new FrecencyUserSettings_HeardSoundFrecency$Type();
var FrecencyUserSettings_PlayedSoundFrecency$Type = class extends import_runtime9.MessageType {
  static {
    __name(this, "FrecencyUserSettings_PlayedSoundFrecency$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.FrecencyUserSettings.PlayedSoundFrecency", [
      { no: 1, name: "played_sounds", kind: "map", K: 9, V: { kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_FrecencyItem, "T") } }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.playedSounds = {};
    if (value !== void 0)
      (0, import_runtime8.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* map<string, discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyItem> played_sounds */
        1:
          this.binaryReadMap1(message.playedSounds, reader, options);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime7.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  binaryReadMap1(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.string();
          break;
        case 2:
          val = FrecencyUserSettings_FrecencyItem.internalBinaryRead(reader, reader.uint32(), options);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.FrecencyUserSettings.PlayedSoundFrecency.played_sounds");
      }
    }
    map[key ?? ""] = val ?? FrecencyUserSettings_FrecencyItem.create();
  }
  internalBinaryWrite(message, writer, options) {
    for (let k of globalThis.Object.keys(message.playedSounds)) {
      writer.tag(1, import_runtime6.WireType.LengthDelimited).fork().tag(1, import_runtime6.WireType.LengthDelimited).string(k);
      writer.tag(2, import_runtime6.WireType.LengthDelimited).fork();
      FrecencyUserSettings_FrecencyItem.internalBinaryWrite(message.playedSounds[k], writer, options);
      writer.join().join();
    }
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime7.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var FrecencyUserSettings_PlayedSoundFrecency = new FrecencyUserSettings_PlayedSoundFrecency$Type();
var FrecencyUserSettings_GuildAndChannelFrecency$Type = class extends import_runtime9.MessageType {
  static {
    __name(this, "FrecencyUserSettings_GuildAndChannelFrecency$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.FrecencyUserSettings.GuildAndChannelFrecency", [
      { no: 1, name: "guild_and_channels", kind: "map", K: 6, V: { kind: "message", T: /* @__PURE__ */ __name(() => FrecencyUserSettings_FrecencyItem, "T") } }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.guildAndChannels = {};
    if (value !== void 0)
      (0, import_runtime8.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* map<fixed64, discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyItem> guild_and_channels */
        1:
          this.binaryReadMap1(message.guildAndChannels, reader, options);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime7.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  binaryReadMap1(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.fixed64().toString();
          break;
        case 2:
          val = FrecencyUserSettings_FrecencyItem.internalBinaryRead(reader, reader.uint32(), options);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.FrecencyUserSettings.GuildAndChannelFrecency.guild_and_channels");
      }
    }
    map[key ?? "0"] = val ?? FrecencyUserSettings_FrecencyItem.create();
  }
  internalBinaryWrite(message, writer, options) {
    for (let k of globalThis.Object.keys(message.guildAndChannels)) {
      writer.tag(1, import_runtime6.WireType.LengthDelimited).fork().tag(1, import_runtime6.WireType.Bit64).fixed64(k);
      writer.tag(2, import_runtime6.WireType.LengthDelimited).fork();
      FrecencyUserSettings_FrecencyItem.internalBinaryWrite(message.guildAndChannels[k], writer, options);
      writer.join().join();
    }
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime7.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var FrecencyUserSettings_GuildAndChannelFrecency = new FrecencyUserSettings_GuildAndChannelFrecency$Type();

// DiscordProtos/src/proto/PreloadedUserSettings.ts
var import_runtime25 = require("@protobuf-ts/runtime");
var import_runtime26 = require("@protobuf-ts/runtime");
var import_runtime27 = require("@protobuf-ts/runtime");
var import_runtime28 = require("@protobuf-ts/runtime");

// DiscordProtos/src/proto/google/protobuf/wrappers.ts
var import_runtime11 = require("@protobuf-ts/runtime");
var import_runtime12 = require("@protobuf-ts/runtime");
var import_runtime13 = require("@protobuf-ts/runtime");
var import_runtime14 = require("@protobuf-ts/runtime");
var import_runtime15 = require("@protobuf-ts/runtime");
var import_runtime16 = require("@protobuf-ts/runtime");
var DoubleValue$Type = class extends import_runtime16.MessageType {
  static {
    __name(this, "DoubleValue$Type");
  }
  constructor() {
    super("google.protobuf.DoubleValue", [
      {
        no: 1,
        name: "value",
        kind: "scalar",
        T: 1
        /*ScalarType.DOUBLE*/
      }
    ]);
  }
  /**
   * Encode `DoubleValue` to JSON number.
   */
  internalJsonWrite(message, options) {
    return this.refJsonWriter.scalar(2, message.value, "value", false, true);
  }
  /**
   * Decode `DoubleValue` from JSON number.
   */
  internalJsonRead(json, options, target) {
    if (!target)
      target = this.create();
    target.value = this.refJsonReader.scalar(json, 1, void 0, "value");
    return target;
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.value = 0;
    if (value !== void 0)
      (0, import_runtime15.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* double value */
        1:
          message.value = reader.double();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime14.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.value !== 0)
      writer.tag(1, import_runtime13.WireType.Bit64).double(message.value);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime14.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var DoubleValue = new DoubleValue$Type();
var FloatValue$Type = class extends import_runtime16.MessageType {
  static {
    __name(this, "FloatValue$Type");
  }
  constructor() {
    super("google.protobuf.FloatValue", [
      {
        no: 1,
        name: "value",
        kind: "scalar",
        T: 2
        /*ScalarType.FLOAT*/
      }
    ]);
  }
  /**
   * Encode `FloatValue` to JSON number.
   */
  internalJsonWrite(message, options) {
    return this.refJsonWriter.scalar(1, message.value, "value", false, true);
  }
  /**
   * Decode `FloatValue` from JSON number.
   */
  internalJsonRead(json, options, target) {
    if (!target)
      target = this.create();
    target.value = this.refJsonReader.scalar(json, 1, void 0, "value");
    return target;
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.value = 0;
    if (value !== void 0)
      (0, import_runtime15.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* float value */
        1:
          message.value = reader.float();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime14.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.value !== 0)
      writer.tag(1, import_runtime13.WireType.Bit32).float(message.value);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime14.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var FloatValue = new FloatValue$Type();
var Int64Value$Type = class extends import_runtime16.MessageType {
  static {
    __name(this, "Int64Value$Type");
  }
  constructor() {
    super("google.protobuf.Int64Value", [
      {
        no: 1,
        name: "value",
        kind: "scalar",
        T: 3,
        L: 0
        /*LongType.BIGINT*/
      }
    ]);
  }
  /**
   * Encode `Int64Value` to JSON string.
   */
  internalJsonWrite(message, options) {
    return this.refJsonWriter.scalar(import_runtime11.ScalarType.INT64, message.value, "value", false, true);
  }
  /**
   * Decode `Int64Value` from JSON string.
   */
  internalJsonRead(json, options, target) {
    if (!target)
      target = this.create();
    target.value = this.refJsonReader.scalar(json, import_runtime11.ScalarType.INT64, import_runtime12.LongType.BIGINT, "value");
    return target;
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.value = 0n;
    if (value !== void 0)
      (0, import_runtime15.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* int64 value */
        1:
          message.value = reader.int64().toBigInt();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime14.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.value !== 0n)
      writer.tag(1, import_runtime13.WireType.Varint).int64(message.value);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime14.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var Int64Value = new Int64Value$Type();
var UInt64Value$Type = class extends import_runtime16.MessageType {
  static {
    __name(this, "UInt64Value$Type");
  }
  constructor() {
    super("google.protobuf.UInt64Value", [
      {
        no: 1,
        name: "value",
        kind: "scalar",
        T: 4,
        L: 0
        /*LongType.BIGINT*/
      }
    ]);
  }
  /**
   * Encode `UInt64Value` to JSON string.
   */
  internalJsonWrite(message, options) {
    return this.refJsonWriter.scalar(import_runtime11.ScalarType.UINT64, message.value, "value", false, true);
  }
  /**
   * Decode `UInt64Value` from JSON string.
   */
  internalJsonRead(json, options, target) {
    if (!target)
      target = this.create();
    target.value = this.refJsonReader.scalar(json, import_runtime11.ScalarType.UINT64, import_runtime12.LongType.BIGINT, "value");
    return target;
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.value = 0n;
    if (value !== void 0)
      (0, import_runtime15.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* uint64 value */
        1:
          message.value = reader.uint64().toBigInt();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime14.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.value !== 0n)
      writer.tag(1, import_runtime13.WireType.Varint).uint64(message.value);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime14.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var UInt64Value = new UInt64Value$Type();
var Int32Value$Type = class extends import_runtime16.MessageType {
  static {
    __name(this, "Int32Value$Type");
  }
  constructor() {
    super("google.protobuf.Int32Value", [
      {
        no: 1,
        name: "value",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      }
    ]);
  }
  /**
   * Encode `Int32Value` to JSON string.
   */
  internalJsonWrite(message, options) {
    return this.refJsonWriter.scalar(5, message.value, "value", false, true);
  }
  /**
   * Decode `Int32Value` from JSON string.
   */
  internalJsonRead(json, options, target) {
    if (!target)
      target = this.create();
    target.value = this.refJsonReader.scalar(json, 5, void 0, "value");
    return target;
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.value = 0;
    if (value !== void 0)
      (0, import_runtime15.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* int32 value */
        1:
          message.value = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime14.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.value !== 0)
      writer.tag(1, import_runtime13.WireType.Varint).int32(message.value);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime14.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var Int32Value = new Int32Value$Type();
var UInt32Value$Type = class extends import_runtime16.MessageType {
  static {
    __name(this, "UInt32Value$Type");
  }
  constructor() {
    super("google.protobuf.UInt32Value", [
      {
        no: 1,
        name: "value",
        kind: "scalar",
        T: 13
        /*ScalarType.UINT32*/
      }
    ]);
  }
  /**
   * Encode `UInt32Value` to JSON string.
   */
  internalJsonWrite(message, options) {
    return this.refJsonWriter.scalar(13, message.value, "value", false, true);
  }
  /**
   * Decode `UInt32Value` from JSON string.
   */
  internalJsonRead(json, options, target) {
    if (!target)
      target = this.create();
    target.value = this.refJsonReader.scalar(json, 13, void 0, "value");
    return target;
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.value = 0;
    if (value !== void 0)
      (0, import_runtime15.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* uint32 value */
        1:
          message.value = reader.uint32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime14.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.value !== 0)
      writer.tag(1, import_runtime13.WireType.Varint).uint32(message.value);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime14.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var UInt32Value = new UInt32Value$Type();
var BoolValue$Type = class extends import_runtime16.MessageType {
  static {
    __name(this, "BoolValue$Type");
  }
  constructor() {
    super("google.protobuf.BoolValue", [
      {
        no: 1,
        name: "value",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      }
    ]);
  }
  /**
   * Encode `BoolValue` to JSON bool.
   */
  internalJsonWrite(message, options) {
    return message.value;
  }
  /**
   * Decode `BoolValue` from JSON bool.
   */
  internalJsonRead(json, options, target) {
    if (!target)
      target = this.create();
    target.value = this.refJsonReader.scalar(json, 8, void 0, "value");
    return target;
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.value = false;
    if (value !== void 0)
      (0, import_runtime15.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool value */
        1:
          message.value = reader.bool();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime14.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.value !== false)
      writer.tag(1, import_runtime13.WireType.Varint).bool(message.value);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime14.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var BoolValue = new BoolValue$Type();
var StringValue$Type = class extends import_runtime16.MessageType {
  static {
    __name(this, "StringValue$Type");
  }
  constructor() {
    super("google.protobuf.StringValue", [
      {
        no: 1,
        name: "value",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  /**
   * Encode `StringValue` to JSON string.
   */
  internalJsonWrite(message, options) {
    return message.value;
  }
  /**
   * Decode `StringValue` from JSON string.
   */
  internalJsonRead(json, options, target) {
    if (!target)
      target = this.create();
    target.value = this.refJsonReader.scalar(json, 9, void 0, "value");
    return target;
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.value = "";
    if (value !== void 0)
      (0, import_runtime15.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string value */
        1:
          message.value = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime14.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.value !== "")
      writer.tag(1, import_runtime13.WireType.LengthDelimited).string(message.value);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime14.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var StringValue = new StringValue$Type();
var BytesValue$Type = class extends import_runtime16.MessageType {
  static {
    __name(this, "BytesValue$Type");
  }
  constructor() {
    super("google.protobuf.BytesValue", [
      {
        no: 1,
        name: "value",
        kind: "scalar",
        T: 12
        /*ScalarType.BYTES*/
      }
    ]);
  }
  /**
   * Encode `BytesValue` to JSON string.
   */
  internalJsonWrite(message, options) {
    return this.refJsonWriter.scalar(12, message.value, "value", false, true);
  }
  /**
   * Decode `BytesValue` from JSON string.
   */
  internalJsonRead(json, options, target) {
    if (!target)
      target = this.create();
    target.value = this.refJsonReader.scalar(json, 12, void 0, "value");
    return target;
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.value = new Uint8Array(0);
    if (value !== void 0)
      (0, import_runtime15.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bytes value */
        1:
          message.value = reader.bytes();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime14.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.value.length)
      writer.tag(1, import_runtime13.WireType.LengthDelimited).bytes(message.value);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime14.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var BytesValue = new BytesValue$Type();

// DiscordProtos/src/proto/google/protobuf/timestamp.ts
var import_runtime18 = require("@protobuf-ts/runtime");
var import_runtime19 = require("@protobuf-ts/runtime");
var import_runtime20 = require("@protobuf-ts/runtime");
var import_runtime21 = require("@protobuf-ts/runtime");
var import_runtime22 = require("@protobuf-ts/runtime");
var import_runtime23 = require("@protobuf-ts/runtime");
var Timestamp$Type = class extends import_runtime23.MessageType {
  static {
    __name(this, "Timestamp$Type");
  }
  constructor() {
    super("google.protobuf.Timestamp", [
      {
        no: 1,
        name: "seconds",
        kind: "scalar",
        T: 3,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 2,
        name: "nanos",
        kind: "scalar",
        T: 5
        /*ScalarType.INT32*/
      }
    ]);
  }
  /**
   * Creates a new `Timestamp` for the current time.
   */
  now() {
    const msg = this.create();
    const ms = Date.now();
    msg.seconds = import_runtime22.PbLong.from(Math.floor(ms / 1e3)).toBigInt();
    msg.nanos = ms % 1e3 * 1e6;
    return msg;
  }
  /**
   * Converts a `Timestamp` to a JavaScript Date.
   */
  toDate(message) {
    return new Date(import_runtime22.PbLong.from(message.seconds).toNumber() * 1e3 + Math.ceil(message.nanos / 1e6));
  }
  /**
   * Converts a JavaScript Date to a `Timestamp`.
   */
  fromDate(date) {
    const msg = this.create();
    const ms = date.getTime();
    msg.seconds = import_runtime22.PbLong.from(Math.floor(ms / 1e3)).toBigInt();
    msg.nanos = ms % 1e3 * 1e6;
    return msg;
  }
  /**
   * In JSON format, the `Timestamp` type is encoded as a string
   * in the RFC 3339 format.
   */
  internalJsonWrite(message, options) {
    let ms = import_runtime22.PbLong.from(message.seconds).toNumber() * 1e3;
    if (ms < Date.parse("0001-01-01T00:00:00Z") || ms > Date.parse("9999-12-31T23:59:59Z"))
      throw new Error("Unable to encode Timestamp to JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.");
    if (message.nanos < 0)
      throw new Error("Unable to encode invalid Timestamp to JSON. Nanos must not be negative.");
    let z = "Z";
    if (message.nanos > 0) {
      let nanosStr = (message.nanos + 1e9).toString().substring(1);
      if (nanosStr.substring(3) === "000000")
        z = "." + nanosStr.substring(0, 3) + "Z";
      else if (nanosStr.substring(6) === "000")
        z = "." + nanosStr.substring(0, 6) + "Z";
      else
        z = "." + nanosStr + "Z";
    }
    return new Date(ms).toISOString().replace(".000Z", z);
  }
  /**
   * In JSON format, the `Timestamp` type is encoded as a string
   * in the RFC 3339 format.
   */
  internalJsonRead(json, options, target) {
    if (typeof json !== "string")
      throw new Error("Unable to parse Timestamp from JSON " + (0, import_runtime21.typeofJsonValue)(json) + ".");
    let matches = json.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
    if (!matches)
      throw new Error("Unable to parse Timestamp from JSON. Invalid format.");
    let ms = Date.parse(matches[1] + "-" + matches[2] + "-" + matches[3] + "T" + matches[4] + ":" + matches[5] + ":" + matches[6] + (matches[8] ? matches[8] : "Z"));
    if (Number.isNaN(ms))
      throw new Error("Unable to parse Timestamp from JSON. Invalid value.");
    if (ms < Date.parse("0001-01-01T00:00:00Z") || ms > Date.parse("9999-12-31T23:59:59Z"))
      throw new globalThis.Error("Unable to parse Timestamp from JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.");
    if (!target)
      target = this.create();
    target.seconds = import_runtime22.PbLong.from(ms / 1e3).toBigInt();
    target.nanos = 0;
    if (matches[7])
      target.nanos = parseInt("1" + matches[7] + "0".repeat(9 - matches[7].length)) - 1e9;
    return target;
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.seconds = 0n;
    message.nanos = 0;
    if (value !== void 0)
      (0, import_runtime20.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* int64 seconds */
        1:
          message.seconds = reader.int64().toBigInt();
          break;
        case /* int32 nanos */
        2:
          message.nanos = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime19.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.seconds !== 0n)
      writer.tag(1, import_runtime18.WireType.Varint).int64(message.seconds);
    if (message.nanos !== 0)
      writer.tag(2, import_runtime18.WireType.Varint).int32(message.nanos);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime19.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var Timestamp = new Timestamp$Type();

// DiscordProtos/src/proto/PreloadedUserSettings.ts
var PreloadedUserSettings_InboxTab = /* @__PURE__ */ ((PreloadedUserSettings_InboxTab2) => {
  PreloadedUserSettings_InboxTab2[PreloadedUserSettings_InboxTab2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PreloadedUserSettings_InboxTab2[PreloadedUserSettings_InboxTab2["MENTIONS"] = 1] = "MENTIONS";
  PreloadedUserSettings_InboxTab2[PreloadedUserSettings_InboxTab2["UNREADS"] = 2] = "UNREADS";
  PreloadedUserSettings_InboxTab2[PreloadedUserSettings_InboxTab2["TODOS"] = 3] = "TODOS";
  PreloadedUserSettings_InboxTab2[PreloadedUserSettings_InboxTab2["FOR_YOU"] = 4] = "FOR_YOU";
  PreloadedUserSettings_InboxTab2[PreloadedUserSettings_InboxTab2["GAME_INVITES"] = 5] = "GAME_INVITES";
  PreloadedUserSettings_InboxTab2[PreloadedUserSettings_InboxTab2["BOOKMARKS"] = 6] = "BOOKMARKS";
  return PreloadedUserSettings_InboxTab2;
})(PreloadedUserSettings_InboxTab || {});
var PreloadedUserSettings_DmSpamFilterV2 = /* @__PURE__ */ ((PreloadedUserSettings_DmSpamFilterV22) => {
  PreloadedUserSettings_DmSpamFilterV22[PreloadedUserSettings_DmSpamFilterV22["DEFAULT_UNSET"] = 0] = "DEFAULT_UNSET";
  PreloadedUserSettings_DmSpamFilterV22[PreloadedUserSettings_DmSpamFilterV22["DISABLED"] = 1] = "DISABLED";
  PreloadedUserSettings_DmSpamFilterV22[PreloadedUserSettings_DmSpamFilterV22["NON_FRIENDS"] = 2] = "NON_FRIENDS";
  PreloadedUserSettings_DmSpamFilterV22[PreloadedUserSettings_DmSpamFilterV22["FRIENDS_AND_NON_FRIENDS"] = 3] = "FRIENDS_AND_NON_FRIENDS";
  return PreloadedUserSettings_DmSpamFilterV22;
})(PreloadedUserSettings_DmSpamFilterV2 || {});
var PreloadedUserSettings_ExplicitContentRedaction = /* @__PURE__ */ ((PreloadedUserSettings_ExplicitContentRedaction2) => {
  PreloadedUserSettings_ExplicitContentRedaction2[PreloadedUserSettings_ExplicitContentRedaction2["UNSET_EXPLICIT_CONTENT_REDACTION"] = 0] = "UNSET_EXPLICIT_CONTENT_REDACTION";
  PreloadedUserSettings_ExplicitContentRedaction2[PreloadedUserSettings_ExplicitContentRedaction2["SHOW"] = 1] = "SHOW";
  PreloadedUserSettings_ExplicitContentRedaction2[PreloadedUserSettings_ExplicitContentRedaction2["BLUR"] = 2] = "BLUR";
  PreloadedUserSettings_ExplicitContentRedaction2[PreloadedUserSettings_ExplicitContentRedaction2["BLOCK"] = 3] = "BLOCK";
  return PreloadedUserSettings_ExplicitContentRedaction2;
})(PreloadedUserSettings_ExplicitContentRedaction || {});
var PreloadedUserSettings_ReactionNotificationType = /* @__PURE__ */ ((PreloadedUserSettings_ReactionNotificationType2) => {
  PreloadedUserSettings_ReactionNotificationType2[PreloadedUserSettings_ReactionNotificationType2["NOTIFICATIONS_ENABLED"] = 0] = "NOTIFICATIONS_ENABLED";
  PreloadedUserSettings_ReactionNotificationType2[PreloadedUserSettings_ReactionNotificationType2["ONLY_DMS"] = 1] = "ONLY_DMS";
  PreloadedUserSettings_ReactionNotificationType2[PreloadedUserSettings_ReactionNotificationType2["NOTIFICATIONS_DISABLED"] = 2] = "NOTIFICATIONS_DISABLED";
  return PreloadedUserSettings_ReactionNotificationType2;
})(PreloadedUserSettings_ReactionNotificationType || {});
var PreloadedUserSettings_GuildActivityStatusRestrictionDefault = /* @__PURE__ */ ((PreloadedUserSettings_GuildActivityStatusRestrictionDefault2) => {
  PreloadedUserSettings_GuildActivityStatusRestrictionDefault2[PreloadedUserSettings_GuildActivityStatusRestrictionDefault2["OFF"] = 0] = "OFF";
  PreloadedUserSettings_GuildActivityStatusRestrictionDefault2[PreloadedUserSettings_GuildActivityStatusRestrictionDefault2["ON_FOR_LARGE_GUILDS"] = 1] = "ON_FOR_LARGE_GUILDS";
  return PreloadedUserSettings_GuildActivityStatusRestrictionDefault2;
})(PreloadedUserSettings_GuildActivityStatusRestrictionDefault || {});
var PreloadedUserSettings_GuildsLeaderboardOptOutDefault = /* @__PURE__ */ ((PreloadedUserSettings_GuildsLeaderboardOptOutDefault2) => {
  PreloadedUserSettings_GuildsLeaderboardOptOutDefault2[PreloadedUserSettings_GuildsLeaderboardOptOutDefault2["OFF_FOR_NEW_GUILDS"] = 0] = "OFF_FOR_NEW_GUILDS";
  PreloadedUserSettings_GuildsLeaderboardOptOutDefault2[PreloadedUserSettings_GuildsLeaderboardOptOutDefault2["ON_FOR_NEW_GUILDS"] = 1] = "ON_FOR_NEW_GUILDS";
  return PreloadedUserSettings_GuildsLeaderboardOptOutDefault2;
})(PreloadedUserSettings_GuildsLeaderboardOptOutDefault || {});
var PreloadedUserSettings_Theme = /* @__PURE__ */ ((PreloadedUserSettings_Theme2) => {
  PreloadedUserSettings_Theme2[PreloadedUserSettings_Theme2["UNSET"] = 0] = "UNSET";
  PreloadedUserSettings_Theme2[PreloadedUserSettings_Theme2["DARK"] = 1] = "DARK";
  PreloadedUserSettings_Theme2[PreloadedUserSettings_Theme2["LIGHT"] = 2] = "LIGHT";
  PreloadedUserSettings_Theme2[PreloadedUserSettings_Theme2["DARKER"] = 3] = "DARKER";
  PreloadedUserSettings_Theme2[PreloadedUserSettings_Theme2["MIDNIGHT"] = 4] = "MIDNIGHT";
  return PreloadedUserSettings_Theme2;
})(PreloadedUserSettings_Theme || {});
var PreloadedUserSettings_TimestampHourCycle = /* @__PURE__ */ ((PreloadedUserSettings_TimestampHourCycle2) => {
  PreloadedUserSettings_TimestampHourCycle2[PreloadedUserSettings_TimestampHourCycle2["AUTO"] = 0] = "AUTO";
  PreloadedUserSettings_TimestampHourCycle2[PreloadedUserSettings_TimestampHourCycle2["H12"] = 1] = "H12";
  PreloadedUserSettings_TimestampHourCycle2[PreloadedUserSettings_TimestampHourCycle2["H23"] = 2] = "H23";
  return PreloadedUserSettings_TimestampHourCycle2;
})(PreloadedUserSettings_TimestampHourCycle || {});
var PreloadedUserSettings_LaunchPadMode = /* @__PURE__ */ ((PreloadedUserSettings_LaunchPadMode2) => {
  PreloadedUserSettings_LaunchPadMode2[PreloadedUserSettings_LaunchPadMode2["LAUNCH_PAD_DISABLED"] = 0] = "LAUNCH_PAD_DISABLED";
  PreloadedUserSettings_LaunchPadMode2[PreloadedUserSettings_LaunchPadMode2["LAUNCH_PAD_GESTURE_FULL_SCREEN"] = 1] = "LAUNCH_PAD_GESTURE_FULL_SCREEN";
  PreloadedUserSettings_LaunchPadMode2[PreloadedUserSettings_LaunchPadMode2["LAUNCH_PAD_GESTURE_RIGHT_EDGE"] = 2] = "LAUNCH_PAD_GESTURE_RIGHT_EDGE";
  PreloadedUserSettings_LaunchPadMode2[PreloadedUserSettings_LaunchPadMode2["LAUNCH_PAD_PULL_TAB"] = 3] = "LAUNCH_PAD_PULL_TAB";
  return PreloadedUserSettings_LaunchPadMode2;
})(PreloadedUserSettings_LaunchPadMode || {});
var PreloadedUserSettings_FavoriteChannelType = /* @__PURE__ */ ((PreloadedUserSettings_FavoriteChannelType2) => {
  PreloadedUserSettings_FavoriteChannelType2[PreloadedUserSettings_FavoriteChannelType2["UNSET_FAVORITE_CHANNEL_TYPE"] = 0] = "UNSET_FAVORITE_CHANNEL_TYPE";
  PreloadedUserSettings_FavoriteChannelType2[PreloadedUserSettings_FavoriteChannelType2["REFERENCE_ORIGINAL"] = 1] = "REFERENCE_ORIGINAL";
  PreloadedUserSettings_FavoriteChannelType2[PreloadedUserSettings_FavoriteChannelType2["CATEGORY"] = 2] = "CATEGORY";
  return PreloadedUserSettings_FavoriteChannelType2;
})(PreloadedUserSettings_FavoriteChannelType || {});
var PreloadedUserSettings_ForLaterTab = /* @__PURE__ */ ((PreloadedUserSettings_ForLaterTab2) => {
  PreloadedUserSettings_ForLaterTab2[PreloadedUserSettings_ForLaterTab2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
  PreloadedUserSettings_ForLaterTab2[PreloadedUserSettings_ForLaterTab2["ALL"] = 1] = "ALL";
  PreloadedUserSettings_ForLaterTab2[PreloadedUserSettings_ForLaterTab2["BOOKMARKS"] = 2] = "BOOKMARKS";
  PreloadedUserSettings_ForLaterTab2[PreloadedUserSettings_ForLaterTab2["REMINDERS"] = 3] = "REMINDERS";
  return PreloadedUserSettings_ForLaterTab2;
})(PreloadedUserSettings_ForLaterTab || {});
var PreloadedUserSettings_SafetySettingsPresetType = /* @__PURE__ */ ((PreloadedUserSettings_SafetySettingsPresetType2) => {
  PreloadedUserSettings_SafetySettingsPresetType2[PreloadedUserSettings_SafetySettingsPresetType2["UNSET_SAFETY_SETTINGS_PRESET"] = 0] = "UNSET_SAFETY_SETTINGS_PRESET";
  PreloadedUserSettings_SafetySettingsPresetType2[PreloadedUserSettings_SafetySettingsPresetType2["BALANCED"] = 1] = "BALANCED";
  PreloadedUserSettings_SafetySettingsPresetType2[PreloadedUserSettings_SafetySettingsPresetType2["STRICT"] = 2] = "STRICT";
  PreloadedUserSettings_SafetySettingsPresetType2[PreloadedUserSettings_SafetySettingsPresetType2["RELAXED"] = 3] = "RELAXED";
  PreloadedUserSettings_SafetySettingsPresetType2[PreloadedUserSettings_SafetySettingsPresetType2["CUSTOM"] = 4] = "CUSTOM";
  return PreloadedUserSettings_SafetySettingsPresetType2;
})(PreloadedUserSettings_SafetySettingsPresetType || {});
var PreloadedUserSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings", [
      { no: 1, name: "versions", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_Versions, "T") },
      { no: 2, name: "inbox", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_InboxSettings, "T") },
      { no: 3, name: "guilds", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_AllGuildSettings, "T") },
      { no: 4, name: "user_content", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_UserContentSettings, "T") },
      { no: 5, name: "voice_and_video", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_VoiceAndVideoSettings, "T") },
      { no: 6, name: "text_and_images", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_TextAndImagesSettings, "T") },
      { no: 7, name: "notifications", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_NotificationSettings, "T") },
      { no: 8, name: "privacy", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_PrivacySettings, "T") },
      { no: 9, name: "debug", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_DebugSettings, "T") },
      { no: 10, name: "game_library", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_GameLibrarySettings, "T") },
      { no: 11, name: "status", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_StatusSettings, "T") },
      { no: 12, name: "localization", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_LocalizationSettings, "T") },
      { no: 13, name: "appearance", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_AppearanceSettings, "T") },
      { no: 14, name: "guild_folders", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_GuildFolders, "T") },
      { no: 15, name: "favorites", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_Favorites, "T") },
      { no: 16, name: "audio_context_settings", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_AudioSettings, "T") },
      { no: 17, name: "communities", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_CommunitiesSettings, "T") },
      { no: 18, name: "broadcast", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_BroadcastSettings, "T") },
      { no: 19, name: "clips", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_ClipsSettings, "T") },
      { no: 20, name: "for_later", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_ForLaterSettings, "T") },
      { no: 21, name: "safety_settings", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_SafetySettings, "T") },
      { no: 22, name: "icymi_settings", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_ICYMISettings, "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.Versions versions */
        1:
          message.versions = PreloadedUserSettings_Versions.internalBinaryRead(reader, reader.uint32(), options, message.versions);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.InboxSettings inbox */
        2:
          message.inbox = PreloadedUserSettings_InboxSettings.internalBinaryRead(reader, reader.uint32(), options, message.inbox);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.AllGuildSettings guilds */
        3:
          message.guilds = PreloadedUserSettings_AllGuildSettings.internalBinaryRead(reader, reader.uint32(), options, message.guilds);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.UserContentSettings user_content */
        4:
          message.userContent = PreloadedUserSettings_UserContentSettings.internalBinaryRead(reader, reader.uint32(), options, message.userContent);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.VoiceAndVideoSettings voice_and_video */
        5:
          message.voiceAndVideo = PreloadedUserSettings_VoiceAndVideoSettings.internalBinaryRead(reader, reader.uint32(), options, message.voiceAndVideo);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.TextAndImagesSettings text_and_images */
        6:
          message.textAndImages = PreloadedUserSettings_TextAndImagesSettings.internalBinaryRead(reader, reader.uint32(), options, message.textAndImages);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.NotificationSettings notifications */
        7:
          message.notifications = PreloadedUserSettings_NotificationSettings.internalBinaryRead(reader, reader.uint32(), options, message.notifications);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.PrivacySettings privacy */
        8:
          message.privacy = PreloadedUserSettings_PrivacySettings.internalBinaryRead(reader, reader.uint32(), options, message.privacy);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.DebugSettings debug */
        9:
          message.debug = PreloadedUserSettings_DebugSettings.internalBinaryRead(reader, reader.uint32(), options, message.debug);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.GameLibrarySettings game_library */
        10:
          message.gameLibrary = PreloadedUserSettings_GameLibrarySettings.internalBinaryRead(reader, reader.uint32(), options, message.gameLibrary);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.StatusSettings status */
        11:
          message.status = PreloadedUserSettings_StatusSettings.internalBinaryRead(reader, reader.uint32(), options, message.status);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.LocalizationSettings localization */
        12:
          message.localization = PreloadedUserSettings_LocalizationSettings.internalBinaryRead(reader, reader.uint32(), options, message.localization);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.AppearanceSettings appearance */
        13:
          message.appearance = PreloadedUserSettings_AppearanceSettings.internalBinaryRead(reader, reader.uint32(), options, message.appearance);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.GuildFolders guild_folders */
        14:
          message.guildFolders = PreloadedUserSettings_GuildFolders.internalBinaryRead(reader, reader.uint32(), options, message.guildFolders);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.Favorites favorites */
        15:
          message.favorites = PreloadedUserSettings_Favorites.internalBinaryRead(reader, reader.uint32(), options, message.favorites);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.AudioSettings audio_context_settings */
        16:
          message.audioContextSettings = PreloadedUserSettings_AudioSettings.internalBinaryRead(reader, reader.uint32(), options, message.audioContextSettings);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.CommunitiesSettings communities */
        17:
          message.communities = PreloadedUserSettings_CommunitiesSettings.internalBinaryRead(reader, reader.uint32(), options, message.communities);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.BroadcastSettings broadcast */
        18:
          message.broadcast = PreloadedUserSettings_BroadcastSettings.internalBinaryRead(reader, reader.uint32(), options, message.broadcast);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.ClipsSettings clips */
        19:
          message.clips = PreloadedUserSettings_ClipsSettings.internalBinaryRead(reader, reader.uint32(), options, message.clips);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.ForLaterSettings for_later */
        20:
          message.forLater = PreloadedUserSettings_ForLaterSettings.internalBinaryRead(reader, reader.uint32(), options, message.forLater);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.SafetySettings safety_settings */
        21:
          message.safetySettings = PreloadedUserSettings_SafetySettings.internalBinaryRead(reader, reader.uint32(), options, message.safetySettings);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.ICYMISettings icymi_settings */
        22:
          message.icymiSettings = PreloadedUserSettings_ICYMISettings.internalBinaryRead(reader, reader.uint32(), options, message.icymiSettings);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.versions)
      PreloadedUserSettings_Versions.internalBinaryWrite(message.versions, writer.tag(1, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.inbox)
      PreloadedUserSettings_InboxSettings.internalBinaryWrite(message.inbox, writer.tag(2, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.guilds)
      PreloadedUserSettings_AllGuildSettings.internalBinaryWrite(message.guilds, writer.tag(3, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.userContent)
      PreloadedUserSettings_UserContentSettings.internalBinaryWrite(message.userContent, writer.tag(4, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.voiceAndVideo)
      PreloadedUserSettings_VoiceAndVideoSettings.internalBinaryWrite(message.voiceAndVideo, writer.tag(5, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.textAndImages)
      PreloadedUserSettings_TextAndImagesSettings.internalBinaryWrite(message.textAndImages, writer.tag(6, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.notifications)
      PreloadedUserSettings_NotificationSettings.internalBinaryWrite(message.notifications, writer.tag(7, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.privacy)
      PreloadedUserSettings_PrivacySettings.internalBinaryWrite(message.privacy, writer.tag(8, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.debug)
      PreloadedUserSettings_DebugSettings.internalBinaryWrite(message.debug, writer.tag(9, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.gameLibrary)
      PreloadedUserSettings_GameLibrarySettings.internalBinaryWrite(message.gameLibrary, writer.tag(10, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.status)
      PreloadedUserSettings_StatusSettings.internalBinaryWrite(message.status, writer.tag(11, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.localization)
      PreloadedUserSettings_LocalizationSettings.internalBinaryWrite(message.localization, writer.tag(12, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.appearance)
      PreloadedUserSettings_AppearanceSettings.internalBinaryWrite(message.appearance, writer.tag(13, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.guildFolders)
      PreloadedUserSettings_GuildFolders.internalBinaryWrite(message.guildFolders, writer.tag(14, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.favorites)
      PreloadedUserSettings_Favorites.internalBinaryWrite(message.favorites, writer.tag(15, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.audioContextSettings)
      PreloadedUserSettings_AudioSettings.internalBinaryWrite(message.audioContextSettings, writer.tag(16, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.communities)
      PreloadedUserSettings_CommunitiesSettings.internalBinaryWrite(message.communities, writer.tag(17, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.broadcast)
      PreloadedUserSettings_BroadcastSettings.internalBinaryWrite(message.broadcast, writer.tag(18, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.clips)
      PreloadedUserSettings_ClipsSettings.internalBinaryWrite(message.clips, writer.tag(19, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.forLater)
      PreloadedUserSettings_ForLaterSettings.internalBinaryWrite(message.forLater, writer.tag(20, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.safetySettings)
      PreloadedUserSettings_SafetySettings.internalBinaryWrite(message.safetySettings, writer.tag(21, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.icymiSettings)
      PreloadedUserSettings_ICYMISettings.internalBinaryWrite(message.icymiSettings, writer.tag(22, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings = new PreloadedUserSettings$Type();
var PreloadedUserSettings_Versions$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_Versions$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.Versions", [
      {
        no: 1,
        name: "client_version",
        kind: "scalar",
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 2,
        name: "server_version",
        kind: "scalar",
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 3,
        name: "data_version",
        kind: "scalar",
        T: 13
        /*ScalarType.UINT32*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.clientVersion = 0;
    message.serverVersion = 0;
    message.dataVersion = 0;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* uint32 client_version */
        1:
          message.clientVersion = reader.uint32();
          break;
        case /* uint32 server_version */
        2:
          message.serverVersion = reader.uint32();
          break;
        case /* uint32 data_version */
        3:
          message.dataVersion = reader.uint32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.clientVersion !== 0)
      writer.tag(1, import_runtime25.WireType.Varint).uint32(message.clientVersion);
    if (message.serverVersion !== 0)
      writer.tag(2, import_runtime25.WireType.Varint).uint32(message.serverVersion);
    if (message.dataVersion !== 0)
      writer.tag(3, import_runtime25.WireType.Varint).uint32(message.dataVersion);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_Versions = new PreloadedUserSettings_Versions$Type();
var PreloadedUserSettings_InboxSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_InboxSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.InboxSettings", [
      { no: 1, name: "current_tab", kind: "enum", T: /* @__PURE__ */ __name(() => ["discord_protos.discord_users.v1.PreloadedUserSettings.InboxTab", PreloadedUserSettings_InboxTab, "INBOX_TAB_"], "T") },
      {
        no: 2,
        name: "viewed_tutorial",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.currentTab = 0;
    message.viewedTutorial = false;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* discord_protos.discord_users.v1.PreloadedUserSettings.InboxTab current_tab */
        1:
          message.currentTab = reader.int32();
          break;
        case /* bool viewed_tutorial */
        2:
          message.viewedTutorial = reader.bool();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.currentTab !== 0)
      writer.tag(1, import_runtime25.WireType.Varint).int32(message.currentTab);
    if (message.viewedTutorial !== false)
      writer.tag(2, import_runtime25.WireType.Varint).bool(message.viewedTutorial);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_InboxSettings = new PreloadedUserSettings_InboxSettings$Type();
var PreloadedUserSettings_ChannelIconEmoji$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_ChannelIconEmoji$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.ChannelIconEmoji", [
      { no: 1, name: "id", kind: "message", T: /* @__PURE__ */ __name(() => UInt64Value, "T") },
      { no: 2, name: "name", kind: "message", T: /* @__PURE__ */ __name(() => StringValue, "T") },
      { no: 3, name: "color", kind: "message", T: /* @__PURE__ */ __name(() => UInt64Value, "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional google.protobuf.UInt64Value id */
        1:
          message.id = UInt64Value.internalBinaryRead(reader, reader.uint32(), options, message.id);
          break;
        case /* optional google.protobuf.StringValue name */
        2:
          message.name = StringValue.internalBinaryRead(reader, reader.uint32(), options, message.name);
          break;
        case /* optional google.protobuf.UInt64Value color */
        3:
          message.color = UInt64Value.internalBinaryRead(reader, reader.uint32(), options, message.color);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.id)
      UInt64Value.internalBinaryWrite(message.id, writer.tag(1, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.name)
      StringValue.internalBinaryWrite(message.name, writer.tag(2, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.color)
      UInt64Value.internalBinaryWrite(message.color, writer.tag(3, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_ChannelIconEmoji = new PreloadedUserSettings_ChannelIconEmoji$Type();
var PreloadedUserSettings_CustomNotificationSoundConfig$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_CustomNotificationSoundConfig$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.CustomNotificationSoundConfig", [
      { no: 1, name: "notification_sound_pack_id", kind: "message", T: /* @__PURE__ */ __name(() => StringValue, "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional google.protobuf.StringValue notification_sound_pack_id */
        1:
          message.notificationSoundPackId = StringValue.internalBinaryRead(reader, reader.uint32(), options, message.notificationSoundPackId);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.notificationSoundPackId)
      StringValue.internalBinaryWrite(message.notificationSoundPackId, writer.tag(1, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_CustomNotificationSoundConfig = new PreloadedUserSettings_CustomNotificationSoundConfig$Type();
var PreloadedUserSettings_ChannelSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_ChannelSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.ChannelSettings", [
      {
        no: 1,
        name: "collapsed_in_inbox",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      { no: 2, name: "icon_emoji", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_ChannelIconEmoji, "T") },
      { no: 3, name: "custom_notification_sound_config", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_CustomNotificationSoundConfig, "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.collapsedInInbox = false;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool collapsed_in_inbox */
        1:
          message.collapsedInInbox = reader.bool();
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.ChannelIconEmoji icon_emoji */
        2:
          message.iconEmoji = PreloadedUserSettings_ChannelIconEmoji.internalBinaryRead(reader, reader.uint32(), options, message.iconEmoji);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.CustomNotificationSoundConfig custom_notification_sound_config */
        3:
          message.customNotificationSoundConfig = PreloadedUserSettings_CustomNotificationSoundConfig.internalBinaryRead(reader, reader.uint32(), options, message.customNotificationSoundConfig);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.collapsedInInbox !== false)
      writer.tag(1, import_runtime25.WireType.Varint).bool(message.collapsedInInbox);
    if (message.iconEmoji)
      PreloadedUserSettings_ChannelIconEmoji.internalBinaryWrite(message.iconEmoji, writer.tag(2, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.customNotificationSoundConfig)
      PreloadedUserSettings_CustomNotificationSoundConfig.internalBinaryWrite(message.customNotificationSoundConfig, writer.tag(3, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_ChannelSettings = new PreloadedUserSettings_ChannelSettings$Type();
var PreloadedUserSettings_CustomCallSound$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_CustomCallSound$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.CustomCallSound", [
      {
        no: 1,
        name: "sound_id",
        kind: "scalar",
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 2,
        name: "guild_id",
        kind: "scalar",
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.soundId = 0n;
    message.guildId = 0n;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* fixed64 sound_id */
        1:
          message.soundId = reader.fixed64().toBigInt();
          break;
        case /* fixed64 guild_id */
        2:
          message.guildId = reader.fixed64().toBigInt();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.soundId !== 0n)
      writer.tag(1, import_runtime25.WireType.Bit64).fixed64(message.soundId);
    if (message.guildId !== 0n)
      writer.tag(2, import_runtime25.WireType.Bit64).fixed64(message.guildId);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_CustomCallSound = new PreloadedUserSettings_CustomCallSound$Type();
var PreloadedUserSettings_ChannelListSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_ChannelListSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.ChannelListSettings", [
      { no: 1, name: "layout", kind: "message", T: /* @__PURE__ */ __name(() => StringValue, "T") },
      { no: 2, name: "message_previews", kind: "message", T: /* @__PURE__ */ __name(() => StringValue, "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional google.protobuf.StringValue layout */
        1:
          message.layout = StringValue.internalBinaryRead(reader, reader.uint32(), options, message.layout);
          break;
        case /* optional google.protobuf.StringValue message_previews */
        2:
          message.messagePreviews = StringValue.internalBinaryRead(reader, reader.uint32(), options, message.messagePreviews);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.layout)
      StringValue.internalBinaryWrite(message.layout, writer.tag(1, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.messagePreviews)
      StringValue.internalBinaryWrite(message.messagePreviews, writer.tag(2, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_ChannelListSettings = new PreloadedUserSettings_ChannelListSettings$Type();
var PreloadedUserSettings_GuildSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_GuildSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.GuildSettings", [
      { no: 1, name: "channels", kind: "map", K: 6, V: { kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_ChannelSettings, "T") } },
      {
        no: 2,
        name: "hub_progress",
        kind: "scalar",
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 3,
        name: "guild_onboarding_progress",
        kind: "scalar",
        T: 13
        /*ScalarType.UINT32*/
      },
      { no: 4, name: "guild_recents_dismissed_at", kind: "message", T: /* @__PURE__ */ __name(() => Timestamp, "T") },
      {
        no: 5,
        name: "dismissed_guild_content",
        kind: "scalar",
        T: 12
        /*ScalarType.BYTES*/
      },
      { no: 6, name: "join_sound", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_CustomCallSound, "T") },
      { no: 7, name: "mobile_redesign_channel_list_settings", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_ChannelListSettings, "T") },
      {
        no: 8,
        name: "disable_raid_alert_push",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 9,
        name: "disable_raid_alert_nag",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      { no: 10, name: "custom_notification_sound_config", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_CustomNotificationSoundConfig, "T") },
      {
        no: 11,
        name: "leaderboards_disabled",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.channels = {};
    message.hubProgress = 0;
    message.guildOnboardingProgress = 0;
    message.dismissedGuildContent = new Uint8Array(0);
    message.disableRaidAlertPush = false;
    message.disableRaidAlertNag = false;
    message.leaderboardsDisabled = false;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* map<fixed64, discord_protos.discord_users.v1.PreloadedUserSettings.ChannelSettings> channels */
        1:
          this.binaryReadMap1(message.channels, reader, options);
          break;
        case /* uint32 hub_progress */
        2:
          message.hubProgress = reader.uint32();
          break;
        case /* uint32 guild_onboarding_progress */
        3:
          message.guildOnboardingProgress = reader.uint32();
          break;
        case /* optional google.protobuf.Timestamp guild_recents_dismissed_at */
        4:
          message.guildRecentsDismissedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.guildRecentsDismissedAt);
          break;
        case /* bytes dismissed_guild_content */
        5:
          message.dismissedGuildContent = reader.bytes();
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.CustomCallSound join_sound */
        6:
          message.joinSound = PreloadedUserSettings_CustomCallSound.internalBinaryRead(reader, reader.uint32(), options, message.joinSound);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.ChannelListSettings mobile_redesign_channel_list_settings */
        7:
          message.mobileRedesignChannelListSettings = PreloadedUserSettings_ChannelListSettings.internalBinaryRead(reader, reader.uint32(), options, message.mobileRedesignChannelListSettings);
          break;
        case /* bool disable_raid_alert_push */
        8:
          message.disableRaidAlertPush = reader.bool();
          break;
        case /* bool disable_raid_alert_nag */
        9:
          message.disableRaidAlertNag = reader.bool();
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.CustomNotificationSoundConfig custom_notification_sound_config */
        10:
          message.customNotificationSoundConfig = PreloadedUserSettings_CustomNotificationSoundConfig.internalBinaryRead(reader, reader.uint32(), options, message.customNotificationSoundConfig);
          break;
        case /* bool leaderboards_disabled */
        11:
          message.leaderboardsDisabled = reader.bool();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  binaryReadMap1(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.fixed64().toString();
          break;
        case 2:
          val = PreloadedUserSettings_ChannelSettings.internalBinaryRead(reader, reader.uint32(), options);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.PreloadedUserSettings.GuildSettings.channels");
      }
    }
    map[key ?? "0"] = val ?? PreloadedUserSettings_ChannelSettings.create();
  }
  internalBinaryWrite(message, writer, options) {
    for (let k of globalThis.Object.keys(message.channels)) {
      writer.tag(1, import_runtime25.WireType.LengthDelimited).fork().tag(1, import_runtime25.WireType.Bit64).fixed64(k);
      writer.tag(2, import_runtime25.WireType.LengthDelimited).fork();
      PreloadedUserSettings_ChannelSettings.internalBinaryWrite(message.channels[k], writer, options);
      writer.join().join();
    }
    if (message.hubProgress !== 0)
      writer.tag(2, import_runtime25.WireType.Varint).uint32(message.hubProgress);
    if (message.guildOnboardingProgress !== 0)
      writer.tag(3, import_runtime25.WireType.Varint).uint32(message.guildOnboardingProgress);
    if (message.guildRecentsDismissedAt)
      Timestamp.internalBinaryWrite(message.guildRecentsDismissedAt, writer.tag(4, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.dismissedGuildContent.length)
      writer.tag(5, import_runtime25.WireType.LengthDelimited).bytes(message.dismissedGuildContent);
    if (message.joinSound)
      PreloadedUserSettings_CustomCallSound.internalBinaryWrite(message.joinSound, writer.tag(6, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.mobileRedesignChannelListSettings)
      PreloadedUserSettings_ChannelListSettings.internalBinaryWrite(message.mobileRedesignChannelListSettings, writer.tag(7, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.disableRaidAlertPush !== false)
      writer.tag(8, import_runtime25.WireType.Varint).bool(message.disableRaidAlertPush);
    if (message.disableRaidAlertNag !== false)
      writer.tag(9, import_runtime25.WireType.Varint).bool(message.disableRaidAlertNag);
    if (message.customNotificationSoundConfig)
      PreloadedUserSettings_CustomNotificationSoundConfig.internalBinaryWrite(message.customNotificationSoundConfig, writer.tag(10, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.leaderboardsDisabled !== false)
      writer.tag(11, import_runtime25.WireType.Varint).bool(message.leaderboardsDisabled);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_GuildSettings = new PreloadedUserSettings_GuildSettings$Type();
var PreloadedUserSettings_AllGuildSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_AllGuildSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.AllGuildSettings", [
      { no: 1, name: "guilds", kind: "map", K: 6, V: { kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_GuildSettings, "T") } }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.guilds = {};
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* map<fixed64, discord_protos.discord_users.v1.PreloadedUserSettings.GuildSettings> guilds */
        1:
          this.binaryReadMap1(message.guilds, reader, options);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  binaryReadMap1(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.fixed64().toString();
          break;
        case 2:
          val = PreloadedUserSettings_GuildSettings.internalBinaryRead(reader, reader.uint32(), options);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.PreloadedUserSettings.AllGuildSettings.guilds");
      }
    }
    map[key ?? "0"] = val ?? PreloadedUserSettings_GuildSettings.create();
  }
  internalBinaryWrite(message, writer, options) {
    for (let k of globalThis.Object.keys(message.guilds)) {
      writer.tag(1, import_runtime25.WireType.LengthDelimited).fork().tag(1, import_runtime25.WireType.Bit64).fixed64(k);
      writer.tag(2, import_runtime25.WireType.LengthDelimited).fork();
      PreloadedUserSettings_GuildSettings.internalBinaryWrite(message.guilds[k], writer, options);
      writer.join().join();
    }
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_AllGuildSettings = new PreloadedUserSettings_AllGuildSettings$Type();
var PreloadedUserSettings_RecurringDismissibleContentState$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_RecurringDismissibleContentState$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.RecurringDismissibleContentState", [
      {
        no: 1,
        name: "last_dismissed_version",
        kind: "scalar",
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 2,
        name: "last_dismissed_at_ms",
        kind: "scalar",
        T: 4,
        L: 0
        /*LongType.BIGINT*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.lastDismissedVersion = 0;
    message.lastDismissedAtMs = 0n;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* uint32 last_dismissed_version */
        1:
          message.lastDismissedVersion = reader.uint32();
          break;
        case /* uint64 last_dismissed_at_ms */
        2:
          message.lastDismissedAtMs = reader.uint64().toBigInt();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.lastDismissedVersion !== 0)
      writer.tag(1, import_runtime25.WireType.Varint).uint32(message.lastDismissedVersion);
    if (message.lastDismissedAtMs !== 0n)
      writer.tag(2, import_runtime25.WireType.Varint).uint64(message.lastDismissedAtMs);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_RecurringDismissibleContentState = new PreloadedUserSettings_RecurringDismissibleContentState$Type();
var PreloadedUserSettings_UserContentSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_UserContentSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.UserContentSettings", [
      {
        no: 1,
        name: "dismissed_contents",
        kind: "scalar",
        T: 12
        /*ScalarType.BYTES*/
      },
      { no: 2, name: "last_dismissed_outbound_promotion_start_date", kind: "message", T: /* @__PURE__ */ __name(() => StringValue, "T") },
      { no: 3, name: "premium_tier_0_modal_dismissed_at", kind: "message", T: /* @__PURE__ */ __name(() => Timestamp, "T") },
      { no: 4, name: "guild_onboarding_upsell_dismissed_at", kind: "message", T: /* @__PURE__ */ __name(() => Timestamp, "T") },
      { no: 5, name: "safety_user_sentiment_notice_dismissed_at", kind: "message", T: /* @__PURE__ */ __name(() => Timestamp, "T") },
      {
        no: 6,
        name: "last_received_changelog_id",
        kind: "scalar",
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      },
      { no: 7, name: "recurring_dismissible_content_states", kind: "map", K: 5, V: { kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_RecurringDismissibleContentState, "T") } }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.dismissedContents = new Uint8Array(0);
    message.lastReceivedChangelogId = 0n;
    message.recurringDismissibleContentStates = {};
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bytes dismissed_contents */
        1:
          message.dismissedContents = reader.bytes();
          break;
        case /* optional google.protobuf.StringValue last_dismissed_outbound_promotion_start_date */
        2:
          message.lastDismissedOutboundPromotionStartDate = StringValue.internalBinaryRead(reader, reader.uint32(), options, message.lastDismissedOutboundPromotionStartDate);
          break;
        case /* optional google.protobuf.Timestamp premium_tier_0_modal_dismissed_at */
        3:
          message.premiumTier0ModalDismissedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.premiumTier0ModalDismissedAt);
          break;
        case /* optional google.protobuf.Timestamp guild_onboarding_upsell_dismissed_at */
        4:
          message.guildOnboardingUpsellDismissedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.guildOnboardingUpsellDismissedAt);
          break;
        case /* optional google.protobuf.Timestamp safety_user_sentiment_notice_dismissed_at */
        5:
          message.safetyUserSentimentNoticeDismissedAt = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.safetyUserSentimentNoticeDismissedAt);
          break;
        case /* fixed64 last_received_changelog_id */
        6:
          message.lastReceivedChangelogId = reader.fixed64().toBigInt();
          break;
        case /* map<int32, discord_protos.discord_users.v1.PreloadedUserSettings.RecurringDismissibleContentState> recurring_dismissible_content_states */
        7:
          this.binaryReadMap7(message.recurringDismissibleContentStates, reader, options);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  binaryReadMap7(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.int32();
          break;
        case 2:
          val = PreloadedUserSettings_RecurringDismissibleContentState.internalBinaryRead(reader, reader.uint32(), options);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.PreloadedUserSettings.UserContentSettings.recurring_dismissible_content_states");
      }
    }
    map[key ?? 0] = val ?? PreloadedUserSettings_RecurringDismissibleContentState.create();
  }
  internalBinaryWrite(message, writer, options) {
    if (message.dismissedContents.length)
      writer.tag(1, import_runtime25.WireType.LengthDelimited).bytes(message.dismissedContents);
    if (message.lastDismissedOutboundPromotionStartDate)
      StringValue.internalBinaryWrite(message.lastDismissedOutboundPromotionStartDate, writer.tag(2, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.premiumTier0ModalDismissedAt)
      Timestamp.internalBinaryWrite(message.premiumTier0ModalDismissedAt, writer.tag(3, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.guildOnboardingUpsellDismissedAt)
      Timestamp.internalBinaryWrite(message.guildOnboardingUpsellDismissedAt, writer.tag(4, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.safetyUserSentimentNoticeDismissedAt)
      Timestamp.internalBinaryWrite(message.safetyUserSentimentNoticeDismissedAt, writer.tag(5, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.lastReceivedChangelogId !== 0n)
      writer.tag(6, import_runtime25.WireType.Bit64).fixed64(message.lastReceivedChangelogId);
    for (let k of globalThis.Object.keys(message.recurringDismissibleContentStates)) {
      writer.tag(7, import_runtime25.WireType.LengthDelimited).fork().tag(1, import_runtime25.WireType.Varint).int32(parseInt(k));
      writer.tag(2, import_runtime25.WireType.LengthDelimited).fork();
      PreloadedUserSettings_RecurringDismissibleContentState.internalBinaryWrite(message.recurringDismissibleContentStates[k], writer, options);
      writer.join().join();
    }
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_UserContentSettings = new PreloadedUserSettings_UserContentSettings$Type();
var PreloadedUserSettings_VideoFilterBackgroundBlur$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_VideoFilterBackgroundBlur$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.VideoFilterBackgroundBlur", [
      {
        no: 1,
        name: "use_blur",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.useBlur = false;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool use_blur */
        1:
          message.useBlur = reader.bool();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.useBlur !== false)
      writer.tag(1, import_runtime25.WireType.Varint).bool(message.useBlur);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_VideoFilterBackgroundBlur = new PreloadedUserSettings_VideoFilterBackgroundBlur$Type();
var PreloadedUserSettings_VideoFilterAsset$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_VideoFilterAsset$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.VideoFilterAsset", [
      {
        no: 1,
        name: "id",
        kind: "scalar",
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 2,
        name: "asset_hash",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.id = 0n;
    message.assetHash = "";
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* fixed64 id */
        1:
          message.id = reader.fixed64().toBigInt();
          break;
        case /* string asset_hash */
        2:
          message.assetHash = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.id !== 0n)
      writer.tag(1, import_runtime25.WireType.Bit64).fixed64(message.id);
    if (message.assetHash !== "")
      writer.tag(2, import_runtime25.WireType.LengthDelimited).string(message.assetHash);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_VideoFilterAsset = new PreloadedUserSettings_VideoFilterAsset$Type();
var PreloadedUserSettings_SoundboardSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_SoundboardSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.SoundboardSettings", [
      {
        no: 1,
        name: "volume",
        kind: "scalar",
        T: 2
        /*ScalarType.FLOAT*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.volume = 0;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* float volume */
        1:
          message.volume = reader.float();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.volume !== 0)
      writer.tag(1, import_runtime25.WireType.Bit32).float(message.volume);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_SoundboardSettings = new PreloadedUserSettings_SoundboardSettings$Type();
var PreloadedUserSettings_VoiceAndVideoSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_VoiceAndVideoSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.VoiceAndVideoSettings", [
      { no: 1, name: "blur", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_VideoFilterBackgroundBlur, "T") },
      {
        no: 2,
        name: "preset_option",
        kind: "scalar",
        T: 13
        /*ScalarType.UINT32*/
      },
      { no: 3, name: "custom_asset", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_VideoFilterAsset, "T") },
      { no: 5, name: "always_preview_video", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 6, name: "afk_timeout", kind: "message", T: /* @__PURE__ */ __name(() => UInt32Value, "T") },
      { no: 7, name: "stream_notifications_enabled", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 8, name: "native_phone_integration_enabled", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 9, name: "soundboard_settings", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_SoundboardSettings, "T") },
      { no: 10, name: "disable_stream_previews", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 11, name: "soundmoji_volume", kind: "message", T: /* @__PURE__ */ __name(() => FloatValue, "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.presetOption = 0;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* discord_protos.discord_users.v1.PreloadedUserSettings.VideoFilterBackgroundBlur blur */
        1:
          message.blur = PreloadedUserSettings_VideoFilterBackgroundBlur.internalBinaryRead(reader, reader.uint32(), options, message.blur);
          break;
        case /* uint32 preset_option */
        2:
          message.presetOption = reader.uint32();
          break;
        case /* discord_protos.discord_users.v1.PreloadedUserSettings.VideoFilterAsset custom_asset */
        3:
          message.customAsset = PreloadedUserSettings_VideoFilterAsset.internalBinaryRead(reader, reader.uint32(), options, message.customAsset);
          break;
        case /* optional google.protobuf.BoolValue always_preview_video */
        5:
          message.alwaysPreviewVideo = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.alwaysPreviewVideo);
          break;
        case /* optional google.protobuf.UInt32Value afk_timeout */
        6:
          message.afkTimeout = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.afkTimeout);
          break;
        case /* optional google.protobuf.BoolValue stream_notifications_enabled */
        7:
          message.streamNotificationsEnabled = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.streamNotificationsEnabled);
          break;
        case /* optional google.protobuf.BoolValue native_phone_integration_enabled */
        8:
          message.nativePhoneIntegrationEnabled = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.nativePhoneIntegrationEnabled);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.SoundboardSettings soundboard_settings */
        9:
          message.soundboardSettings = PreloadedUserSettings_SoundboardSettings.internalBinaryRead(reader, reader.uint32(), options, message.soundboardSettings);
          break;
        case /* optional google.protobuf.BoolValue disable_stream_previews */
        10:
          message.disableStreamPreviews = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.disableStreamPreviews);
          break;
        case /* optional google.protobuf.FloatValue soundmoji_volume */
        11:
          message.soundmojiVolume = FloatValue.internalBinaryRead(reader, reader.uint32(), options, message.soundmojiVolume);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.blur)
      PreloadedUserSettings_VideoFilterBackgroundBlur.internalBinaryWrite(message.blur, writer.tag(1, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.presetOption !== 0)
      writer.tag(2, import_runtime25.WireType.Varint).uint32(message.presetOption);
    if (message.customAsset)
      PreloadedUserSettings_VideoFilterAsset.internalBinaryWrite(message.customAsset, writer.tag(3, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.alwaysPreviewVideo)
      BoolValue.internalBinaryWrite(message.alwaysPreviewVideo, writer.tag(5, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.afkTimeout)
      UInt32Value.internalBinaryWrite(message.afkTimeout, writer.tag(6, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.streamNotificationsEnabled)
      BoolValue.internalBinaryWrite(message.streamNotificationsEnabled, writer.tag(7, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.nativePhoneIntegrationEnabled)
      BoolValue.internalBinaryWrite(message.nativePhoneIntegrationEnabled, writer.tag(8, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.soundboardSettings)
      PreloadedUserSettings_SoundboardSettings.internalBinaryWrite(message.soundboardSettings, writer.tag(9, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.disableStreamPreviews)
      BoolValue.internalBinaryWrite(message.disableStreamPreviews, writer.tag(10, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.soundmojiVolume)
      FloatValue.internalBinaryWrite(message.soundmojiVolume, writer.tag(11, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_VoiceAndVideoSettings = new PreloadedUserSettings_VoiceAndVideoSettings$Type();
var PreloadedUserSettings_ExplicitContentSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_ExplicitContentSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentSettings", [
      { no: 1, name: "explicit_content_guilds", kind: "enum", T: /* @__PURE__ */ __name(() => ["discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction", PreloadedUserSettings_ExplicitContentRedaction, "EXPLICIT_CONTENT_REDACTION_"], "T") },
      { no: 2, name: "explicit_content_friend_dm", kind: "enum", T: /* @__PURE__ */ __name(() => ["discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction", PreloadedUserSettings_ExplicitContentRedaction, "EXPLICIT_CONTENT_REDACTION_"], "T") },
      { no: 3, name: "explicit_content_non_friend_dm", kind: "enum", T: /* @__PURE__ */ __name(() => ["discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction", PreloadedUserSettings_ExplicitContentRedaction, "EXPLICIT_CONTENT_REDACTION_"], "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.explicitContentGuilds = 0;
    message.explicitContentFriendDm = 0;
    message.explicitContentNonFriendDm = 0;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction explicit_content_guilds */
        1:
          message.explicitContentGuilds = reader.int32();
          break;
        case /* discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction explicit_content_friend_dm */
        2:
          message.explicitContentFriendDm = reader.int32();
          break;
        case /* discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction explicit_content_non_friend_dm */
        3:
          message.explicitContentNonFriendDm = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.explicitContentGuilds !== 0)
      writer.tag(1, import_runtime25.WireType.Varint).int32(message.explicitContentGuilds);
    if (message.explicitContentFriendDm !== 0)
      writer.tag(2, import_runtime25.WireType.Varint).int32(message.explicitContentFriendDm);
    if (message.explicitContentNonFriendDm !== 0)
      writer.tag(3, import_runtime25.WireType.Varint).int32(message.explicitContentNonFriendDm);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_ExplicitContentSettings = new PreloadedUserSettings_ExplicitContentSettings$Type();
var PreloadedUserSettings_KeywordFilterSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_KeywordFilterSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.KeywordFilterSettings", [
      { no: 1, name: "profanity", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 2, name: "sexual_content", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 3, name: "slurs", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional google.protobuf.BoolValue profanity */
        1:
          message.profanity = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.profanity);
          break;
        case /* optional google.protobuf.BoolValue sexual_content */
        2:
          message.sexualContent = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.sexualContent);
          break;
        case /* optional google.protobuf.BoolValue slurs */
        3:
          message.slurs = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.slurs);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.profanity)
      BoolValue.internalBinaryWrite(message.profanity, writer.tag(1, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.sexualContent)
      BoolValue.internalBinaryWrite(message.sexualContent, writer.tag(2, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.slurs)
      BoolValue.internalBinaryWrite(message.slurs, writer.tag(3, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_KeywordFilterSettings = new PreloadedUserSettings_KeywordFilterSettings$Type();
var PreloadedUserSettings_TextAndImagesSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_TextAndImagesSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.TextAndImagesSettings", [
      { no: 1, name: "diversity_surrogate", kind: "message", T: /* @__PURE__ */ __name(() => StringValue, "T") },
      { no: 2, name: "use_rich_chat_input", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 3, name: "use_thread_sidebar", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 4, name: "render_spoilers", kind: "message", T: /* @__PURE__ */ __name(() => StringValue, "T") },
      {
        no: 5,
        name: "emoji_picker_collapsed_sections",
        kind: "scalar",
        repeat: 2,
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 6,
        name: "sticker_picker_collapsed_sections",
        kind: "scalar",
        repeat: 2,
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 7, name: "view_image_descriptions", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 8, name: "show_command_suggestions", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 9, name: "inline_attachment_media", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 10, name: "inline_embed_media", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 11, name: "gif_auto_play", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 12, name: "render_embeds", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 13, name: "render_reactions", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 14, name: "animate_emoji", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 15, name: "animate_stickers", kind: "message", T: /* @__PURE__ */ __name(() => UInt32Value, "T") },
      { no: 16, name: "enable_tts_command", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 17, name: "message_display_compact", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 19, name: "explicit_content_filter", kind: "message", T: /* @__PURE__ */ __name(() => UInt32Value, "T") },
      { no: 20, name: "view_nsfw_guilds", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 21, name: "convert_emoticons", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 22, name: "expression_suggestions_enabled", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 23, name: "view_nsfw_commands", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 24, name: "use_legacy_chat_input", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      {
        no: 25,
        name: "soundboard_picker_collapsed_sections",
        kind: "scalar",
        repeat: 2,
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 26, name: "dm_spam_filter", kind: "message", T: /* @__PURE__ */ __name(() => UInt32Value, "T") },
      { no: 27, name: "dm_spam_filter_v2", kind: "enum", T: /* @__PURE__ */ __name(() => ["discord_protos.discord_users.v1.PreloadedUserSettings.DmSpamFilterV2", PreloadedUserSettings_DmSpamFilterV2, "DM_SPAM_FILTER_V2_"], "T") },
      { no: 28, name: "include_stickers_in_autocomplete", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 29, name: "explicit_content_settings", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_ExplicitContentSettings, "T") },
      { no: 30, name: "keyword_filter_settings", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_KeywordFilterSettings, "T") },
      { no: 31, name: "include_soundmoji_in_autocomplete", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.emojiPickerCollapsedSections = [];
    message.stickerPickerCollapsedSections = [];
    message.soundboardPickerCollapsedSections = [];
    message.dmSpamFilterV2 = 0;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional google.protobuf.StringValue diversity_surrogate */
        1:
          message.diversitySurrogate = StringValue.internalBinaryRead(reader, reader.uint32(), options, message.diversitySurrogate);
          break;
        case /* optional google.protobuf.BoolValue use_rich_chat_input */
        2:
          message.useRichChatInput = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.useRichChatInput);
          break;
        case /* optional google.protobuf.BoolValue use_thread_sidebar */
        3:
          message.useThreadSidebar = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.useThreadSidebar);
          break;
        case /* optional google.protobuf.StringValue render_spoilers */
        4:
          message.renderSpoilers = StringValue.internalBinaryRead(reader, reader.uint32(), options, message.renderSpoilers);
          break;
        case /* repeated string emoji_picker_collapsed_sections */
        5:
          message.emojiPickerCollapsedSections.push(reader.string());
          break;
        case /* repeated string sticker_picker_collapsed_sections */
        6:
          message.stickerPickerCollapsedSections.push(reader.string());
          break;
        case /* optional google.protobuf.BoolValue view_image_descriptions */
        7:
          message.viewImageDescriptions = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.viewImageDescriptions);
          break;
        case /* optional google.protobuf.BoolValue show_command_suggestions */
        8:
          message.showCommandSuggestions = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.showCommandSuggestions);
          break;
        case /* optional google.protobuf.BoolValue inline_attachment_media */
        9:
          message.inlineAttachmentMedia = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.inlineAttachmentMedia);
          break;
        case /* optional google.protobuf.BoolValue inline_embed_media */
        10:
          message.inlineEmbedMedia = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.inlineEmbedMedia);
          break;
        case /* optional google.protobuf.BoolValue gif_auto_play */
        11:
          message.gifAutoPlay = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.gifAutoPlay);
          break;
        case /* optional google.protobuf.BoolValue render_embeds */
        12:
          message.renderEmbeds = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.renderEmbeds);
          break;
        case /* optional google.protobuf.BoolValue render_reactions */
        13:
          message.renderReactions = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.renderReactions);
          break;
        case /* optional google.protobuf.BoolValue animate_emoji */
        14:
          message.animateEmoji = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.animateEmoji);
          break;
        case /* optional google.protobuf.UInt32Value animate_stickers */
        15:
          message.animateStickers = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.animateStickers);
          break;
        case /* optional google.protobuf.BoolValue enable_tts_command */
        16:
          message.enableTtsCommand = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.enableTtsCommand);
          break;
        case /* optional google.protobuf.BoolValue message_display_compact */
        17:
          message.messageDisplayCompact = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.messageDisplayCompact);
          break;
        case /* optional google.protobuf.UInt32Value explicit_content_filter */
        19:
          message.explicitContentFilter = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.explicitContentFilter);
          break;
        case /* optional google.protobuf.BoolValue view_nsfw_guilds */
        20:
          message.viewNsfwGuilds = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.viewNsfwGuilds);
          break;
        case /* optional google.protobuf.BoolValue convert_emoticons */
        21:
          message.convertEmoticons = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.convertEmoticons);
          break;
        case /* optional google.protobuf.BoolValue expression_suggestions_enabled */
        22:
          message.expressionSuggestionsEnabled = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.expressionSuggestionsEnabled);
          break;
        case /* optional google.protobuf.BoolValue view_nsfw_commands */
        23:
          message.viewNsfwCommands = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.viewNsfwCommands);
          break;
        case /* optional google.protobuf.BoolValue use_legacy_chat_input */
        24:
          message.useLegacyChatInput = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.useLegacyChatInput);
          break;
        case /* repeated string soundboard_picker_collapsed_sections */
        25:
          message.soundboardPickerCollapsedSections.push(reader.string());
          break;
        case /* optional google.protobuf.UInt32Value dm_spam_filter */
        26:
          message.dmSpamFilter = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.dmSpamFilter);
          break;
        case /* discord_protos.discord_users.v1.PreloadedUserSettings.DmSpamFilterV2 dm_spam_filter_v2 */
        27:
          message.dmSpamFilterV2 = reader.int32();
          break;
        case /* optional google.protobuf.BoolValue include_stickers_in_autocomplete */
        28:
          message.includeStickersInAutocomplete = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.includeStickersInAutocomplete);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentSettings explicit_content_settings */
        29:
          message.explicitContentSettings = PreloadedUserSettings_ExplicitContentSettings.internalBinaryRead(reader, reader.uint32(), options, message.explicitContentSettings);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.KeywordFilterSettings keyword_filter_settings */
        30:
          message.keywordFilterSettings = PreloadedUserSettings_KeywordFilterSettings.internalBinaryRead(reader, reader.uint32(), options, message.keywordFilterSettings);
          break;
        case /* optional google.protobuf.BoolValue include_soundmoji_in_autocomplete */
        31:
          message.includeSoundmojiInAutocomplete = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.includeSoundmojiInAutocomplete);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.diversitySurrogate)
      StringValue.internalBinaryWrite(message.diversitySurrogate, writer.tag(1, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.useRichChatInput)
      BoolValue.internalBinaryWrite(message.useRichChatInput, writer.tag(2, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.useThreadSidebar)
      BoolValue.internalBinaryWrite(message.useThreadSidebar, writer.tag(3, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.renderSpoilers)
      StringValue.internalBinaryWrite(message.renderSpoilers, writer.tag(4, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    for (let i = 0; i < message.emojiPickerCollapsedSections.length; i++)
      writer.tag(5, import_runtime25.WireType.LengthDelimited).string(message.emojiPickerCollapsedSections[i]);
    for (let i = 0; i < message.stickerPickerCollapsedSections.length; i++)
      writer.tag(6, import_runtime25.WireType.LengthDelimited).string(message.stickerPickerCollapsedSections[i]);
    if (message.viewImageDescriptions)
      BoolValue.internalBinaryWrite(message.viewImageDescriptions, writer.tag(7, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.showCommandSuggestions)
      BoolValue.internalBinaryWrite(message.showCommandSuggestions, writer.tag(8, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.inlineAttachmentMedia)
      BoolValue.internalBinaryWrite(message.inlineAttachmentMedia, writer.tag(9, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.inlineEmbedMedia)
      BoolValue.internalBinaryWrite(message.inlineEmbedMedia, writer.tag(10, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.gifAutoPlay)
      BoolValue.internalBinaryWrite(message.gifAutoPlay, writer.tag(11, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.renderEmbeds)
      BoolValue.internalBinaryWrite(message.renderEmbeds, writer.tag(12, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.renderReactions)
      BoolValue.internalBinaryWrite(message.renderReactions, writer.tag(13, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.animateEmoji)
      BoolValue.internalBinaryWrite(message.animateEmoji, writer.tag(14, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.animateStickers)
      UInt32Value.internalBinaryWrite(message.animateStickers, writer.tag(15, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.enableTtsCommand)
      BoolValue.internalBinaryWrite(message.enableTtsCommand, writer.tag(16, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.messageDisplayCompact)
      BoolValue.internalBinaryWrite(message.messageDisplayCompact, writer.tag(17, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.explicitContentFilter)
      UInt32Value.internalBinaryWrite(message.explicitContentFilter, writer.tag(19, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.viewNsfwGuilds)
      BoolValue.internalBinaryWrite(message.viewNsfwGuilds, writer.tag(20, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.convertEmoticons)
      BoolValue.internalBinaryWrite(message.convertEmoticons, writer.tag(21, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.expressionSuggestionsEnabled)
      BoolValue.internalBinaryWrite(message.expressionSuggestionsEnabled, writer.tag(22, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.viewNsfwCommands)
      BoolValue.internalBinaryWrite(message.viewNsfwCommands, writer.tag(23, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.useLegacyChatInput)
      BoolValue.internalBinaryWrite(message.useLegacyChatInput, writer.tag(24, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    for (let i = 0; i < message.soundboardPickerCollapsedSections.length; i++)
      writer.tag(25, import_runtime25.WireType.LengthDelimited).string(message.soundboardPickerCollapsedSections[i]);
    if (message.dmSpamFilter)
      UInt32Value.internalBinaryWrite(message.dmSpamFilter, writer.tag(26, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.dmSpamFilterV2 !== 0)
      writer.tag(27, import_runtime25.WireType.Varint).int32(message.dmSpamFilterV2);
    if (message.includeStickersInAutocomplete)
      BoolValue.internalBinaryWrite(message.includeStickersInAutocomplete, writer.tag(28, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.explicitContentSettings)
      PreloadedUserSettings_ExplicitContentSettings.internalBinaryWrite(message.explicitContentSettings, writer.tag(29, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.keywordFilterSettings)
      PreloadedUserSettings_KeywordFilterSettings.internalBinaryWrite(message.keywordFilterSettings, writer.tag(30, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.includeSoundmojiInAutocomplete)
      BoolValue.internalBinaryWrite(message.includeSoundmojiInAutocomplete, writer.tag(31, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_TextAndImagesSettings = new PreloadedUserSettings_TextAndImagesSettings$Type();
var PreloadedUserSettings_NotificationSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_NotificationSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.NotificationSettings", [
      { no: 1, name: "show_in_app_notifications", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 2, name: "notify_friends_on_go_live", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      {
        no: 3,
        name: "notification_center_acked_before_id",
        kind: "scalar",
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      },
      { no: 4, name: "enable_burst_reaction_notifications", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 5, name: "quiet_mode", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      {
        no: 6,
        name: "focus_mode_expires_at_ms",
        kind: "scalar",
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      },
      { no: 7, name: "reaction_notifications", kind: "enum", T: /* @__PURE__ */ __name(() => ["discord_protos.discord_users.v1.PreloadedUserSettings.ReactionNotificationType", PreloadedUserSettings_ReactionNotificationType, "REACTION_NOTIFICATION_TYPE_"], "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.notificationCenterAckedBeforeId = 0n;
    message.focusModeExpiresAtMs = 0n;
    message.reactionNotifications = 0;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional google.protobuf.BoolValue show_in_app_notifications */
        1:
          message.showInAppNotifications = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.showInAppNotifications);
          break;
        case /* optional google.protobuf.BoolValue notify_friends_on_go_live */
        2:
          message.notifyFriendsOnGoLive = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.notifyFriendsOnGoLive);
          break;
        case /* fixed64 notification_center_acked_before_id */
        3:
          message.notificationCenterAckedBeforeId = reader.fixed64().toBigInt();
          break;
        case /* optional google.protobuf.BoolValue enable_burst_reaction_notifications */
        4:
          message.enableBurstReactionNotifications = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.enableBurstReactionNotifications);
          break;
        case /* optional google.protobuf.BoolValue quiet_mode */
        5:
          message.quietMode = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.quietMode);
          break;
        case /* fixed64 focus_mode_expires_at_ms */
        6:
          message.focusModeExpiresAtMs = reader.fixed64().toBigInt();
          break;
        case /* discord_protos.discord_users.v1.PreloadedUserSettings.ReactionNotificationType reaction_notifications */
        7:
          message.reactionNotifications = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.showInAppNotifications)
      BoolValue.internalBinaryWrite(message.showInAppNotifications, writer.tag(1, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.notifyFriendsOnGoLive)
      BoolValue.internalBinaryWrite(message.notifyFriendsOnGoLive, writer.tag(2, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.notificationCenterAckedBeforeId !== 0n)
      writer.tag(3, import_runtime25.WireType.Bit64).fixed64(message.notificationCenterAckedBeforeId);
    if (message.enableBurstReactionNotifications)
      BoolValue.internalBinaryWrite(message.enableBurstReactionNotifications, writer.tag(4, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.quietMode)
      BoolValue.internalBinaryWrite(message.quietMode, writer.tag(5, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.focusModeExpiresAtMs !== 0n)
      writer.tag(6, import_runtime25.WireType.Bit64).fixed64(message.focusModeExpiresAtMs);
    if (message.reactionNotifications !== 0)
      writer.tag(7, import_runtime25.WireType.Varint).int32(message.reactionNotifications);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_NotificationSettings = new PreloadedUserSettings_NotificationSettings$Type();
var PreloadedUserSettings_PrivacySettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_PrivacySettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.PrivacySettings", [
      { no: 1, name: "allow_activity_party_privacy_friends", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 2, name: "allow_activity_party_privacy_voice_channel", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      {
        no: 3,
        name: "restricted_guild_ids",
        kind: "scalar",
        repeat: 1,
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 4,
        name: "default_guilds_restricted",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 7,
        name: "allow_accessibility_detection",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      { no: 8, name: "detect_platform_accounts", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 9, name: "passwordless", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 10, name: "contact_sync_enabled", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 11, name: "friend_source_flags", kind: "message", T: /* @__PURE__ */ __name(() => UInt32Value, "T") },
      { no: 12, name: "friend_discovery_flags", kind: "message", T: /* @__PURE__ */ __name(() => UInt32Value, "T") },
      {
        no: 13,
        name: "activity_restricted_guild_ids",
        kind: "scalar",
        repeat: 1,
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      },
      { no: 14, name: "default_guilds_activity_restricted", kind: "enum", T: /* @__PURE__ */ __name(() => ["discord_protos.discord_users.v1.PreloadedUserSettings.GuildActivityStatusRestrictionDefault", PreloadedUserSettings_GuildActivityStatusRestrictionDefault, "GUILD_ACTIVITY_STATUS_RESTRICTION_DEFAULT_"], "T") },
      {
        no: 15,
        name: "activity_joining_restricted_guild_ids",
        kind: "scalar",
        repeat: 1,
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 16,
        name: "message_request_restricted_guild_ids",
        kind: "scalar",
        repeat: 1,
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      },
      { no: 17, name: "default_message_request_restricted", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 18, name: "drops_opted_out", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 19, name: "non_spam_retraining_opt_in", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 20, name: "family_center_enabled", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 21, name: "family_center_enabled_v2", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 22, name: "hide_legacy_username", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 23, name: "inappropriate_conversation_warnings", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 24, name: "recent_games_enabled", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 25, name: "guilds_leaderboard_opt_out_default", kind: "enum", T: /* @__PURE__ */ __name(() => ["discord_protos.discord_users.v1.PreloadedUserSettings.GuildsLeaderboardOptOutDefault", PreloadedUserSettings_GuildsLeaderboardOptOutDefault, "GUILDS_LEADERBOARD_OPT_OUT_DEFAULT_"], "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.restrictedGuildIds = [];
    message.defaultGuildsRestricted = false;
    message.allowAccessibilityDetection = false;
    message.activityRestrictedGuildIds = [];
    message.defaultGuildsActivityRestricted = 0;
    message.activityJoiningRestrictedGuildIds = [];
    message.messageRequestRestrictedGuildIds = [];
    message.guildsLeaderboardOptOutDefault = 0;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional google.protobuf.BoolValue allow_activity_party_privacy_friends */
        1:
          message.allowActivityPartyPrivacyFriends = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.allowActivityPartyPrivacyFriends);
          break;
        case /* optional google.protobuf.BoolValue allow_activity_party_privacy_voice_channel */
        2:
          message.allowActivityPartyPrivacyVoiceChannel = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.allowActivityPartyPrivacyVoiceChannel);
          break;
        case /* repeated fixed64 restricted_guild_ids */
        3:
          if (wireType === import_runtime25.WireType.LengthDelimited)
            for (let e = reader.int32() + reader.pos; reader.pos < e; )
              message.restrictedGuildIds.push(reader.fixed64().toBigInt());
          else
            message.restrictedGuildIds.push(reader.fixed64().toBigInt());
          break;
        case /* bool default_guilds_restricted */
        4:
          message.defaultGuildsRestricted = reader.bool();
          break;
        case /* bool allow_accessibility_detection */
        7:
          message.allowAccessibilityDetection = reader.bool();
          break;
        case /* optional google.protobuf.BoolValue detect_platform_accounts */
        8:
          message.detectPlatformAccounts = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.detectPlatformAccounts);
          break;
        case /* optional google.protobuf.BoolValue passwordless */
        9:
          message.passwordless = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.passwordless);
          break;
        case /* optional google.protobuf.BoolValue contact_sync_enabled */
        10:
          message.contactSyncEnabled = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.contactSyncEnabled);
          break;
        case /* optional google.protobuf.UInt32Value friend_source_flags */
        11:
          message.friendSourceFlags = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.friendSourceFlags);
          break;
        case /* optional google.protobuf.UInt32Value friend_discovery_flags */
        12:
          message.friendDiscoveryFlags = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.friendDiscoveryFlags);
          break;
        case /* repeated fixed64 activity_restricted_guild_ids */
        13:
          if (wireType === import_runtime25.WireType.LengthDelimited)
            for (let e = reader.int32() + reader.pos; reader.pos < e; )
              message.activityRestrictedGuildIds.push(reader.fixed64().toBigInt());
          else
            message.activityRestrictedGuildIds.push(reader.fixed64().toBigInt());
          break;
        case /* discord_protos.discord_users.v1.PreloadedUserSettings.GuildActivityStatusRestrictionDefault default_guilds_activity_restricted */
        14:
          message.defaultGuildsActivityRestricted = reader.int32();
          break;
        case /* repeated fixed64 activity_joining_restricted_guild_ids */
        15:
          if (wireType === import_runtime25.WireType.LengthDelimited)
            for (let e = reader.int32() + reader.pos; reader.pos < e; )
              message.activityJoiningRestrictedGuildIds.push(reader.fixed64().toBigInt());
          else
            message.activityJoiningRestrictedGuildIds.push(reader.fixed64().toBigInt());
          break;
        case /* repeated fixed64 message_request_restricted_guild_ids */
        16:
          if (wireType === import_runtime25.WireType.LengthDelimited)
            for (let e = reader.int32() + reader.pos; reader.pos < e; )
              message.messageRequestRestrictedGuildIds.push(reader.fixed64().toBigInt());
          else
            message.messageRequestRestrictedGuildIds.push(reader.fixed64().toBigInt());
          break;
        case /* optional google.protobuf.BoolValue default_message_request_restricted */
        17:
          message.defaultMessageRequestRestricted = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.defaultMessageRequestRestricted);
          break;
        case /* optional google.protobuf.BoolValue drops_opted_out */
        18:
          message.dropsOptedOut = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.dropsOptedOut);
          break;
        case /* optional google.protobuf.BoolValue non_spam_retraining_opt_in */
        19:
          message.nonSpamRetrainingOptIn = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.nonSpamRetrainingOptIn);
          break;
        case /* optional google.protobuf.BoolValue family_center_enabled */
        20:
          message.familyCenterEnabled = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.familyCenterEnabled);
          break;
        case /* optional google.protobuf.BoolValue family_center_enabled_v2 */
        21:
          message.familyCenterEnabledV2 = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.familyCenterEnabledV2);
          break;
        case /* optional google.protobuf.BoolValue hide_legacy_username */
        22:
          message.hideLegacyUsername = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.hideLegacyUsername);
          break;
        case /* optional google.protobuf.BoolValue inappropriate_conversation_warnings */
        23:
          message.inappropriateConversationWarnings = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.inappropriateConversationWarnings);
          break;
        case /* optional google.protobuf.BoolValue recent_games_enabled */
        24:
          message.recentGamesEnabled = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.recentGamesEnabled);
          break;
        case /* discord_protos.discord_users.v1.PreloadedUserSettings.GuildsLeaderboardOptOutDefault guilds_leaderboard_opt_out_default */
        25:
          message.guildsLeaderboardOptOutDefault = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.allowActivityPartyPrivacyFriends)
      BoolValue.internalBinaryWrite(message.allowActivityPartyPrivacyFriends, writer.tag(1, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.allowActivityPartyPrivacyVoiceChannel)
      BoolValue.internalBinaryWrite(message.allowActivityPartyPrivacyVoiceChannel, writer.tag(2, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.restrictedGuildIds.length) {
      writer.tag(3, import_runtime25.WireType.LengthDelimited).fork();
      for (let i = 0; i < message.restrictedGuildIds.length; i++)
        writer.fixed64(message.restrictedGuildIds[i]);
      writer.join();
    }
    if (message.defaultGuildsRestricted !== false)
      writer.tag(4, import_runtime25.WireType.Varint).bool(message.defaultGuildsRestricted);
    if (message.allowAccessibilityDetection !== false)
      writer.tag(7, import_runtime25.WireType.Varint).bool(message.allowAccessibilityDetection);
    if (message.detectPlatformAccounts)
      BoolValue.internalBinaryWrite(message.detectPlatformAccounts, writer.tag(8, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.passwordless)
      BoolValue.internalBinaryWrite(message.passwordless, writer.tag(9, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.contactSyncEnabled)
      BoolValue.internalBinaryWrite(message.contactSyncEnabled, writer.tag(10, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.friendSourceFlags)
      UInt32Value.internalBinaryWrite(message.friendSourceFlags, writer.tag(11, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.friendDiscoveryFlags)
      UInt32Value.internalBinaryWrite(message.friendDiscoveryFlags, writer.tag(12, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.activityRestrictedGuildIds.length) {
      writer.tag(13, import_runtime25.WireType.LengthDelimited).fork();
      for (let i = 0; i < message.activityRestrictedGuildIds.length; i++)
        writer.fixed64(message.activityRestrictedGuildIds[i]);
      writer.join();
    }
    if (message.defaultGuildsActivityRestricted !== 0)
      writer.tag(14, import_runtime25.WireType.Varint).int32(message.defaultGuildsActivityRestricted);
    if (message.activityJoiningRestrictedGuildIds.length) {
      writer.tag(15, import_runtime25.WireType.LengthDelimited).fork();
      for (let i = 0; i < message.activityJoiningRestrictedGuildIds.length; i++)
        writer.fixed64(message.activityJoiningRestrictedGuildIds[i]);
      writer.join();
    }
    if (message.messageRequestRestrictedGuildIds.length) {
      writer.tag(16, import_runtime25.WireType.LengthDelimited).fork();
      for (let i = 0; i < message.messageRequestRestrictedGuildIds.length; i++)
        writer.fixed64(message.messageRequestRestrictedGuildIds[i]);
      writer.join();
    }
    if (message.defaultMessageRequestRestricted)
      BoolValue.internalBinaryWrite(message.defaultMessageRequestRestricted, writer.tag(17, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.dropsOptedOut)
      BoolValue.internalBinaryWrite(message.dropsOptedOut, writer.tag(18, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.nonSpamRetrainingOptIn)
      BoolValue.internalBinaryWrite(message.nonSpamRetrainingOptIn, writer.tag(19, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.familyCenterEnabled)
      BoolValue.internalBinaryWrite(message.familyCenterEnabled, writer.tag(20, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.familyCenterEnabledV2)
      BoolValue.internalBinaryWrite(message.familyCenterEnabledV2, writer.tag(21, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.hideLegacyUsername)
      BoolValue.internalBinaryWrite(message.hideLegacyUsername, writer.tag(22, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.inappropriateConversationWarnings)
      BoolValue.internalBinaryWrite(message.inappropriateConversationWarnings, writer.tag(23, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.recentGamesEnabled)
      BoolValue.internalBinaryWrite(message.recentGamesEnabled, writer.tag(24, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.guildsLeaderboardOptOutDefault !== 0)
      writer.tag(25, import_runtime25.WireType.Varint).int32(message.guildsLeaderboardOptOutDefault);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_PrivacySettings = new PreloadedUserSettings_PrivacySettings$Type();
var PreloadedUserSettings_DebugSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_DebugSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.DebugSettings", [
      { no: 1, name: "rtc_panel_show_voice_states", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional google.protobuf.BoolValue rtc_panel_show_voice_states */
        1:
          message.rtcPanelShowVoiceStates = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.rtcPanelShowVoiceStates);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.rtcPanelShowVoiceStates)
      BoolValue.internalBinaryWrite(message.rtcPanelShowVoiceStates, writer.tag(1, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_DebugSettings = new PreloadedUserSettings_DebugSettings$Type();
var PreloadedUserSettings_GameLibrarySettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_GameLibrarySettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.GameLibrarySettings", [
      { no: 1, name: "install_shortcut_desktop", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 2, name: "install_shortcut_start_menu", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 3, name: "disable_games_tab", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional google.protobuf.BoolValue install_shortcut_desktop */
        1:
          message.installShortcutDesktop = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.installShortcutDesktop);
          break;
        case /* optional google.protobuf.BoolValue install_shortcut_start_menu */
        2:
          message.installShortcutStartMenu = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.installShortcutStartMenu);
          break;
        case /* optional google.protobuf.BoolValue disable_games_tab */
        3:
          message.disableGamesTab = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.disableGamesTab);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.installShortcutDesktop)
      BoolValue.internalBinaryWrite(message.installShortcutDesktop, writer.tag(1, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.installShortcutStartMenu)
      BoolValue.internalBinaryWrite(message.installShortcutStartMenu, writer.tag(2, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.disableGamesTab)
      BoolValue.internalBinaryWrite(message.disableGamesTab, writer.tag(3, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_GameLibrarySettings = new PreloadedUserSettings_GameLibrarySettings$Type();
var PreloadedUserSettings_CustomStatus$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_CustomStatus$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.CustomStatus", [
      {
        no: 1,
        name: "text",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 2,
        name: "emoji_id",
        kind: "scalar",
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 3,
        name: "emoji_name",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      {
        no: 4,
        name: "expires_at_ms",
        kind: "scalar",
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 5,
        name: "created_at_ms",
        kind: "scalar",
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.text = "";
    message.emojiId = 0n;
    message.emojiName = "";
    message.expiresAtMs = 0n;
    message.createdAtMs = 0n;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string text */
        1:
          message.text = reader.string();
          break;
        case /* fixed64 emoji_id */
        2:
          message.emojiId = reader.fixed64().toBigInt();
          break;
        case /* string emoji_name */
        3:
          message.emojiName = reader.string();
          break;
        case /* fixed64 expires_at_ms */
        4:
          message.expiresAtMs = reader.fixed64().toBigInt();
          break;
        case /* fixed64 created_at_ms */
        5:
          message.createdAtMs = reader.fixed64().toBigInt();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.text !== "")
      writer.tag(1, import_runtime25.WireType.LengthDelimited).string(message.text);
    if (message.emojiId !== 0n)
      writer.tag(2, import_runtime25.WireType.Bit64).fixed64(message.emojiId);
    if (message.emojiName !== "")
      writer.tag(3, import_runtime25.WireType.LengthDelimited).string(message.emojiName);
    if (message.expiresAtMs !== 0n)
      writer.tag(4, import_runtime25.WireType.Bit64).fixed64(message.expiresAtMs);
    if (message.createdAtMs !== 0n)
      writer.tag(5, import_runtime25.WireType.Bit64).fixed64(message.createdAtMs);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_CustomStatus = new PreloadedUserSettings_CustomStatus$Type();
var PreloadedUserSettings_StatusSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_StatusSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.StatusSettings", [
      { no: 1, name: "status", kind: "message", T: /* @__PURE__ */ __name(() => StringValue, "T") },
      { no: 2, name: "custom_status", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_CustomStatus, "T") },
      { no: 3, name: "show_current_game", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      {
        no: 4,
        name: "status_expires_at_ms",
        kind: "scalar",
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.statusExpiresAtMs = 0n;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional google.protobuf.StringValue status */
        1:
          message.status = StringValue.internalBinaryRead(reader, reader.uint32(), options, message.status);
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.CustomStatus custom_status */
        2:
          message.customStatus = PreloadedUserSettings_CustomStatus.internalBinaryRead(reader, reader.uint32(), options, message.customStatus);
          break;
        case /* optional google.protobuf.BoolValue show_current_game */
        3:
          message.showCurrentGame = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.showCurrentGame);
          break;
        case /* fixed64 status_expires_at_ms */
        4:
          message.statusExpiresAtMs = reader.fixed64().toBigInt();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.status)
      StringValue.internalBinaryWrite(message.status, writer.tag(1, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.customStatus)
      PreloadedUserSettings_CustomStatus.internalBinaryWrite(message.customStatus, writer.tag(2, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.showCurrentGame)
      BoolValue.internalBinaryWrite(message.showCurrentGame, writer.tag(3, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.statusExpiresAtMs !== 0n)
      writer.tag(4, import_runtime25.WireType.Bit64).fixed64(message.statusExpiresAtMs);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_StatusSettings = new PreloadedUserSettings_StatusSettings$Type();
var PreloadedUserSettings_LocalizationSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_LocalizationSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.LocalizationSettings", [
      { no: 1, name: "locale", kind: "message", T: /* @__PURE__ */ __name(() => StringValue, "T") },
      { no: 2, name: "timezone_offset", kind: "message", T: /* @__PURE__ */ __name(() => Int32Value, "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional google.protobuf.StringValue locale */
        1:
          message.locale = StringValue.internalBinaryRead(reader, reader.uint32(), options, message.locale);
          break;
        case /* optional google.protobuf.Int32Value timezone_offset */
        2:
          message.timezoneOffset = Int32Value.internalBinaryRead(reader, reader.uint32(), options, message.timezoneOffset);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.locale)
      StringValue.internalBinaryWrite(message.locale, writer.tag(1, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.timezoneOffset)
      Int32Value.internalBinaryWrite(message.timezoneOffset, writer.tag(2, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_LocalizationSettings = new PreloadedUserSettings_LocalizationSettings$Type();
var PreloadedUserSettings_ClientThemeSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_ClientThemeSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.ClientThemeSettings", [
      { no: 2, name: "background_gradient_preset_id", kind: "message", T: /* @__PURE__ */ __name(() => UInt32Value, "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional google.protobuf.UInt32Value background_gradient_preset_id */
        2:
          message.backgroundGradientPresetId = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.backgroundGradientPresetId);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.backgroundGradientPresetId)
      UInt32Value.internalBinaryWrite(message.backgroundGradientPresetId, writer.tag(2, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_ClientThemeSettings = new PreloadedUserSettings_ClientThemeSettings$Type();
var PreloadedUserSettings_AppearanceSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_AppearanceSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.AppearanceSettings", [
      { no: 1, name: "theme", kind: "enum", T: /* @__PURE__ */ __name(() => ["discord_protos.discord_users.v1.PreloadedUserSettings.Theme", PreloadedUserSettings_Theme, "THEME_"], "T") },
      {
        no: 2,
        name: "developer_mode",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      { no: 3, name: "client_theme_settings", kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_ClientThemeSettings, "T") },
      {
        no: 4,
        name: "mobile_redesign_disabled",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      { no: 6, name: "channel_list_layout", kind: "message", T: /* @__PURE__ */ __name(() => StringValue, "T") },
      { no: 7, name: "message_previews", kind: "message", T: /* @__PURE__ */ __name(() => StringValue, "T") },
      { no: 8, name: "search_result_exact_count_enabled", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 9, name: "timestamp_hour_cycle", kind: "enum", T: /* @__PURE__ */ __name(() => ["discord_protos.discord_users.v1.PreloadedUserSettings.TimestampHourCycle", PreloadedUserSettings_TimestampHourCycle, "TIMESTAMP_HOUR_CYCLE_"], "T") },
      { no: 10, name: "happening_now_cards_disabled", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      { no: 11, name: "launch_pad_mode", kind: "enum", T: /* @__PURE__ */ __name(() => ["discord_protos.discord_users.v1.PreloadedUserSettings.LaunchPadMode", PreloadedUserSettings_LaunchPadMode, "LAUNCH_PAD_MODE_"], "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.theme = 0;
    message.developerMode = false;
    message.mobileRedesignDisabled = false;
    message.timestampHourCycle = 0;
    message.launchPadMode = 0;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* discord_protos.discord_users.v1.PreloadedUserSettings.Theme theme */
        1:
          message.theme = reader.int32();
          break;
        case /* bool developer_mode */
        2:
          message.developerMode = reader.bool();
          break;
        case /* optional discord_protos.discord_users.v1.PreloadedUserSettings.ClientThemeSettings client_theme_settings */
        3:
          message.clientThemeSettings = PreloadedUserSettings_ClientThemeSettings.internalBinaryRead(reader, reader.uint32(), options, message.clientThemeSettings);
          break;
        case /* bool mobile_redesign_disabled */
        4:
          message.mobileRedesignDisabled = reader.bool();
          break;
        case /* optional google.protobuf.StringValue channel_list_layout */
        6:
          message.channelListLayout = StringValue.internalBinaryRead(reader, reader.uint32(), options, message.channelListLayout);
          break;
        case /* optional google.protobuf.StringValue message_previews */
        7:
          message.messagePreviews = StringValue.internalBinaryRead(reader, reader.uint32(), options, message.messagePreviews);
          break;
        case /* optional google.protobuf.BoolValue search_result_exact_count_enabled */
        8:
          message.searchResultExactCountEnabled = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.searchResultExactCountEnabled);
          break;
        case /* discord_protos.discord_users.v1.PreloadedUserSettings.TimestampHourCycle timestamp_hour_cycle */
        9:
          message.timestampHourCycle = reader.int32();
          break;
        case /* optional google.protobuf.BoolValue happening_now_cards_disabled */
        10:
          message.happeningNowCardsDisabled = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.happeningNowCardsDisabled);
          break;
        case /* discord_protos.discord_users.v1.PreloadedUserSettings.LaunchPadMode launch_pad_mode */
        11:
          message.launchPadMode = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.theme !== 0)
      writer.tag(1, import_runtime25.WireType.Varint).int32(message.theme);
    if (message.developerMode !== false)
      writer.tag(2, import_runtime25.WireType.Varint).bool(message.developerMode);
    if (message.clientThemeSettings)
      PreloadedUserSettings_ClientThemeSettings.internalBinaryWrite(message.clientThemeSettings, writer.tag(3, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.mobileRedesignDisabled !== false)
      writer.tag(4, import_runtime25.WireType.Varint).bool(message.mobileRedesignDisabled);
    if (message.channelListLayout)
      StringValue.internalBinaryWrite(message.channelListLayout, writer.tag(6, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.messagePreviews)
      StringValue.internalBinaryWrite(message.messagePreviews, writer.tag(7, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.searchResultExactCountEnabled)
      BoolValue.internalBinaryWrite(message.searchResultExactCountEnabled, writer.tag(8, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.timestampHourCycle !== 0)
      writer.tag(9, import_runtime25.WireType.Varint).int32(message.timestampHourCycle);
    if (message.happeningNowCardsDisabled)
      BoolValue.internalBinaryWrite(message.happeningNowCardsDisabled, writer.tag(10, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.launchPadMode !== 0)
      writer.tag(11, import_runtime25.WireType.Varint).int32(message.launchPadMode);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_AppearanceSettings = new PreloadedUserSettings_AppearanceSettings$Type();
var PreloadedUserSettings_GuildFolder$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_GuildFolder$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.GuildFolder", [
      {
        no: 1,
        name: "guild_ids",
        kind: "scalar",
        repeat: 1,
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      },
      { no: 2, name: "id", kind: "message", T: /* @__PURE__ */ __name(() => Int64Value, "T") },
      { no: 3, name: "name", kind: "message", T: /* @__PURE__ */ __name(() => StringValue, "T") },
      { no: 4, name: "color", kind: "message", T: /* @__PURE__ */ __name(() => UInt64Value, "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.guildIds = [];
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* repeated fixed64 guild_ids */
        1:
          if (wireType === import_runtime25.WireType.LengthDelimited)
            for (let e = reader.int32() + reader.pos; reader.pos < e; )
              message.guildIds.push(reader.fixed64().toBigInt());
          else
            message.guildIds.push(reader.fixed64().toBigInt());
          break;
        case /* optional google.protobuf.Int64Value id */
        2:
          message.id = Int64Value.internalBinaryRead(reader, reader.uint32(), options, message.id);
          break;
        case /* optional google.protobuf.StringValue name */
        3:
          message.name = StringValue.internalBinaryRead(reader, reader.uint32(), options, message.name);
          break;
        case /* optional google.protobuf.UInt64Value color */
        4:
          message.color = UInt64Value.internalBinaryRead(reader, reader.uint32(), options, message.color);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.guildIds.length) {
      writer.tag(1, import_runtime25.WireType.LengthDelimited).fork();
      for (let i = 0; i < message.guildIds.length; i++)
        writer.fixed64(message.guildIds[i]);
      writer.join();
    }
    if (message.id)
      Int64Value.internalBinaryWrite(message.id, writer.tag(2, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.name)
      StringValue.internalBinaryWrite(message.name, writer.tag(3, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.color)
      UInt64Value.internalBinaryWrite(message.color, writer.tag(4, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_GuildFolder = new PreloadedUserSettings_GuildFolder$Type();
var PreloadedUserSettings_GuildFolders$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_GuildFolders$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.GuildFolders", [
      { no: 1, name: "folders", kind: "message", repeat: 1, T: /* @__PURE__ */ __name(() => PreloadedUserSettings_GuildFolder, "T") },
      {
        no: 2,
        name: "guild_positions",
        kind: "scalar",
        repeat: 1,
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.folders = [];
    message.guildPositions = [];
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* repeated discord_protos.discord_users.v1.PreloadedUserSettings.GuildFolder folders */
        1:
          message.folders.push(PreloadedUserSettings_GuildFolder.internalBinaryRead(reader, reader.uint32(), options));
          break;
        case /* repeated fixed64 guild_positions */
        2:
          if (wireType === import_runtime25.WireType.LengthDelimited)
            for (let e = reader.int32() + reader.pos; reader.pos < e; )
              message.guildPositions.push(reader.fixed64().toBigInt());
          else
            message.guildPositions.push(reader.fixed64().toBigInt());
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    for (let i = 0; i < message.folders.length; i++)
      PreloadedUserSettings_GuildFolder.internalBinaryWrite(message.folders[i], writer.tag(1, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.guildPositions.length) {
      writer.tag(2, import_runtime25.WireType.LengthDelimited).fork();
      for (let i = 0; i < message.guildPositions.length; i++)
        writer.fixed64(message.guildPositions[i]);
      writer.join();
    }
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_GuildFolders = new PreloadedUserSettings_GuildFolders$Type();
var PreloadedUserSettings_FavoriteChannel$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_FavoriteChannel$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.FavoriteChannel", [
      {
        no: 1,
        name: "nickname",
        kind: "scalar",
        T: 9
        /*ScalarType.STRING*/
      },
      { no: 2, name: "type", kind: "enum", T: /* @__PURE__ */ __name(() => ["discord_protos.discord_users.v1.PreloadedUserSettings.FavoriteChannelType", PreloadedUserSettings_FavoriteChannelType, "FAVORITE_CHANNEL_TYPE_"], "T") },
      {
        no: 3,
        name: "position",
        kind: "scalar",
        T: 13
        /*ScalarType.UINT32*/
      },
      {
        no: 4,
        name: "parent_id",
        kind: "scalar",
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.nickname = "";
    message.type = 0;
    message.position = 0;
    message.parentId = 0n;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string nickname */
        1:
          message.nickname = reader.string();
          break;
        case /* discord_protos.discord_users.v1.PreloadedUserSettings.FavoriteChannelType type */
        2:
          message.type = reader.int32();
          break;
        case /* uint32 position */
        3:
          message.position = reader.uint32();
          break;
        case /* fixed64 parent_id */
        4:
          message.parentId = reader.fixed64().toBigInt();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.nickname !== "")
      writer.tag(1, import_runtime25.WireType.LengthDelimited).string(message.nickname);
    if (message.type !== 0)
      writer.tag(2, import_runtime25.WireType.Varint).int32(message.type);
    if (message.position !== 0)
      writer.tag(3, import_runtime25.WireType.Varint).uint32(message.position);
    if (message.parentId !== 0n)
      writer.tag(4, import_runtime25.WireType.Bit64).fixed64(message.parentId);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_FavoriteChannel = new PreloadedUserSettings_FavoriteChannel$Type();
var PreloadedUserSettings_Favorites$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_Favorites$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.Favorites", [
      { no: 1, name: "favorite_channels", kind: "map", K: 6, V: { kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_FavoriteChannel, "T") } },
      {
        no: 2,
        name: "muted",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.favoriteChannels = {};
    message.muted = false;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* map<fixed64, discord_protos.discord_users.v1.PreloadedUserSettings.FavoriteChannel> favorite_channels */
        1:
          this.binaryReadMap1(message.favoriteChannels, reader, options);
          break;
        case /* bool muted */
        2:
          message.muted = reader.bool();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  binaryReadMap1(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.fixed64().toString();
          break;
        case 2:
          val = PreloadedUserSettings_FavoriteChannel.internalBinaryRead(reader, reader.uint32(), options);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.PreloadedUserSettings.Favorites.favorite_channels");
      }
    }
    map[key ?? "0"] = val ?? PreloadedUserSettings_FavoriteChannel.create();
  }
  internalBinaryWrite(message, writer, options) {
    for (let k of globalThis.Object.keys(message.favoriteChannels)) {
      writer.tag(1, import_runtime25.WireType.LengthDelimited).fork().tag(1, import_runtime25.WireType.Bit64).fixed64(k);
      writer.tag(2, import_runtime25.WireType.LengthDelimited).fork();
      PreloadedUserSettings_FavoriteChannel.internalBinaryWrite(message.favoriteChannels[k], writer, options);
      writer.join().join();
    }
    if (message.muted !== false)
      writer.tag(2, import_runtime25.WireType.Varint).bool(message.muted);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_Favorites = new PreloadedUserSettings_Favorites$Type();
var PreloadedUserSettings_AudioContextSetting$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_AudioContextSetting$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.AudioContextSetting", [
      {
        no: 1,
        name: "muted",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      },
      {
        no: 2,
        name: "volume",
        kind: "scalar",
        T: 2
        /*ScalarType.FLOAT*/
      },
      {
        no: 3,
        name: "modified_at",
        kind: "scalar",
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 4,
        name: "soundboard_muted",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.muted = false;
    message.volume = 0;
    message.modifiedAt = 0n;
    message.soundboardMuted = false;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* bool muted */
        1:
          message.muted = reader.bool();
          break;
        case /* float volume */
        2:
          message.volume = reader.float();
          break;
        case /* fixed64 modified_at */
        3:
          message.modifiedAt = reader.fixed64().toBigInt();
          break;
        case /* bool soundboard_muted */
        4:
          message.soundboardMuted = reader.bool();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.muted !== false)
      writer.tag(1, import_runtime25.WireType.Varint).bool(message.muted);
    if (message.volume !== 0)
      writer.tag(2, import_runtime25.WireType.Bit32).float(message.volume);
    if (message.modifiedAt !== 0n)
      writer.tag(3, import_runtime25.WireType.Bit64).fixed64(message.modifiedAt);
    if (message.soundboardMuted !== false)
      writer.tag(4, import_runtime25.WireType.Varint).bool(message.soundboardMuted);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_AudioContextSetting = new PreloadedUserSettings_AudioContextSetting$Type();
var PreloadedUserSettings_AudioSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_AudioSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.AudioSettings", [
      { no: 1, name: "user", kind: "map", K: 6, V: { kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_AudioContextSetting, "T") } },
      { no: 2, name: "stream", kind: "map", K: 6, V: { kind: "message", T: /* @__PURE__ */ __name(() => PreloadedUserSettings_AudioContextSetting, "T") } }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.user = {};
    message.stream = {};
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* map<fixed64, discord_protos.discord_users.v1.PreloadedUserSettings.AudioContextSetting> user */
        1:
          this.binaryReadMap1(message.user, reader, options);
          break;
        case /* map<fixed64, discord_protos.discord_users.v1.PreloadedUserSettings.AudioContextSetting> stream */
        2:
          this.binaryReadMap2(message.stream, reader, options);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  binaryReadMap1(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.fixed64().toString();
          break;
        case 2:
          val = PreloadedUserSettings_AudioContextSetting.internalBinaryRead(reader, reader.uint32(), options);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.PreloadedUserSettings.AudioSettings.user");
      }
    }
    map[key ?? "0"] = val ?? PreloadedUserSettings_AudioContextSetting.create();
  }
  binaryReadMap2(map, reader, options) {
    let len = reader.uint32(), end = reader.pos + len, key, val;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case 1:
          key = reader.fixed64().toString();
          break;
        case 2:
          val = PreloadedUserSettings_AudioContextSetting.internalBinaryRead(reader, reader.uint32(), options);
          break;
        default:
          throw new globalThis.Error("unknown map entry field for field discord_protos.discord_users.v1.PreloadedUserSettings.AudioSettings.stream");
      }
    }
    map[key ?? "0"] = val ?? PreloadedUserSettings_AudioContextSetting.create();
  }
  internalBinaryWrite(message, writer, options) {
    for (let k of globalThis.Object.keys(message.user)) {
      writer.tag(1, import_runtime25.WireType.LengthDelimited).fork().tag(1, import_runtime25.WireType.Bit64).fixed64(k);
      writer.tag(2, import_runtime25.WireType.LengthDelimited).fork();
      PreloadedUserSettings_AudioContextSetting.internalBinaryWrite(message.user[k], writer, options);
      writer.join().join();
    }
    for (let k of globalThis.Object.keys(message.stream)) {
      writer.tag(2, import_runtime25.WireType.LengthDelimited).fork().tag(1, import_runtime25.WireType.Bit64).fixed64(k);
      writer.tag(2, import_runtime25.WireType.LengthDelimited).fork();
      PreloadedUserSettings_AudioContextSetting.internalBinaryWrite(message.stream[k], writer, options);
      writer.join().join();
    }
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_AudioSettings = new PreloadedUserSettings_AudioSettings$Type();
var PreloadedUserSettings_CommunitiesSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_CommunitiesSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.CommunitiesSettings", [
      { no: 1, name: "disable_home_auto_nav", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional google.protobuf.BoolValue disable_home_auto_nav */
        1:
          message.disableHomeAutoNav = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.disableHomeAutoNav);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.disableHomeAutoNav)
      BoolValue.internalBinaryWrite(message.disableHomeAutoNav, writer.tag(1, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_CommunitiesSettings = new PreloadedUserSettings_CommunitiesSettings$Type();
var PreloadedUserSettings_BroadcastSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_BroadcastSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.BroadcastSettings", [
      { no: 1, name: "allow_friends", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") },
      {
        no: 2,
        name: "allowed_guild_ids",
        kind: "scalar",
        repeat: 1,
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      },
      {
        no: 3,
        name: "allowed_user_ids",
        kind: "scalar",
        repeat: 1,
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      },
      { no: 4, name: "auto_broadcast", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.allowedGuildIds = [];
    message.allowedUserIds = [];
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional google.protobuf.BoolValue allow_friends */
        1:
          message.allowFriends = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.allowFriends);
          break;
        case /* repeated fixed64 allowed_guild_ids */
        2:
          if (wireType === import_runtime25.WireType.LengthDelimited)
            for (let e = reader.int32() + reader.pos; reader.pos < e; )
              message.allowedGuildIds.push(reader.fixed64().toBigInt());
          else
            message.allowedGuildIds.push(reader.fixed64().toBigInt());
          break;
        case /* repeated fixed64 allowed_user_ids */
        3:
          if (wireType === import_runtime25.WireType.LengthDelimited)
            for (let e = reader.int32() + reader.pos; reader.pos < e; )
              message.allowedUserIds.push(reader.fixed64().toBigInt());
          else
            message.allowedUserIds.push(reader.fixed64().toBigInt());
          break;
        case /* optional google.protobuf.BoolValue auto_broadcast */
        4:
          message.autoBroadcast = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.autoBroadcast);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.allowFriends)
      BoolValue.internalBinaryWrite(message.allowFriends, writer.tag(1, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    if (message.allowedGuildIds.length) {
      writer.tag(2, import_runtime25.WireType.LengthDelimited).fork();
      for (let i = 0; i < message.allowedGuildIds.length; i++)
        writer.fixed64(message.allowedGuildIds[i]);
      writer.join();
    }
    if (message.allowedUserIds.length) {
      writer.tag(3, import_runtime25.WireType.LengthDelimited).fork();
      for (let i = 0; i < message.allowedUserIds.length; i++)
        writer.fixed64(message.allowedUserIds[i]);
      writer.join();
    }
    if (message.autoBroadcast)
      BoolValue.internalBinaryWrite(message.autoBroadcast, writer.tag(4, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_BroadcastSettings = new PreloadedUserSettings_BroadcastSettings$Type();
var PreloadedUserSettings_ClipsSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_ClipsSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.ClipsSettings", [
      { no: 1, name: "allow_voice_recording", kind: "message", T: /* @__PURE__ */ __name(() => BoolValue, "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional google.protobuf.BoolValue allow_voice_recording */
        1:
          message.allowVoiceRecording = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.allowVoiceRecording);
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.allowVoiceRecording)
      BoolValue.internalBinaryWrite(message.allowVoiceRecording, writer.tag(1, import_runtime25.WireType.LengthDelimited).fork(), options).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_ClipsSettings = new PreloadedUserSettings_ClipsSettings$Type();
var PreloadedUserSettings_ForLaterSettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_ForLaterSettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.ForLaterSettings", [
      { no: 1, name: "current_tab", kind: "enum", T: /* @__PURE__ */ __name(() => ["discord_protos.discord_users.v1.PreloadedUserSettings.ForLaterTab", PreloadedUserSettings_ForLaterTab, "FOR_LATER_TAB_"], "T") }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.currentTab = 0;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* discord_protos.discord_users.v1.PreloadedUserSettings.ForLaterTab current_tab */
        1:
          message.currentTab = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.currentTab !== 0)
      writer.tag(1, import_runtime25.WireType.Varint).int32(message.currentTab);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_ForLaterSettings = new PreloadedUserSettings_ForLaterSettings$Type();
var PreloadedUserSettings_SafetySettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_SafetySettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.SafetySettings", [
      { no: 1, name: "safety_settings_preset", kind: "enum", T: /* @__PURE__ */ __name(() => ["discord_protos.discord_users.v1.PreloadedUserSettings.SafetySettingsPresetType", PreloadedUserSettings_SafetySettingsPresetType, "SAFETY_SETTINGS_PRESET_TYPE_"], "T") },
      {
        no: 2,
        name: "ignore_profile_speedbump_disabled",
        kind: "scalar",
        T: 8
        /*ScalarType.BOOL*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.safetySettingsPreset = 0;
    message.ignoreProfileSpeedbumpDisabled = false;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* discord_protos.discord_users.v1.PreloadedUserSettings.SafetySettingsPresetType safety_settings_preset */
        1:
          message.safetySettingsPreset = reader.int32();
          break;
        case /* bool ignore_profile_speedbump_disabled */
        2:
          message.ignoreProfileSpeedbumpDisabled = reader.bool();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.safetySettingsPreset !== 0)
      writer.tag(1, import_runtime25.WireType.Varint).int32(message.safetySettingsPreset);
    if (message.ignoreProfileSpeedbumpDisabled !== false)
      writer.tag(2, import_runtime25.WireType.Varint).bool(message.ignoreProfileSpeedbumpDisabled);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_SafetySettings = new PreloadedUserSettings_SafetySettings$Type();
var PreloadedUserSettings_ICYMISettings$Type = class extends import_runtime28.MessageType {
  static {
    __name(this, "PreloadedUserSettings_ICYMISettings$Type");
  }
  constructor() {
    super("discord_protos.discord_users.v1.PreloadedUserSettings.ICYMISettings", [
      {
        no: 1,
        name: "feed_generated_at",
        kind: "scalar",
        T: 6,
        L: 0
        /*LongType.BIGINT*/
      }
    ]);
  }
  create(value) {
    const message = globalThis.Object.create(this.messagePrototype);
    message.feedGeneratedAt = 0n;
    if (value !== void 0)
      (0, import_runtime27.reflectionMergePartial)(this, message, value);
    return message;
  }
  internalBinaryRead(reader, length, options, target) {
    let message = target ?? this.create(), end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* fixed64 feed_generated_at */
        1:
          message.feedGeneratedAt = reader.fixed64().toBigInt();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? import_runtime26.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message, writer, options) {
    if (message.feedGeneratedAt !== 0n)
      writer.tag(1, import_runtime25.WireType.Bit64).fixed64(message.feedGeneratedAt);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? import_runtime26.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
};
var PreloadedUserSettings_ICYMISettings = new PreloadedUserSettings_ICYMISettings$Type();

// DiscordProtos/src/index.ts
var compatBuffer = {
  from: /* @__PURE__ */ __name(function(input, encoding) {
    if (typeof input === "string" && encoding === "base64") {
      const encodedBytes = atob(input);
      const bytes = new Uint8Array(encodedBytes.length);
      for (let i = 0; i < encodedBytes.length; i++) {
        bytes[i] = encodedBytes.charCodeAt(i);
      }
      return bytes;
    } else if (!encoding && input instanceof Uint8Array) {
      return input;
    }
    throw new Error("Invalid input type.");
  }, "from"),
  toBase64String: /* @__PURE__ */ __name(function(buffer) {
    let encodedBytes = "";
    for (let i = 0; i < buffer.length; i++) {
      encodedBytes += String.fromCharCode(buffer[i]);
    }
    return btoa(encodedBytes);
  }, "toBase64String")
};
function deepConvertUintArrayToBuffer(obj) {
  if (obj instanceof Uint8Array || obj instanceof Uint16Array || obj instanceof Uint32Array || obj instanceof BigUint64Array) {
    return Buffer.from(obj.buffer);
  }
  if (Array.isArray(obj)) {
    return obj.map(deepConvertUintArrayToBuffer);
  }
  if (obj && typeof obj === "object" && !Buffer.isBuffer(obj)) {
    const converted = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        converted[key] = deepConvertUintArrayToBuffer(obj[key]);
      }
    }
    return converted;
  }
  return obj;
}
__name(deepConvertUintArrayToBuffer, "deepConvertUintArrayToBuffer");
function toBase64(data) {
  return compatBuffer.toBase64String(compatBuffer.from(this.toBinary(data)));
}
__name(toBase64, "toBase64");
function fromBase64(base64) {
  return deepConvertUintArrayToBuffer(this.fromBinary(
    compatBuffer.from(base64, "base64")
  ));
}
__name(fromBase64, "fromBase64");
import_runtime30.MessageType.prototype.fromBase64 = fromBase64;
import_runtime30.MessageType.prototype.toBase64 = toBase64;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FrecencyUserSettings,
  FrecencyUserSettings_ApplicationCommandFrecency,
  FrecencyUserSettings_ApplicationFrecency,
  FrecencyUserSettings_EmojiFrecency,
  FrecencyUserSettings_FavoriteEmojis,
  FrecencyUserSettings_FavoriteGIF,
  FrecencyUserSettings_FavoriteGIFs,
  FrecencyUserSettings_FavoriteSoundboardSounds,
  FrecencyUserSettings_FavoriteStickers,
  FrecencyUserSettings_FrecencyItem,
  FrecencyUserSettings_GIFType,
  FrecencyUserSettings_GuildAndChannelFrecency,
  FrecencyUserSettings_HeardSoundFrecency,
  FrecencyUserSettings_PlayedSoundFrecency,
  FrecencyUserSettings_StickerFrecency,
  FrecencyUserSettings_Versions,
  PreloadedUserSettings,
  PreloadedUserSettings_AllGuildSettings,
  PreloadedUserSettings_AppearanceSettings,
  PreloadedUserSettings_AudioContextSetting,
  PreloadedUserSettings_AudioSettings,
  PreloadedUserSettings_BroadcastSettings,
  PreloadedUserSettings_ChannelIconEmoji,
  PreloadedUserSettings_ChannelListSettings,
  PreloadedUserSettings_ChannelSettings,
  PreloadedUserSettings_ClientThemeSettings,
  PreloadedUserSettings_ClipsSettings,
  PreloadedUserSettings_CommunitiesSettings,
  PreloadedUserSettings_CustomCallSound,
  PreloadedUserSettings_CustomNotificationSoundConfig,
  PreloadedUserSettings_CustomStatus,
  PreloadedUserSettings_DebugSettings,
  PreloadedUserSettings_DmSpamFilterV2,
  PreloadedUserSettings_ExplicitContentRedaction,
  PreloadedUserSettings_ExplicitContentSettings,
  PreloadedUserSettings_FavoriteChannel,
  PreloadedUserSettings_FavoriteChannelType,
  PreloadedUserSettings_Favorites,
  PreloadedUserSettings_ForLaterSettings,
  PreloadedUserSettings_ForLaterTab,
  PreloadedUserSettings_GameLibrarySettings,
  PreloadedUserSettings_GuildActivityStatusRestrictionDefault,
  PreloadedUserSettings_GuildFolder,
  PreloadedUserSettings_GuildFolders,
  PreloadedUserSettings_GuildSettings,
  PreloadedUserSettings_GuildsLeaderboardOptOutDefault,
  PreloadedUserSettings_ICYMISettings,
  PreloadedUserSettings_InboxSettings,
  PreloadedUserSettings_InboxTab,
  PreloadedUserSettings_KeywordFilterSettings,
  PreloadedUserSettings_LaunchPadMode,
  PreloadedUserSettings_LocalizationSettings,
  PreloadedUserSettings_NotificationSettings,
  PreloadedUserSettings_PrivacySettings,
  PreloadedUserSettings_ReactionNotificationType,
  PreloadedUserSettings_RecurringDismissibleContentState,
  PreloadedUserSettings_SafetySettings,
  PreloadedUserSettings_SafetySettingsPresetType,
  PreloadedUserSettings_SoundboardSettings,
  PreloadedUserSettings_StatusSettings,
  PreloadedUserSettings_TextAndImagesSettings,
  PreloadedUserSettings_Theme,
  PreloadedUserSettings_TimestampHourCycle,
  PreloadedUserSettings_UserContentSettings,
  PreloadedUserSettings_Versions,
  PreloadedUserSettings_VideoFilterAsset,
  PreloadedUserSettings_VideoFilterBackgroundBlur,
  PreloadedUserSettings_VoiceAndVideoSettings,
  PremiumMarketingComponentProperties,
  PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties,
  PremiumMarketingComponentProperties_ButtonAction,
  PremiumMarketingComponentProperties_FeatureCard,
  PremiumMarketingComponentProperties_SubscriptionButton,
  PremiumMarketingComponentProperties_Subtitle,
  PremiumMarketingComponentProperties_Variant1Storage
});
