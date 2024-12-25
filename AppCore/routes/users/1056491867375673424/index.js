const { Router } = require('express');
const Constants = require('../../../Constants');
const app = Router();

app.get('/', (req, res) => {
	res.send(Constants.UserDefaultPatch);
});

app.all('/*', (req, res) => {
	res.status(404).send();
});

module.exports = app;
