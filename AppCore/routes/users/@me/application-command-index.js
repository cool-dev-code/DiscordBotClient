const { Router } = require('express');
const SnowflakeUtils = require('../../../../AppAssets/SnowflakeUtil.js');

const app = Router();

app.get('/', (req, res) => {
	res.send({
		applications: [],
		application_commands: [],
		version: SnowflakeUtils.generate(),
	});
});

module.exports = app;
