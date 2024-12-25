const { Router } = require('express');

const app = Router();

app.get('/', (req, res) => {
	res.send({
		has_access_rate: false,
		access_rate: null,
		last_updated: null,
	});
});

module.exports = app;
