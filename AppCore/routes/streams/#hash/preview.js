const { Router } = require('express');
const { app: Electron } = require('electron');

const app = Router();

app.get('/', (req, res) => {
	res.status(403).send({
		message: 'Bots cannot use this endpoint (blocked by blacklist)',
		code: 20001,
	});
});

module.exports = app;
