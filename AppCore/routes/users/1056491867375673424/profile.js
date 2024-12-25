const { Router } = require('express');
const Util = require('../../../../AppAssets/Util');
const Constants = require('../../../Constants');

const app = Router();

app.get('/', (req, res) => {
	res.send(Util.ProfilePatch(Constants.UserDefaultPatch));
});

module.exports = app;
