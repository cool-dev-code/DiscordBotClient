const { Router } = require('express');

const app = Router();

app.get('/', (req, res) => {
	res.send({
		quest: null,
	});
});

module.exports = app;
