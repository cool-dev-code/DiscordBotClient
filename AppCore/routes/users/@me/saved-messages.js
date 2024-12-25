const { Router } = require('express');

const app = Router();

app.all('/', (req, res) => {
	res.send({
		results: [],
	});
});

module.exports = app;
