const { Router } = require('express');
const UserProfileEffects = require('../../AppAssets/UserProfileEffects');

const app = Router();

app.get('/', (req, res) => {
	res.send({
		profile_effect_configs: UserProfileEffects,
	});
});

module.exports = app;
