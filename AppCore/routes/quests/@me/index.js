const { Router } = require('express');
const UserQuests = require('../../../../AppAssets/UserQuests');

const app = Router();

app.get('/', (req, res) => {
	res.send({
		quests: UserQuests,
	});
});

module.exports = app;
