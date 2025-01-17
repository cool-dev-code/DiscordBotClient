const express = require('express');
const https = require('https');
const morgan = require('morgan');
const { Server } = require('lambert-server');
const path = require('path');
const { readFileSync } = require('fs');
const request = require('request');
const { Writable } = require('stream');
const { scope } = require('electron-log');

class CustomLogStream extends Writable {
	logger = scope('APIServer');
	write(str) {
		this.logger.info(str.replace(/\n/g, ''));
	}
}

const logger =  new CustomLogStream();

const Constants = require('./Constants');

const app = express();

app.use(
	morgan('dev', {
		stream: logger,
	}),
);

const server = https.createServer(Constants.HttpsOptions, app);

const route = express.Router();

const lambertServer = new Server({
	app: route,
	server,
	production: true,
	errorHandler: false,
	jsonBody: false,
});

// Routes
lambertServer.registerRoutes(path.resolve(__dirname, `routes`) + path.sep);
lambertServer.app = app;

// Proxy
app.all('/bot*', function (req, res, next) {
	let headers = {
		'user-agent': Constants.UserAgentDiscordBot,
	};
	if (req.headers.authorization) {
		headers.authorization = `Bot ${req.headers.authorization
			.replace(/bot/gi, '')
			.trim()}`;
	}
	Object.keys(req.headers).forEach((key) => {
		if (
			[
				'cookie',
				'x-',
				'sec-',
				'referer',
				'origin',
				'authorization',
				'user-agent',
				'host',
			].some((prefix) => key.toLowerCase().startsWith(prefix))
		) {
			return;
		} else {
			headers[key] = req.headers[key];
		}
	});
	req.headers = headers;
	next();
});
// Routes: v10, v9, default, ...
app.use('/bot/api/v10', route);
app.use('/bot/api/v9', route);
app.use('/bot/api', route);
app.use(route);
app.all('/developers/*', (req, res) => {
	return res.redirect('/app');
});
// CDN proxy
// require('./proxyServer/QuestCDN')(app);
// Other
app.use((req, res, next) => {
	if (req.originalUrl.endsWith('.map')) return res.status(404).send();
	if (Constants.BlacklistRoutes.some((_) => req.originalUrl.includes(_)))
		return res.status(403).send({
			message: 'Bots cannot use this endpoint (blocked by blacklist)',
			code: 20001,
		});
	if (req.originalUrl.includes('/bot/api')) {
		return req
			.pipe(request('https://discord.com' + req.originalUrl.slice(4)))
			.pipe(res);
	}
	if (req.originalUrl.includes('/cdn/')) {
		return req
			.pipe(
				request(
					'https://cdn.discordapp.com' + req.originalUrl.slice(4),
				),
			)
			.pipe(res);
	}
	res.send(readFileSync(Constants.DiscordHTMLPath, 'utf8'));
});

async function start(port = 50000 + Math.floor(Math.random() * 5000)) {
	if (Constants.TestVencordMode) return 50000;
	return new Promise((resolve, reject) => {
		const callback = () => {
			const address = server.address();
			resolve(address.port);
			logger.logger.log(`Server listening on https://localhost:${address.port}`);
		};
		server
			.listen(port)
			.once('listening', callback)
			.once('error', (err) => {
				server.removeListener('listening', callback);
				resolve(start(port + 1));
			});
	});
}

module.exports = start;
