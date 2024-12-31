const { nativeImage, app } = require('electron');
const path = require('path');
const UserPatch = require('../AppAssets/UserPatch');

module.exports = class Constants extends null {
	static BlacklistRoutes = [
		'outbound-promotions/codes',
		'science',
		'applications/public',
		'notes',
		'roles/member-counts',
		'member-ids',
		'connections/configuration',
		'users/@me/disable',
		'users/@me/delete',
		'users/@me/mfa',
		'users/@me/phone',
		'connections/eligibility',
		'interaction-data',
		'member-verification',
		'cdn-cgi/challenge-platform',
		'explicit-media',
		'premium/subscriptions',
		'/ack',
	];
	static LatestStorageUpdate = 1735000000000;
	static APP_NAME = 'DiscordBotClient';
	static iconPath = path.join(
		__dirname,
		'..',
		'AppAssets',
		'DiscordBotClient.png',
	);
	static icon16 = nativeImage
		.createFromPath(Constants.iconPath)
		.resize({ width: 16 });
	static icon128 = nativeImage
		.createFromPath(Constants.iconPath)
		.resize({ width: 128 });
	static DiscordBackgroundColor = '#36393f';
	static UserAgentChrome =
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 DiscordBotClient/' +
		app.getVersion();
	static UserAgentDiscordBot = `DiscordBot (https://github.com/aiko-chan-ai/DiscordBotClient, v${app.getVersion()})`;
	static VencordExtensionPath = path.join(
		__dirname,
		'..',
		'VencordExtension',
	);
	static DiscordHTMLPath = path.join(
		__dirname,
		'..',
		'DiscordCore',
		'index.html',
	);
	static DiscordGuildExperimentsPath = path.join(
		__dirname,
		'..',
		'DiscordCore',
		'guild_experiments.json',
	);
	static HttpsOptions = {
		key: `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDxSqwHuJiZ0l8d
/UOFkzL2svJcB6mzL5Xw73twnsE4fRFbWPDgf3pNFeP5N9LBy/tpH+JFORT617mo
yRdcP50qpYHEDkW/OpBQj0/cih4QH2NzgTplIDU3mXMeytK50y2b/90NCnV04s1E
EpBZIfc51AEPzA09bXjCkW/ZbkCDtjNpjZZFtA+dStst8G0ErUtF6Hxq1d3DNlkV
eGUBVNl/ziKIghI38iUXAJ+F+7Tzl+x/+sQTPmAZmeBbeVvA4RhR3qnHV+HYlQPL
HHjbp9JTGCiDEFgncg/1LOYTdEeQuaggLkcVcqbK3NjM2plKuOOE/qYEQ+EbIEJK
Ye8NawDvAgMBAAECggEAHphvU9NOVkLcmLricu+FSM7L+GtoUzY3dwOGzXLz4SvK
paCTeoPviBK8g39WlAg/ascGM+zXAi+UdRh6g9H1JdEysR92LJdKcUyavcYtpbG1
NJIwS15YISKt/DuPmMx0PhGlf9/RoO6ZRIZuEz9BT+3X7J7dFurooxM58YIPYCPd
PX/i5yDPozvE0CS48l30r0O71wvSA4wu3AWseo85giXu6JabYyPg73OUooJIjC3a
El8bGACPjciEK6pQQ59mX/rFtu+lUQLXzh0z9caPUsL4w6sJ+z76iRfgatKp2CoR
cMzI5q8+chGqrKJ2EFzgZc/hDXQhDOjqIsq14J/UIQKBgQD5EB5mwFIsL1Za6MA7
+4iu8ZKVqD9yTe1jMollWIK9jHY8bZAhuGBUQO5nbuhZxSeSI7x51wjwucXNVOrg
AgX6KlLVTLC3KSBMURzxeC+WIyuhao0mfEB5MkcGXz1kHn+QVelyvMc1lBu1t3bX
e4hgaBPByyGgpXC9194XPxCddwKBgQD4AyRgKeWH3zeYfJea+cYQjf3yQfN7zhAE
mwPudl6FoqXt6fphkKir83HHB0ZG9U/QV2a5aWGf+duH5iIrtnyqdx0+tUQlzDlb
1EqCTmHV/jGMX+1svxCiCMD7p4zwymWqRyaGfAfjR6H/9IPltDxhRDfB3Svo0JCt
zGGwZQE2SQKBgQDSadq1Rg9mAsv6253kTvnHipEjXFPVtp4x6vUGqMMzbeJJ5Ooa
gtDm/UAsJBeqF5T5srU9XfzQmrHQachQXYU9NtpqF3NIGjeOIgzIt5fESIxIv2Lm
O5ygh2hXqsiLt/RfNSWXaIMH8cuDNq7xFw09HVBrrbgIJxzbVe7sRrw7uwKBgF8c
bV3Hk3PI4bxDw6w2L4P3wDSgoCyReMkbXaWclWEwX+veeBvkaxsOUErgek4KE6K1
cfqW9E5ydoMmeWJEKIkDBx8eStUn/bM+tZhFUPXM9tl7jETQ/SL2snOP7NgG9ngX
symN9URvGyxabB6yQRmYHL3nAMjW+zT7lVcdVRqpAoGBAIgRyuhRGs8oHHFBVsEO
lCQjCf9AHFMCFOU615aV1lDV7vfBkDpmerj8KxEW7a8BysuWuAsw/X688CBpxvAj
sxgIZ+p8jk9gveJ+hrcUYB6H3XsADSvsWWRs4HMcx5sdLmr0dY7AWw/L+RDm2RTF
ZWq496s3weGsFXhUdbbTYlVs
-----END PRIVATE KEY-----`,
		cert: `-----BEGIN CERTIFICATE-----
MIIDCTCCAfGgAwIBAgIUBgfOhzCvG1LR/C1kljgq31ilonIwDQYJKoZIhvcNAQEL
BQAwFDESMBAGA1UEAwwJbG9jYWxob3N0MB4XDTI0MDIwNDE1NTk1NFoXDTM0MDIw
MTE1NTk1NFowFDESMBAGA1UEAwwJbG9jYWxob3N0MIIBIjANBgkqhkiG9w0BAQEF
AAOCAQ8AMIIBCgKCAQEA8UqsB7iYmdJfHf1DhZMy9rLyXAepsy+V8O97cJ7BOH0R
W1jw4H96TRXj+TfSwcv7aR/iRTkU+te5qMkXXD+dKqWBxA5FvzqQUI9P3IoeEB9j
c4E6ZSA1N5lzHsrSudMtm//dDQp1dOLNRBKQWSH3OdQBD8wNPW14wpFv2W5Ag7Yz
aY2WRbQPnUrbLfBtBK1LReh8atXdwzZZFXhlAVTZf84iiIISN/IlFwCfhfu085fs
f/rEEz5gGZngW3lbwOEYUd6px1fh2JUDyxx426fSUxgogxBYJ3IP9SzmE3RHkLmo
IC5HFXKmytzYzNqZSrjjhP6mBEPhGyBCSmHvDWsA7wIDAQABo1MwUTAdBgNVHQ4E
FgQUR8iEpvCnUn6djhg2cqYi+TJtpSIwHwYDVR0jBBgwFoAUR8iEpvCnUn6djhg2
cqYi+TJtpSIwDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAQEAHDCq
Z3Bdfxu7A06JAoPg5sZDxcFU5Ffa2iabeZDksZofzkhmc4uQd+PGltWtH6pFlHEy
7ExUtiahkYZ1b92nRatOkz27kjAaxoviNXirPPie3eKBLILm8kaD9EYIDGm0Zzwn
t0VBvHVOfV4tuglTRrNE/bUkUfAtdSPV0X9qt9d1hRv5SvxwLXmQP/mrGztHPJwq
MK7bjyhRRaKTuMleXlh1w+Q+Uzl22TttNRCBFb6IKQ4Yox7z0MoD+er2NorcE3bW
aDVY0gxKUZfmbyKs2IBvXIZuKpKjhJHAXw8bxyHjS1qe2ycBGZAh9CskhacKdvkf
3V2GYBPi7OCHXEYUkQ==
-----END CERTIFICATE-----`,
	};
	static UserDefaultPatch = UserPatch['1056491867375673424'];
	static ChannelIdDefault = '1000000000000000000';
	static UserIdDefault = '1056491867375673424';
	static AllowPopups = ['about:blank'];
	static PortDefault = 50000;
	static TestVencordMode = false;
	static CacheAssetsMode = false;
	// Database
	static DirectMessages = {
		name: 'DMsData',
		path: 'DirectMessages',
	};
	static PreloadedUserSettings = {
		name: 'UserSettingsProto1',
		path: 'PreloadedUserSettings',
	};
	static FrecencyUserSettings = {
		name: 'UserSettingsProto2',
		path: 'FrecencyUserSettings',
	};
};
