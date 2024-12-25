const { Router } = require('express');

const app = Router();

app.all('/', (req, res) => {
	res.send({
		is_eligible: false,
	});
});

module.exports = app;
