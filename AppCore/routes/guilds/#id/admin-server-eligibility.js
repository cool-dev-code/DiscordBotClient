const { Router } = require('express');

const app = Router();

app.get('/', (req, res) => {
	res.send({
		eligible_for_admin_server: false,
	});
});

module.exports = app;
