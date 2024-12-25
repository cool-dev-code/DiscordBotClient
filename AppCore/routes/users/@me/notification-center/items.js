const { Router } = require('express');
const SnowflakeUtil = require('../../../../../AppAssets/SnowflakeUtil');

const app = Router();

app.get('/', (req, res) => {
	res.send({
		limit: 20,
		items: [],
		cursor: SnowflakeUtil.generate(),
		has_more: false,
	});
});

module.exports = app;
