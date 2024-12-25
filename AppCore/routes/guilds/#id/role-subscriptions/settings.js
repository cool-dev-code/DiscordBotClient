const { Router } = require('express');

const app = Router();

app.get('/', (req, res) => {
	res.send({
		guild_id: req.params.id,
		full_server_gate: false,
		description: 'BotClient Test mode',
		server_shop_tab_order: 0,
		store_page_primary_color: null,
		store_page_trailer_url: null,
		store_page_show_subscriber_count: false,
		store_page_guild_products_default_sort: 0,
		cover_image_asset: null,
		store_page_slug: 'botclient-' + req.params.id,
	});
});

module.exports = app;
