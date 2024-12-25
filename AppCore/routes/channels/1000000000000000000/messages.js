const { Router } = require('express');
const GetSystemMessages = require('../../../../AppAssets/SystemMessages');
const app = Router();

app.all('/', async (req, res) => {
	switch (req.method.toLowerCase()) {
		case 'delete':
		case 'patch':
		case 'post': {
			return res.status(403).send('Forbidden');
		}
		default: {
			const SystemMessages = await GetSystemMessages();
			return res.send(SystemMessages);
		}
	}
});

app.all('/*', (req, res) => {
	res.status(404).send();
});

module.exports = app;
