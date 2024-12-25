const { Router } = require('express');

const app = Router();

app.all('/*', (req, res) => {
	res.status(403).send({
		message: 'Bots cannot use this endpoint (blocked by blacklist)',
		code: 20001,
	});
});

module.exports = app;