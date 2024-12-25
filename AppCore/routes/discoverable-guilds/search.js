const { Router } = require('express');

const app = Router();

app.get('/', (req, res) => {
	res.send({
		guilds: [],
		total_count: 0,
		categories: [],
	});
});

module.exports = app;
