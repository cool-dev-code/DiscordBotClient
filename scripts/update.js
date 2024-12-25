const { fetch } = require('undici');
const path = require('path');
const fs = require('fs');
const { JSDOM } = require('jsdom');

const URL = 'https://discord.com/channels/@me';

const folder = path.resolve('.', 'DiscordCore');

if (!fs.existsSync(folder)) {
	fs.mkdirSync(folder, {
		recursive: true,
	});
}

const HTMLPath = path.resolve(folder, 'index.html');

const PatchMode = true;

fetch(URL)
	.then((r) => r.text())
	.then((text) => {
		if (PatchMode) {
			console.log('[Discord] Patching HTML');
			const dom = new JSDOM(text);
			// DOM
			const window = dom.window;
			const document = window.document;
			// Script Tags
			const scriptTags = document.querySelectorAll('script');
			// Replace Environment
			const replaceEnv = {
				API_ENDPOINT: "'//' + window.location.host + '/bot/api'",
				WEBAPP_ENDPOINT: "'//' + window.location.host",
				MIGRATION_DESTINATION_ORIGIN:
					"window.location.protocol + '//' + window.location.host",
			};
			scriptTags.forEach((scriptTag, index) => {
				scriptTag.removeAttribute('nonce');
				if (
					scriptTag.textContent?.includes(
						'cdn-cgi/challenge-platform',
					)
				)
					scriptTag.remove();
				if (
					scriptTag.textContent?.includes('window.GLOBAL_ENV') &&
					scriptTag.textContent?.includes('SENTRY_TAGS')
				) {
					const keys = Object.keys(replaceEnv);
					scriptTag.textContent = scriptTag.textContent
						.split('\n')
						.map((s) => {
							let k = keys.find((_) => s.trim().startsWith(_));
							if (k) {
								return `      ${k}: ${replaceEnv[k]},`;
							} else {
								return s;
							}
						})
						.join('\n');
					console.log('[Discord] Patch GLOBAL_ENV');
				}
			});
			text = dom.serialize();
		}
		const sentry = text
			.split('\n')
			.find((s) => s.trim().startsWith('SENTRY_TAGS'));
		console.log('[Discord] Build', sentry.trim());
		fs.writeFileSync(HTMLPath, text);
		console.log('[Discord] Patched HTML', HTMLPath);
		require('./updateGuildExperiments')();
	});
