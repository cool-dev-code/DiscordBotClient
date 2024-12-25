const { Router } = require('express');

const app = Router();

app.put('/', (req, res) => {
	res.status(403).send({
		message: 'Discord Bot Client cannot join guilds',
		code: 20001,
	});
});

module.exports = app;
